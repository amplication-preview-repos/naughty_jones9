import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PdfFileModuleBase } from "./base/pdfFile.module.base";
import { PdfFileService } from "./pdfFile.service";
import { PdfFileController } from "./pdfFile.controller";
import { PdfFileResolver } from "./pdfFile.resolver";

@Module({
  imports: [PdfFileModuleBase, forwardRef(() => AuthModule)],
  controllers: [PdfFileController],
  providers: [PdfFileService, PdfFileResolver],
  exports: [PdfFileService],
})
export class PdfFileModule {}
