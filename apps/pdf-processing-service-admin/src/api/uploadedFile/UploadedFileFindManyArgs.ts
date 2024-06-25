import { UploadedFileWhereInput } from "./UploadedFileWhereInput";
import { UploadedFileOrderByInput } from "./UploadedFileOrderByInput";

export type UploadedFileFindManyArgs = {
  where?: UploadedFileWhereInput;
  orderBy?: Array<UploadedFileOrderByInput>;
  skip?: number;
  take?: number;
};
