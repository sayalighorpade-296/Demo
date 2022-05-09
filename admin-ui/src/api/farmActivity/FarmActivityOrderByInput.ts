import { SortOrder } from "../../util/SortOrder";

export type FarmActivityOrderByInput = {
  activityDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
