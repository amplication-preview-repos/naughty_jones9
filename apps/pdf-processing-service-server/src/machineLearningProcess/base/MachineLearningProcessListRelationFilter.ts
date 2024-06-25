/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MachineLearningProcessWhereInput } from "./MachineLearningProcessWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MachineLearningProcessListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MachineLearningProcessWhereInput,
  })
  @ValidateNested()
  @Type(() => MachineLearningProcessWhereInput)
  @IsOptional()
  @Field(() => MachineLearningProcessWhereInput, {
    nullable: true,
  })
  every?: MachineLearningProcessWhereInput;

  @ApiProperty({
    required: false,
    type: () => MachineLearningProcessWhereInput,
  })
  @ValidateNested()
  @Type(() => MachineLearningProcessWhereInput)
  @IsOptional()
  @Field(() => MachineLearningProcessWhereInput, {
    nullable: true,
  })
  some?: MachineLearningProcessWhereInput;

  @ApiProperty({
    required: false,
    type: () => MachineLearningProcessWhereInput,
  })
  @ValidateNested()
  @Type(() => MachineLearningProcessWhereInput)
  @IsOptional()
  @Field(() => MachineLearningProcessWhereInput, {
    nullable: true,
  })
  none?: MachineLearningProcessWhereInput;
}
export { MachineLearningProcessListRelationFilter as MachineLearningProcessListRelationFilter };
