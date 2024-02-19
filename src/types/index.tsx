export type Class = {
  link: string;
  date: Date;
  title: string;
  details: string;
  type: "theory" | "practice";
  id: string;
}

export type Data = {
  classes: Class[]
};