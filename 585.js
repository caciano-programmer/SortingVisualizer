(self.webpackChunksorting_visualizer=self.webpackChunksorting_visualizer||[]).push([[585],{1585:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(4699),o=n(7294),l=n(1120),a=n(1127),c=n(6251),i=n(2822),s=n(998),u=n(5757),m=n(5517),g=n(2150),d=n(4191),p=n(3609),h=(0,l.Z)({controls:{width:"100%",textAlign:"center",margin:"0 15% 0 15%"},current:{fontWeight:"bolder"}}),E=function(e){var t=e.toggleMobile,n=e.algo,r=e.algoOptions,l=e.toggleAlgoOptions,a=e.code,E=e.setNewData,Z=e.clearCustom,b=e.isCustom,C=e.size,f=e.setSize,k=e.speed,z=e.setSpeed,w=e.theme,v=e.toggleTheme,S=e.customNumTotal,y=h();return o.createElement(i.Z,null,o.createElement(s.Z,null,o.createElement(u.Z,{primary:"Algorithm: ".concat(n),classes:{primary:y.current}})),o.createElement(m.Z,{style:{backgroundColor:w.sidebar.color,height:"2px"}}),o.createElement(s.Z,{button:!0,onClick:function(){t(),v()}},o.createElement(u.Z,{primary:w.isDark?"Light Mode":"Dark Mode"}),o.createElement(c.Z,null)),o.createElement(s.Z,{button:!0,onClick:function(){t(),a()}},o.createElement(u.Z,{primary:"View Algorithm Code"}),o.createElement(c.Z,null)),o.createElement(s.Z,{button:!0,onClick:function(){return l(!r)}},o.createElement(u.Z,{primary:"Change Algorithm"}),!r&&o.createElement(c.Z,null)),o.createElement(s.Z,{button:!0},o.createElement(d.f,{css:y.controls,speed:k,setSpeed:z,size:C,disabled:!1})),o.createElement(s.Z,{button:!0},o.createElement(p.$,{css:y.controls,size:C,setSize:f,disabled:!1})),o.createElement(s.Z,{button:!0},o.createElement(g.Y,{newData:E,clear:Z,isCustom:b,theme:w,css:{width:"100%"},nums:S})))},Z=n(3471),b=n(5292),C=function(e){var t=e.toggle,n=e.setAlgorithm,r=e.theme;return o.createElement(i.Z,null,o.createElement(s.Z,{button:!0,onClick:function(){return t(!1)}},o.createElement(Z.Z,{fontSize:"large"})),o.createElement(m.Z,{style:{backgroundColor:r.sidebar.color,height:"2px"}}),Object.values(b.n).map((function(e){return o.createElement(s.Z,{button:!0,key:e.name,onClick:function(){return n(e),void t(!1)}},o.createElement(u.Z,{primary:e.name}))})))},f=n(8711),k=function(e){var t=e.toggleMobile,n=e.open,c=e.code,i=e.algorithm,s=e.setAlgorithm,u=e.setNewData,m=e.clearCustom,g=e.isCustom,d=e.size,p=e.setSize,h=e.speed,Z=e.setSpeed,b=e.toggleTheme,k=e.customNumTotal,z=(0,o.useState)(!1),w=(0,r.Z)(z,2),v=w[0],S=w[1],y=(0,o.useContext)(f.P),A=function(e){return(0,l.Z)({paper:{height:"100%",width:"80vw",backgroundColor:e.sidebar.background,color:e.sidebar.color}})}(y)();return o.createElement(a.Z,{anchor:"right",open:n,onOpen:function(){return t(!0)},classes:{paper:A.paper},onClose:function(){S(!1),t()}},o.createElement("div",null,!v&&o.createElement(E,{toggleMobile:t,algo:i,algoOptions:v,code:c,toggleAlgoOptions:S,setNewData:u,clearCustom:m,isCustom:g,size:d,setSize:p,speed:h,setSpeed:Z,theme:y,toggleTheme:b,customNumTotal:k}),v&&o.createElement(C,{toggle:S,setAlgorithm:s,theme:y})))}}}]);