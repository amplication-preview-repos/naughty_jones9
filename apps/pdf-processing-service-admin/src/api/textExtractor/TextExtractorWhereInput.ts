import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MachineLearningProcessListRelationFilter } from "../machineLearningProcess/MachineLearningProcessListRelationFilter";
import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";

export type TextExtractorWhereInput = {
  cleanedTxtContent?: StringNullableFilter;
  extractedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  machineLearningProcesses?: MachineLearningProcessListRelationFilter;
  pdfFile?: PdfFileWhereUniqueInput;
  txtContent?: StringNullableFilter;
};
