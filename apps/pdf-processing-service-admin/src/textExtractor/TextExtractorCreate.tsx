import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MachineLearningProcessTitle } from "../machineLearningProcess/MachineLearningProcessTitle";
import { PdfFileTitle } from "../pdfFile/PdfFileTitle";

export const TextExtractorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="cleanedTxtContent"
          multiline
          source="cleanedTxtContent"
        />
        <DateTimeInput label="extractedAt" source="extractedAt" />
        <ReferenceArrayInput
          source="machineLearningProcesses"
          reference="MachineLearningProcess"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MachineLearningProcessTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="pdfFile.id" reference="PdfFile" label="PDFFile">
          <SelectInput optionText={PdfFileTitle} />
        </ReferenceInput>
        <TextInput label="txtContent" multiline source="txtContent" />
      </SimpleForm>
    </Create>
  );
};
