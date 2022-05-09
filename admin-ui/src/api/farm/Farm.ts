export type Farm = {
  createdAt: Date;
  farmType?: "Terrace" | "Farm" | "Garden" | null;
  heightArea: number | null;
  id: string;
  lengthArea: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  updatedAt: Date;
  widthArea: number | null;
};
