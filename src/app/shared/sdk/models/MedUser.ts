/* tslint:disable */
import {
  Account,
  University,
  Hospital,
  Specialty,
  City,
  Post,
  Like,
  Comment,
  Pool,
  Answer,
  Vote
} from '../index';

declare var Object: any;
export interface MedUserInterface {
  "approved"?: boolean;
  "moreProof"?: boolean;
  "firstName": string;
  "lastName": string;
  "phones": Array<any>;
  "birthday": Date;
  "area"?: string;
  "type"?: string;
  "degree"?: string;
  "military"?: boolean;
  "private"?: boolean;
  "medDocuments": Array<any>;
  "photo"?: string;
  "maritalStatus"?: string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "universityId"?: any;
  "hospitalId"?: any;
  "specialtyId"?: any;
  "cityId"?: any;
  "savedPosts"?: Array<any>;
  account?: Account;
  university?: University;
  hospital?: Hospital;
  specialty?: Specialty;
  city?: City;
  posts?: Post[];
  SavedPosts?: Post[];
  likes?: Like[];
  comments?: Comment[];
  pools?: Pool[];
  answers?: Answer[];
  votes?: Vote[];
}

export class MedUser implements MedUserInterface {
  "approved": boolean;
  "moreProof": boolean;
  "firstName": string;
  "lastName": string;
  "phones": Array<any>;
  "birthday": Date;
  "area": string;
  "type": string;
  "degree": string;
  "military": boolean;
  "private": boolean;
  "medDocuments": Array<any>;
  "photo": string;
  "maritalStatus": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "universityId": any;
  "hospitalId": any;
  "specialtyId": any;
  "cityId": any;
  "savedPosts": Array<any>;
  account: Account;
  university: University;
  hospital: Hospital;
  specialty: Specialty;
  city: City;
  posts: Post[];
  SavedPosts: Post[];
  likes: Like[];
  comments: Comment[];
  pools: Pool[];
  answers: Answer[];
  votes: Vote[];
  constructor(data?: MedUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MedUser`.
   */
  public static getModelName() {
    return "MedUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MedUser for dynamic purposes.
  **/
  public static factory(data: MedUserInterface): MedUser{
    return new MedUser(data);
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
      name: 'MedUser',
      plural: 'MedUsers',
      path: 'MedUsers',
      idName: 'id',
      properties: {
        "approved": {
          name: 'approved',
          type: 'boolean',
          default: false
        },
        "moreProof": {
          name: 'moreProof',
          type: 'boolean',
          default: false
        },
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "phones": {
          name: 'phones',
          type: 'Array&lt;any&gt;'
        },
        "birthday": {
          name: 'birthday',
          type: 'Date'
        },
        "area": {
          name: 'area',
          type: 'string',
          default: 'medicine'
        },
        "type": {
          name: 'type',
          type: 'string',
          default: 'student'
        },
        "degree": {
          name: 'degree',
          type: 'string',
          default: '1'
        },
        "military": {
          name: 'military',
          type: 'boolean',
          default: false
        },
        "private": {
          name: 'private',
          type: 'boolean',
          default: false
        },
        "medDocuments": {
          name: 'medDocuments',
          type: 'Array&lt;any&gt;'
        },
        "photo": {
          name: 'photo',
          type: 'string',
          default: 'e.g.:/CustomerAvatars/default-avatar/download/male.png'
        },
        "maritalStatus": {
          name: 'maritalStatus',
          type: 'string',
          default: 'single'
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
        "universityId": {
          name: 'universityId',
          type: 'any'
        },
        "hospitalId": {
          name: 'hospitalId',
          type: 'any'
        },
        "specialtyId": {
          name: 'specialtyId',
          type: 'any'
        },
        "cityId": {
          name: 'cityId',
          type: 'any'
        },
        "savedPosts": {
          name: 'savedPosts',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        university: {
          name: 'university',
          type: 'University',
          model: 'University',
          relationType: 'belongsTo',
                  keyFrom: 'universityId',
          keyTo: 'id'
        },
        hospital: {
          name: 'hospital',
          type: 'Hospital',
          model: 'Hospital',
          relationType: 'belongsTo',
                  keyFrom: 'hospitalId',
          keyTo: 'id'
        },
        specialty: {
          name: 'specialty',
          type: 'Specialty',
          model: 'Specialty',
          relationType: 'belongsTo',
                  keyFrom: 'specialtyId',
          keyTo: 'id'
        },
        city: {
          name: 'city',
          type: 'City',
          model: 'City',
          relationType: 'belongsTo',
                  keyFrom: 'cityId',
          keyTo: 'id'
        },
        posts: {
          name: 'posts',
          type: 'Post[]',
          model: 'Post',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'authorId'
        },
        SavedPosts: {
          name: 'SavedPosts',
          type: 'Post[]',
          model: 'Post',
          relationType: 'referencesMany',
                  keyFrom: 'savedPosts',
          keyTo: 'id'
        },
        likes: {
          name: 'likes',
          type: 'Like[]',
          model: 'Like',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'authorId'
        },
        comments: {
          name: 'comments',
          type: 'Comment[]',
          model: 'Comment',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'authorId'
        },
        pools: {
          name: 'pools',
          type: 'Pool[]',
          model: 'Pool',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'authorId'
        },
        answers: {
          name: 'answers',
          type: 'Answer[]',
          model: 'Answer',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'authorId'
        },
        votes: {
          name: 'votes',
          type: 'Vote[]',
          model: 'Vote',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'medUserId'
        },
      }
    }
  }
}
