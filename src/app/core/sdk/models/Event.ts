/* tslint:disable */
import {
  Post,
  City,
  Specialty
} from '../index';

declare var Object: any;
export interface EventInterface {
  "category": string;
  "title": string;
  "startDate": Date;
  "endDate": Date;
  "place": string;
  "description": string;
  "phone": string;
  "email": string;
  "website": string;
  "id"?: any;
  "cityId"?: any;
  "specialties"?: Array<any>;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  post?: Post;
  city?: City;
  Specialties?: Specialty[];
}

export class Event implements EventInterface {
  "category": string;
  "title": string;
  "startDate": Date;
  "endDate": Date;
  "place": string;
  "description": string;
  "phone": string;
  "email": string;
  "website": string;
  "id": any;
  "cityId": any;
  "specialties": Array<any>;
  "createdAt": Date;
  "updatedAt": Date;
  post: Post;
  city: City;
  Specialties: Specialty[];
  constructor(data?: EventInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Event`.
   */
  public static getModelName() {
    return "Event";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Event for dynamic purposes.
  **/
  public static factory(data: EventInterface): Event{
    return new Event(data);
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
      name: 'Event',
      plural: 'Events',
      path: 'Events',
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "cityId": {
          name: 'cityId',
          type: 'any'
        },
        "specialties": {
          name: 'specialties',
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
        city: {
          name: 'city',
          type: 'City',
          model: 'City',
          relationType: 'belongsTo',
                  keyFrom: 'cityId',
          keyTo: 'id'
        },
        Specialties: {
          name: 'Specialties',
          type: 'Specialty[]',
          model: 'Specialty',
          relationType: 'referencesMany',
                  keyFrom: 'specialties',
          keyTo: 'id'
        },
      }
    }
  }
}
