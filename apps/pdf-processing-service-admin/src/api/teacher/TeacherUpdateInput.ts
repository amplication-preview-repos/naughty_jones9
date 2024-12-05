import { MachineLearningProcessWhereUniqueInput } from "../machineLearningProcess/MachineLearningProcessWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TeacherUpdateInput = {
  machineLearningProcess?: MachineLearningProcessWhereUniqueInput | null;
  processedData?: InputJsonValue;
  readyAt?: Date | null;
  sharedData?: InputJsonValue;
};
