import { useState, useCallback } from "react";
import { IHouse } from "models";

export function useHouses(initialHouses: IHouse[]) {
  const [housesState, setHousesAppState] = useState<IHouse[]>(initialHouses);

  const updateWindowColor = (
    houseUid: string,
    windowUid: string,
    newColor: string
  ) => {
    // Functional updates
    // If the new state is computed using the previous state,
    // you can pass a function to setState.
    // The function will receive the previous value,
    // and return an updated value.
    setHousesAppState((previousHousesState) => {
      const newHouses = previousHousesState.map((h) => {
        if (h.uid === houseUid) {
          const newWindows = h.windows.map((w) => {
            if (w.uid === windowUid) {
              return {
                ...w,
                color: newColor,
              };
            }
            return w;
          });

          return {
            ...h,
            windows: newWindows,
          };
        }
        return h;
      });
      return newHouses;
    });
  };

  const updateWindowColorCallback = useCallback(updateWindowColor, [
    setHousesAppState,
  ]);

  return {
    houses: housesState,
    updateWindowColor: updateWindowColorCallback,
  };
}
