import { initialAppState } from "app-states/initialStates";
import MemoHouse from "./MemoHouse";
import { useHouses } from "hooks/use-houses";

function ContructedHouses() {
  const initalHouses = initialAppState.pageProblemFixed;

  const { houses, updateWindowColor, updateDoorMaterial } = useHouses(
    initalHouses
  );

  console.log("[render] render ContructedHouses ");
  return (
    <>
      <h3>ContructedHouses </h3>
      <p>
        Update any window color or door material, and inpect the console output
      </p>

      {houses.map((house) => {
        return (
          <MemoHouse
            key={house.uid}
            house={house}
            updateWindowColor={updateWindowColor}
            updateDoorMaterial={updateDoorMaterial}
          />
        );
      })}
    </>
  );
}

export default ContructedHouses;
