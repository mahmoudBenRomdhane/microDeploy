import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetViewsCountInput {
  @Field(() => String)
  projectName: string;
  @Field(() => String)
  tableId: string;
  @Field(() => String)
  viewId: string;
}
