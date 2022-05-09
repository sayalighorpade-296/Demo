import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const FarmActivityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Activity Date" source="activityDate" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
