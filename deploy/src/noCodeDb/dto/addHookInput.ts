import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class AddHookInput {
  @Field(() => String)
  tableId: string;
  @Field(() => GraphQLJSON)
  data: any;
}
