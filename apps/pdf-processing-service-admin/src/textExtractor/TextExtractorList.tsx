import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PDFFILE_TITLE_FIELD } from "../pdfFile/PdfFileTitle";

export const TextExtractorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TextExtractors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cleanedTxtContent" source="cleanedTxtContent" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="extractedAt" source="extractedAt" />
        <TextField label="ID" source="id" />
        <ReferenceField label="PDFFile" source="pdffile.id" reference="PdfFile">
          <TextField source={PDFFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="txtContent" source="txtContent" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
