(this["webpackJsonppractice-react"]=this["webpackJsonppractice-react"]||[]).push([[0],{18:function(n,e,t){},75:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o,s,d=t(0),u=t(15),p=t.n(u),l=(t(18),t(6)),b=t(7),h=t(37),j=t(9),x=t(12),f=t.n(x),m=t(19),g=t(20),w=t.n(g),O="FIND_CITY",y="ERR",v="SEARCH_CITY",k="CLOSE_CITY",C="NOT_FOUND",_=function(n){return function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"%20&appid=2e4972913fa314ab861a493a42896c52")).then((function(n){var e=n.data;t({type:O,payload:e})})).catch((function(n){return{type:y,payload:"you have an err"}}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},z=t(1),E=function(){var n=Object(d.useState)(!1),e=Object(h.a)(n,2),t=e[0],r=e[1],a=Object(j.b)(),i=Object(d.useRef)();return Object(d.useEffect)((function(){t&&i.current.focus()}),[t]),Object(z.jsx)(S,{children:t?Object(z.jsxs)("form",{action:"#",onSubmit:function(n){var e;n.preventDefault(),r(!1),a((e=i.current.value,function(){var n=Object(m.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"%20&appid=2e4972913fa314ab861a493a42896c52")).then((function(n){t({type:v,payload:{name:e,data:n.data}})})).catch((function(n){t({type:C,payload:" we couldn't find your city"})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))},children:[Object(z.jsx)("input",{type:"text",ref:i}),Object(z.jsx)("button",{type:"submit",children:"search"})]}):Object(z.jsx)("div",{onClick:function(){return r(!0)},children:"search for a city"})})},S=b.a.div(r||(r=Object(l.a)(["\n    width: 100vw;\n    height: 150px;\n    display: flex;\n    justify-content: center;\n    form{\n        width: 100vw;\n        display: flex;\n        justify-content: center;\n        padding-top: 20px;\n        animation : fadeIn 0.5s ;\n        input{\n            height: 30px;\n            width: 60%;\n            max-width: 400px;\n            min-width: 200px;\n            border-radius: 20px;\n            border: 2px solid rgba(235,235,140,1);\n            padding-left: 10px;\n            :focus{\n                outline: none;\n            }\n        }\n        button{\n            height: 28px;\n            padding: 0 15px;\n            margin: 1px 0 0 10px;\n            border: none;\n            border-radius: 10px;\n            background-color: #0b20e2;\n            color: #fbfbfb;\n            font-size:0.8rem;\n            font-weight: 600;\n            text-transform: uppercase;\n            cursor: pointer;\n            \n        }\n    }\n        div{\n        width: 350px;\n        height: 100px;\n        display: flex;\n        align-items: center;\n        justify-content: center ;\n        border: 1px solid black;\n        border-radius: 30px;\n        margin-top: 20px;\n        background: #4636d4;\n        color: white;\n        font-size: 1.5rem;\n        cursor: pointer;\n        :hover{\n            background: rgba(0 , 0 ,0 , 0.8);\n            \n        }\n        @media screen and (max-width:500px){\n            width: 250px;\n            height: 60px;\n            font-size: 1rem;\n            border-radius: 20px;\n        }\n    }\n    \n"]))),N=function(n){switch(n){case"Clouds":return"url('./img/clouds.jpg')";case"Clear":default:return"url('./img/clear.jpg')";case"Rain":return"url('./img/rain.jpg')";case"Snow":return"url('./img/snow.jpeg')";case"Haze":return"url('./img/haze.jpeg')"}},D=(t(65),function(n){var e=n.data;return Object(z.jsxs)(I,{children:[Object(z.jsxs)(R,{background:N(e.newCity.weather[0].main),children:[Object(z.jsx)("h3",{children:e.newCity.name}),Object(z.jsxs)("h2",{children:[Math.round(e.newCity.main.temp-272.15)," \u2103 "]})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)(A,{children:[Object(z.jsxs)("p",{children:["weather ",Object(z.jsx)("span",{children:e.newCity.weather[0].description})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)("p",{children:["min temperature ",Object(z.jsxs)("span",{children:[Math.round(e.newCity.main.temp_min-272.15)," \u2103  "]})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)("p",{children:["max temerature ",Object(z.jsxs)("span",{children:[Math.round(e.newCity.main.temp_max-272.15)," \u2103 "]})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)("p",{children:["humidity ",Object(z.jsxs)("span",{children:[e.newCity.main.humidity," %"]})]})]})]},(new Date).getMilliseconds().toString())}),I=b.a.div(a||(a=Object(l.a)(["\n    max-width: 400px;\n    min-width: 200px;\n    width: 90%;\n    height: 400px;\n    margin-bottom: 50px;\n    background: #f0f0f0;\n    border-radius: 20px;\n    color: black;\n    animation : rotate 0.7s ;\n    \n\n"]))),R=b.a.div(i||(i=Object(l.a)(["\n    background:",";\n    background-size:cover;\n    background-repeat: no-repeat;\n    border-radius: 20px 20px 0 0;\n    height: 50%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    justify-content: space-around;\n"])),(function(n){return n.background})),A=b.a.div(c||(c=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    hr{\n        width: 100%;\n    }\n    p{\n        padding: 13px 0 13px 0;\n        width: 90%;\n        color: #3f3f3f;\n        text-transform : capitalize;\n\n        \n        span{\n            float: right\n        }\n    }\n"]))),M=["london","dubai","moscow","tehran"];var T=function(){var n=Object(j.b)(),e=Object(j.c)((function(n){return n.reducer})),t=Object(j.c)((function(n){return n.citiesReducer}));return Object(d.useEffect)((function(){var e=0;n(_(M[e])),setInterval((function(){++e>=4&&(e=0),n(_(M[e]))}),7e3)}),[]),Object(z.jsxs)(Y,{children:[t.isActive&&Object(z.jsxs)("div",{className:"absolute-weather",children:[Object(z.jsx)("span",{onClick:function(){n({type:k})},className:"close",children:"\u2716"}),Object(z.jsx)(D,{data:t})]}),Object(z.jsx)(E,{}),Object(z.jsx)(q,{children:Object(z.jsx)(D,{data:e},(new Date).setMilliseconds().toString())})]})},Y=b.a.div(o||(o=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url('./img/background.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  div.absolute-weather{\n    position: absolute;\n    background-color: rgba(0,0,0,0.9);\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    z-index : 10;\n    backdrop-filter: blur(8px);\n    span.close{\n      color: whitesmoke;\n      font-size: 1.5rem;\n      background-color: rgba(253,253,253,0.3);\n      padding: 12px 15px; \n      border-radius: 50%;\n      cursor: pointer;\n      margin-bottom: 35px;\n      :hover{\n        background-color: rgba(253,253,253,0.7);\n      }\n    }\n    \n  }\n\n"]))),q=b.a.div(s||(s=Object(l.a)(["\n  display: flex;\n  width: 100vw;\n  justify-content: space-around;\n  position: relative;\n  button{\n    position: absolute;\n    top: 15%;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    font-size: 1.5rem;\n    background-color: rgba(0 ,0 ,0 ,0.4);\n    border:none;\n    color: whitesmoke;\n    :hover{\n      background:rgba(0 ,0 ,0 ,0.9);\n      color: whitesmoke;\n      cursor: pointer;\n    }\n  }\n  button.next-btn{\n    right: 10%;\n  }\n  button.previous-btn{\n    left: 10%\n  }\n"]))),F=t(8),H=t(10),J={isActive:!1,cityName:""},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(H.a)(Object(H.a)({},n),{},{isActive:!0,cityName:e.payload.name,newCity:e.payload.data});case k:return Object(H.a)(Object(H.a)({},n),{},{isActive:!1});case C:return alert(e.payload),n;default:return n}},U={newCity:{base:"stations",clouds:{all:0},cod:200,coord:{lon:55.3047,lat:25.2582},dt:1638990693,id:292223,main:{temp:294.24,feels_like:293.45,temp_min:290.31,temp_max:295.11,pressure:1019},name:"Dubai",sys:{type:1,id:7537,country:"AE",sunrise:1638931940,sunset:1638970157},timezone:14400,visibility:1e4,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01n"}]}},X=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;if(e.type===O){var t=e.payload;return Object(H.a)(Object(H.a)({},n),{},{newCity:t})}return n},B=Object(F.b)({reducer:X,citiesReducer:L}),P=t(36),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.c,G=Object(F.d)(B,V(Object(F.a)(P.a)));p.a.render(Object(z.jsx)(j.a,{store:G,children:Object(z.jsx)(T,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.31785475.chunk.js.map