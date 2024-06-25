import { PdfFile as TPdfFile } from "../api/pdfFile/PdfFile";

export const PDFFILE_TITLE_FIELD = "fileName";

export const PdfFileTitle = (record: TPdfFile): string => {
  return record.fileName?.toString() || String(record.id);
};
