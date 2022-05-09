import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FarmWhereInput = {
  farmType?: "Terrace" | "Farm" | "Garden";
  heightArea?: FloatNullableFilter;
  id?: StringFilter;
  lengthArea?: FloatNullableFilter;
  sunlightAvailability?: "Low" | "Medium" | "High";
  widthArea?: FloatNullableFilter;
};
