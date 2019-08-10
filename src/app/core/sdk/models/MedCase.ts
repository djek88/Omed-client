/* tslint:disable */
import {
  Post,
  Specialty,
  Comment,
  Pool
} from '../index';

declare var Object: any;
export interface MedCaseInterface {
  "title": string;
  "sex"?: string;
  "age": number;
  "description": string;
  "solved"?: boolean;
  "id"?: any;
  "specialties"?: Array<any>;
  "bestCommentId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  post?: Post;
  Specialties?: Specialty[];
  bestComment?: Comment;
  pools?: Pool[];
}

export class MedCase implements MedCaseInterface {
  "title": string;
  "sex": string;
  "age": number;
  "description": string;
  "solved": boolean;
  "id": any;
  "specialties": Array<any>;
  "bestCommentId": any;
  "createdAt": Date;
  "updatedAt": Date;
  post: Post;
  Specialties: Specialty[];
  bestComment: Comment;
  pools: Pool[];
  constructor(data?: MedCaseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MedCase`.
   */
  public static getModelName() {
    return "MedCase";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MedCase for dynamic purposes.
  **/
  public static factory(data: MedCaseInterface): MedCase{
    return new MedCase(data);
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
      name: 'MedCase',
      plural: 'MedCases',
      path: 'MedCases',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "sex": {
          name: 'sex',
          type: 'string',
          default: 'male'
        },
        "age": {
          name: 'age',
          type: 'number'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "solved": {
          name: 'solved',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "specialties": {
          name: 'specialties',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "bestCommentId": {
          name: 'bestCommentId',
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
        Specialties: {
          name: 'Specialties',
          type: 'Specialty[]',
          model: 'Specialty',
          relationType: 'referencesMany',
                  keyFrom: 'specialties',
          keyTo: 'id'
        },
        bestComment: {
          name: 'bestComment',
          type: 'Comment',
          model: 'Comment',
          relationType: 'belongsTo',
                  keyFrom: 'bestCommentId',
          keyTo: 'id'
        },
        pools: {
          name: 'pools',
          type: 'Pool[]',
          model: 'Pool',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'targetId'
        },
      }
    }
  }
}
