import { SortOrder } from "../../util/SortOrder";

export type TextExtractorOrderByInput = {
  cleanedTxtContent?: SortOrder;
  createdAt?: SortOrder;
  extractedAt?: SortOrder;
  id?: SortOrder;
  pdfFileId?: SortOrder;
  txtContent?: SortOrder;
  updatedAt?: SortOrder;
};
