import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetRowInput {
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  projectId: string;
  @Field(() => String)
  viewId: string;
  @Field(() => Number)
  page: number;
  @Field(() => Number)
  limit: number;
}
