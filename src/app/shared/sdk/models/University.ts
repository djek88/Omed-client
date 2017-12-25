/* tslint:disable */
import {
  Group
} from '../index';

declare var Object: any;
export interface UniversityInterface {
  "name": string;
  "private"?: boolean;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  group?: Group;
}

export class University implements UniversityInterface {
  "name": string;
  "private": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  group: Group;
  constructor(data?: UniversityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `University`.
   */
  public static getModelName() {
    return "University";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of University for dynamic purposes.
  **/
  public static factory(data: UniversityInterface): University{
    return new University(data);
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
      name: 'University',
      plural: 'Universities',
      path: 'Universities',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "private": {
          name: 'private',
          type: 'boolean',
          default: false
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
        group: {
          name: 'group',
          type: 'Group',
          model: 'Group',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'automaticEntityId'
        },
      }
    }
  }
}
