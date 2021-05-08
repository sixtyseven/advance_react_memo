import { initialAppState } from "app-states/initialStates";
import MemoHouse from "./MemoHouse";
import { useHouses } from "hooks/use-houses";

function ContructedHouses() {
  const initalHouses = initialAppState.pageProblemFixed;

  const { houses, updateWindowColor } = useHouses(initalHouses);

  console.log("[render] render ContructedHouses ");
  return (
    <>
      <h3>ContructedHouses </h3>
      <p>Update any window color, and inpect the console output</p>
      <p>It is glad to see that only the components required are rendered</p>
      {houses.map((house) => {
        return (
          <MemoHouse
            key={house.uid}
            house={house}
            updateWindowColor={updateWindowColor}
          />
        );
      })}
    </>
  );
}

export default ContructedHouses;
