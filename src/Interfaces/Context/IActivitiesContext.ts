import { IActivity } from "../IActivity";

// Definir el contexto de la Actividad (Lo que vamos a poder utilizar del context)
export interface IActivitiesContext {
  activities: IActivity[];
  activitySelected: IActivity | undefined;
  stateModalActivity: boolean;

  getActivies: () => void;
  selectActivity: (activity: IActivity) => void;
  addActivity: (activity: IActivity) => void;
  deleteActivity: (idActivity: string) => void;
  completeActivity: (idActivity: string) => void;

  modalActivity: (stateModalActivity: boolean) => void;
}
