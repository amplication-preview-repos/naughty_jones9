import { TextExtractor } from "../textExtractor/TextExtractor";

export type PdfFile = {
  createdAt: Date;
  fileName: string | null;
  filePath: string | null;
  id: string;
  textExtractors?: Array<TextExtractor>;
  updatedAt: Date;
  uploadedAt: Date | null;
};
