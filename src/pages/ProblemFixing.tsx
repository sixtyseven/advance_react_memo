function ProblemFixing() {
  console.log("[render] Page Address Problem ");
  return (
    <div className="page">
      <h3>Problem Fixing</h3>
      <ol>
        <li>
          <div>
            Let's wrap those some more Components to be make React PureComponent
            <br />
            <br />
            <code>export default memo(ColorBlock);</code>
            <br />
            <code>export default memo(ComponentWithCallbackProp);</code>
            <br />
            <br />
            <code>
              <pre>
                {`/**
 * memo also accept a second argument for complex props comparision.
 * Don't forget to take advantage of immutation and shallow comparison
 */`}
              </pre>
            </code>
            <code>
              {`
                import { memo } from "react"; `}{" "}
              <br />
              {`
                import NormalHouse, { IProps } from "./NormalHouse";`}
              <br />
              {`
                type IPropKeys = keyof IProps;
              `}
              <br />
              <br />
              <code>
                <pre>
                  {`/**
 This is same as
 export default memo(NormalHouse);
 */`}
                </pre>
              </code>
              {`
                export default memo(NormalHouse, (p: IProps, q: IProps) => {  `}
              <br />
              {`
                  const isEqual = Object.keys(p).every(  `}
              <br />
              {`
                    (propKey: string) => p[propKey as IPropKeys] === q[propKey as IPropKeys]  `}
              <br />
              {`
                  );  `}
              <br />
              {`
                  return isEqual;  `}
              <br />
              {`
                });
                `}
            </code>
          </div>
        </li>
        <li>
          <div>
            Abstract a custom hook <code>useHouses</code>to reuse on different
            pages
            <code>
              <pre>
                {`
                import { useState, useCallback } from "react";
                import { IHouse } from "models";

                export function useHouses(initialHouses: IHouse[]) {
                  const [housesState, setHousesAppState] = useState<IHouse[]>(initialHouses);

                  const updateWindowColor = (
                    houseUid: string,
                    windowUid: string,
                    newColor: string
                  ) => {
                    // Functional updates
                    // If the new state is computed using the previous state,
                    // you can pass a function to setState.
                    // The function will receive the previous value,
                    // and return an updated value.
                    setHousesAppState((previousHousesState) => {
                      const newHouses = previousHousesState.map((h) => {
                        if (h.uid === houseUid) {
                          const newWindows = h.windows.map((w) => {
                            if (w.uid === windowUid) {
                              return {
                                ...w,
                                color: newColor,
                              };
                            }
                            return w;
                          });

                          return {
                            ...h,
                            windows: newWindows,
                          };
                        }
                        return h;
                      });
                      return newHouses;
                    });
                  };

                  const updateWindowColorCallback = useCallback(updateWindowColor, [
                    setHousesAppState,
                  ]);

                  return {
                    houses: housesState,
                    updateWindowColor: updateWindowColorCallback,
                  };
                }

                `}
              </pre>
            </code>
          </div>
        </li>
        <li>
          <div>
            You may need to create some wrapper Component to memo array items:
            <br />
            eg: memo `ColorBlock` for array items:
            <code>
              <pre>
                {`
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
                `}
              </pre>
            </code>
          </div>
        </li>
        <li>
          <p>
            This should be cover most of the cases. Go to "/problem-fixed" to
            see the result.
            <br /> Feel free to download the source codes and play it on your
            local.
            <br /> Feel free to contact me for any doubt.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default ProblemFixing;
