/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UploadedFileWhereUniqueInput } from "./UploadedFileWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UploadedFileUpdateInput } from "./UploadedFileUpdateInput";

@ArgsType()
class UpdateUploadedFileArgs {
  @ApiProperty({
    required: true,
    type: () => UploadedFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UploadedFileWhereUniqueInput)
  @Field(() => UploadedFileWhereUniqueInput, { nullable: false })
  where!: UploadedFileWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UploadedFileUpdateInput,
  })
  @ValidateNested()
  @Type(() => UploadedFileUpdateInput)
  @Field(() => UploadedFileUpdateInput, { nullable: false })
  data!: UploadedFileUpdateInput;
}

export { UpdateUploadedFileArgs as UpdateUploadedFileArgs };