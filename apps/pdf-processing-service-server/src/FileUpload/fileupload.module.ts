import { Module } from "@nestjs/common";
import { FileUploadService } from "./fileupload.service";
import { FileUploadController } from "./fileupload.controller";
import { FileUploadResolver } from "./fileupload.resolver";

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService, FileUploadResolver],
  exports: [FileUploadService],
})
export class FileUploadModule {}
