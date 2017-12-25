/* tslint:disable */
import {
  Audience,
  Answer,
  Vote
} from '../index';

declare var Object: any;
export interface PoolInterface {
  "canAddAnswer"?: boolean;
  "multipleAnswers"?: boolean;
  "question": string;
  "validityTime"?: Array<any>;
  "id"?: any;
  "authorId"?: any;
  "authorType"?: string;
  "targetId"?: any;
  "targetType"?: string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  author?: any;
  target?: any;
  audiences?: Audience[];
  answers?: Answer[];
  votes?: Vote[];
}

export class Pool implements PoolInterface {
  "canAddAnswer": boolean;
  "multipleAnswers": boolean;
  "question": string;
  "validityTime": Array<any>;
  "id": any;
  "authorId": any;
  "authorType": string;
  "targetId": any;
  "targetType": string;
  "createdAt": Date;
  "updatedAt": Date;
  author: any;
  target: any;
  audiences: Audience[];
  answers: Answer[];
  votes: Vote[];
  constructor(data?: PoolInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pool`.
   */
  public static getModelName() {
    return "Pool";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pool for dynamic purposes.
  **/
  public static factory(data: PoolInterface): Pool{
    return new Pool(data);
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
      name: 'Pool',
      plural: 'Pools',
      path: 'Pools',
      idName: 'id',
      properties: {
        "canAddAnswer": {
          name: 'canAddAnswer',
          type: 'boolean',
          default: false
        },
        "multipleAnswers": {
          name: 'multipleAnswers',
          type: 'boolean',
          default: false
        },
        "question": {
          name: 'question',
          type: 'string'
        },
        "validityTime": {
          name: 'validityTime',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "authorId": {
          name: 'authorId',
          type: 'any'
        },
        "authorType": {
          name: 'authorType',
          type: 'string'
        },
        "targetId": {
          name: 'targetId',
          type: 'any'
        },
        "targetType": {
          name: 'targetType',
          type: 'string'
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
        author: {
          name: 'author',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'authorId',
          keyTo: 'id'
        },
        target: {
          name: 'target',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'targetId',
          keyTo: 'id'
        },
        audiences: {
          name: 'audiences',
          type: 'Audience[]',
          model: 'Audience',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'targetId'
        },
        answers: {
          name: 'answers',
          type: 'Answer[]',
          model: 'Answer',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'poolId'
        },
        votes: {
          name: 'votes',
          type: 'Vote[]',
          model: 'Vote',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'poolId'
        },
      }
    }
  }
}
