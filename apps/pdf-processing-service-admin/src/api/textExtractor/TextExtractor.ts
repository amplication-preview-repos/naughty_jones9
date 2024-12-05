import { MachineLearningProcess } from "../machineLearningProcess/MachineLearningProcess";
import { PdfFile } from "../pdfFile/PdfFile";

export type TextExtractor = {
  cleanedTxtContent: string | null;
  createdAt: Date;
  extractedAt: Date | null;
  id: string;
  machineLearningProcesses?: Array<MachineLearningProcess>;
  pdfFile?: PdfFile | null;
  txtContent: string | null;
  updatedAt: Date;
};
