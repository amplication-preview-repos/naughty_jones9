import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MACHINELEARNINGPROCESS_TITLE_FIELD } from "./MachineLearningProcessTitle";
import { TEXTEXTRACTOR_TITLE_FIELD } from "../textExtractor/TextExtractorTitle";

export const MachineLearningProcessShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Teacher"
          target="machineLearningProcessId"
          label="Teachers"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
