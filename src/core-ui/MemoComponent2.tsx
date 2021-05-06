import * as React from 'react';
interface IProps {
  name: string;
  callback: () => void;
}

function Component2(props: IProps) {
  const { name, callback } = props;
  console.log("[debug] render Component2");
  return <>
    <h3>Component2</h3>
    <div onClick={callback}>Name: {name} (clickable)</div>
  </>;
}

export default React.memo(Component2);
export { Component2 };

