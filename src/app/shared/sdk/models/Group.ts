/* tslint:disable */
import {
  MedUser,
  Audience
} from '../index';

declare var Object: any;
export interface GroupInterface {
  "name": string;
  "icon": string;
  "automatic"?: boolean;
  "id"?: any;
  "automaticEntityId"?: any;
  "automaticEntityType"?: string;
  "members"?: Array<any>;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  automaticEntity?: any;
  Members?: MedUser[];
  audiences?: Audience[];
}

export class Group implements GroupInterface {
  "name": string;
  "icon": string;
  "automatic": boolean;
  "id": any;
  "automaticEntityId": any;
  "automaticEntityType": string;
  "members": Array<any>;
  "createdAt": Date;
  "updatedAt": Date;
  automaticEntity: any;
  Members: MedUser[];
  audiences: Audience[];
  constructor(data?: GroupInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Group`.
   */
  public static getModelName() {
    return "Group";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Group for dynamic purposes.
  **/
  public static factory(data: GroupInterface): Group{
    return new Group(data);
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
      name: 'Group',
      plural: 'Groups',
      path: 'Groups',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "icon": {
          name: 'icon',
          type: 'string',
          default: 'e.g.:/CustomerAvatars/default-avatar/download/male.png'
        },
        "automatic": {
          name: 'automatic',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "automaticEntityId": {
          name: 'automaticEntityId',
          type: 'any'
        },
        "automaticEntityType": {
          name: 'automaticEntityType',
          type: 'string'
        },
        "members": {
          name: 'members',
          type: 'Array&lt;any&gt;',
          default: <any>[]
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
        automaticEntity: {
          name: 'automaticEntity',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'automaticEntityId',
          keyTo: 'id'
        },
        Members: {
          name: 'Members',
          type: 'MedUser[]',
          model: 'MedUser',
          relationType: 'referencesMany',
                  keyFrom: 'members',
          keyTo: 'id'
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
