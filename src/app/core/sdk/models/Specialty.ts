/* tslint:disable */
import {
  Group
} from '../index';

declare var Object: any;
export interface SpecialtyInterface {
  "name": string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  group?: Group;
}

export class Specialty implements SpecialtyInterface {
  "name": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  group: Group;
  constructor(data?: SpecialtyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Specialty`.
   */
  public static getModelName() {
    return "Specialty";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Specialty for dynamic purposes.
  **/
  public static factory(data: SpecialtyInterface): Specialty{
    return new Specialty(data);
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
      name: 'Specialty',
      plural: 'Specialties',
      path: 'Specialties',
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
