import { JsonValue } from "type-fest";
import { Teacher } from "../teacher/Teacher";
import { TextExtractor } from "../textExtractor/TextExtractor";

export type MachineLearningProcess = {
  createdAt: Date;
  extractedInformation: JsonValue;
  id: string;
  processedAt: Date | null;
  requestedInformation: string | null;
  teachers?: Array<Teacher>;
  textExtractor?: TextExtractor | null;
  updatedAt: Date;
};
