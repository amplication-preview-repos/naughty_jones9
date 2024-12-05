import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FileUploadService } from "./fileupload.service";
import { CreateUploadedFileArgs } from "../uploadedFile/base/CreateUploadedFileArgs";

@swagger.ApiTags("fileUploads")
@common.Controller("fileUploads")
export class FileUploadController {
  constructor(protected readonly service: FileUploadService) {}

  @common.Post("/process-pdf")
  @swagger.ApiOkResponse({
    type: CreateUploadedFileArgs
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessPdf(
    @common.Body()
    body: CreateUploadedFileArgs
  ): Promise<CreateUploadedFileArgs> {
        return this.service.ProcessPdf(body);
      }

  @common.Get("/:id/upload-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadFile(
    @common.Body()
    body: CreateUploadedFileArgs
  ): Promise<string> {
        return this.service.UploadFile(body);
      }

  @common.Post("/upload-pdf")
  @swagger.ApiOkResponse({
    type: CreateUploadedFileArgs
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPdf(
    @common.Body()
    body: CreateUploadedFileArgs
  ): Promise<CreateUploadedFileArgs> {
        return this.service.UploadPdf(body);
      }
}
