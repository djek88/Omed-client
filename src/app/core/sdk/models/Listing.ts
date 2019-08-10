/* tslint:disable */
import {
  Post,
  Specialty,
  City
} from '../index';

declare var Object: any;
export interface ListingInterface {
  "category": string;
  "title": string;
  "text": string;
  "priceAmount"?: number;
  "priceCurrency"?: string;
  "expired"?: boolean;
  "id"?: any;
  "specialties"?: Array<any>;
  "cities"?: Array<any>;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  post?: Post;
  Specialties?: Specialty[];
  Cities?: City[];
}

export class Listing implements ListingInterface {
  "category": string;
  "title": string;
  "text": string;
  "priceAmount": number;
  "priceCurrency": string;
  "expired": boolean;
  "id": any;
  "specialties": Array<any>;
  "cities": Array<any>;
  "createdAt": Date;
  "updatedAt": Date;
  post: Post;
  Specialties: Specialty[];
  Cities: City[];
  constructor(data?: ListingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Listing`.
   */
  public static getModelName() {
    return "Listing";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Listing for dynamic purposes.
  **/
  public static factory(data: ListingInterface): Listing{
    return new Listing(data);
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
      name: 'Listing',
      plural: 'Listings',
      path: 'Listings',
      idName: 'id',
      properties: {
        "category": {
          name: 'category',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "text": {
          name: 'text',
          type: 'string'
        },
        "priceAmount": {
          name: 'priceAmount',
          type: 'number',
          default: 0
        },
        "priceCurrency": {
          name: 'priceCurrency',
          type: 'string',
          default: 'USD'
        },
        "expired": {
          name: 'expired',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "specialties": {
          name: 'specialties',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "cities": {
          name: 'cities',
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
        post: {
          name: 'post',
          type: 'Post',
          model: 'Post',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'postEntityId'
        },
        Specialties: {
          name: 'Specialties',
          type: 'Specialty[]',
          model: 'Specialty',
          relationType: 'referencesMany',
                  keyFrom: 'specialties',
          keyTo: 'id'
        },
        Cities: {
          name: 'Cities',
          type: 'City[]',
          model: 'City',
          relationType: 'referencesMany',
                  keyFrom: 'cities',
          keyTo: 'id'
        },
      }
    }
  }
}
