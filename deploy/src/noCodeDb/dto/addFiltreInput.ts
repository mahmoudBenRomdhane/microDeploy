import { InputType, Int, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class AddFiltreInput {
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  columnId: string;
  @Field(() => String)
  projectId: string;
  @Field(() => Number)
  page: number;
  @Field(() => Number)
  limit: number;
  @Field(() => String)
  logical_op: string;
  @Field(() => String)
  status: string;
  @Field(() => String)
  value: string;
  @Field(() => String)
  comparison_op: string;
}
