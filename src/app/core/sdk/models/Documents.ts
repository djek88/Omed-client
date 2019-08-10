/* tslint:disable */
import {
  Post
} from '../index';

declare var Object: any;
export interface DocumentsInterface {
  "text"?: string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  post?: Post;
}

export class Documents implements DocumentsInterface {
  "text": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  post: Post;
  constructor(data?: DocumentsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Documents`.
   */
  public static getModelName() {
    return "Documents";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Documents for dynamic purposes.
  **/
  public static factory(data: DocumentsInterface): Documents{
    return new Documents(data);
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
      name: 'Documents',
      plural: 'Documents',
      path: 'Documents',
      idName: 'id',
      properties: {
        "text": {
          name: 'text',
          type: 'string',
          default: ''
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        post: {
          name: 'post',
          type: 'Post',
          model: 'Post',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'postEntityId'
        },
      }
    }
  }
}
