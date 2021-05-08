export interface IWindow {
  uid: string;
  color: string;
  // ...skip other props
}

export interface IHouse {
  uid: string;
  name: string;
  windows: IWindow[];
  // ...skip other props
}

export interface IAppState {
  pageProblem: IHouse[];
  pageProblemFixed: IHouse[];
}
