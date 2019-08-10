/* tslint:disable */

declare var Object: any;
export interface PostFileInterface {
  "id"?: number;
}

export class PostFile implements PostFileInterface {
  "id": number;
  constructor(data?: PostFileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PostFile`.
   */
  public static getModelName() {
    return "PostFile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PostFile for dynamic purposes.
  **/
  public static factory(data: PostFileInterface): PostFile{
    return new PostFile(data);
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
      name: 'PostFile',
      plural: 'PostFiles',
      path: 'PostFiles',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
