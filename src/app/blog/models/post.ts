import { JsonApiMetaModel } from 'angular2-jsonapi/dist';
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { Comment} from './comment';

@JsonApiModelConfig({
    type: '5a5f6afb2e000074230a8448',
    baseUrl: 'http://www.mocky.io/v2',
    meta: JsonApiMetaModel
})
export class Post extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    body: string;

    @Attribute()
    comment_id: number;

    @BelongsTo()
    comment: Comment;

}

