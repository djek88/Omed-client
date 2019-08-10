/* tslint:disable */
import {
  Post,
  City,
  Company
} from '../index';

declare var Object: any;
export interface OfferInterface {
  "title": string;
  "startDate": Date;
  "endDate": Date;
  "place": string;
  "description": string;
  "phone": string;
  "email": string;
  "website": string;
  "expired"?: boolean;
  "id"?: any;
  "cityId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "companyId"?: any;
  post?: Post;
  city?: City;
  company?: Company;
}

export class Offer implements OfferInterface {
  "title": string;
  "startDate": Date;
  "endDate": Date;
  "place": string;
  "description": string;
  "phone": string;
  "email": string;
  "website": string;
  "expired": boolean;
  "id": any;
  "cityId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "companyId": any;
  post: Post;
  city: City;
  company: Company;
  constructor(data?: OfferInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Offer`.
   */
  public static getModelName() {
    return "Offer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Offer for dynamic purposes.
  **/
  public static factory(data: OfferInterface): Offer{
    return new Offer(data);
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
      name: 'Offer',
      plural: 'Offers',
      path: 'Offers',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "place": {
          name: 'place',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "website": {
          name: 'website',
          type: 'string'
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
        "cityId": {
          name: 'cityId',
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
        "companyId": {
          name: 'companyId',
          type: 'any'
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
        city: {
          name: 'city',
          type: 'City',
          model: 'City',
          relationType: 'belongsTo',
                  keyFrom: 'cityId',
          keyTo: 'id'
        },
        company: {
          name: 'company',
          type: 'Company',
          model: 'Company',
          relationType: 'belongsTo',
                  keyFrom: 'companyId',
          keyTo: 'id'
        },
      }
    }
  }
}
