import { IsNotEmpty, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
class CreateCountryInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  readonly area: string;
}
export default CreateCountryInput;
