import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CanPrimaryKeyOutput {
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  projectId: string;
  @Field(() => String)
  viewId: string;
  @Field(() => String)
  colTitle: string;
}
