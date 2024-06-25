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
import { TEXTEXTRACTOR_TITLE_FIELD } from "../textExtractor/TextExtractorTitle";

export const MachineLearningProcessList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MachineLearningProcesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="extractedInformation" source="extractedInformation" />
        <TextField label="ID" source="id" />
        <TextField label="processedAt" source="processedAt" />
        <TextField label="requestedInformation" source="requestedInformation" />
        <ReferenceField
          label="TextExtractor"
          source="textextractor.id"
          reference="TextExtractor"
        >
          <TextField source={TEXTEXTRACTOR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
