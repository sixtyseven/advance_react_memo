import * as React from 'react';
interface IProps {
  name: string;
}

function Component1(props: IProps) {
  const { name } = props;
  console.log("[debug] render Component1");
  return <>
    <h3>Component1</h3>
    <div>Name: ${name} </div>
  </>;
}

// export default React.memo(Component1);
export default React.memo(Component1);

