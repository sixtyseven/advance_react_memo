import { initialAppState } from "app-states/initialStates";
import NormalHouse from "./NormalHouse";
import { useHouses } from "hooks/use-houses";

function BadContructedHouses() {
  const initalHouses = initialAppState.pageProblem;
  const { houses, updateWindowColor } = useHouses(initalHouses);

  console.log("[render] render BadContructedHouses ");
  return (
    <>
      <h3>BadContructedHouses </h3>
      <p>Update any window color, and inpect the console output</p>
      {houses.map((house) => {
        return (
          <NormalHouse
            key={house.uid}
            house={house}
            updateWindowColor={updateWindowColor}
          />
        );
      })}
    </>
  );
}

export default BadContructedHouses;