import { MachineLearningProcess as TMachineLearningProcess } from "../api/machineLearningProcess/MachineLearningProcess";

export const MACHINELEARNINGPROCESS_TITLE_FIELD = "requestedInformation";

export const MachineLearningProcessTitle = (
  record: TMachineLearningProcess
): string => {
  return record.requestedInformation?.toString() || String(record.id);
};
