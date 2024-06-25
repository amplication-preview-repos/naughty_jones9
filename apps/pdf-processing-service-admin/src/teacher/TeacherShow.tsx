import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MACHINELEARNINGPROCESS_TITLE_FIELD } from "../machineLearningProcess/MachineLearningProcessTitle";

export const TeacherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="MachineLearningProcess"
          source="machinelearningprocess.id"
          reference="MachineLearningProcess"
        >
          <TextField source={MACHINELEARNINGPROCESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="processedData" source="processedData" />
        <TextField label="readyAt" source="readyAt" />
        <TextField label="sharedData" source="sharedData" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
