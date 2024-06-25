import { TextExtractorUpdateManyWithoutPdfFilesInput } from "./TextExtractorUpdateManyWithoutPdfFilesInput";

export type PdfFileUpdateInput = {
  fileName?: string | null;
  filePath?: string | null;
  textExtractors?: TextExtractorUpdateManyWithoutPdfFilesInput;
  uploadedAt?: Date | null;
};
