import { cloneDeep } from "lodash";
import { IHouse, IAppState } from "models/index";

const house1: IHouse = {
  uid: "house1",
  name: "house 1",
  windows: [
    {
      uid: "house1-window1",
      color: "#ff0000",
    },
    {
      uid: "house1-window2",
      color: "#ff00ff",
    },
  ],
};

const house2: IHouse = {
  uid: "house2",
  name: "house 2",
  windows: [
    {
      uid: "house2-window1",
      color: "#d0021b",
    },
    {
      uid: "house2-window2",
      color: "#2200ff",
    },
  ],
};

const house3: IHouse = {
  uid: "house3",
  name: "house 3",
  windows: [
    {
      uid: "house3-window1",
      color: "#9013fe",
    },
    {
      uid: "house3-window2",
      color: "#f5a623",
    },
  ],
};

const house4: IHouse = {
  uid: "house4",
  name: "house 4",
  windows: [
    {
      uid: "house4-window1",
      color: "#7ed321",
    },
    {
      uid: "house4-window2",
      color: "#ddcc00",
    },
    {
      uid: "house4-window3",
      color: "#50e3c2",
    },
  ],
};
const house5: IHouse = {
  uid: "house5",
  name: "house 5",
  windows: [
    {
      uid: "house5-window1",
      color: "#4a90e2",
    },
    {
      uid: "house5-window2",
      color: "#417505",
    },
  ],
};

const houses = [house1, house2, house3, house4, house5];
const houses2 = cloneDeep(houses);

export const initialAppState: IAppState = {
  pageProblem: houses,
  pageProblemFixed: houses2,
};
