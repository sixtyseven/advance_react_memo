/**
 * Pure Component with a callback
 */
import { memo } from "react";

interface IObjProp {
  key1: string;
  key2: string;
}

interface IProps {
  name: string;
  callback: () => void;
  objProp?: IObjProp;
}

function ComponentWithCallbackProp(props: IProps) {
  const { name, callback, objProp } = props;
  console.log("[render] Memo Component With Callback ", name);
  return (
    <>
      <h4>memo Component with prop</h4>
      <div onClick={callback}>Name: {name} (clickable)</div>
      {objProp ? (
        <div style={{ display: "none" }}>
          <div>key1: {objProp.key1}</div>
          <div>key1: {objProp.key2}</div>
        </div>
      ) : null}
    </>
  );
}

export default memo(ComponentWithCallbackProp);
