import { Injectable } from "@nestjs/common";
import { CreateUploadedFileArgs } from "../uploadedFile/base/CreateUploadedFileArgs";

@Injectable()
export class FileUploadService {
  constructor() {}
  async ProcessPdf(args: CreateUploadedFileArgs): Promise<CreateUploadedFileArgs> {
    throw new Error("Not implemented");
  }
  async UploadFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadPdf(args: CreateUploadedFileArgs): Promise<CreateUploadedFileArgs> {
    throw new Error("Not implemented");
  }
}
