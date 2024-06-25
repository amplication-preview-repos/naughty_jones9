import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { TextExtractorTitle } from "../textExtractor/TextExtractorTitle";

export const PdfFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <TextInput label="filePath" source="filePath" />
        <ReferenceArrayInput
          source="textExtractors"
          reference="TextExtractor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TextExtractorTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
      </SimpleForm>
    </Create>
  );
};
