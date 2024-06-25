import { TextExtractorCreateNestedManyWithoutPdfFilesInput } from "./TextExtractorCreateNestedManyWithoutPdfFilesInput";

export type PdfFileCreateInput = {
  fileName?: string | null;
  filePath?: string | null;
  textExtractors?: TextExtractorCreateNestedManyWithoutPdfFilesInput;
  uploadedAt?: Date | null;
};
