import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetSoloRowInput {
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  projectId: string;
  @Field(() => String)
  viewId: string;
  @Field(() => String)
  rowId: string;
}
