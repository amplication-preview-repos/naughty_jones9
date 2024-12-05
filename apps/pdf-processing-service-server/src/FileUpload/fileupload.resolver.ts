import * as graphql from "@nestjs/graphql";
import { CreateUploadedFileArgs } from "../uploadedFile/base/CreateUploadedFileArgs";
import { FileUploadService } from "./fileupload.service";

export class FileUploadResolver {
  constructor(protected readonly service: FileUploadService) {}

  @graphql.Mutation(() => CreateUploadedFileArgs)
  async ProcessPdf(
    @graphql.Args()
    args: CreateUploadedFileArgs
  ): Promise<CreateUploadedFileArgs> {
    return this.service.ProcessPdf(args);
  }

  @graphql.Query(() => String)
  async UploadFile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadFile(args);
  }

  @graphql.Mutation(() => CreateUploadedFileArgs)
  async UploadPdf(
    @graphql.Args()
    args: CreateUploadedFileArgs
  ): Promise<CreateUploadedFileArgs> {
    return this.service.UploadPdf(args);
  }
}
