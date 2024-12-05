import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEXTEXTRACTOR_TITLE_FIELD } from "./TextExtractorTitle";
import { PDFFILE_TITLE_FIELD } from "../pdfFile/PdfFileTitle";

export const TextExtractorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cleanedTxtContent" source="cleanedTxtContent" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="extractedAt" source="extractedAt" />
        <TextField label="ID" source="id" />
        <ReferenceField label="PDFFile" source="pdffile.id" reference="PdfFile">
          <TextField source={PDFFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="txtContent" source="txtContent" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MachineLearningProcess"
          target="textExtractorId"
          label="MachineLearningProcesses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="extractedInformation"
              source="extractedInformation"
            />
            <TextField label="ID" source="id" />
            <TextField label="processedAt" source="processedAt" />
            <TextField
              label="requestedInformation"
              source="requestedInformation"
            />
            <ReferenceField
              label="TextExtractor"
              source="textextractor.id"
              reference="TextExtractor"
            >
              <TextField source={TEXTEXTRACTOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
