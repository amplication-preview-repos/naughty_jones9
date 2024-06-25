import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UploadedFileServiceBase } from "./base/uploadedFile.service.base";

@Injectable()
export class UploadedFileService extends UploadedFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
