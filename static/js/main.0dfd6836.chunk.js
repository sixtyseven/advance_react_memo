(this.webpackJsonprender_test=this.webpackJsonprender_test||[]).push([[0],{208:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(83),s=o.n(c),i=(o(95),o(34)),a=o(5),l=(o(96),o(1)),d=[{label:"React.Component",link:"https://reactjs.org/docs/react-api.html#reactcomponent"},{label:"React.PureComponent",link:"https://reactjs.org/docs/react-api.html#reactpurecomponent"},{label:"React.memo",link:"https://reactjs.org/docs/react-api.html#reactmemo"},{label:"useCallback",link:"https://reactjs.org/docs/hooks-reference.html#usecallback"}];var u=function(){return console.log("[render] Definitions page"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Definitons"}),Object(l.jsx)("ul",{children:d.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.label})},e.label)}))}),Object(l.jsx)("p",{children:"Definitions are mainly from https://reactjs.org/docs/react-api.html"})]})},j=o(12);var b=function(e){var n=e.name;return console.log("[render] render Component ",n),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:" Component"}),Object(l.jsxs)("div",{children:["Name: ",n," "]})]})};var m=function(){var e=Object(t.useState)(""),n=Object(j.a)(e,2),o=n[0],r=n[1];return console.log("[render] Page without Memo"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:" Component Without Memo"}),"Input Name and inspect the output from console log:"," ",Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){r(e.currentTarget.value)}}),Object(l.jsx)(b,{name:o}),Object(l.jsx)(b,{name:"static name"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:'Or no, "static name" has never been updated, but our Robot still renders the component. In this case, we definitely don\'t need the render.'})]})},h=Object(t.memo)(b);var p=function(){var e=Object(t.useState)(""),n=Object(j.a)(e,2),o=n[0],r=n[1];return console.log("[render] Page MemoComponent"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Memo Component"}),"Input Name and inspect the output from console log:"," ",Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){r(e.currentTarget.value)}}),Object(l.jsx)(h,{name:o}),Object(l.jsx)(h,{name:"static name"}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["All we did was wrap the component with ",Object(l.jsx)("code",{children:"React.memo"})]}),Object(l.jsx)("p",{children:'Or Yes, haha, "static name" is not rendered now. Magic!'}),Object(l.jsx)("div",{children:Object(l.jsxs)("code",{children:['import {memo} from "react";'," ",Object(l.jsx)("br",{}),'import NormalComponent from "./NormalComponent";'," ",Object(l.jsx)("br",{}),"export default memo(NormalComponent);"," ",Object(l.jsx)("br",{})]})})]})};function x(e){var n=e.name,o=e.callback;return console.log("[render] Memo Component With Callback ",n),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"memo Component with callback"}),Object(l.jsxs)("div",{onClick:o,children:["Name: ",n," (clickable)"]})]})}var O=Object(t.memo)(x);var w=function(){var e=Object(t.useState)(""),n=Object(j.a)(e,2),o=n[0],r=n[1],c=Object(t.useCallback)((function(){console.log("callback1")}),[]),s=Object(t.useCallback)((function(){console.log("callback2")}),[]);return console.log("[render] Page MemoComponent with callback"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h4",{children:"Memo Component with callbacks"}),"input Name and inspect the output from console log:"," ",Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){r(e.currentTarget.value)}}),Object(l.jsx)(O,{name:o,callback:c}),Object(l.jsx)(O,{name:"static name",callback:s}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"However, sometimes if we add some callback to props, react starts to render not updated peer components again"}),Object(l.jsxs)("p",{children:["No worries, ",Object(l.jsx)("code",{children:"React.useCallback"})," comes to the rescue."]}),Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n  const callback2 = () => {\n    console.log("callback2");\n  };\n<MemoComponentWithCallback name="static name" callback={callback2} />\n       '})}),Object(l.jsxs)("p",{children:["Update",Object(l.jsx)("code",{children:"callback2"}),"function to below:"]}),Object(l.jsx)("code",{children:'\n\n    const callback2 = useCallback(() => {\n      console.log("callback2");\n    }, []);\n       '}),Object(l.jsx)("p",{children:'Or Yes, "static name" is not rendered when we need to render the peer component now.'}),Object(l.jsxs)("p",{children:["Similarly, we have tools like ",Object(l.jsx)("code",{children:"React.useMemo"})," and"," ",Object(l.jsx)("code",{children:"reselect"})," for more advanced memo for different scenarios to make react work as expected."]})]})},f=o(84),g=[{uid:"house1",name:"house 1",windows:[{uid:"house1-window1",color:"#ff0000"},{uid:"house1-window2",color:"#ff00ff"}]},{uid:"house2",name:"house 2",windows:[{uid:"house2-window1",color:"#d0021b"},{uid:"house2-window2",color:"#2200ff"}]},{uid:"house3",name:"house 3",windows:[{uid:"house3-window1",color:"#9013fe"},{uid:"house3-window2",color:"#f5a623"}]},{uid:"house4",name:"house 4",windows:[{uid:"house4-window1",color:"#7ed321"},{uid:"house4-window2",color:"#ddcc00"},{uid:"house4-window3",color:"#50e3c2"}]},{uid:"house5",name:"house 5",windows:[{uid:"house5-window1",color:"#4a90e2"},{uid:"house5-window2",color:"#417505"}]}],v={pageProblem:g,pageProblemFixed:Object(f.cloneDeep)(g)},C=o(90);function k(e){var n=e.color,o=e.width,r=void 0===o?30:o,c=e.height,s=void 0===c?30:c,i=e.onChangeColor,a=e.debugName,d=Object(t.useState)(!1),u=Object(j.a)(d,2),b=u[0],m=u[1],h=Object(t.createRef)(),p=null;b&&(p=Object(l.jsx)("div",{style:{position:"absolute",top:35,zIndex:1},children:Object(l.jsx)(C.a,{color:n,onChangeComplete:function(e){i(e.hex)}})}));return function(e,n){Object(t.useEffect)((function(){function o(o){e.current&&!e.current.contains(o.target)&&n&&n()}return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}}),[e,n])}(h,Object(t.useCallback)((function(){m(!1)}),[])),console.log("[render] Memo Color Block ",a),Object(l.jsxs)("div",{ref:h,style:{position:"relative"},children:[Object(l.jsx)("div",{style:{backgroundColor:n,width:r,height:s},onClick:function(){m(!b)}}),p]})}var y=Object(t.memo)(k);function N(e){var n=e.color,o=e.updateWindowColor,r=e.windowUid,c=e.houseUid,s=e.debugName,i=Object(t.useCallback)((function(e){return o(c,r,e)}),[c,r,o]);return Object(l.jsx)(y,{color:n,onChangeColor:i,debugName:s})}var P=Object(t.memo)(N);var H=function(e){var n=e.house,o=e.updateWindowColor,t=n.uid,r=n.name,c=n.windows;return console.log("[render] render House ",r),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:["House Name: ",r," "]}),Object(l.jsx)("div",{children:"House windows: "}),Object(l.jsx)("div",{style:{display:"flex"},children:c.map((function(e){return Object(l.jsx)("div",{style:{marginRight:10},children:Object(l.jsx)(P,{color:e.color,houseUid:t,updateWindowColor:o,debugName:e.uid,windowUid:e.uid})},e.uid)}))})]})},W=o(22);function U(e){var n=Object(t.useState)(e),o=Object(j.a)(n,2),r=o[0],c=o[1];return{houses:r,updateWindowColor:Object(t.useCallback)((function(e,n,o){c((function(t){return t.map((function(t){if(t.uid===e){var r=t.windows.map((function(e){return e.uid===n?Object(W.a)(Object(W.a)({},e),{},{color:o}):e}));return Object(W.a)(Object(W.a)({},t),{},{windows:r})}return t}))}))}),[c])}}var I=function(){var e=U(v.pageProblem),n=e.houses,o=e.updateWindowColor;return console.log("[render] render BadContructedHouses "),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"BadContructedHouses "}),Object(l.jsx)("p",{children:"Update any window color, and inpect the console output"}),n.map((function(e){return Object(l.jsx)(H,{house:e,updateWindowColor:o},e.uid)}))]})};var S=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Problem"}),Object(l.jsx)("p",{children:'Your boss has 5 houses, which is built and maintained by a robot named "React". One day, your boss suprisingly found that, every time he wants to refurnish an house window to give it a new color, "React" would refurnish all windows in 5 houses, sometimes even all the Doors (if there are any). Such a waste! Now you are given a task to fix the software installed in the robot to ask him to do things more efficiently.'}),Object(l.jsx)("p",{children:'To solve this problem, we may need some understanding about how the robot "React" and memo works essentially:'}),Object(l.jsx)("div",{children:Object(l.jsx)(I,{})})]})},F=Object(t.memo)(H,(function(e,n){return Object.keys(e).every((function(o){return e[o]===n[o]}))}));var M=function(){var e=U(v.pageProblemFixed),n=e.houses,o=e.updateWindowColor;return console.log("[render] render ContructedHouses "),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"ContructedHouses "}),Object(l.jsx)("p",{children:"Update any window color, and inpect the console output"}),Object(l.jsx)("p",{children:"It is glad to see that only the components required are rendered"}),n.map((function(e){return Object(l.jsx)(F,{house:e,updateWindowColor:o},e.uid)}))]})};var R=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Problem Fixed"}),Object(l.jsx)("p",{children:'Now Robot "React" will only do the work necessary when boss requires it to. No more, no less. Much performant when constructing the houses, results in a faster and more scalable application and happier boss and users.'}),Object(l.jsx)("div",{children:Object(l.jsx)(M,{})})]})},B=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Contact Me"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{action:"https://formspree.io/moqqobrb",method:"POST",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("label",{htmlFor:"contact-form-name",children:["Your Name ",Object(l.jsx)("span",{className:"text-danger",children:"*"})]}),Object(l.jsx)("input",{type:"text",name:"name",id:"contact-form-name",className:"form-control",required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"contact-form-email",children:"Your Email Address"}),Object(l.jsx)("input",{type:"email",name:"email",id:"contact-form-email",className:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("label",{htmlFor:"contact-form-message",children:["Message ",Object(l.jsx)("span",{className:"text-danger",children:"*"})]}),Object(l.jsx)("textarea",{name:"message",rows:6,id:"contact-form-message",className:"form-control",required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("button",{type:"submit",className:"form-control",children:"Submit"})})]})})]})};var T=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Problem Fixing"}),Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:Object(l.jsxs)("p",{children:["Let's wrap those some more components to be make React PureComponent",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:"export default memo(ColorBlock);"}),Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:"export default memo(ComponentWithCallbackProp);"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:"/**\n * memo also accept a second argument for complext props comparision.\n * Don't forget to take advantage of immutation and shallow comparison\n */"})}),Object(l.jsxs)("code",{children:['\n                import { memo } from "react"; '," ",Object(l.jsx)("br",{}),'\n                import NormalHouse, { IProps } from "./NormalHouse";',Object(l.jsx)("br",{}),"\n                type IPropKeys = keyof IProps;\n              ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:"/**\n This is same as\n export default memo(NormalHouse);\n */"})}),"\n                export default memo(NormalHouse, (p: IProps, q: IProps) => {  ",Object(l.jsx)("br",{}),"\n                  const isEqual = Object.keys(p).every(  ",Object(l.jsx)("br",{}),"\n                    (propKey: string) => p[propKey as IPropKeys] === q[propKey as IPropKeys]  ",Object(l.jsx)("br",{}),"\n                  );  ",Object(l.jsx)("br",{}),"\n                  return isEqual;  ",Object(l.jsx)("br",{}),"\n                });\n                "]})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("div",{children:["Abstract a custom hook ",Object(l.jsx)("code",{children:"useHouses"}),"to reuse on different pages",Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n                import { useState, useCallback } from "react";\n                import { IHouse } from "models";\n\n                export function useHouses(initialHouses: IHouse[]) {\n                  const [housesState, setHousesAppState] = useState<IHouse[]>(initialHouses);\n\n                  const updateWindowColor = (\n                    houseUid: string,\n                    windowUid: string,\n                    newColor: string\n                  ) => {\n                    // Functional updates\n                    // If the new state is computed using the previous state,\n                    // you can pass a function to setState.\n                    // The function will receive the previous value,\n                    // and return an updated value.\n                    setHousesAppState((previousHousesState) => {\n                      const newHouses = previousHousesState.map((h) => {\n                        if (h.uid === houseUid) {\n                          const newWindows = h.windows.map((w) => {\n                            if (w.uid === windowUid) {\n                              return {\n                                ...w,\n                                color: newColor,\n                              };\n                            }\n                            return w;\n                          });\n\n                          return {\n                            ...h,\n                            windows: newWindows,\n                          };\n                        }\n                        return h;\n                      });\n                      return newHouses;\n                    });\n                  };\n\n                  const updateWindowColorCallback = useCallback(updateWindowColor, [\n                    setHousesAppState,\n                  ]);\n\n                  return {\n                    houses: housesState,\n                    updateWindowColor: updateWindowColorCallback,\n                  };\n                }\n\n                '})})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("div",{children:["You may need to create some wrapper component to memo array items:",Object(l.jsx)("br",{}),"eg: memo `ColorBlock` for array items:",Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n                import { IHouse } from "models";\n                import ColorBlock from "core-ui/MemoColorBlock";\n                import { useCallback, memo } from "react";\n\n                export interface IProps {\n                  house: IHouse;\n                  updateWindowColor: (\n                    houseUid: string,\n                    windowUid: string,\n                    newColor: string\n                  ) => void;\n                }\n\n                export interface IMemoColorProps {\n                  color: string;\n                  houseUid: string;\n                  updateWindowColor: (\n                    houseUid: string,\n                    windowUid: string,\n                    newColor: string\n                  ) => void;\n                  windowUid: string;\n                  debugName: string;\n                }\n\n                function ColorBlockWrapper(props: IMemoColorProps) {\n                  const { color, updateWindowColor, windowUid, houseUid, debugName } = props;\n\n                  const onChangeColorCallback = useCallback(\n                    (newColor: string) => updateWindowColor(houseUid, windowUid, newColor),\n                    [houseUid, windowUid, updateWindowColor]\n                  );\n                  return (\n                    <ColorBlock\n                      color={color}\n                      onChangeColor={onChangeColorCallback}\n                      debugName={debugName}\n                    />\n                  );\n                }\n\n                const MemoColorBlock = memo(ColorBlockWrapper);\n\n                function NormalHouse(props: IProps) {\n                  const { house, updateWindowColor } = props;\n                  const { uid: houseUid, name, windows } = house;\n                  console.log("[render] render House ", name);\n                  return (\n                    <>\n                      <div>House Name: {name} </div>\n                      <div>House windows: </div>\n                      <div style={{ display: "flex" }}>\n                        {windows.map((window) => {\n                          return (\n                            <div key={window.uid} style={{ marginRight: 10 }}>\n                              <MemoColorBlock\n                                color={window.color}\n                                houseUid={houseUid}\n                                updateWindowColor={updateWindowColor}\n                                debugName={window.uid}\n                                windowUid={window.uid}\n                              />\n                            </div>\n                          );\n                        })}\n                      </div>\n                    </>\n                  );\n                }\n\n                export default NormalHouse;\n                '})})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("p",{children:['This should be cover most of the cases. Go to "/problem-fixed" to see the result.',Object(l.jsx)("br",{})," Feel free to download the source codes and play it on your local.",Object(l.jsx)("br",{})," Feel free to contact me for any doubt."]})})]})]})};function A(){return Object(l.jsx)("div",{})}var q={title:"An Advanced React Memo Tutorial",blocks:[{title:"Problem",items:[{link:"/problem",label:"Promblem"}]},{title:"Training Agenda",items:[{link:"/definitions",label:"Definitions"},{link:"/page1",label:"Page1: React without memo"},{link:"/page2",label:"Page2: React memo / PureComponent"},{link:"/page3",label:"Page3: React memo with callback function"}]},{title:"Fix The Problem",items:[{link:"/problem-fixing",label:"Address Promblems"},{link:"/problem-fixed",label:"Promblem Fixed"}]},{title:"Souce code",items:[{link:"https://github.com/sixtyseven/advance_react_memo",label:"GitHub"}]},{title:"Contact me",items:[{link:"/contact-me",label:"Contact me"}]}]};function D(){return Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)("h3",{className:"h3",children:q.title}),q.blocks.map((function(e){return Object(l.jsxs)("div",{className:"nav-block",children:[Object(l.jsx)("h4",{className:"h4",children:e.title}),Object(l.jsx)("ul",{children:e.items.map((function(e){var n;return n=e.link.startsWith("https://")||e.link.startsWith("http://")?Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.label}):Object(l.jsx)(i.b,{to:e.link,children:e.label}),Object(l.jsx)("li",{children:n},e.link)}))})]},e.title)}))]})}function E(){return console.log("[render] App "),Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("div",{className:"left-side",children:Object(l.jsx)(D,{})}),Object(l.jsx)("div",{className:"right-side",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/problem",children:Object(l.jsx)(S,{})}),Object(l.jsx)(a.a,{path:"/problem-fixed",children:Object(l.jsx)(R,{})}),Object(l.jsx)(a.a,{path:"/problem-fixing",children:Object(l.jsx)(T,{})}),Object(l.jsx)(a.a,{path:"/contact-me",children:Object(l.jsx)(B,{})}),Object(l.jsx)(a.a,{path:"/definitions",children:Object(l.jsx)(u,{})}),Object(l.jsx)(a.a,{path:"/page1",children:Object(l.jsx)(m,{})}),Object(l.jsx)(a.a,{path:"/page2",children:Object(l.jsx)(p,{})}),Object(l.jsx)(a.a,{path:"/page3",children:Object(l.jsx)(w,{})}),Object(l.jsx)(a.a,{path:"/",children:Object(l.jsx)(A,{})})]})})]})})}var K=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,210)).then((function(n){var o=n.getCLS,t=n.getFID,r=n.getFCP,c=n.getLCP,s=n.getTTFB;o(e),t(e),r(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),K()},95:function(e,n,o){},96:function(e,n,o){}},[[208,1,2]]]);
//# sourceMappingURL=main.0dfd6836.chunk.js.map