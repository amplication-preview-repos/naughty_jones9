/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TextExtractorWhereUniqueInput } from "../../textExtractor/base/TextExtractorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TextExtractorUpdateManyWithoutPdfFilesInput {
  @Field(() => [TextExtractorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TextExtractorWhereUniqueInput],
  })
  connect?: Array<TextExtractorWhereUniqueInput>;

  @Field(() => [TextExtractorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TextExtractorWhereUniqueInput],
  })
  disconnect?: Array<TextExtractorWhereUniqueInput>;

  @Field(() => [TextExtractorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TextExtractorWhereUniqueInput],
  })
  set?: Array<TextExtractorWhereUniqueInput>;
}

export { TextExtractorUpdateManyWithoutPdfFilesInput as TextExtractorUpdateManyWithoutPdfFilesInput };