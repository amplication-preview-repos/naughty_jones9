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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput } from "./MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput";
import { PdfFileWhereUniqueInput } from "../../pdfFile/base/PdfFileWhereUniqueInput";

@InputType()
class TextExtractorCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cleanedTxtContent?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  extractedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () =>
      MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput,
  })
  @ValidateNested()
  @Type(() => MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput)
  @IsOptional()
  @Field(
    () => MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput,
    {
      nullable: true,
    }
  )
  machineLearningProcesses?: MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput;

  @ApiProperty({
    required: false,
    type: () => PdfFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PdfFileWhereUniqueInput)
  @IsOptional()
  @Field(() => PdfFileWhereUniqueInput, {
    nullable: true,
  })
  pdfFile?: PdfFileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  txtContent?: string | null;
}

export { TextExtractorCreateInput as TextExtractorCreateInput };