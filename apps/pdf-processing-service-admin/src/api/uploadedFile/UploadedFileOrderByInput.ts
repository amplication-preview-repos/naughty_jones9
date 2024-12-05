import { SortOrder } from "../../util/SortOrder";

export type UploadedFileOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  fileSize?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};
