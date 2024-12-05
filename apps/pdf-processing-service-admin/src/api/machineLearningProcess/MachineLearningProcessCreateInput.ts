import { InputJsonValue } from "../../types";
import { TeacherCreateNestedManyWithoutMachineLearningProcessesInput } from "./TeacherCreateNestedManyWithoutMachineLearningProcessesInput";
import { TextExtractorWhereUniqueInput } from "../textExtractor/TextExtractorWhereUniqueInput";

export type MachineLearningProcessCreateInput = {
  extractedInformation?: InputJsonValue;
  processedAt?: Date | null;
  requestedInformation?: string | null;
  teachers?: TeacherCreateNestedManyWithoutMachineLearningProcessesInput;
  textExtractor?: TextExtractorWhereUniqueInput | null;
};
