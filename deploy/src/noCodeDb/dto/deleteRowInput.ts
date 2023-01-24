import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DeleteRowInput {
  @Field(() => String)
  projectId: string;
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  viewId: string;
  @Field(() => String)
  rowIndex: string;
}
