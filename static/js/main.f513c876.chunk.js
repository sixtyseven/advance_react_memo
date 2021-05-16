(this.webpackJsonprender_test=this.webpackJsonprender_test||[]).push([[0],{208:function(e,o,t){"use strict";t.r(o);var n=t(0),r=t.n(n),c=t(83),a=t.n(c),s=(t(95),t(34)),i=t(5),l=(t(96),t(1)),d=[{label:"React.Component",link:"https://reactjs.org/docs/react-api.html#reactComponent"},{label:"React.PureComponent",link:"https://reactjs.org/docs/react-api.html#reactpureComponent"},{label:"React.memo",link:"https://reactjs.org/docs/react-api.html#reactmemo"},{label:"useCallback",link:"https://reactjs.org/docs/hooks-reference.html#usecallback"},{label:"Immutable Data",link:"https://redux.js.org/faq/immutable-data"}];var u=function(){return console.log("[render] Definitions page"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Definitons"}),Object(l.jsx)("ul",{children:d.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.label})},e.label)}))}),Object(l.jsx)("p",{children:"Definitions are mainly from https://reactjs.org/docs/react-api.html"})]})},j=t(9);var b=function(e){var o=e.name;return console.log("[render] render Component ",o),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:" Component"}),Object(l.jsxs)("div",{children:["Name: ",o," "]})]})};var m=function(){var e=Object(n.useState)(""),o=Object(j.a)(e,2),t=o[0],r=o[1];return console.info("[render] Page without Memo"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:" Component Without Memo"}),"Input Name and inspect the output from console log:"," ",Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){r(e.currentTarget.value)}}),Object(l.jsx)(b,{name:t}),Object(l.jsx)(b,{name:"static name"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:'Or no, "static name" has never been updated, but our Robot still renders the Component. In this case, we definitely don\'t need the render.'})]})},h=Object(n.memo)(b);var p=function(){var e=Object(n.useState)(""),o=Object(j.a)(e,2),t=o[0],r=o[1];return console.log("[render] Page MemoComponent"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Memo Component"}),"Input Name and inspect the output from console log:"," ",Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){r(e.currentTarget.value)}}),Object(l.jsx)(h,{name:t}),Object(l.jsx)(h,{name:"static name"}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["All we did was wrap the Component with ",Object(l.jsx)("code",{children:"React.memo"})]}),Object(l.jsx)("p",{children:'Or Yes, haha, "static name" is not rendered now. Magic!'}),Object(l.jsx)("div",{children:Object(l.jsxs)("code",{children:['import {memo} from "react";'," ",Object(l.jsx)("br",{}),'import NormalComponent from "./NormalComponent";'," ",Object(l.jsx)("br",{}),"export default memo(NormalComponent);"," ",Object(l.jsx)("br",{})]})})]})};function O(e){var o=e.name,t=e.callback,n=e.objProp;return console.log("[render] Memo Component With Callback ",o),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"memo Component with prop"}),Object(l.jsxs)("div",{onClick:t,children:["Name: ",o," (clickable)"]}),n?Object(l.jsxs)("div",{style:{display:"none"},children:[Object(l.jsxs)("div",{children:["key1: ",n.key1]}),Object(l.jsxs)("div",{children:["key1: ",n.key2]})]}):null]})}var x=Object(n.memo)(O);var w=function(){var e=Object(n.useState)(""),o=Object(j.a)(e,2),t=o[0],r=o[1],c=Object(n.useCallback)((function(){console.log("callback1")}),[]),a=Object(n.useCallback)((function(){console.log("callback2")}),[]);return console.log("[render] Page MemoComponent with callback"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h4",{children:"Memo Component with callbacks"}),"input Name and inspect the output from console log:"," ",Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){r(e.currentTarget.value)}}),Object(l.jsx)(x,{name:t,callback:c}),Object(l.jsx)(x,{name:"static name",callback:a}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Now, we start to add a callback to the props, but react starts to render not updated peer Components again."}),Object(l.jsx)("code",{children:Object(l.jsx)(x,{name:t,callback:c})}),Object(l.jsx)("p",{children:"What Happened?"}),Object(l.jsx)("p",{children:"It turns out that react Component would create a new function and assign it to a different memory address."}),Object(l.jsxs)("p",{children:["No worries, ",Object(l.jsx)("code",{children:"React.useCallback"})," comes to the rescue. It will cache the function value and use it again instead of create a new one."]}),Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n  const callback2 = () => {\n    console.log("callback2");\n  };\n<MemoComponentWithCallback name="static name" callback={callback2} />\n       '})}),Object(l.jsxs)("p",{children:["Update",Object(l.jsx)("code",{children:"callback2"}),"function to below:"]}),Object(l.jsx)("div",{children:Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n\n    const callback2 = useCallback(() => {\n      console.log("callback2");\n    }, []);\n    <MemoComponentWithCallback name="static name" callback={callback2} />\n       '})})}),Object(l.jsx)("p",{children:'Or Yes, "static name" is not rendered when we need to render the peer Component now.'})]})};var f=function(){var e=Object(n.useState)(""),o=Object(j.a)(e,2),t=o[0],r=o[1],c=Object(n.useCallback)((function(){console.log("callback1")}),[]),a=Object(n.useCallback)((function(){console.log("callback2")}),[]),s=Object(n.useMemo)((function(){return{key1:"key1",key2:"key2"}}),[]);return console.log("[render] Page MemoComponent with an ojbect prop"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h4",{children:"Memo Component with an object prop"}),"input Name and inspect the output from console log:"," ",Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){r(e.currentTarget.value)}}),Object(l.jsx)(x,{name:t,callback:c}),Object(l.jsx)(x,{name:"static name",callback:a,objProp:s}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Now, we start to add a object to the props, but react starts to render not updated peer Components again, even if we put object prop inline without a new variable."}),Object(l.jsx)("div",{children:Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n        <MemoComponentWithCallback name={inputVal1}\n        callback={callback1}\n        objProp={{\n          key1: "key1",\n          key2: "key2",\n        }}/>\n        '})})}),Object(l.jsx)("p",{children:"What Happened?"}),Object(l.jsx)("p",{children:"It turns out that react Component would create a new object instance and assign it to a different memory address."}),Object(l.jsxs)("p",{children:["No worries, ",Object(l.jsx)("code",{children:"React.useMemo"})," comes to the rescue. It will cache the object value and use it again instead of create a new one."]}),Object(l.jsx)("p",{children:"Update codes to below:"}),Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n  const objectProp = useMemo(\n    () => ({\n      key1: "key1",\n      key2: "key2",\n    }),\n    []\n  );\n\n    <MemoComponentWithCallback\n            name="static name"\n            callback={callback2}\n            objProp={objectProp}\n          />\n       '})}),Object(l.jsx)("p",{children:'Or Yes, "static name" is not rendered when we need to render the peer Component now.'}),Object(l.jsxs)("p",{children:["Similarly, we have tools like \xa0",Object(l.jsx)("code",{children:"reselect"}),"\xa0 to work with more complicated application states to make react work as expected."]})]})},g=t(84),C=[{uid:"house1",name:"house 1",windows:[{uid:"house1-window1",color:"#ff0000"},{uid:"house1-window2",color:"#ff00ff"}],doors:[{uid:"house1-door1",name:"Hourse 1 Door 1",material:"iron"},{uid:"house1-door2",name:"Hourse 1 Door 2",material:"wood"}]},{uid:"house2",name:"house 2",windows:[{uid:"house2-window1",color:"#d0021b"},{uid:"house2-window2",color:"#2200ff"}],doors:[]},{uid:"house3",name:"house 3",windows:[{uid:"house3-window1",color:"#9013fe"},{uid:"house3-window2",color:"#f5a623"}],doors:[]},{uid:"house4",name:"house 4",windows:[{uid:"house4-window1",color:"#7ed321"},{uid:"house4-window2",color:"#ddcc00"},{uid:"house4-window3",color:"#50e3c2"}],doors:[]},{uid:"house5",name:"house 5",windows:[{uid:"house5-window1",color:"#4a90e2"},{uid:"house5-window2",color:"#417505"}],doors:[]}],v={pageProblem:C,pageProblemFixed:Object(g.cloneDeep)(C)},k=t(90);function y(e){var o=e.color,t=e.width,r=void 0===t?30:t,c=e.height,a=void 0===c?30:c,s=e.onChangeColor,i=e.debugName,d=Object(n.useState)(!1),u=Object(j.a)(d,2),b=u[0],m=u[1],h=Object(n.useRef)(null),p=null;b&&(p=Object(l.jsx)("div",{ref:h,style:{position:"absolute",top:35,zIndex:1},children:Object(l.jsx)(k.a,{color:o,onChangeComplete:function(e){s(e.hex)}})}));return function(e,o){Object(n.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&o&&o()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,o])}(h,Object(n.useCallback)((function(){m(!1)}),[])),console.log("[render] Memo Color Block ",i),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("div",{style:{backgroundColor:o,width:r,height:a},onClick:function(){m(!b)}}),p]})}var N=Object(n.memo)(y),P=["wood","iron","gold"];function M(e){var o=e.door,t=e.updateMaterial;return console.log("[render] Door ",o.name),Object(l.jsxs)("div",{children:[o.name," (made from",Object(l.jsx)("select",{value:o.material,onChange:function(e){var o=e.currentTarget.value;t(o)},children:P.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))}),")"]})}var H=Object(n.memo)(M);function W(e){var o=e.color,t=e.updateWindowColor,r=e.windowUid,c=e.houseUid,a=e.debugName,s=Object(n.useCallback)((function(e){return t(c,r,e)}),[c,r,t]);return Object(l.jsx)(N,{color:o,onChangeColor:s,debugName:a})}function T(e){var o=e.door,t=e.houseUid,r=e.updateDoorMaterial,c=Object(n.useCallback)((function(e){r(t,o.uid,e)}),[t,o.uid,r]);return Object(l.jsx)(H,{door:o,updateMaterial:c})}var U=Object(n.memo)(W);var I=function(e){var o=e.house,t=e.updateWindowColor,n=e.updateDoorMaterial,r=o.uid,c=o.name,a=o.windows,s=o.doors;return console.log("[render] render House ",c),Object(l.jsxs)("div",{style:{marginTop:12},children:[Object(l.jsxs)("div",{children:["House Name: ",c," "]}),Object(l.jsx)("div",{children:"House windows: "}),Object(l.jsx)("div",{style:{display:"flex"},children:a.map((function(e){return Object(l.jsx)("div",{style:{marginRight:10},children:Object(l.jsx)(U,{color:e.color,houseUid:r,updateWindowColor:t,debugName:e.uid,windowUid:e.uid})},e.uid)}))}),Object(l.jsx)("div",{children:s.map((function(e){return Object(l.jsx)("div",{style:{marginRight:10},children:Object(l.jsx)(T,{door:e,houseUid:r,updateDoorMaterial:n})},e.uid)}))})]})},F=t(14);function S(e){var o=Object(n.useState)(e),t=Object(j.a)(o,2),r=t[0],c=t[1];return{houses:r,updateWindowColor:Object(n.useCallback)((function(e,o,t){c((function(n){return n.map((function(n){if(n.uid===e){var r=n.windows.map((function(e){return e.uid===o?Object(F.a)(Object(F.a)({},e),{},{color:t}):e}));return Object(F.a)(Object(F.a)({},n),{},{windows:r})}return n}))}))}),[]),updateDoorMaterial:Object(n.useCallback)((function(e,o,t){c((function(n){return n.map((function(n){if(n.uid===e){var r=n.doors.map((function(e){return e.uid===o?Object(F.a)(Object(F.a)({},e),{},{material:t}):e}));return Object(F.a)(Object(F.a)({},n),{},{doors:r})}return n}))}))}),[])}}var D=function(){var e=S(v.pageProblem),o=e.houses,t=e.updateWindowColor,n=e.updateDoorMaterial,r=t.bind(null),c=n.bind(null);return console.log("[render] render BadContructedHouses "),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"BadContructedHouses "}),Object(l.jsx)("p",{children:"Update any window color, and inpect the console output"}),o.map((function(e){return Object(l.jsx)(I,{house:e,updateWindowColor:r,updateDoorMaterial:c},e.uid)}))]})};var R=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Problem"}),Object(l.jsx)("p",{children:'Your boss has 5 houses, which is built and maintained by a robot named "React". One day, your boss suprisingly found that, every time he wants to refurnish a house window to give it a new color, "React" would refurnish all windows in 5 houses, sometimes even all the Doors (if there are any). Such a waste! Now you are given a task to fix the software installed in the robot to ask him to do things more efficiently.'}),Object(l.jsx)("p",{children:'To solve this problem, we may need some understanding about how the robot "React" and memo works essentially:'}),Object(l.jsx)("div",{children:Object(l.jsx)(D,{})})]})},A=Object(n.memo)(I,(function(e,o){return Object.keys(e).every((function(t){return e[t]===o[t]}))}));var B=function(){var e=S(v.pageProblemFixed),o=e.houses,t=e.updateWindowColor,n=e.updateDoorMaterial;return console.log("[render] render ContructedHouses "),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"ContructedHouses "}),Object(l.jsx)("p",{children:"Update any window color or door material, and inpect the console output"}),o.map((function(e){return Object(l.jsx)(A,{house:e,updateWindowColor:t,updateDoorMaterial:n},e.uid)}))]})};var q={problem:{path:"/problem",Component:R,shortTitle:"Promblem"},problemFixed:{path:"/problem-fixed",Component:function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Problem Fixed"}),Object(l.jsx)("p",{children:'Now Robot "React" will only do the work necessary when boss requires it to. No more, no less. Much performant when constructing the houses, results in a faster and more scalable application and happier boss and users.'}),Object(l.jsx)("div",{children:Object(l.jsx)(B,{})})]})},shortTitle:"Promblem Fixed"},problemFixing:{path:"/problem-fixing",Component:function(){return console.log("[render] Page Address Problem "),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Problem Fixing"}),Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:Object(l.jsxs)("div",{children:["Let's wrap those some more Components to be make React PureComponent",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:"export default memo(ColorBlock);"}),Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:"export default memo(ComponentWithCallbackProp);"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:"/**\n * memo also accept a second argument for complex props comparision.\n * Don't forget to take advantage of immutation and shallow comparison\n */"})}),Object(l.jsxs)("code",{children:['\n                import { memo } from "react"; '," ",Object(l.jsx)("br",{}),'\n                import NormalHouse, { IProps } from "./NormalHouse";',Object(l.jsx)("br",{}),"\n                type IPropKeys = keyof IProps;\n              ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:"/**\n This is same as\n export default memo(NormalHouse);\n */"})}),"\n                export default memo(NormalHouse, (p: IProps, q: IProps) => {  ",Object(l.jsx)("br",{}),"\n                  const isEqual = Object.keys(p).every(  ",Object(l.jsx)("br",{}),"\n                    (propKey: string) => p[propKey as IPropKeys] === q[propKey as IPropKeys]  ",Object(l.jsx)("br",{}),"\n                  );  ",Object(l.jsx)("br",{}),"\n                  return isEqual;  ",Object(l.jsx)("br",{}),"\n                });\n                "]})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("div",{children:["Abstract a custom hook ",Object(l.jsx)("code",{children:"useHouses"}),"to reuse on different pages",Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n                import { useState, useCallback } from "react";\n                import { IHouse } from "models";\n\n                export function useHouses(initialHouses: IHouse[]) {\n                  const [housesState, setHousesAppState] = useState<IHouse[]>(initialHouses);\n\n                  const updateWindowColor = (\n                    houseUid: string,\n                    windowUid: string,\n                    newColor: string\n                  ) => {\n                    // Functional updates\n                    // If the new state is computed using the previous state,\n                    // you can pass a function to setState.\n                    // The function will receive the previous value,\n                    // and return an updated value.\n                    setHousesAppState((previousHousesState) => {\n                      const newHouses = previousHousesState.map((h) => {\n                        if (h.uid === houseUid) {\n                          const newWindows = h.windows.map((w) => {\n                            if (w.uid === windowUid) {\n                              return {\n                                ...w,\n                                color: newColor,\n                              };\n                            }\n                            return w;\n                          });\n\n                          return {\n                            ...h,\n                            windows: newWindows,\n                          };\n                        }\n                        return h;\n                      });\n                      return newHouses;\n                    });\n                  };\n\n                  const updateWindowColorCallback = useCallback(updateWindowColor, [\n                    setHousesAppState,\n                  ]);\n\n                  return {\n                    houses: housesState,\n                    updateWindowColor: updateWindowColorCallback,\n                  };\n                }\n\n                '})})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("div",{children:["You may need to create some wrapper Component to memo array items:",Object(l.jsx)("br",{}),"eg: memo `ColorBlock` for array items:",Object(l.jsx)("code",{children:Object(l.jsx)("pre",{children:'\n                import { IHouse } from "models";\n                import ColorBlock from "core-ui/MemoColorBlock";\n                import { useCallback, memo } from "react";\n\n                export interface IProps {\n                  house: IHouse;\n                  updateWindowColor: (\n                    houseUid: string,\n                    windowUid: string,\n                    newColor: string\n                  ) => void;\n                }\n\n                export interface IMemoColorProps {\n                  color: string;\n                  houseUid: string;\n                  updateWindowColor: (\n                    houseUid: string,\n                    windowUid: string,\n                    newColor: string\n                  ) => void;\n                  windowUid: string;\n                  debugName: string;\n                }\n\n                function ColorBlockWrapper(props: IMemoColorProps) {\n                  const { color, updateWindowColor, windowUid, houseUid, debugName } = props;\n\n                  const onChangeColorCallback = useCallback(\n                    (newColor: string) => updateWindowColor(houseUid, windowUid, newColor),\n                    [houseUid, windowUid, updateWindowColor]\n                  );\n                  return (\n                    <ColorBlock\n                      color={color}\n                      onChangeColor={onChangeColorCallback}\n                      debugName={debugName}\n                    />\n                  );\n                }\n\n                const MemoColorBlock = memo(ColorBlockWrapper);\n\n                function NormalHouse(props: IProps) {\n                  const { house, updateWindowColor } = props;\n                  const { uid: houseUid, name, windows } = house;\n                  console.log("[render] render House ", name);\n                  return (\n                    <>\n                      <div>House Name: {name} </div>\n                      <div>House windows: </div>\n                      <div style={{ display: "flex" }}>\n                        {windows.map((window) => {\n                          return (\n                            <div key={window.uid} style={{ marginRight: 10 }}>\n                              <MemoColorBlock\n                                color={window.color}\n                                houseUid={houseUid}\n                                updateWindowColor={updateWindowColor}\n                                debugName={window.uid}\n                                windowUid={window.uid}\n                              />\n                            </div>\n                          );\n                        })}\n                      </div>\n                    </>\n                  );\n                }\n\n                export default NormalHouse;\n                '})})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("p",{children:['This should be cover most of the cases. Go to "/problem-fixed" to see the result.',Object(l.jsx)("br",{})," Feel free to download the source codes and play it on your local.",Object(l.jsx)("br",{})," Feel free to contact me for any doubt."]})})]})]})},shortTitle:"Address Promblems"},addNewFeatureDoor:{path:"/add-new-feature-door",Component:function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Add New Feature Door"}),Object(l.jsx)("p",{children:"Your boss think the houses which only has windows may be boring . You are given a task to upgrade the robot to make it be able to build and maintain doors in houses."}),Object(l.jsx)("p",{children:"After some work, now we have added 2 doors to house 1. We also has the capicity to add more doors by merely updating the application state. we can see that whenever we update any door or window, only the Component and its direct ancestor Components are rendered."}),Object(l.jsx)("p",{children:"Happy boss, happy life!"}),Object(l.jsx)("div",{children:Object(l.jsx)(B,{})})]})},shortTitle:"Add a new feature"},quiz:{path:"/quiz",Component:function(){return console.log("[render] Page Quiz"),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h3",{children:"Quiz: Add a New Feature"}),Object(l.jsx)("p",{children:"Try to download the source code and play with it by adding a new feature to the house. It can be Roof? Wall? Location? Or anything you like."}),Object(l.jsx)("p",{children:"Happy Coding! Sky is the limit!"})]})},shortTitle:"Quiz"},contactMe:{path:"/contact-me",Component:function(){return console.log("[render] Page Contact Me "),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Contact Me"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{action:"https://formspree.io/moqqobrb",method:"POST",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("label",{htmlFor:"contact-form-name",children:["Your Name ",Object(l.jsx)("span",{className:"text-danger",children:"*"})]}),Object(l.jsx)("input",{type:"text",name:"name",id:"contact-form-name",className:"form-control",required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"contact-form-email",children:"Your Email Address"}),Object(l.jsx)("input",{type:"email",name:"email",id:"contact-form-email",className:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("label",{htmlFor:"contact-form-message",children:["Message ",Object(l.jsx)("span",{className:"text-danger",children:"*"})]}),Object(l.jsx)("textarea",{name:"message",rows:6,id:"contact-form-message",className:"form-control",required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("button",{type:"submit",className:"form-control",children:"Submit"})})]})})]})},shortTitle:"Contact me"},definitions:{path:"/definitions",Component:u,shortTitle:"Definitions"},page1:{path:"/page1",Component:m,shortTitle:"Page1: React without memo"},page2:{path:"/page2",Component:p,shortTitle:"Page2: React memo / PureComponent"},page3:{path:"/page3",Component:w,shortTitle:"Page3: React memo with callback function"},page4:{path:"/page4",Component:f,shortTitle:"Page4: React memo with object prop"},home:{path:"/",Component:function(){return Object(l.jsx)("div",{})},shortTitle:"Home"},souceCode:{path:"https://github.com/sixtyseven/advance_react_memo",Component:null,shortTitle:"GitHub"}},Y={title:"An Advanced React Memo Tutorial",blocks:[{title:"Problem",items:[q.problem]},{title:"Training Agenda",items:[q.definitions,q.page1,q.page2,q.page3,q.page4]},{title:"Fix The Problem",items:[q.problemFixing,q.problemFixed,q.addNewFeatureDoor,q.quiz]},{title:"Souce code",items:[q.souceCode]},{title:"Contact me",items:[q.contactMe]}]};function z(){return Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)("h3",{className:"h3",children:Y.title}),Y.blocks.map((function(e){return Object(l.jsxs)("div",{className:"nav-block",children:[Object(l.jsx)("h4",{className:"h4",children:e.title}),Object(l.jsx)("ul",{children:e.items.map((function(e){var o,t=e.path,n=e.shortTitle;return o=t.startsWith("https://")||t.startsWith("http://")?Object(l.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n}):Object(l.jsx)(s.b,{to:t,children:n}),Object(l.jsx)("li",{children:o},t)}))})]},e.title)}))]})}function E(){return console.log("[render] App "),Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("div",{className:"left-side",children:Object(l.jsx)(z,{})}),Object(l.jsx)("div",{className:"right-side",children:Object(l.jsx)(i.c,{children:Object.keys(q).map((function(e){var o=q[e],t=o.path,n=o.Component;return n?Object(l.jsx)(i.a,{path:t,children:Object(l.jsx)(n,{})},t):null}))})})]})})}var K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,210)).then((function(o){var t=o.getCLS,n=o.getFID,r=o.getFCP,c=o.getLCP,a=o.getTTFB;t(e),n(e),r(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),K()},95:function(e,o,t){},96:function(e,o,t){}},[[208,1,2]]]);
//# sourceMappingURL=main.f513c876.chunk.js.map