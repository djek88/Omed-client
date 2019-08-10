/* tslint:disable */
import {
  Group
} from '../index';

declare var Object: any;
export interface HospitalInterface {
  "name": string;
  "private"?: boolean;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  group?: Group;
}

export class Hospital implements HospitalInterface {
  "name": string;
  "private": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  group: Group;
  constructor(data?: HospitalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Hospital`.
   */
  public static getModelName() {
    return "Hospital";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Hospital for dynamic purposes.
  **/
  public static factory(data: HospitalInterface): Hospital{
    return new Hospital(data);
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
      name: 'Hospital',
      plural: 'Hospitals',
      path: 'Hospitals',
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
