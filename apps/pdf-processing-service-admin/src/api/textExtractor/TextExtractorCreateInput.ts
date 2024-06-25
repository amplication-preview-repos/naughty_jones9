import { MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput } from "./MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput";
import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";

export type TextExtractorCreateInput = {
  cleanedTxtContent?: string | null;
  extractedAt?: Date | null;
  machineLearningProcesses?: MachineLearningProcessCreateNestedManyWithoutTextExtractorsInput;
  pdfFile?: PdfFileWhereUniqueInput | null;
  txtContent?: string | null;
};
