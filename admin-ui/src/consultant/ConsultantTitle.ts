import { Consultant as TConsultant } from "../api/consultant/Consultant";

export const CONSULTANT_TITLE_FIELD = "name";

export const ConsultantTitle = (record: TConsultant): string => {
  return record.name || record.id;
};
