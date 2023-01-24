import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserNoCodeInput {
  @Field(() => String, { description: 'Email of the user' })
  email: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
}
