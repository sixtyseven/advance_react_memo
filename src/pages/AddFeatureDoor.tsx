import ContructedHouses from "features/ContructedHouses";

function AddNewFeatureDoor() {
  return (
    <div className="page">
      <h3>Add New Feature Door</h3>
      <p>
        Your boss think the houses which only has windows may be boring . You
        are given a task to upgrade the robot to make it be able to build and
        maintain doors in houses.
      </p>
      <p>
        After some work, now we have added 2 doors to house 1. We also has the
        capicity to add more doors by merely updating the application state. we
        can see that whenever we update any door or window, only the Component
        and its direct ancestor Components are rendered.
      </p>
      <p>Happy boss, happy life!</p>

      <div>
        <ContructedHouses />
      </div>
    </div>
  );
}

export default AddNewFeatureDoor;
