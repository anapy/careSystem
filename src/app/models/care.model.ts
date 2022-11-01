export interface ICare {
  id?: Date;
  careTakerId: string;
  careTakerName: string;
  duration: number;
  observations: string;
  parentId: string;
  parentName: string;
  startDate: string;
}
