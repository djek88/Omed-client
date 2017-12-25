/* tslint:disable */
import {
  Post
} from '../index';

declare var Object: any;
export interface DiscussionInterface {
  "text": string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  post?: Post;
}

export class Discussion implements DiscussionInterface {
  "text": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  post: Post;
  constructor(data?: DiscussionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Discussion`.
   */
  public static getModelName() {
    return "Discussion";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Discussion for dynamic purposes.
  **/
  public static factory(data: DiscussionInterface): Discussion{
    return new Discussion(data);
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
      name: 'Discussion',
      plural: 'Discussions',
      path: 'Discussions',
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
