(this.webpackJsonpmine=this.webpackJsonpmine||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),s=a.n(o),l=a(3),i=a(4),r=a(6),h=a(5),m=(a(12),a(13),function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).callData=function(){console.log("calling"),fetch("https://oh1.cf.siemens.de/sap/opu/odata/SIE/CW_ROSA_P01_SRV/").then((function(e){console.log(e),n.state.fetchedData.push(e),n.setState({fetchedData:n.state.fetchedData})})).catch((function(e){console.log(e),n.state.fetchedData.push(e.toString()),n.setState({fetchedData:n.state.fetchedData})}))},n.state={fetchedData:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("mounted"),this.callData()}},{key:"render",value:function(){var e=this.state.fetchedData;return console.log(e),c.a.createElement("div",{className:"container-fluid bg-dark wrapper clearfix",style:{height:"100vh"}},c.a.createElement("div",{className:"row myDiv bg-success"},c.a.createElement("h1",{className:"col"},"Testing oh from react")),c.a.createElement("div",{className:"row text-dark bg-warning myDiv",style:{height:"30vh"}},c.a.createElement("div",{className:"col bg-info ",style:{height:"90%",borderRadius:"100px",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:"row"},this.state.fetchedData.map((function(e,t){return c.a.createElement("div",{className:"col"},e," ")}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-4 col-md-3 col-lg-10"},c.a.createElement("button",{onClick:this.callData},"CAAAAAl"))))}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.4a2a99e3.chunk.js.map