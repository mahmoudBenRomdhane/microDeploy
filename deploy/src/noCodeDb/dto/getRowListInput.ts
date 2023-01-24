import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetRowListInput {
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  projectId: string;
  @Field(() => Number)
  page: number;
  @Field(() => Number)
  limit: number;
  @Field(() => String)
  fields: string;
  @Field(() => String)
  sort: string;
  @Field(() => String)
  filter: string;
}
