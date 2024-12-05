import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MACHINELEARNINGPROCESS_TITLE_FIELD } from "../machineLearningProcess/MachineLearningProcessTitle";

export const TeacherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Teachers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
