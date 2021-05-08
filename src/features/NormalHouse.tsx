import { IHouse, IMaterial, IDoor } from "models";
import ColorBlock from "core-ui/MemoColorBlock";
import Door from "./MemoDoor";
import { useCallback, memo } from "react";

export interface IProps {
  house: IHouse;
  updateWindowColor: (
    houseUid: string,
    windowUid: string,
    newColor: string
  ) => void;
  updateDoorMaterial: (
    houseUid: string,
    doorUid: string,
    material: IMaterial
  ) => void;
}

export interface IMemoColorWrapperProps {
  color: string;
  houseUid: string;
  updateWindowColor: (
    houseUid: string,
    windowUid: string,
    newColor: string
  ) => void;
  windowUid: string;
  debugName: string;
}

export interface IDoorWrapperProp {
  door: IDoor;
  houseUid: string;
  updateDoorMaterial: (
    houseUid: string,
    doorUid: string,
    material: IMaterial
  ) => void;
}

function ColorBlockWrapper(props: IMemoColorWrapperProps) {
  const { color, updateWindowColor, windowUid, houseUid, debugName } = props;

  const onChangeColorCallback = useCallback(
    (newColor: string) => updateWindowColor(houseUid, windowUid, newColor),
    [houseUid, windowUid, updateWindowColor]
  );
  return (
    <ColorBlock
      color={color}
      onChangeColor={onChangeColorCallback}
      debugName={debugName}
    />
  );
}

function DoorWrapper(props: IDoorWrapperProp) {
  const { door, houseUid, updateDoorMaterial } = props;
  const updateMaterialCallback = useCallback(
    (material: IMaterial) => {
      updateDoorMaterial(houseUid, door.uid, material);
    },
    [houseUid, door.uid, updateDoorMaterial]
  );

  return <Door door={door} updateMaterial={updateMaterialCallback} />;
}

const MemoColorBlockWrapper = memo(ColorBlockWrapper);

function NormalHouse(props: IProps) {
  const { house, updateWindowColor, updateDoorMaterial } = props;
  const { uid: houseUid, name, windows, doors } = house;
  console.log("[render] render House ", name);
  return (
    <>
      <div>House Name: {name} </div>
      <div>House windows: </div>
      <div style={{ display: "flex" }}>
        {windows.map((window) => {
          return (
            <div key={window.uid} style={{ marginRight: 10 }}>
              <MemoColorBlockWrapper
                color={window.color}
                houseUid={houseUid}
                updateWindowColor={updateWindowColor}
                debugName={window.uid}
                windowUid={window.uid}
              />
            </div>
          );
        })}
      </div>
      <div>
        {doors.map((door) => {
          return (
            <div key={door.uid} style={{ marginRight: 10 }}>
              <DoorWrapper
                door={door}
                houseUid={houseUid}
                updateDoorMaterial={updateDoorMaterial}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NormalHouse;
