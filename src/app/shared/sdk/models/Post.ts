/* tslint:disable */
import {
  Like,
  Comment,
  Audience
} from '../index';

declare var Object: any;
export interface PostInterface {
  "incognito"?: boolean;
  "approved"?: boolean;
  "images"?: Array<any>;
  "files"?: Array<any>;
  "id"?: any;
  "authorId"?: any;
  "authorType"?: string;
  "postEntityId"?: any;
  "postEntityType"?: string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  author?: any;
  postEntity?: any;
  likes?: Like[];
  comments?: Comment[];
  audiences?: Audience[];
}

export class Post implements PostInterface {
  "incognito": boolean;
  "approved": boolean;
  "images": Array<any>;
  "files": Array<any>;
  "id": any;
  "authorId": any;
  "authorType": string;
  "postEntityId": any;
  "postEntityType": string;
  "createdAt": Date;
  "updatedAt": Date;
  author: any;
  postEntity: any;
  likes: Like[];
  comments: Comment[];
  audiences: Audience[];
  constructor(data?: PostInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Post`.
   */
  public static getModelName() {
    return "Post";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Post for dynamic purposes.
  **/
  public static factory(data: PostInterface): Post{
    return new Post(data);
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
      name: 'Post',
      plural: 'Posts',
      path: 'Posts',
      idName: 'id',
      properties: {
        "incognito": {
          name: 'incognito',
          type: 'boolean',
          default: false
        },
        "approved": {
          name: 'approved',
          type: 'boolean',
          default: true
        },
        "images": {
          name: 'images',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "files": {
          name: 'files',
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
        "postEntityId": {
          name: 'postEntityId',
          type: 'any'
        },
        "postEntityType": {
          name: 'postEntityType',
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
        postEntity: {
          name: 'postEntity',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'postEntityId',
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
        audiences: {
          name: 'audiences',
          type: 'Audience[]',
          model: 'Audience',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'targetId'
        },
      }
    }
  }
}
