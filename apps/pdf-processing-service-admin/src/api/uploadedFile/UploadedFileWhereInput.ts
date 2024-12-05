import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UploadedFileWhereInput = {
  fileName?: StringNullableFilter;
  fileSize?: IntNullableFilter;
  id?: StringFilter;
  uploadDate?: DateTimeNullableFilter;
};
