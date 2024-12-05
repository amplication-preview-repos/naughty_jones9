import { TextExtractor as TTextExtractor } from "../api/textExtractor/TextExtractor";

export const TEXTEXTRACTOR_TITLE_FIELD = "id";

export const TextExtractorTitle = (record: TTextExtractor): string => {
  return record.id?.toString() || String(record.id);
};
