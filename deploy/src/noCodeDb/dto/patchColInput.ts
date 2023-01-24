import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class PatchColInput {
  @Field(() => String)
  colId: string;
  @Field(() => GraphQLJSON)
  col: any;
}
