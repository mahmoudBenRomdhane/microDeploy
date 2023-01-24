import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class AddTableInput {
  @Field(() => String)
  title: string;
  @Field(() => String)
  table_name: string;
  @Field(() => String)
  projectId: string;
  @Field(() => [GraphQLJSON])
  columns: any;
  @Field(() => String)
  categorieTitle: string;
}
