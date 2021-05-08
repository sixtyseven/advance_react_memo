import { IHouse } from "models";
import ColorBlock from "core-ui/MemoColorBlock";
import { useCallback, memo } from "react";

export interface IProps {
  house: IHouse;
  updateWindowColor: (
    houseUid: string,
    windowUid: string,
    newColor: string
  ) => void;
}

export interface IMemoColorProps {
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

function ColorBlockWrapper(props: IMemoColorProps) {
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

const MemoColorBlock = memo(ColorBlockWrapper);

function NormalHouse(props: IProps) {
  const { house, updateWindowColor } = props;
  const { uid: houseUid, name, windows } = house;
  console.log("[render] render House ", name);
  return (
    <>
      <div>House Name: {name} </div>
      <div>House windows: </div>
      <div style={{ display: "flex" }}>
        {windows.map((window) => {
          return (
            <div key={window.uid} style={{ marginRight: 10 }}>
              <MemoColorBlock
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
    </>
  );
}

export default NormalHouse;
