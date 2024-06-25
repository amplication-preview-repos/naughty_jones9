import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PdfFileServiceBase } from "./base/pdfFile.service.base";

@Injectable()
export class PdfFileService extends PdfFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
