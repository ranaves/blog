import { JsonApiMetaModel } from 'angular2-jsonapi/dist';
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { Post } from './post';

@JsonApiModelConfig({
    type: '5a5f6ab32e00009c230a8446',
    baseUrl: 'http://www.mocky.io/v2',
    meta: JsonApiMetaModel
})
export class Comment extends JsonApiModel {

    @Attribute()
    name: string;

    @Attribute()
    email: string;

    @Attribute()
    body: string;

}
