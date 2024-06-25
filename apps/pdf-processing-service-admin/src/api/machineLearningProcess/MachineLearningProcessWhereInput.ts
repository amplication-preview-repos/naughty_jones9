import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeacherListRelationFilter } from "../teacher/TeacherListRelationFilter";
import { TextExtractorWhereUniqueInput } from "../textExtractor/TextExtractorWhereUniqueInput";

export type MachineLearningProcessWhereInput = {
  extractedInformation?: JsonFilter;
  id?: StringFilter;
  processedAt?: DateTimeNullableFilter;
  requestedInformation?: StringNullableFilter;
  teachers?: TeacherListRelationFilter;
  textExtractor?: TextExtractorWhereUniqueInput;
};
