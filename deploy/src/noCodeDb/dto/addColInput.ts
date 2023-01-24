import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class AddColInput {
  @Field(() => String)
  tableId: string;
  @Field(() => GraphQLJSON)
  col: any;
}
