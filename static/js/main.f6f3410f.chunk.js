(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(7),a=n.n(i),c=(n(23),n(24),n(16)),l=n(15),s=n(3),u=n(13);function f(e){return r.a.createElement(l.a,null,e.map((function(e){return function(e){var t=Object(s.c)((function(e){return e.gameMechanics})),n=Object(s.b)();return r.a.createElement(u.a,{id:e,style:{padding:"0",fontSize:"4vw",border:"5px solid white",minHeight:"8vw"},onClick:function(e){n({type:"PLAY_MOVE",payload:e.target.id})},key:e},t.board[e])}(e)})))}var p=n(17);function d(){var e=Object(s.c)((function(e){return e.gameMechanics})).board,t=Object(s.b)();return r.a.createElement(p.a,{variant:"light",block:!0,onClick:function(n){t({type:"NEW_GAME"}),Object.keys(e).map((function(e){document.getElementById(e).innerHTML=""}))}},"New Game")}function h(){var e=Object(s.c)((function(e){return e.gameMechanics})),t=e.playerOnesTurn;return e.gameWinner?r.a.createElement("h2",{style:{fontSize:"2vw"}},"Player ","X"===e.gameWinner?"1":"2"," wins!"):r.a.createElement("h2",{style:{fontSize:"2vw"}},"Player ",t?"1":"2","'s Turn")}function g(){var e=["topLeft","top","topRight","left","middle","right","botLeft","bot","botRight"];return r.a.createElement(c.a,{style:{width:"30%",margin:"0 auto"}},r.a.createElement(h,null),f(e.slice(0,3)),f(e.slice(3,6)),f(e.slice(6,9)),r.a.createElement("br",null),r.a.createElement(d,null))}n(31);function b(){return r.a.createElement("div",{style:{height:"100%",textAlign:"center"},className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement("br",null),r.a.createElement(g,null)))}var m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=n(6),y={board:{topLeft:"",top:"",topRight:"",left:"",middle:"",right:"",botLeft:"",bot:"",botRight:""},playerOnesTurn:!0,gameWinner:!1};function L(e){return e.topLeft===e.top&&e.topLeft===e.topRight&&""!==e.top?e.topLeft:e.left===e.middle&&e.left===e.right&&""!==e.middle?e.left:e.botLeft===e.top&&e.botLeft===e.botRight&&""!==e.bot?e.botLeft:e.topLeft===e.left&&e.topLeft===e.botLeft&&""!==e.topLeft?e.topLeft:e.top===e.middle&&e.top===e.bot&&""!==e.top?e.top:e.topRight===e.right&&e.topRight===e.botRight&&""!==e.topRight?e.topRight:e.topLeft===e.middle&&e.topLeft===e.botRight&&""!==e.topLeft?e.topLeft:e.topRight===e.middle&&e.topRight===e.botLeft&&""!==e.topRight?e.topRight:""}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_MOVE":if(!e.board[t.payload]&&!L(e)){console.log("empty box clicked");var n=t.payload,o=e.board;return o[n]=e.playerOnesTurn?"X":"O",{board:o,playerOnesTurn:!e.playerOnesTurn,gameWinner:L(o)}}return console.log("non-empty box clicked"),e;case"NEW_GAME":return{board:{topLeft:"",top:"",topRight:"",left:"",middle:"",right:"",botLeft:"",bot:"",botRight:""},playerOnesTurn:!0,gameWinner:!1};default:return e}},R=Object(w.b)({gameMechanics:E}),k=Object(w.c)(R),O=document.getElementById("root");a.a.render(r.a.createElement(s.a,{store:k},r.a.createElement(b,null)),O),function(e){if("serviceWorker"in navigator){if(new URL("/tic-tac-toe",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tic-tac-toe","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.f6f3410f.chunk.js.map