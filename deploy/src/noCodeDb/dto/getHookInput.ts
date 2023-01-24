import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetHookInput {
  @Field(() => String)
  tableId: string;
}
