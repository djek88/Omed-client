/* tslint:disable */

declare var Object: any;
export interface MedUserMedDocumentInterface {
  "id"?: number;
}

export class MedUserMedDocument implements MedUserMedDocumentInterface {
  "id": number;
  constructor(data?: MedUserMedDocumentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MedUserMedDocument`.
   */
  public static getModelName() {
    return "MedUserMedDocument";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MedUserMedDocument for dynamic purposes.
  **/
  public static factory(data: MedUserMedDocumentInterface): MedUserMedDocument{
    return new MedUserMedDocument(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'MedUserMedDocument',
      plural: 'MedUserMedDocuments',
      path: 'MedUserMedDocuments',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
