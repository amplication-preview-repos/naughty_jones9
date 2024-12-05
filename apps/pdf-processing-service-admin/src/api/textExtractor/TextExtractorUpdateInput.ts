import { MachineLearningProcessUpdateManyWithoutTextExtractorsInput } from "./MachineLearningProcessUpdateManyWithoutTextExtractorsInput";
import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";

export type TextExtractorUpdateInput = {
  cleanedTxtContent?: string | null;
  extractedAt?: Date | null;
  machineLearningProcesses?: MachineLearningProcessUpdateManyWithoutTextExtractorsInput;
  pdfFile?: PdfFileWhereUniqueInput | null;
  txtContent?: string | null;
};
