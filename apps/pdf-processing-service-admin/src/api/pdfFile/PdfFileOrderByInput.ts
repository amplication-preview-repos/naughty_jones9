import { SortOrder } from "../../util/SortOrder";

export type PdfFileOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
};
