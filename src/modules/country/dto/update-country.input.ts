import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
class UpdateCountryInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  id: string;

  @IsOptional()
  @IsString()
  @Field()
  readonly name: string;

  @IsOptional()
  @IsString()
  @Field()
  readonly area: string;
}
export default UpdateCountryInput;
