/* tslint:disable */
import { Injectable } from '@angular/core';
import { Account } from '../../models/Account';
import { MedUser } from '../../models/MedUser';
import { University } from '../../models/University';
import { Hospital } from '../../models/Hospital';
import { Specialty } from '../../models/Specialty';
import { City } from '../../models/City';
import { Group } from '../../models/Group';
import { Post } from '../../models/Post';
import { Like } from '../../models/Like';
import { Comment } from '../../models/Comment';
import { MedCase } from '../../models/MedCase';
import { Listing } from '../../models/Listing';
import { Event } from '../../models/Event';
import { Discussion } from '../../models/Discussion';
import { Documents } from '../../models/Documents';
import { Offer } from '../../models/Offer';
import { Newscast } from '../../models/Newscast';
import { Company } from '../../models/Company';
import { Audience } from '../../models/Audience';
import { Pool } from '../../models/Pool';
import { Answer } from '../../models/Answer';
import { Vote } from '../../models/Vote';
import { MedUserMedDocument } from '../../models/MedUserMedDocument';
import { Additional } from '../../models/Additional';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Account: Account,
    MedUser: MedUser,
    University: University,
    Hospital: Hospital,
    Specialty: Specialty,
    City: City,
    Group: Group,
    Post: Post,
    Like: Like,
    Comment: Comment,
    MedCase: MedCase,
    Listing: Listing,
    Event: Event,
    Discussion: Discussion,
    Documents: Documents,
    Offer: Offer,
    Newscast: Newscast,
    Company: Company,
    Audience: Audience,
    Pool: Pool,
    Answer: Answer,
    Vote: Vote,
    MedUserMedDocument: MedUserMedDocument,
    Additional: Additional,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
