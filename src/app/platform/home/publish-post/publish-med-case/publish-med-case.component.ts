import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { forkJoin } from 'rxjs';


import { PublishPostService } from '../shared/publish-post.service';

import { MedCase, Specialty,
  AdditionalApi, SpecialtyApi } from '../../../../shared/sdk';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'omed-publish-med-case',
  templateUrl: './publish-med-case.component.html',
  styleUrls: ['./publish-med-case.component.css']
})
export class PublishMedCaseComponent implements OnInit {
  medCaseForm: FormGroup;
  specialtyOpts: Specialty[];
  formDisabled = true;

  private postImageConfigurations: any;

  constructor(
    private additionalApi: AdditionalApi,
    private specialtyApi: SpecialtyApi,
    private fb: FormBuilder,
    private publishPostService: PublishPostService
  ) {
    this.createForm();
  }

  ngOnInit() {
    forkJoin([
      this.additionalApi.postImageConfigurations(),
      this.specialtyApi.find()
    ]).subscribe((results) => {
      this.postImageConfigurations = results[0];
      this.specialtyOpts = results[1] as Specialty[];
      this.formDisabled = false;

      setTimeout(this.initializeSpecialtiesSelect.bind(this), 0);
    });

    // switch for radio buttons
    $('label.rd').on('click', function() {
        const parent = $(this).closest('div');
        $('label.rd', parent).addClass('dd');
        $(this).removeClass('dd');
        $(this).addClass('sd');
    });
    $('.rd').on('click', function() { // also work without this code
        const parent = $(this).closest('.rcont');
        $('.rd', parent).removeClass('true');
        $(this).addClass('true');
    });
  }

  onSubmit() {
    if (this.medCaseForm.invalid || this.formDisabled) {
      return;
    }

    this.formDisabled = true;

    const formModel = this.medCaseForm.value;
    const medCase = this.prepareMedCase();

    this.publishPostService.publishMedCase(
      medCase,
      formModel.incognito,
      formModel.images
    ).subscribe((result) => {
        this.formDisabled = false;

        this.createForm();
        this.resetSpecialtiesSelect();
        this.resetSexRadioButtons();
      });
  }

  prepareMedCase() {
    const formModel = this.medCaseForm.value;

    formModel.pools.forEach((pool) => {
      pool.answers = pool.answers.filter((ans) => ans.text);
    });

    return new MedCase({
      title: formModel.title,
      description: formModel.description,
      age: formModel.age,
      sex: formModel.sex,
      specialties: formModel.specialties,
      pools: formModel.pools
    });
  }

  get medCasePools(): FormArray {
    return this.medCaseForm.get('pools') as FormArray;
  }

  addMedCasePool() {
    this.medCasePools.push(this.fb.group({
      question: ['', Validators.required],
      canAddAnswer: false,
      multipleAnswers: false,
      answers: this.fb.array([])
    }));

    const poolIndex = this.medCasePools.length - 1;
    this.addPoolAnswer(poolIndex);
    this.addPoolAnswer(poolIndex);
    this.addPoolAnswer(poolIndex);
  }

  removeMedCasePool(index) {
    this.medCasePools.removeAt(index);
  }

  getPoolAnswers(index): FormArray {
    return this.medCasePools.at(index).get('answers') as FormArray;
  }

  addPoolAnswer(index) {
    const poolAnswers = this.getPoolAnswers(index);

    if (poolAnswers.length > 11) {
      return;
    }

    const answer = this.fb.group({
      text: ''
    });

    // first 3 are required
    if (poolAnswers.length < 3) {
      answer.setValidators(Validators.required);
    }

    poolAnswers.push(answer);
  }

  onFilesChange(event) {
    const files = event.target.files;

    if (files && files.length > 0) {
      Object.keys(files).forEach((key) => {
        if (this.medCaseForm.controls.images.value.length === 10) {
          return;
        }

        const file = files[key];
        if (this.validateFile(file)) {
          this.medCaseForm.controls.images.value.push(file);
        }
      });
    }
  }

  private createForm() {
    this.medCaseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      age: ['', [Validators.min(0), Validators.max(100), Validators.required]],
      sex: ['', Validators.required],
      specialties: [[]],
      pools: this.fb.array([]),
      incognito: false,
      images: [[]]
    });
  }

  private initializeSpecialtiesSelect() {
    $('.tagfy').chosen({
      disable_search_threshold: 5,
      no_results_text: 'Aucun résultat trouvé!',
      inherit_select_classes: true,
      max_selected_options: 5,
      single_backstroke_delete: false,
      display_selected_options: false,
      width: '100%'
    }).change((event, value) => {
      const specialties = this.medCaseForm.controls.specialties.value;

      if (value.selected) {
        specialties.push(value.selected);
      } else if (value.deselected) {
        const index = specialties.indexOf(value.deselected);
        specialties.splice(index, 1);
      }
    });
  }

  private resetSpecialtiesSelect() {
    $('.tagfy').val([]);
    $('.tagfy').trigger('chosen:updated');
  }

  private resetSexRadioButtons() {
    $('label.rd.dd').removeClass('dd');
  }

  private validateFile(file: any) {
    const maxFileSize = this.postImageConfigurations.maxSize;
    if (file.size < maxFileSize) {
      return false;
    }

    const supportedTypes = [];
    for (const key in this.postImageConfigurations.supportedTypes) {
      if (this.postImageConfigurations.supportedTypes.hasOwnProperty(key)) {
        supportedTypes.push(this.postImageConfigurations.supportedTypes[key]);
      }
    }

    const isSupportedType = supportedTypes.indexOf(file.type) !== -1;

    return isSupportedType;
  }
}
