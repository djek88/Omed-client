/* tslint:disable */
import {
  Pool,
  MedUser,
  Vote
} from '../index';

declare var Object: any;
export interface AnswerInterface {
  "text": string;
  "id"?: any;
  "poolId"?: any;
  "authorId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  pool?: Pool;
  author?: MedUser;
  votes?: Vote[];
}

export class Answer implements AnswerInterface {
  "text": string;
  "id": any;
  "poolId": any;
  "authorId": any;
  "createdAt": Date;
  "updatedAt": Date;
  pool: Pool;
  author: MedUser;
  votes: Vote[];
  constructor(data?: AnswerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Answer`.
   */
  public static getModelName() {
    return "Answer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Answer for dynamic purposes.
  **/
  public static factory(data: AnswerInterface): Answer{
    return new Answer(data);
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
      name: 'Answer',
      plural: 'Answers',
      path: 'Answers',
      idName: 'id',
      properties: {
        "text": {
          name: 'text',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "poolId": {
          name: 'poolId',
          type: 'any'
        },
        "authorId": {
          name: 'authorId',
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
        votes: {
          name: 'votes',
          type: 'Vote[]',
          model: 'Vote',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'answerId'
        },
      }
    }
  }
}
