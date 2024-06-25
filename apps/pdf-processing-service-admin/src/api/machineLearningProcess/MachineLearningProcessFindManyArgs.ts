import { MachineLearningProcessWhereInput } from "./MachineLearningProcessWhereInput";
import { MachineLearningProcessOrderByInput } from "./MachineLearningProcessOrderByInput";

export type MachineLearningProcessFindManyArgs = {
  where?: MachineLearningProcessWhereInput;
  orderBy?: Array<MachineLearningProcessOrderByInput>;
  skip?: number;
  take?: number;
};
