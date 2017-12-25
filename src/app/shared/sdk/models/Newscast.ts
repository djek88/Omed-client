/* tslint:disable */
import {
  Post
} from '../index';

declare var Object: any;
export interface NewscastInterface {
  "title": string;
  "text": string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  post?: Post;
}

export class Newscast implements NewscastInterface {
  "title": string;
  "text": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  post: Post;
  constructor(data?: NewscastInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Newscast`.
   */
  public static getModelName() {
    return "Newscast";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Newscast for dynamic purposes.
  **/
  public static factory(data: NewscastInterface): Newscast{
    return new Newscast(data);
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
      name: 'Newscast',
      plural: 'Newscasts',
      path: 'Newscasts',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "text": {
          name: 'text',
          type: 'string'
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
