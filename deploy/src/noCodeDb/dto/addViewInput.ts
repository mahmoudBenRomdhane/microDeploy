import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class AddViewInput {
  @Field(() => String)
  title: string;
  @Field(() => String, { nullable: true })
  copyId: string;
  @Field(() => String, { nullable: true })
  fkColId: string;
  @Field(() => String)
  tableId: string;
  @Field(() => Int)
  type: number;
}
