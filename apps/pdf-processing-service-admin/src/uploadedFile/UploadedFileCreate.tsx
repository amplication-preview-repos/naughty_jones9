import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const UploadedFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <NumberInput step={1} label="fileSize" source="fileSize" />
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Create>
  );
};
