import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { MachineLearningProcessTitle } from "../machineLearningProcess/MachineLearningProcessTitle";

export const TeacherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
