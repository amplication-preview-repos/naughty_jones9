import { SortOrder } from "../../util/SortOrder";

export type MachineLearningProcessOrderByInput = {
  createdAt?: SortOrder;
  extractedInformation?: SortOrder;
  id?: SortOrder;
  processedAt?: SortOrder;
  requestedInformation?: SortOrder;
  textExtractorId?: SortOrder;
  updatedAt?: SortOrder;
};
