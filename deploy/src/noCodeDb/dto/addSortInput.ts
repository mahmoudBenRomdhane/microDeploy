import { InputType, Int, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class AddSortInput {
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  direction: string;
  @Field(() => String)
  columnId: string;
  @Field(() => String)
  projectId: string;
  @Field(() => Number)
  page: number;
  @Field(() => Number)
  limit: number;
}
