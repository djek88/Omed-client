/* tslint:disable */

declare var Object: any;
export interface AdditionalInterface {
  "id"?: any;
}

export class Additional implements AdditionalInterface {
  "id": any;
  constructor(data?: AdditionalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Additional`.
   */
  public static getModelName() {
    return "Additional";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Additional for dynamic purposes.
  **/
  public static factory(data: AdditionalInterface): Additional{
    return new Additional(data);
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
      name: 'Additional',
      plural: 'Additionals',
      path: 'Additionals',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
