import { IDoor, IMaterial } from "models";
import { FormEvent, memo } from "react";

interface IProps {
  door: IDoor;
  updateMaterial: (material: IMaterial) => void;
}

const materialOptions: IMaterial[] = ["wood", "iron", "gold"];

function Door(props: IProps) {
  const { door, updateMaterial } = props;

  const onChange = (event: FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value as IMaterial;
    updateMaterial(value);
  };

  console.log("[render] Door ", door.name);
  return (
    <div>
      {door.name} (made from
      <select value={door.material} onChange={onChange}>
        {materialOptions.map((opt) => {
          return (
            <option key={opt} value={opt}>
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
