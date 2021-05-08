import BadContructedHouses from "features/BadContructedHouses";

function Problem() {
  return (
    <div className="page">
      <h3>Problem</h3>
      <p>
        Your boss has 5 houses, which is built and maintained by a robot named
        "React". One day, your boss suprisingly found that, every time he wants
        to refurnish an house window to give it a new color, "React" would
        refurnish all windows in 5 houses, sometimes even all the Doors (if
        there are any). Such a waste! Now you are given a task to fix the
        software installed in the robot to ask him to do things more
        efficiently.
      </p>
      <p>
        To solve this problem, we may need some understanding about how the
        robot "React" and memo works essentially:
      </p>
      <div>
        <BadContructedHouses />
      </div>
    </div>
  );
}

export default Problem;
