/* tslint:disable */
import {
  Like
} from '../index';

declare var Object: any;
export interface CommentInterface {
  "text"?: string;
  "attachments"?: Array<any>;
  "id"?: any;
  "authorId"?: any;
  "authorType"?: string;
  "targetId"?: any;
  "targetType"?: string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  author?: any;
  target?: any;
  likes?: Like[];
  comments?: Comment[];
}

export class Comment implements CommentInterface {
  "text": string;
  "attachments": Array<any>;
  "id": any;
  "authorId": any;
  "authorType": string;
  "targetId": any;
  "targetType": string;
  "createdAt": Date;
  "updatedAt": Date;
  author: any;
  target: any;
  likes: Like[];
  comments: Comment[];
  constructor(data?: CommentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Comment`.
   */
  public static getModelName() {
    return "Comment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Comment for dynamic purposes.
  **/
  public static factory(data: CommentInterface): Comment{
    return new Comment(data);
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
      name: 'Comment',
      plural: 'Comments',
      path: 'Comments',
      idName: 'id',
      properties: {
        "text": {
          name: 'text',
          type: 'string'
        },
        "attachments": {
          name: 'attachments',
          type: 'Array&lt;any&gt;',
          default: <any>[]
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
        likes: {
          name: 'likes',
          type: 'Like[]',
          model: 'Like',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'targetId'
        },
        comments: {
          name: 'comments',
          type: 'Comment[]',
          model: 'Comment',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'targetId'
        },
      }
    }
  }
}
