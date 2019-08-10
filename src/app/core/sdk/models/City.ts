/* tslint:disable */
import {
  Group
} from '../index';

declare var Object: any;
export interface CityInterface {
  "name": string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  group?: Group;
}

export class City implements CityInterface {
  "name": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  group: Group;
  constructor(data?: CityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `City`.
   */
  public static getModelName() {
    return "City";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of City for dynamic purposes.
  **/
  public static factory(data: CityInterface): City{
    return new City(data);
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
      name: 'City',
      plural: 'Cities',
      path: 'Cities',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
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
