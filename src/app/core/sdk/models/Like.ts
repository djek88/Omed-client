/* tslint:disable */

declare var Object: any;
export interface LikeInterface {
  "id"?: any;
  "authorId"?: any;
  "authorType"?: string;
  "targetId"?: any;
  "targetType"?: string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  author?: any;
  target?: any;
}

export class Like implements LikeInterface {
  "id": any;
  "authorId": any;
  "authorType": string;
  "targetId": any;
  "targetType": string;
  "createdAt": Date;
  "updatedAt": Date;
  author: any;
  target: any;
  constructor(data?: LikeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Like`.
   */
  public static getModelName() {
    return "Like";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Like for dynamic purposes.
  **/
  public static factory(data: LikeInterface): Like{
    return new Like(data);
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
      name: 'Like',
      plural: 'Likes',
      path: 'Likes',
      idName: 'id',
      properties: {
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
      }
    }
  }
}
