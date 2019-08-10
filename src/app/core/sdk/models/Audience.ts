/* tslint:disable */

declare var Object: any;
export interface AudienceInterface {
  "contacts"?: boolean;
  "userTypes"?: Array<any>;
  "dental"?: boolean;
  "medicine"?: boolean;
  "civil"?: boolean;
  "military"?: boolean;
  "public"?: boolean;
  "private"?: boolean;
  "id"?: any;
  "targetId"?: any;
  "targetType"?: string;
  target?: any;
}

export class Audience implements AudienceInterface {
  "contacts": boolean;
  "userTypes": Array<any>;
  "dental": boolean;
  "medicine": boolean;
  "civil": boolean;
  "military": boolean;
  "public": boolean;
  "private": boolean;
  "id": any;
  "targetId": any;
  "targetType": string;
  target: any;
  constructor(data?: AudienceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Audience`.
   */
  public static getModelName() {
    return "Audience";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Audience for dynamic purposes.
  **/
  public static factory(data: AudienceInterface): Audience{
    return new Audience(data);
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
      name: 'Audience',
      plural: 'Audiences',
      path: 'Audiences',
      idName: 'id',
      properties: {
        "contacts": {
          name: 'contacts',
          type: 'boolean',
          default: false
        },
        "userTypes": {
          name: 'userTypes',
          type: 'Array&lt;any&gt;'
        },
        "dental": {
          name: 'dental',
          type: 'boolean',
          default: true
        },
        "medicine": {
          name: 'medicine',
          type: 'boolean',
          default: true
        },
        "civil": {
          name: 'civil',
          type: 'boolean',
          default: false
        },
        "military": {
          name: 'military',
          type: 'boolean',
          default: false
        },
        "public": {
          name: 'public',
          type: 'boolean',
          default: false
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
        "targetId": {
          name: 'targetId',
          type: 'any'
        },
        "targetType": {
          name: 'targetType',
          type: 'string'
        },
      },
      relations: {
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
