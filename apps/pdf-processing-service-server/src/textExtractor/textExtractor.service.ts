import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextExtractorServiceBase } from "./base/textExtractor.service.base";

@Injectable()
export class TextExtractorService extends TextExtractorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
