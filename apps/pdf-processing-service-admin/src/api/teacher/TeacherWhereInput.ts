import { StringFilter } from "../../util/StringFilter";
import { MachineLearningProcessWhereUniqueInput } from "../machineLearningProcess/MachineLearningProcessWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TeacherWhereInput = {
  id?: StringFilter;
  machineLearningProcess?: MachineLearningProcessWhereUniqueInput;
  processedData?: JsonFilter;
  readyAt?: DateTimeNullableFilter;
  sharedData?: JsonFilter;
};
