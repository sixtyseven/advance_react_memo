import { IDoor, IMaterial } from "models";
import { memo } from "react";

interface IProps {
  door: IDoor;
}

const materialOptions: IMaterial[] = ["wood", "iron", "gold"];

function Door(props: IProps) {
  const { door } = props;

  console.log("[render] Door ");
  return (
    <div>
      Door (made from
      <select defaultValue={door.material}>
        {materialOptions.map((opt) => {
          const selected = door.material === opt;
          return (
            <option value={opt} selected={selected}>
              {opt}
            </option>
          );
        })}
      </select>
      )
    </div>
  );
}

export default memo(Door);
