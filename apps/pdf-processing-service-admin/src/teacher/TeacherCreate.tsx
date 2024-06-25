import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MachineLearningProcessTitle } from "../machineLearningProcess/MachineLearningProcessTitle";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="machineLearningProcess.id"
          reference="MachineLearningProcess"
          label="MachineLearningProcess"
        >
          <SelectInput optionText={MachineLearningProcessTitle} />
        </ReferenceInput>
        <div />
        <DateTimeInput label="readyAt" source="readyAt" />
        <div />
      </SimpleForm>
    </Create>
  );
};
