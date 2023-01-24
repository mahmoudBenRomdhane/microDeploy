import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetNesetedRowListInput {
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  projectId: string;
  @Field(() => String)
  relationType: string;
  @Field(() => String)
  fieldName: string;
  @Field(() => String)
  rowId: string;
}
