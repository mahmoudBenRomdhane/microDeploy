import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PermessionOutPut {
  @Field(() => Boolean)
  canUpdate: Boolean;
}
