(()=>{var n={28:(n,t,e)=>{"use strict";e.d(t,{Z:()=>d});var i=e(537),o=e.n(i),r=e(645),A=e.n(r)()(o());A.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap);"]),A.push([n.id,'html {\n  box-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  font-family: Rubik, system-ui, Arial, sans-serif;\n  background-color: inherit;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\ndiv#root {\n  min-height: 100dvh;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 60px 1fr;\n  grid-template-areas: "header header" "sidebar main";\n}\nbutton.settings-button {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  right: 10px;\n  top: 15px;\n  z-index: 12;\n}\nbutton.settings-button > svg {\n  fill: white;\n}\ndiv.settings-backdrop {\n  width: 100dvw;\n  height: 100dvh;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 13;\n  display: grid;\n  place-items: center;\n}\ndiv.settings-div {\n  outline: 1px solid;\n  padding: 50px;\n  background-color: white;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n}\ndiv.settings-div > button {\n  outline: 1px solid;\n  padding: 15px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: red;\n  color: white;\n}\ndiv.ham-menu,\ndiv.sidebar > button#x-button {\n  display: none;\n}\nheader {\n  grid-area: header;\n\n  background-color: skyblue;\n  color: white;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  position: relative;\n}\ndiv.sidebar {\n  grid-area: sidebar;\n  background-color: azure;\n  padding: 10px;\n  border-right: 1px solid;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\ndiv.sidebar > button,\ndiv.new-list-div {\n  outline: 1px solid gray;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: rgb(185, 210, 219);\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.5s;\n  position: relative;\n  display: flex;\n}\ndiv.sidebar > button:not(button:nth-child(1)) {\n  padding-left: 15px;\n}\ndiv.sidebar > button:hover {\n  background-color: skyblue;\n}\ndiv.sidebar > button.active {\n  background-color: skyblue;\n}\ndiv.sidebar > button:nth-child(1) {\n  background-color: rgb(94, 158, 94);\n  height: 40px;\n  display: block;\n}\ndiv.sidebar > button > svg {\n  width: 20px;\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 10px);\n  fill: darkred;\n}\ndiv.new-list-div {\n  overflow: hidden;\n  height: 40px;\n  background-color: transparent;\n  padding: 0;\n}\ndiv.new-list-div > input {\n  width: calc(100% - 20px);\n  padding-left: 10px;\n}\ndiv.new-list-div > input:focus {\n  outline: none;\n}\ndiv.new-list-div > button {\n  display: grid;\n  place-items: center;\n  font-size: large;\n  width: 30px;\n  background-color: rgb(94, 158, 94);\n  color: white;\n}\nmain {\n  grid-area: main;\n}\n/* To-do List Styles */\n.todo-list {\n  width: min(90%, 750px);\n  padding: 10px;\n  display: grid;\n  place-items: center;\n  margin: auto;\n}\n.todo-list > h2 {\n  width: 100%;\n  margin-bottom: 20px;\n  background-color: cornflowerblue;\n  color: white;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.todo-list > h2 > p {\n  font-size: small;\n  color: rgb(230, 230, 230);\n}\n.todo-item {\n  display: grid;\n  align-items: center;\n  outline: 1px solid;\n  padding: 10px;\n  width: 100%;\n  grid-template-columns: 30px 1fr 40px;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  position: relative;\n  padding-left: 20px;\n}\n.todo-item > h3 {\n  line-height: 200%;\n}\n.todo-item > div.priority {\n  position: absolute;\n  width: 5px;\n  height: 100%;\n  outline: 1px solid black;\n}\n.todo-item[data-priority="low"] > div.priority {\n  background-color: lightgreen;\n}\n.todo-item[data-priority="medium"] > div.priority {\n  background-color: purple;\n}\n.todo-item[data-priority="high"] > div.priority {\n  background-color: red;\n}\n.todo-item > div.checkbox {\n  display: grid;\n  place-content: center;\n  border: 1px solid black;\n  width: 10px;\n  height: 10px;\n  border-radius: 20px;\n  padding: 10px;\n}\n.todo-item > div.checkbox.checked::after {\n  content: "\\2713";\n  font-size: 20px;\n  background-color: transparent;\n}\n.todo-item:has(.checked) {\n  background-color: lightgray;\n}\n.todo-item:has(.checked) > h3 {\n  text-decoration: line-through;\n  text-decoration-thickness: 4px;\n}\n.todo-item:has(.checked) > div.priority {\n  background-color: black;\n}\n.todo-item > svg {\n  width: 35px;\n  justify-self: self-end;\n  fill: darkred;\n  cursor: pointer;\n}\n/* New Task Styles */\nbutton.new-list-item-button {\n  background-color: rgb(37, 151, 142);\n  color: white;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\nbutton.new-list-item-button,\ndiv.new-list-item {\n  width: 100%;\n  height: 40px;\n  outline: 1px solid;\n}\ndiv.new-list-item {\n  display: grid;\n  grid-template-columns: 90fr 10fr 40px;\n}\ninput.new-list-item-input {\n  height: 100%;\n  padding: 10px;\n}\ninput.new-list-item-input:focus {\n  outline: none;\n}\ndiv.new-list-item > select {\n  height: 100%;\n  text-transform: uppercase;\n  border-left: 1px solid;\n  background-color: rgb(37, 151, 142);\n  color: white;\n}\ndiv.new-list-item > select:focus {\n  outline: none;\n}\ndiv.new-list-item > svg {\n  flex: 1;\n  border-left: 1px solid white;\n  fill: white;\n  background-color: rgb(37, 151, 142);\n  cursor: pointer;\n  height: 100%;\n}\n/* Edit List Item Styles */\n.edit-list-item-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  display: grid;\n  place-items: center;\n}\nform.edit-list-item-form {\n  position: relative;\n  background-color: white;\n  width: min(90dvw, 700px);\n  min-height: 50%;\n  max-height: 70%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border-radius: 10px;\n  gap: 20px;\n}\nform.edit-list-item-form > *:focus {\n  outline: none;\n}\nform.edit-list-item-form > input:nth-child(1) {\n  padding: 10px;\n  border-bottom: 1px solid;\n}\nform.edit-list-item-form > textarea {\n  background-color: rgb(235, 235, 235);\n  padding: 10px;\n  height: 300px;\n  resize: none;\n  border-radius: 10px;\n}\nform.edit-list-item-form > div.priority-div,\ndiv.status-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  width: min(100%, 400px);\n}\nform.edit-list-item-form > div.priority-div > h4,\ndiv.status-div > h4 {\n  grid-column: 1/4;\n  justify-self: start;\n}\nform.edit-list-item-form > button {\n  background-color: rgb(0, 70, 160);\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n}\nform.edit-list-item-form > button#close-button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: red;\n  font-weight: 900;\n}\nform.edit-list-item-form > div > div {\n  display: flex;\n  gap: 10px;\n}\nform.edit-list-item-form > div > div > input {\n  accent-color: rgb(0, 70, 160);\n}\nform.edit-list-item-form > div > div > input[id="low"] {\n  accent-color: green;\n}\nform.edit-list-item-form > div > div > input[id="medium"] {\n  accent-color: purple;\n}\nform.edit-list-item-form > div > div > input[id="high"] {\n  accent-color: red;\n}\n@media screen and (max-width: 500px) {\n  div#root {\n    grid-template-areas: "header" "main";\n    grid-template-rows: 60px 1fr;\n    grid-template-columns: 1fr;\n  }\n  header {\n    justify-content: center;\n  }\n  div.ham-menu {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    left: 10px;\n  }\n  div.ham-menu > div {\n    width: 100%;\n    height: 25%;\n    background-color: white;\n  }\n  div.sidebar > button#x-button {\n    display: grid;\n  }\n  div.sidebar {\n    z-index: 11;\n    position: absolute;\n    width: 60%;\n    min-height: 100%;\n    padding: 60px 20px;\n    transform: translateX(-100%);\n    transition: transform 0.5s;\n  }\n  div.sidebar > button#x-button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 30px;\n    height: 30px;\n    background-color: red;\n    color: white;\n    display: grid;\n    place-items: center;\n    padding: 5px;\n    border-radius: 1px;\n  }\n  button.new-list-item-button {\n    z-index: 10;\n    position: fixed;\n    border-radius: 50%;\n    width: 70px;\n    height: 70px;\n    right: 10px;\n    bottom: 10px;\n    overflow: hidden;\n  }\n  button.new-list-item-button::after {\n    content: "+";\n    position: absolute;\n    inset: 0;\n    display: grid;\n    place-items: center;\n    font-size: 40px;\n  }\n  .todo-list {\n    padding-bottom: 100px;\n  }\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAEA;EACE,sBAAsB;AACxB;AACA;;;EAGE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,SAAS;EACT,gDAAgD;EAChD,yBAAyB;EACzB,iBAAiB;EACjB,wCAAwC;AAC1C;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,gCAAgC;EAChC,4BAA4B;EAC5B,mDAAmD;AACrD;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,YAAY;AACd;AACA;;EAEE,aAAa;AACf;AACA;EACE,iBAAiB;;EAEjB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;;EAEE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,YAAY;EACZ,eAAe;EACf,iCAAiC;EACjC,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kCAAkC;EAClC,YAAY;EACZ,cAAc;AAChB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,6BAA6B;EAC7B,UAAU;AACZ;AACA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,kCAAkC;EAClC,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA,sBAAsB;AACtB;EACE,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,WAAW;EACX,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,oCAAoC;EACpC,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,wBAAwB;AAC1B;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,6BAA6B;EAC7B,8BAA8B;AAChC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,eAAe;AACjB;AACA,oBAAoB;AACpB;EACE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;EACtB,mCAAmC;EACnC,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,OAAO;EACP,4BAA4B;EAC5B,WAAW;EACX,mCAAmC;EACnC,eAAe;EACf,YAAY;AACd;AACA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,eAAe;EACf,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,wBAAwB;AAC1B;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;AACA;;EAEE,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,uBAAuB;AACzB;AACA;;EAEE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,iBAAiB;AACnB;AACA;EACE;IACE,oCAAoC;IACpC,4BAA4B;IAC5B,0BAA0B;EAC5B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,UAAU;EACZ;EACA;IACE,WAAW;IACX,WAAW;IACX,uBAAuB;EACzB;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,0BAA0B;EAC5B;EACA;IACE,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;EAClB;EACA;IACE,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,aAAa;IACb,mBAAmB;IACnB,eAAe;EACjB;EACA;IACE,qBAAqB;EACvB;AACF",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap");\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  font-family: Rubik, system-ui, Arial, sans-serif;\n  background-color: inherit;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\ndiv#root {\n  min-height: 100dvh;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 60px 1fr;\n  grid-template-areas: "header header" "sidebar main";\n}\nbutton.settings-button {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  right: 10px;\n  top: 15px;\n  z-index: 12;\n}\nbutton.settings-button > svg {\n  fill: white;\n}\ndiv.settings-backdrop {\n  width: 100dvw;\n  height: 100dvh;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 13;\n  display: grid;\n  place-items: center;\n}\ndiv.settings-div {\n  outline: 1px solid;\n  padding: 50px;\n  background-color: white;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n}\ndiv.settings-div > button {\n  outline: 1px solid;\n  padding: 15px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: red;\n  color: white;\n}\ndiv.ham-menu,\ndiv.sidebar > button#x-button {\n  display: none;\n}\nheader {\n  grid-area: header;\n\n  background-color: skyblue;\n  color: white;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  position: relative;\n}\ndiv.sidebar {\n  grid-area: sidebar;\n  background-color: azure;\n  padding: 10px;\n  border-right: 1px solid;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\ndiv.sidebar > button,\ndiv.new-list-div {\n  outline: 1px solid gray;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: rgb(185, 210, 219);\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.5s;\n  position: relative;\n  display: flex;\n}\ndiv.sidebar > button:not(button:nth-child(1)) {\n  padding-left: 15px;\n}\ndiv.sidebar > button:hover {\n  background-color: skyblue;\n}\ndiv.sidebar > button.active {\n  background-color: skyblue;\n}\ndiv.sidebar > button:nth-child(1) {\n  background-color: rgb(94, 158, 94);\n  height: 40px;\n  display: block;\n}\ndiv.sidebar > button > svg {\n  width: 20px;\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 10px);\n  fill: darkred;\n}\ndiv.new-list-div {\n  overflow: hidden;\n  height: 40px;\n  background-color: transparent;\n  padding: 0;\n}\ndiv.new-list-div > input {\n  width: calc(100% - 20px);\n  padding-left: 10px;\n}\ndiv.new-list-div > input:focus {\n  outline: none;\n}\ndiv.new-list-div > button {\n  display: grid;\n  place-items: center;\n  font-size: large;\n  width: 30px;\n  background-color: rgb(94, 158, 94);\n  color: white;\n}\nmain {\n  grid-area: main;\n}\n/* To-do List Styles */\n.todo-list {\n  width: min(90%, 750px);\n  padding: 10px;\n  display: grid;\n  place-items: center;\n  margin: auto;\n}\n.todo-list > h2 {\n  width: 100%;\n  margin-bottom: 20px;\n  background-color: cornflowerblue;\n  color: white;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.todo-list > h2 > p {\n  font-size: small;\n  color: rgb(230, 230, 230);\n}\n.todo-item {\n  display: grid;\n  align-items: center;\n  outline: 1px solid;\n  padding: 10px;\n  width: 100%;\n  grid-template-columns: 30px 1fr 40px;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  position: relative;\n  padding-left: 20px;\n}\n.todo-item > h3 {\n  line-height: 200%;\n}\n.todo-item > div.priority {\n  position: absolute;\n  width: 5px;\n  height: 100%;\n  outline: 1px solid black;\n}\n.todo-item[data-priority="low"] > div.priority {\n  background-color: lightgreen;\n}\n.todo-item[data-priority="medium"] > div.priority {\n  background-color: purple;\n}\n.todo-item[data-priority="high"] > div.priority {\n  background-color: red;\n}\n.todo-item > div.checkbox {\n  display: grid;\n  place-content: center;\n  border: 1px solid black;\n  width: 10px;\n  height: 10px;\n  border-radius: 20px;\n  padding: 10px;\n}\n.todo-item > div.checkbox.checked::after {\n  content: "\\2713";\n  font-size: 20px;\n  background-color: transparent;\n}\n.todo-item:has(.checked) {\n  background-color: lightgray;\n}\n.todo-item:has(.checked) > h3 {\n  text-decoration: line-through;\n  text-decoration-thickness: 4px;\n}\n.todo-item:has(.checked) > div.priority {\n  background-color: black;\n}\n.todo-item > svg {\n  width: 35px;\n  justify-self: self-end;\n  fill: darkred;\n  cursor: pointer;\n}\n/* New Task Styles */\nbutton.new-list-item-button {\n  background-color: rgb(37, 151, 142);\n  color: white;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\nbutton.new-list-item-button,\ndiv.new-list-item {\n  width: 100%;\n  height: 40px;\n  outline: 1px solid;\n}\ndiv.new-list-item {\n  display: grid;\n  grid-template-columns: 90fr 10fr 40px;\n}\ninput.new-list-item-input {\n  height: 100%;\n  padding: 10px;\n}\ninput.new-list-item-input:focus {\n  outline: none;\n}\ndiv.new-list-item > select {\n  height: 100%;\n  text-transform: uppercase;\n  border-left: 1px solid;\n  background-color: rgb(37, 151, 142);\n  color: white;\n}\ndiv.new-list-item > select:focus {\n  outline: none;\n}\ndiv.new-list-item > svg {\n  flex: 1;\n  border-left: 1px solid white;\n  fill: white;\n  background-color: rgb(37, 151, 142);\n  cursor: pointer;\n  height: 100%;\n}\n/* Edit List Item Styles */\n.edit-list-item-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  display: grid;\n  place-items: center;\n}\nform.edit-list-item-form {\n  position: relative;\n  background-color: white;\n  width: min(90dvw, 700px);\n  min-height: 50%;\n  max-height: 70%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border-radius: 10px;\n  gap: 20px;\n}\nform.edit-list-item-form > *:focus {\n  outline: none;\n}\nform.edit-list-item-form > input:nth-child(1) {\n  padding: 10px;\n  border-bottom: 1px solid;\n}\nform.edit-list-item-form > textarea {\n  background-color: rgb(235, 235, 235);\n  padding: 10px;\n  height: 300px;\n  resize: none;\n  border-radius: 10px;\n}\nform.edit-list-item-form > div.priority-div,\ndiv.status-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  width: min(100%, 400px);\n}\nform.edit-list-item-form > div.priority-div > h4,\ndiv.status-div > h4 {\n  grid-column: 1/4;\n  justify-self: start;\n}\nform.edit-list-item-form > button {\n  background-color: rgb(0, 70, 160);\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n}\nform.edit-list-item-form > button#close-button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: red;\n  font-weight: 900;\n}\nform.edit-list-item-form > div > div {\n  display: flex;\n  gap: 10px;\n}\nform.edit-list-item-form > div > div > input {\n  accent-color: rgb(0, 70, 160);\n}\nform.edit-list-item-form > div > div > input[id="low"] {\n  accent-color: green;\n}\nform.edit-list-item-form > div > div > input[id="medium"] {\n  accent-color: purple;\n}\nform.edit-list-item-form > div > div > input[id="high"] {\n  accent-color: red;\n}\n@media screen and (max-width: 500px) {\n  div#root {\n    grid-template-areas: "header" "main";\n    grid-template-rows: 60px 1fr;\n    grid-template-columns: 1fr;\n  }\n  header {\n    justify-content: center;\n  }\n  div.ham-menu {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    left: 10px;\n  }\n  div.ham-menu > div {\n    width: 100%;\n    height: 25%;\n    background-color: white;\n  }\n  div.sidebar > button#x-button {\n    display: grid;\n  }\n  div.sidebar {\n    z-index: 11;\n    position: absolute;\n    width: 60%;\n    min-height: 100%;\n    padding: 60px 20px;\n    transform: translateX(-100%);\n    transition: transform 0.5s;\n  }\n  div.sidebar > button#x-button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 30px;\n    height: 30px;\n    background-color: red;\n    color: white;\n    display: grid;\n    place-items: center;\n    padding: 5px;\n    border-radius: 1px;\n  }\n  button.new-list-item-button {\n    z-index: 10;\n    position: fixed;\n    border-radius: 50%;\n    width: 70px;\n    height: 70px;\n    right: 10px;\n    bottom: 10px;\n    overflow: hidden;\n  }\n  button.new-list-item-button::after {\n    content: "+";\n    position: absolute;\n    inset: 0;\n    display: grid;\n    place-items: center;\n    font-size: 40px;\n  }\n  .todo-list {\n    padding-bottom: 100px;\n  }\n}\n'],sourceRoot:""}]);const d=A},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(i)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(A[s]=!0)}for(var a=0;a<n.length;a++){var l=[].concat(n[a]);i&&A[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:n=>{"use strict";n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(o," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},649:(n,t)=>{var e,i,o,r,A;A=/[-+,> ]/,o=i=function(n,t){"use strict";A=t||A;var e,o=/(?:\s*([-+ ,<>]))?\s*(\.|!\.?|#)?([-\w\u00A0-\uFFFF%$|]+)?(?:\[([^\]=]+)=?['"]?([^\]'"]*)['"]?\])?/g,r=!1,d="object"==typeof(n=n||document).createElement;function s(t,e){t.appendChild(n.createTextNode(e))}function a(t){var i,l,c,p,u,m=arguments,h=m[0];function C(){u&&p&&u!=p&&(p==t&&(i||(i=A.test(b)&&n.createDocumentFragment()))?i:p).insertBefore(u,c||null)}for(var g=0;g<m.length;g++){var b=m[g];if("object"==typeof b){if(l=!1,b instanceof Array){u=n.createDocumentFragment();for(var f=0;f<b.length;f++)u.appendChild(a(b[f]));b=u}if(b.nodeType)u=b,C(),p=b,c=0;else for(var f in b)u[f]=b[f]}else if(l)l=!1,s(u,b);else{g<1&&(t=null),l=!0;var B=b.replace(o,(function(i,o,A,l,h,f){o&&(C(),"-"==o||"+"==o?(p=(c=u||p).parentNode,u=null,"+"==o&&(c=c.nextSibling)):("<"==o?p=u=(u||p).parentNode:(","==o?p=t:u&&(p=u),u=null),c=0),u&&(p=u));var B=!A&&l;if(B||!u&&(A||h))if("$"==B)s(p,m[++g]);else{B=B||a.defaultTag;var E=d&&m[g+1]&&m[g+1].name;E&&(B="<"+B+' name="'+E+'">'),u=r&&~(e=B.indexOf("|"))?n.createElementNS(r[B.slice(0,e)],B.slice(e+1)):n.createElement(B)}if(A)if("$"==l&&(l=m[++g]),"#"==A)u.id=l;else{var v,x=u.className,k=x&&(" "+x+" ").replace(" "+l+" "," ");"."==A?u.className=x?(k+l).substring(1):l:"!"==b?d?a("div",u,"<").innerHTML="":(v=u.parentNode)&&v.removeChild(u):(k=k.substring(1,k.length-1))!=x&&(u.className=k)}if(h)if("$"==f&&(f=m[++g]),"style"==h)u.style.cssText=f;else{var w="!"==h.charAt(0)?(h=h.substring(1))&&"removeAttribute":"setAttribute";f=""===f?h:f,r&&~(e=h.indexOf("|"))?u[w+"NS"](r[h.slice(0,e)],h.slice(e+1),f):u[w](h,f)}return""}));if(B)throw new SyntaxError("Unexpected char "+B+" in "+b);C(),p=h=u||p}}return t&&i&&t.appendChild(i),h}return a.addNamespace=function(t,e){n.createElementNS?(r||(r={}))[t]=e:n.namespaces.add(t,e)},a.defaultTag="div",a.forDocument=i,a},r=r||o,void 0===(e=function(){return r()}.apply(t,[]))||(n.exports=e)},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var r={},A=[],d=0;d<n.length;d++){var s=n[d],a=i.base?s[0]+i.base:s[0],l=r[a]||0,c="".concat(a," ").concat(l);r[a]=l+1;var p=e(c),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var m=o(u,i);i.byIndex=d,t.splice(d,0,{identifier:c,updater:m,references:1})}A.push(c)}return A}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<r.length;A++){var d=e(r[A]);t[d].references--}for(var s=i(n,o),a=0;a<r.length;a++){var l=e(r[a]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},534:n=>{n.exports=function(n){var t="<svg xmlns='http://www.w3.org/2000/svg'>"+n+"</svg>",e=(new DOMParser).parseFromString(t,"text/xml").documentElement.firstChild;return document.importNode(e,!0),e}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return n[i](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";var n=e(379),t=e.n(n),i=e(795),o=e.n(i),r=e(569),A=e.n(r),d=e(565),s=e.n(d),a=e(216),l=e.n(a),c=e(589),p=e.n(c),u=e(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=A().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const h=function(n,t="apc"){const e=document.querySelector("#root");if("apc"===t)document.querySelector("#root").appendChild(n);else if("rpc"===t)for(;e.children.length>2;)e.removeChild(e.childNodes[2])},C=Symbol("events");class g extends Error{}function b(n,t){return new g(`.${n}: ${t}`)}const f=n=>"function"==typeof n,B=n=>null!=n&&(n=>"string"==typeof n)(n)||Number.isFinite(n)||(n=>"symbol"==typeof n)(n),E=Object.assign(Object.create(null),{on(n,t){if(!B(n))throw b("on","requires event name");if(!f(t))throw b("on","requires callback");const e=this[C];return(e.has(n)?e.get(n):e.set(n,new Set).get(n)).add(t),this},off(n,t){if(!B(n))throw b("off","requires event name");const e=this[C];if(!e.has(n))return this;if(t){const i=e.get(n);return i.has(t)&&i.delete(t),0===i.size&&e.delete(n),this}return e.delete(n),this},once(n,t){if(!B(n))throw b("once","requires an event name");if(!f(t))throw b("once","requires a function");const e=(...i)=>{this.off(n,e),t(...i)};return this.on(n,e)},emit(n,t){if(!B(n))throw b("emit","requires an event name");const e=this[C];if(!e.has(n))return this;const i=e.get(n);if(!i.size)return this;const o=arguments,r=o.length;if(r<=2)return((n,t)=>{for(const e of n)e(t)})(i,t),this;let A=1;const d=new Array(r-1);for(;A<r;A+=1)d[A-1]=o[A];return((n,t)=>{for(const e of n)e(...t)})(i,d),this},listeners(n){const t=this[C];return void 0!==n?t.has(n)?Array.from(t.get(n)):[]:Array.from(t.values()).map((n=>Array.from(n))).flat()},names(){const n=this[C];return Array.from(n.keys())},size(n){const t=this[C];return B(n)?t.has(n)?t.get(n).size:0:Array.from(t.values()).reduce(((n,t)=>n+t.size),0)},clear(n){const t=this[C];return B(n)?(t.has(n)&&t.get(n).clear(),this):(this[C].clear(),this)}});E.addListener=E.subscribe=E.bind=E.on,E.removeListender=E.unsubscribe=E.unbind=E.off,E.trigger=E.dispatch=E.emit;const v=E,x=function(){const n=function(){return x()};return n[C]=new Map,n.__proto__=v,n},k=x();var w=e(649),y=e.n(w),I=e(534),L=e.n(I);function S(n){const t=y()("main");return y()(t,function(n){const t=y()("div.todo-list");y()(t,"h2",n.title);const e=y()("button.new-list-item-button","+ New Task");return y()(t,e),e.onclick=()=>{e.disabled=!0,y()(t,function(){const n=()=>{""!==i.value&&k.emit("updateList","newItem",{title:i.value,priority:e.value,desc:""}),k.emit("refreshTodoList")},t=y()("div.new-list-item"),e=y()("select");y()(e,"option","low"),y()(e,"option","medium"),y()(e,"option","high");const i=y()("input.new-list-item-input",{placeholder:"Enter a task here..."});i.addEventListener("keydown",(t=>{"Enter"===t.key&&n()}));const o=L()('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add Task</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>');return o.addEventListener("click",n),y()(t,i),y()(t,e),y()(t,o),t}()),document.querySelector("input.new-list-item-input").focus()},n.list.forEach(((n,e)=>{y()(t,function(n,t){const e=y()("div.todo-item");e.setAttribute("data-priority",n.priority);const i=y()("div.checkbox");n.checked&&i.classList.add("checked"),i.onclick=()=>{i.classList.toggle("checked"),k.emit("updateList","checkItem",t)};const o=L()('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove Task</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>');o.onclick=()=>{k.emit("updateList","deleteItem",t)};const r=y()("h3",n.title);y()(e,i),y()(e,r),y()(e,"div.priority"),y()(e,o),r.ondblclick=()=>{k.emit("showEditItemDiv",n,t)};let A=0;return r.addEventListener("touchstart",(function(e){e.preventDefault();let i=(new Date).getTime();i-A<200&&k.emit("showEditItemDiv",n,t),A=i})),e}(n,e))})),setTimeout((()=>{const n=y()("p","(double tap to edit)");document.querySelector("div.todo-list > h2").appendChild(n)}),0),t}(n)),t}function Y(n,t){const e=y()("div.sidebar"),i=y()("button","+ New List");i.onclick=()=>{i.disabled=!0,y()(e,function(){const n=y()("div.new-list-div"),t=y()("input");t.onkeydown=n=>{"Enter"===n.key&&e.click()};const e=y()("button#add-new-list","+");return e.onclick=()=>{y()(n,"!"),""!==t.value&&k.emit("updateList","newList",t.value)},y()(n,t),y()(n,e),n}()),document.querySelector("div.new-list-div > input").focus()},y()(e,i),n.forEach(((n,i)=>{y()(e,function(n,t,e){const i=y()("button",n.title);i.setAttribute("data-index",t),t===e&&i.classList.add("active"),i.onclick=()=>{k.emit("updateList","changeCurrentActiveList",t)};const o=L()('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove List</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>');return o.onclick=n=>{k.emit("updateList","deleteList",t),n.stopPropagation()},y()(i,o),i}(n,i,t))}));const o=y()("button#x-button","X");return o.onclick=()=>{document.querySelector("div.sidebar").style.transform="translateX(-100%)"},y()(e,o),e}const W=[{title:"List #1",list:[{title:"Brush teeth",desc:"with toothpaste",priority:"high",checked:!1},{title:"Watch anime",desc:"with Hammy :))",priority:"high",checked:!1},{title:"Eat breakfast",desc:"tea and bread",priority:"medium",checked:!1},{title:"Wash dishes",desc:"use less water",priority:"low",checked:!1},{title:"Take a poop",desc:"dont take too long",priority:"low",checked:!1},{title:"Cook rice",desc:"3 tins should be enough",priority:"high",checked:!1}]},{title:"List #2",list:[{title:"Brush teeth",desc:"with toothpaste",priority:"high",checked:!1},{title:"Watch anime",desc:"with Hammy :))",priority:"high",checked:!1},{title:"Eat breakfast",desc:"tea and bread",priority:"medium",checked:!1},{title:"Wash dishes",desc:"use less water",priority:"low",checked:!1},{title:"Take a poop",desc:"dont take too long",priority:"low",checked:!1},{title:"Cook rice",desc:"3 tins should be enough",priority:"high",checked:!1}]}];localStorage.getItem("lists")||localStorage.setItem("lists",JSON.stringify(W));const T=JSON.parse(localStorage.getItem("lists"));let q=0;k.on("updateList",((n,t,e)=>{switch(n){case"newItem":T[q].list.push(t);break;case"checkItem":T[q].list[t].checked=!T[q].list[t].checked;break;case"deleteItem":T[q].list.splice(t,1),k.emit("refreshTodoList");break;case"editItem":T[q].list[t]=e,k.emit("refreshTodoList");break;case"changeCurrentActiveList":q=t,k.emit("refreshTodoList");break;case"newList":T.push({title:t,list:[]}),q=T.length-1,k.emit("refreshTodoList");break;case"deleteList":1===T.length?(T[0]={title:"Default List",list:[]},q=0):(T.splice(t,1),q--),k.emit("refreshTodoList");break;case"resetLists":T.length=0,T[0]=W[0],k.emit("refreshTodoList")}localStorage.setItem("lists",JSON.stringify(T))})),k.on("refreshTodoList",(()=>{h("","rpc"),h(Y(T,q)),h(S(z(q)))})),k.on("showEditItemDiv",((n,t)=>{h(function(n={},t){const e=y()("div.edit-list-item-backdrop"),i=y()("form.edit-list-item-form");y()(i,"input",{value:n.title}),y()(i,"textarea",{value:n.desc,placeholder:"Enter a description here..."});const o=y()("div.priority-div");y()(o,"h4","Priority");const r=y()("div"),A=y()("label","Low");A.setAttribute("for","low"),y()(r,"input",{id:"low",type:"radio",name:"priority"}),y()(r,A),y()(o,r);const d=y()("div"),s=y()("label","Medium");s.setAttribute("for","medium"),y()(d,"input",{id:"medium",type:"radio",name:"priority"}),y()(d,s),y()(o,d);const a=y()("div"),l=y()("label","High");switch(l.setAttribute("for","high"),y()(a,l),y()(a,"input",{id:"high",type:"radio",name:"priority"}),y()(a,l),y()(o,a),n.priority){case"high":setTimeout((()=>{document.querySelector("#high").checked=!0}),0);break;case"medium":setTimeout((()=>{document.querySelector("#medium").checked=!0}),0);break;case"low":setTimeout((()=>{document.querySelector("#low").checked=!0}),0)}const c=y()("div.status-div");y()(c,"h4","Status");const p=y()("div"),u=y()("label","Done");u.setAttribute("for","done"),y()(p,"input",{id:"done",type:"radio",name:"status"}),y()(p,u),y()(c,p);const m=y()("div"),h=y()("label","Not Done");h.setAttribute("for","not-done"),y()(m,"input",{id:"not-done",type:"radio",name:"status"}),y()(m,h),y()(c,m),n.checked?setTimeout((()=>{document.querySelector("#done").checked=!0,console.log("d")}),0):setTimeout((()=>{document.querySelector("#not-done").checked=!0}),0);const C=y()("button#save-button","Save Task");y()(i,o),y()(i,c),y()(i,C),C.onclick=n=>{n.preventDefault();const e={title:document.querySelector("form.edit-list-item-form > input:nth-child(1)").value,desc:document.querySelector("form.edit-list-item-form > textarea").value,priority:document.querySelector('.priority-div > div > input[name="priority"]:checked').id,checked:document.querySelector("#done").checked};k.emit("updateList","editItem",t,e)},y()(e,i);const g=y()("button#close-button","X");return y()(i,g),g.onclick=()=>{k.emit("refreshTodoList")},i.ondblclick=n=>{n.stopPropagation()},e.ondblclick=()=>{k.emit("refreshTodoList")},e}(n,t))}));const z=n=>T[n];h(function(n){const t=L()('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>'),e=y()("button.settings-button");return e.onclick=()=>{h(function(n){const t=y()("div.settings-backdrop"),e=y()("div.settings-div"),i=y()("button","Clear Data");return i.onclick=n=>{window.localStorage.clear(),k.emit("updateList","resetLists"),n.stopPropagation()},e.onclick=n=>{n.stopPropagation()},y()(e,i),y()(t,e),t.onclick=()=>{y()(t,"!")},t}())},y()(e,t),e}()),h(function(){const n=y()("header");y()(n,"h1","Todosss");const t=y()("div.ham-menu");return y()(t,"div"),y()(t,"div"),y()(t,"div"),t.onclick=()=>{document.querySelector("div.sidebar").style.transform="translateX(0)"},y()(n,t),n}()),h(Y(T,q)),h(S(z(0)))})()})();
//# sourceMappingURL=bundle.js.map