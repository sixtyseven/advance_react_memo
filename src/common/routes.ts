import Definitions from "pages/Definitions";
import UseNormalComponents from "pages/PageNormalComponents";
import UseMemoComponents from "pages/PageMemoComponents";
import UseCallbackFunction from "pages/PageCallbackFunction";
import PageObjectProp from "pages/PageObjectProp";
import Problem from "pages/Problem";
import ProblemFixed from "pages/ProblemFixed";
import ContaceMe from "pages/ContactMe";
import ProblemFixing from "pages/ProblemFixing";
import Home from "pages/Home";
import AddFeatureDoor from "pages/AddFeatureDoor";
import QuizAddMoreNewFeature from "pages/QuizAddMoreNewFeature";
import React from "react";

export interface IRoute {
  path: string;
  Component: React.FC | null;
  shortTitle: string;
}

export interface IRoutesMap {
  problem: IRoute;
  problemFixed: IRoute;
  problemFixing: IRoute;
  addNewFeatureDoor: IRoute;
  quiz: IRoute;
  contactMe: IRoute;
  definitions: IRoute;
  page1: IRoute;
  page2: IRoute;
  page3: IRoute;
  page4: IRoute;
  home: IRoute;
  souceCode: IRoute;
}

export const routesMap: IRoutesMap = {
  problem: { path: "/problem", Component: Problem, shortTitle: "Promblem" },
  problemFixed: {
    path: "/problem-fixed",
    Component: ProblemFixed,
    shortTitle: "Promblem Fixed",
  },
  problemFixing: {
    path: "/problem-fixing",
    Component: ProblemFixing,
    shortTitle: "Address Promblems",
  },
  addNewFeatureDoor: {
    path: "/add-new-feature-door",
    Component: AddFeatureDoor,
    shortTitle: "Add a new feature",
  },
  quiz: { path: "/quiz", Component: QuizAddMoreNewFeature, shortTitle: "Quiz" },
  contactMe: {
    path: "/contact-me",
    Component: ContaceMe,
    shortTitle: "Contact me",
  },
  definitions: {
    path: "/definitions",
    Component: Definitions,
    shortTitle: "Definitions",
  },
  page1: {
    path: "/page1",
    Component: UseNormalComponents,
    shortTitle: "Page1: React without memo",
  },
  page2: {
    path: "/page2",
    Component: UseMemoComponents,
    shortTitle: "Page2: React memo / PureComponent",
  },
  page3: {
    path: "/page3",
    Component: UseCallbackFunction,
    shortTitle: "Page3: React memo with callback function",
  },
  page4: {
    path: "/page4",
    Component: PageObjectProp,
    shortTitle: "Page4: React memo with object prop",
  },
  home: { path: "/", Component: Home, shortTitle: "Home" },
  souceCode: {
    path: "https://github.com/sixtyseven/advance_react_memo",
    Component: null,
    shortTitle: "GitHub",
  },
};
