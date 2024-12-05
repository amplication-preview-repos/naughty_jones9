import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UploadedFileModuleBase } from "./base/uploadedFile.module.base";
import { UploadedFileService } from "./uploadedFile.service";
import { UploadedFileController } from "./uploadedFile.controller";
import { UploadedFileResolver } from "./uploadedFile.resolver";

@Module({
  imports: [UploadedFileModuleBase, forwardRef(() => AuthModule)],
  controllers: [UploadedFileController],
  providers: [UploadedFileService, UploadedFileResolver],
  exports: [UploadedFileService],
})
export class UploadedFileModule {}
