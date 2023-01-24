import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class UpdateHookInput {
  @Field(() => String)
  hookId: string;
  @Field(() => GraphQLJSON)
  data: any;
}
