import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PDFFILE_TITLE_FIELD } from "./PdfFileTitle";

export const PdfFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="filePath" source="filePath" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadedAt" source="uploadedAt" />
        <ReferenceManyField
          reference="TextExtractor"
          target="pdfFileId"
          label="TextExtractors"
        >
          <Datagrid rowClick="show">
            <TextField label="cleanedTxtContent" source="cleanedTxtContent" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="extractedAt" source="extractedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PDFFile"
              source="pdffile.id"
              reference="PdfFile"
            >
              <TextField source={PDFFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="txtContent" source="txtContent" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
