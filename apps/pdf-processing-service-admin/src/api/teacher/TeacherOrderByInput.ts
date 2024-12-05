import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  machineLearningProcessId?: SortOrder;
  processedData?: SortOrder;
  readyAt?: SortOrder;
  sharedData?: SortOrder;
  updatedAt?: SortOrder;
};
