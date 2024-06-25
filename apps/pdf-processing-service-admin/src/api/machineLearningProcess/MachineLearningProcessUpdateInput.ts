import { InputJsonValue } from "../../types";
import { TeacherUpdateManyWithoutMachineLearningProcessesInput } from "./TeacherUpdateManyWithoutMachineLearningProcessesInput";
import { TextExtractorWhereUniqueInput } from "../textExtractor/TextExtractorWhereUniqueInput";

export type MachineLearningProcessUpdateInput = {
  extractedInformation?: InputJsonValue;
  processedAt?: Date | null;
  requestedInformation?: string | null;
  teachers?: TeacherUpdateManyWithoutMachineLearningProcessesInput;
  textExtractor?: TextExtractorWhereUniqueInput | null;
};
