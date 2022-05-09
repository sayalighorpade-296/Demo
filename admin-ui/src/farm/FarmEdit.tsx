import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
} from "react-admin";

export const FarmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="farmType"
          label="Farm Type"
          choices={[
            { label: "terrace", value: "Terrace" },
            { label: "farm", value: "Farm" },
            { label: "garden", value: "Garden" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Height Area" source="heightArea" />
        <NumberInput label="Length Area" source="lengthArea" />
        <SelectInput
          source="sunlightAvailability"
          label="Sunlight Availability"
          choices={[
            { label: "low", value: "Low" },
            { label: "medium", value: "Medium" },
            { label: "high", value: "High" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Width Area" source="widthArea" />
      </SimpleForm>
    </Edit>
  );
};
