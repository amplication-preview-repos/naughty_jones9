import { PdfFileWhereInput } from "./PdfFileWhereInput";
import { PdfFileOrderByInput } from "./PdfFileOrderByInput";

export type PdfFileFindManyArgs = {
  where?: PdfFileWhereInput;
  orderBy?: Array<PdfFileOrderByInput>;
  skip?: number;
  take?: number;
};
