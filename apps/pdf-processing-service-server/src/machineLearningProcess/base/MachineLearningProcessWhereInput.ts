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
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeacherListRelationFilter } from "../../teacher/base/TeacherListRelationFilter";
import { TextExtractorWhereUniqueInput } from "../../textExtractor/base/TextExtractorWhereUniqueInput";

@InputType()
class MachineLearningProcessWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  extractedInformation?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  processedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  requestedInformation?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TeacherListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TeacherListRelationFilter)
  @IsOptional()
  @Field(() => TeacherListRelationFilter, {
    nullable: true,
  })
  teachers?: TeacherListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TextExtractorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TextExtractorWhereUniqueInput)
  @IsOptional()
  @Field(() => TextExtractorWhereUniqueInput, {
    nullable: true,
  })
  textExtractor?: TextExtractorWhereUniqueInput;
}

export { MachineLearningProcessWhereInput as MachineLearningProcessWhereInput };
