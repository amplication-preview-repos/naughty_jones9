import { TextExtractorWhereInput } from "./TextExtractorWhereInput";
import { TextExtractorOrderByInput } from "./TextExtractorOrderByInput";

export type TextExtractorFindManyArgs = {
  where?: TextExtractorWhereInput;
  orderBy?: Array<TextExtractorOrderByInput>;
  skip?: number;
  take?: number;
};
