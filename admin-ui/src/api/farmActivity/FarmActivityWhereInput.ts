import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FarmActivityWhereInput = {
  activityDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
