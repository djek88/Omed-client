/* tslint:disable */

declare var Object: any;
export interface PostImageInterface {
  "id"?: number;
}

export class PostImage implements PostImageInterface {
  "id": number;
  constructor(data?: PostImageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PostImage`.
   */
  public static getModelName() {
    return "PostImage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PostImage for dynamic purposes.
  **/
  public static factory(data: PostImageInterface): PostImage{
    return new PostImage(data);
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
      name: 'PostImage',
      plural: 'PostImages',
      path: 'PostImages',
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
