export interface IWindow {
  uid: string;
  color: string;
  // ...skip other props
}

export type IMaterial = "iron" | "wood" | "gold";
export interface IDoor {
  uid: string;
  name: string;
  material: IMaterial;
  // ...skip other props
}

export interface IHouse {
  uid: string;
  name: string;
  windows: IWindow[];
  doors: IDoor[];
  // ...skip other props
}

export interface IAppState {
  pageProblem: IHouse[];
  pageProblemFixed: IHouse[];
}
