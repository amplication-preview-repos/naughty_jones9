import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MachineLearningProcessTitle } from "../machineLearningProcess/MachineLearningProcessTitle";
import { PdfFileTitle } from "../pdfFile/PdfFileTitle";

export const TextExtractorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
