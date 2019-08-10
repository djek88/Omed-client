/* tslint:disable */

declare var Object: any;
export interface AccountInterface {
  "isAdmin"?: boolean;
  "suspended"?: boolean;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "userId"?: any;
  "userType"?: string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "password"?: string;
  accessTokens?: any[];
  user?: any;
}

export class Account implements AccountInterface {
  "isAdmin": boolean;
  "suspended": boolean;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "userId": any;
  "userType": string;
  "createdAt": Date;
  "updatedAt": Date;
  "password": string;
  accessTokens: any[];
  user: any;
  constructor(data?: AccountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Account`.
   */
  public static getModelName() {
    return "Account";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Account for dynamic purposes.
  **/
  public static factory(data: AccountInterface): Account{
    return new Account(data);
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
      name: 'Account',
      plural: 'Accounts',
      path: 'Accounts',
      idName: 'id',
      properties: {
        "isAdmin": {
          name: 'isAdmin',
          type: 'boolean',
          default: false
        },
        "suspended": {
          name: 'suspended',
          type: 'boolean',
          default: false
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
        "userType": {
          name: 'userType',
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
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        user: {
          name: 'user',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'userId',
          keyTo: 'id'
        },
      }
    }
  }
}
