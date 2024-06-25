import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const UploadedFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <NumberInput step={1} label="fileSize" source="fileSize" />
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Edit>
  );
};
