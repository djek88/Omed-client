/* tslint:disable */
import {
  Answer,
  Pool,
  MedUser
} from '../index';

declare var Object: any;
export interface VoteInterface {
  "id"?: any;
  "answerId"?: string;
  "poolId"?: any;
  "authorId"?: any;
  "medUserId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  answer?: Answer;
  pool?: Pool;
  author?: MedUser;
}

export class Vote implements VoteInterface {
  "id": any;
  "answerId": string;
  "poolId": any;
  "authorId": any;
  "medUserId": any;
  "createdAt": Date;
  "updatedAt": Date;
  answer: Answer;
  pool: Pool;
  author: MedUser;
  constructor(data?: VoteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Vote`.
   */
  public static getModelName() {
    return "Vote";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Vote for dynamic purposes.
  **/
  public static factory(data: VoteInterface): Vote{
    return new Vote(data);
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
      name: 'Vote',
      plural: 'Votes',
      path: 'Votes',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "answerId": {
          name: 'answerId',
          type: 'string'
        },
        "poolId": {
          name: 'poolId',
          type: 'any'
        },
        "authorId": {
          name: 'authorId',
          type: 'any'
        },
        "medUserId": {
          name: 'medUserId',
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
        answer: {
          name: 'answer',
          type: 'Answer',
          model: 'Answer',
          relationType: 'belongsTo',
                  keyFrom: 'answerId',
          keyTo: 'id'
        },
        pool: {
          name: 'pool',
          type: 'Pool',
          model: 'Pool',
          relationType: 'belongsTo',
                  keyFrom: 'poolId',
          keyTo: 'id'
        },
        author: {
          name: 'author',
          type: 'MedUser',
          model: 'MedUser',
          relationType: 'belongsTo',
                  keyFrom: 'authorId',
          keyTo: 'id'
        },
      }
    }
  }
}
