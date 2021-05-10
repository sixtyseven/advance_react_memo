import { FormEvent, useCallback, useState, useMemo } from "react";
import MemoComponentWithCallback from "core-ui/MemoComponentWithCallback";

function PageWithObjectProp() {
  const [inputVal1, setInputVal1] = useState<string>("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setInputVal1(e.currentTarget.value);
  };
  const callback1 = useCallback(() => {
    console.log("callback1");
  }, []);
  const callback2 = useCallback(() => {
    console.log("callback2");
  }, []);

  // Object needs to be cached to use PureComponent as well
  const objectProp = useMemo(
    () => ({
      key1: "key1",
      key2: "key2",
    }),
    []
  );

  console.log("[render] Page MemoComponent with an ojbect prop");
  return (
    <div className="page">
      <h4>Memo Component with an object prop</h4>
      input Name and inspect the output from console log:{" "}
      <input type="text" value={inputVal1} onChange={onChange} />
      <MemoComponentWithCallback name={inputVal1} callback={callback1} />
      <MemoComponentWithCallback
        name="static name"
        callback={callback2}
        objProp={objectProp}
      />
      <br />
      <p>
        Now, we start to add a object to the props, but react starts to render
        not updated peer Components again, even if we put object prop inline
        without a new variable.
      </p>
      <div>
        <code>
          <pre>
            {`
        <MemoComponentWithCallback name={inputVal1}
        callback={callback1}
        objProp={{
          key1: "key1",
          key2: "key2",
        }}/>
        `}
          </pre>
        </code>
      </div>
      <p>What Happened?</p>
      <p>
        It turns out that react Component would create a new object instance and
        assign it to a different memory address.
      </p>
      <p>
        No worries, <code>React.useMemo</code> comes to the rescue. It will
        cache the object value and use it again instead of create a new one.
      </p>
      <p>Update codes to below:</p>
      <code>
        <pre>
          {`
  const objectProp = useMemo(
    () => ({
      key1: "key1",
      key2: "key2",
    }),
    []
  );

    <MemoComponentWithCallback
            name="static name"
            callback={callback2}
            objProp={objectProp}
          />
       `}
        </pre>
      </code>
      <p>
        Or Yes, "static name" is not rendered when we need to render the peer
        Component now.
      </p>
      <p>
        Similarly, we have tools like &nbsp;<code>reselect</code>&nbsp; to work
        with more complicated application states to make react work as expected.
      </p>
    </div>
  );
}

export default PageWithObjectProp;
