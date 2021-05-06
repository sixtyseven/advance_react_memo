/*
This page will demo use React Component without React.memo
*/
import { useState } from 'react';
import NormalComponent from 'core-ui/NormalComponent';

function UseNormalComponent() {
  const [inputVal1, setInputVal1] = useState<string>('');
  const onChange = (e: {
    target: HTMLInputElement
  }) => {
    setInputVal1(e.target.value);
  }

  console.log("[render] UseNormalComponent");
  return (
    <div>
      <input type="text" value={inputVal1} onChange={onChange} />
      <NormalComponent name={inputVal1} />
      <NormalComponent name="name2" />
    </div>
  );
}

export default UseNormalComponent;
