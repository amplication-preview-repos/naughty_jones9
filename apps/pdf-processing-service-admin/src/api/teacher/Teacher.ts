import { MachineLearningProcess } from "../machineLearningProcess/MachineLearningProcess";
import { JsonValue } from "type-fest";

export type Teacher = {
  createdAt: Date;
  id: string;
  machineLearningProcess?: MachineLearningProcess | null;
  processedData: JsonValue;
  readyAt: Date | null;
  sharedData: JsonValue;
  updatedAt: Date;
};
