import { UploadedFile as TUploadedFile } from "../api/uploadedFile/UploadedFile";

export const UPLOADEDFILE_TITLE_FIELD = "fileName";

export const UploadedFileTitle = (record: TUploadedFile): string => {
  return record.fileName?.toString() || String(record.id);
};
