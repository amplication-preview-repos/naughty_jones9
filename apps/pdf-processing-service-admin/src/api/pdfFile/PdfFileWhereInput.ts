import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TextExtractorListRelationFilter } from "../textExtractor/TextExtractorListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PdfFileWhereInput = {
  fileName?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  textExtractors?: TextExtractorListRelationFilter;
  uploadedAt?: DateTimeNullableFilter;
};
