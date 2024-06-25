import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeacherTitle } from "../teacher/TeacherTitle";
import { TextExtractorTitle } from "../textExtractor/TextExtractorTitle";

export const MachineLearningProcessEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="processedAt" source="processedAt" />
        <TextInput label="requestedInformation" source="requestedInformation" />
        <ReferenceArrayInput
          source="teachers"
          reference="Teacher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeacherTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="textExtractor.id"
          reference="TextExtractor"
          label="TextExtractor"
        >
          <SelectInput optionText={TextExtractorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
