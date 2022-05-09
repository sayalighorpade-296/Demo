import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const FarmShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Farm Type" source="farmType" />
        <TextField label="Height Area" source="heightArea" />
        <TextField label="ID" source="id" />
        <TextField label="Length Area" source="lengthArea" />
        <TextField
          label="Sunlight Availability"
          source="sunlightAvailability"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Width Area" source="widthArea" />
      </SimpleShowLayout>
    </Show>
  );
};
