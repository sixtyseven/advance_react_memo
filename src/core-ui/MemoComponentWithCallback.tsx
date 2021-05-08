/**
 * Pure Component with a callback
 */
import { memo } from "react";
interface IProps {
  name: string;
  callback: () => void;
}

function ComponentWithCallbackProp(props: IProps) {
  const { name, callback } = props;
  console.log("[render] Memo Component With Callback ", name);
  return (
    <>
      <h4>memo Component with callback</h4>
      <div onClick={callback}>Name: {name} (clickable)</div>
    </>
  );
}

export default memo(ComponentWithCallbackProp);
