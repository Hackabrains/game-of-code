(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(n,e,t){n.exports=t(39)},39:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(10),i=t.n(o),c=t(1),s=t(4),u=t(5),l=t(7),d=t(6),m=t(8),p=t(9),f=t(2),b=t(3),g=t.n(b);function h(){var n=Object(c.a)(["\n  font-family: 'Cinzel Decorative', serif;\n  font-size: ","\n  color: ","\n  padding: 0 35px;\n  margin-top: ","\n  ","\n   ","\n"]);return h=function(){return n},n}function v(){var n=Object(c.a)(["\n  font-family: 'Raleway', sans-serif;\n  font-size: ","\n  color: ","\n  margin-top: ","\n  > a {\n    color: #b1b1b1;\n    &:hover{\n      color: #cdcdcd;\n      transition: .2s ease;\n    }\n  }\n"]);return v=function(){return n},n}var w=f.b.span(v(),function(n){return n.fontSize},function(n){return n.color},function(n){return n.marginTop}),x=f.b.span(h(),function(n){return n.fontSize},function(n){return n.color},function(n){return n.marginTop},function(n){return n.bold&&"\n    font-weight: bold;\n  "},function(n){var e=n.letterSpacing;return e&&"\n    letter-spacing: ".concat(e,";\n  ")});x.defaultProps={marginTop:0,fontSize:"1.2em",color:"rgb(35, 38, 50)"},w.defaultProps={marginTop:0,fontSize:"1.2em",color:"rgb(35, 38, 50)"};var k=t(12),j=t(24);function y(){var n=Object(c.a)([" \n    height: 100%;\n    position: absolute;\n    width: 100%;\n    background-color: transparent;\n    left: 0;\n    z-index: 0;\n"]);return y=function(){return n},n}var E=f.b.canvas(y()),O=function(n,e,t){var a=n.getContext("2d"),r=[],o=function(e){return r.push(e(n))},i=function(){a.canvas.width=n.offsetWidth,a.canvas.height=n.offsetHeight,g.a.forEach(r,function(n){return n.resized()})},c=function e(){a.clearRect(0,0,n.offsetWidth,n.offsetHeight),g.a.forEach(r,function(n){return n.draw()}),g.a.forEach(r,function(n){return n.update()}),M(e)};return g.a.times(e,function(){return o(function(n){return S(n,null,t)})}),window.addEventListener("resize",i),c(),i(),{add:o,resize:i}},z={color:"orange",radius:[.5,3],speed:[2,3],wind:[-.5,3]},S=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2?arguments[2]:void 0,a=Object(j.a)({},z,t),r=a.radius,o=a.speed,i=a.wind,c={color:a.color,x:g.a.random(0,n.offsetWidth),y:g.a.random(-n.offsetHeight,0),radius:g.a.random.apply(g.a,Object(k.a)(r)),speed:g.a.random.apply(g.a,Object(k.a)(o)),wind:g.a.random.apply(g.a,Object(k.a)(i)),isResized:!1},s=n.getContext("2d"),u=function(){c.y<n.offsetHeight||(c.isResized?(c.x=g.a.random(0,n.offsetWidth),c.y=g.a.random(-n.offsetHeight,0),c.isResized=!1):(c.y=0,c.x=g.a.random(0,n.offsetWidth)))};return{update:function(){c.y+=c.speed,c.x+=c.wind,u()},resized:function(){return c.isResized=!0},draw:e?function(){return e(s,c)}:function(){s.beginPath(),s.arc(c.x,c.y,c.radius,0,2*Math.PI),s.fillStyle=c.color,s.fill(),s.closePath()}}},M=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;function _(){var n=Object(c.a)(["\n  width: 30em;\n  margin-top: 10%;\n  opacity: .7;\n\n  @media (max-width: 440px) {    \n    margin-top: 50%;\n    width: 20em;\n  }\n\n  @media (max-width: 340px) {    \n    margin-top: 50%;\n    width: 18em;\n  }\n"]);return _=function(){return n},n}function R(){var n=Object(c.a)(["\n  &.toggle{\n    transform: rotate(45deg) translate(-10px, -7px);\n    -webkit-transform: rotate(45deg) translate(-10px, -8px);\n    background:white;\n  }\n"]);return R=function(){return n},n}function L(){var n=Object(c.a)(["\n  &.toggle{\n    opacity: 0;\n  }\n"]);return L=function(){return n},n}function q(){var n=Object(c.a)(["\n  &.toggle{\n    transform: rotate(-45deg) translate(-2px, 1px);\n    background:white;\n    margin-top: .6em;\n  }\n"]);return q=function(){return n},n}function P(){var n=Object(c.a)(["\n  width: 34px;\n  height: 4px;\n  border-radius: 2px;\n  background-color: #000;\n  margin: 3px 0;\n  transition-duration: 0.4s;\n  z-index: 9999;\n"]);return P=function(){return n},n}function A(){var n=Object(c.a)(["\nposition:absolute;\noutline:none;\ntop: 1%;\nright:0;\nborder:0;\nmargin: 1.5em;\nz-index:9999;\ndisplay: none;\n&:hover {\n  cursor:pointer;\n}\n\n@media (max-width: 720px) {   \n  display: block;\n}\n"]);return A=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99;\n\n  &.active{\n    display: flex;\n  }\n\n  a {\n    padding: 30px 30px;\n    display: inline-block;\n    transition: .5s;\n    text-decoration: none;\n    color: rgb(35, 38, 50);\n    @media (max-width: 440px) {    \n      font-size: .7em;\n    }\n    "," {\n      border-bottom: 1px solid rgba(35, 38, 50, .3);\n      transition: .5s;\n    }\n    &:hover "," {\n      border-bottom: 1px solid rgba(35, 38, 50, .3);\n      border-radius: 10px;\n      padding: 0 10px;\n    }\n    &:active {\n      opacity: .5;\n    }\n  }\n\n  @media (max-width: 720px) {   \n    display: none; \n    background: rgba(0,0,0, .9);\n    height: 100vh;\n    width: 100vw;\n    position: absolute;\n    z-index: 9999;\n    flex-direction: column;\n\n    a {\n      color: #cdcdcd;\n      font-size: 1.3em;\n    }\n  }\n"]);return C=function(){return n},n}function F(){var n=Object(c.a)(["\n  background-image: url(imgs/bg-3.png);\n  background-size: cover;\n  background-position: top;\n  width: 100vw;\n  height: 90vh;\n  position: absolute;\n  top: 0;\n  background-repeat: no-repeat;\n  z-index: -2;\n  transform: scale(1.15);\n  transform-origin: center;\n  transition: .1s;\n"]);return F=function(){return n},n}function H(){var n=Object(c.a)(["\n  background-image: url(imgs/bg-1.png);\n  background-size: cover;\n  width: 100vw;\n  height: 120vh;\n  position: absolute;\n  bottom: 40px;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  z-index: -1;\n  transform: scale(1.2);\n  transition: .2s;\n\n  @media (max-width: 1600px) {    \n    bottom: 130px;\n  }\n\n  @media (max-width: 720px) {    \n    bottom: 70px;\n  }\n\n"]);return H=function(){return n},n}function T(){var n=Object(c.a)(["\n  overflow: hidden;\n  height: 120vh;\n  width: 100vw;\n  position: relative;\n  text-align: center;\n  z-index: 10;\n  "]);return T=function(){return n},n}var W=function(n){function e(n){var t;return Object(s.a)(this,e),(t=Object(l.a)(this,Object(d.a)(e).call(this,n))).state={mouseXY:{x:0,y:0},isActive:!1},t._throttledMouseMove=function(n){var e=n.screenX,a=n.screenY;t.setState({mouseXY:{x:e,y:a}})},t._onMouseMove=function(n){var e,a=!1;e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))&&(a=!0),a||(n.persist(),t._throttledMouseMove(n))},t.toggleHamburguer=function(){var n=t.state.active,e=t.refs,a=e.bar1,r=e.bar2,o=e.bar3,i=e.nav;t.setState({active:!n}),n?(i.classList.add("active"),a.classList.add("toggle"),r.classList.add("toggle"),o.classList.add("toggle")):(i.classList.remove("active"),a.classList.remove("toggle"),r.classList.remove("toggle"),o.classList.remove("toggle"))},t._throttledMouseMove=Object(b.throttle)(t._throttledMouseMove.bind(Object(p.a)(Object(p.a)(t))),50),t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=this;window.addEventListener("deviceorientation",function(e){var t=e.alpha,a=e.gamma,r=e.beta;n.setState({mouseXY:{x:t+5*r,y:a+5*r}})}),O(this.canvas,150,{color:"white"})}},{key:"render",value:function(){var n=this,e=this.state.mouseXY;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{onClick:this.toggleHamburguer},r.a.createElement(J,{ref:"bar1"}),r.a.createElement($,{ref:"bar2"}),r.a.createElement(G,{ref:"bar3"})),r.a.createElement(X,{ref:"container",onMouseMove:this._onMouseMove},r.a.createElement(Y,{style:{transform:"scale(1.15) translateX(".concat(.015*e.x,"px) translateY(").concat(.07*e.y,"px)")}}),r.a.createElement(D,{style:{transform:"scale(1.15) translateX(".concat(.01*e.x,"px) translateY(").concat(.01*e.y,"px)")}}),r.a.createElement(I,{ref:"nav"},r.a.createElement("a",{href:"https://www.sympla.com.br/hackabrains-2019---game-of-codes__499575",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(x,null,"INSCRI\xc7\xd4ES")),r.a.createElement("a",{href:"./regulamento.pdf",target:"_blank"},r.a.createElement(x,null,"Regulamento"))),r.a.createElement(E,{ref:function(e){return n.canvas=e}}),r.a.createElement(K,{src:"./imgs/logo_game-of-codes.png"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x,{bold:!0,letterSpacing:"10px"},"The winter is here")))}}]),e}(r.a.Component),X=f.b.div(T()),Y=f.b.div(H()),D=f.b.div(F()),I=f.b.nav(C(),x,x),B=f.b.div(A()),N=f.b.div(P()),J=Object(f.b)(N)(q()),$=Object(f.b)(N)(L()),G=Object(f.b)(N)(R()),K=f.b.img(_()),Q=t(11),U=t.n(Q),V=t(21),Z=t.n(V),nn=(t(36),t(16)),en=t.n(nn),tn=t(22);function an(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n"]);return an=function(){return n},n}function rn(){var n=Object(c.a)([" \n    width: 95px;\n    opacity: .5;\n    &:hover{ \n        transform: scale(1.1);\n        transition: all .3s ease-in-out;\n        opacity: .7;\n      }\n"]);return rn=function(){return n},n}function on(){var n=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    @media (max-width: 600px) {    \n        display: none\n      }\n"]);return on=function(){return n},n}function cn(){var n=Object(c.a)(["\n    display: flex; \n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 3%;\n    overflow: hidden;\n   \n    @media (max-width: 600px) {    \n        justify-content: center;\n        margin-top: 5%;\n    }\n"]);return cn=function(){return n},n}function sn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 12em;\n  margin-top: 5%;\n  padding: 2em 1em;\n  background-image: url('./imgs/bg-footer.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n  overflow: hidden;\n  \n"]);return sn=function(){return n},n}var un=f.b.footer(sn()),ln=f.b.div(cn()),dn=f.b.div(on()),mn=f.b.a(rn()),pn=f.b.img(an()),fn=function(n){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(un,null,r.a.createElement(ln,null,r.a.createElement(dn,null,r.a.createElement(w,{fontSize:".8em",color:"#b1b1b1"}," \xa9 Faculdade de Tecnologia Senac Pelotas | http://hackabrains.com.br - (53) 3225-6918 "),r.a.createElement(w,{fontSize:".8em",color:"#b1b1b1",marginTop:"4px"},"Desenvolvido por ",r.a.createElement("a",{href:"https://www.linkedin.com/in/patrick-porto-225897145/"},"Patrick N. Porto ")," e ",r.a.createElement("a",{href:"https://www.linkedin.com/in/miguelboanova/"},"Miguel N. Boanova"))),r.a.createElement(mn,{href:"https://brainny.cc",target:"_blank"},r.a.createElement(pn,{src:"./imgs/supporters/brainny-logo.png"}))))}}]),e}(a.Component);function bn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);return bn=function(){return n},n}function gn(){var n=Object(c.a)([" \n  width: 145px;\n  object-fit: cover;\n  transition: all .3s ease-in-out;\n  padding: 15px;\n  \n  &:hover{ \n    transform: scale(1.1);  \n  }\n\n  @media (max-width: 900px) {    \n    width: 125px;\n  }\n  \n  @media (max-width: 900px) {    \n    width: 100px;\n  }\n"]);return gn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  width: 220px;\n  height: auto;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n  padding: 15px;\n  &:hover{ \n    transform: scale(1.1);\n  }\n  \n  @media (max-width: 900px) {    \n    width: 180px;\n  }\n\n  @media (max-width: 450px) {    \n    width: 170px;\n    margin-top: 5%;\n  }\n\n  @media (max-width: 330px) {    \n    width: 140px;\n    margin-top: 5%;\n  }\n"]);return hn=function(){return n},n}function vn(){var n=Object(c.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 1%;\n  flex-wrap: wrap;\n  padding: 0 20vw;\n  @media (max-width: 1200px) {    \n\n  }\n \n  @media (max-width: 900px) {    \n\n  }\n\n  @media (max-width: 660px) {    \n\n  }\n\n  "]);return vn=function(){return n},n}function wn(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10%;\n  "]);return wn=function(){return n},n}function xn(){var n=Object(c.a)(["\n  width: 15em;\n  margin: 3% 0;\n\n  @media (max-width: 900px) {    \n    width: 12em;\n  }\n"]);return xn=function(){return n},n}function kn(){var n=Object(c.a)(["\n  width: 2.5em;\n  height: 1px;\n  background: #000;\n  margin-top: .5em;\n"]);return kn=function(){return n},n}function jn(){var n=Object(c.a)(["\n  width: 5.5em;\n  height: 1px;\n  background: #000;\n  margin-top: .5em;\n"]);return jn=function(){return n},n}function yn(){var n=Object(c.a)(["\n  width: 100%;\n  margin-top: 20%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 450px) {    \n    margin-top: 45%;  \n  }\n"]);return yn=function(){return n},n}function En(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    padding-top: 2%;\n    margin-top: -20%;\n    z-index: 0;\n    background-image: url('./imgs/westeros-light.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center top;\n    z-index: -10;\n    \n    @media (max-width: 450px) {    \n      margin-top: -45%;  \n    }\n"]);return En=function(){return n},n}var On=function(n){function e(){var n,t;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(r)))).state={sponsors:[],supporters:[]},t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=Object(tn.a)(en.a.mark(function n(){var e;return en.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://game-of-code-84cb3.firebaseio.com/.json");case 2:return n.next=4,n.sent.json();case 4:e=n.sent,this.setState({sponsors:Object.values(e.sponsors),supporters:Object.values(e.supporters)});case 6:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state,e=n.sponsors,t=n.supporters;return r.a.createElement(zn,null,r.a.createElement(Sn,null,r.a.createElement(x,{fontSize:"1.6em"}," ",r.a.createElement("big",null,"R"),"ealiza\xe7\xe3o"),r.a.createElement(Mn,null),r.a.createElement(Rn,{src:"./imgs/logo-senac.png"})),r.a.createElement(Ln,null,r.a.createElement(x,{fontSize:"1.6em"}," ",r.a.createElement("big",null,"P"),"atroc\xednio"),r.a.createElement(Mn,null),r.a.createElement(qn,null,e.map(function(n,e){return r.a.createElement(Pn,{href:n.url,key:e,target:"_blank"},r.a.createElement(Cn,{src:n.logo}))}))),r.a.createElement(Ln,null,r.a.createElement(x,{fontSize:"1.6em"}," ",r.a.createElement("big",null,"A"),"poio"),r.a.createElement(_n,null),r.a.createElement(qn,null,t.map(function(n,e){return r.a.createElement(An,{href:n.url,key:e,target:"_blank"},r.a.createElement(Cn,{src:n.logo}))}))),r.a.createElement(fn,null))}}]),e}(a.Component),zn=f.b.div(En()),Sn=f.b.div(yn()),Mn=f.b.div(jn()),_n=f.b.div(kn()),Rn=f.b.img(xn()),Ln=f.b.div(wn()),qn=f.b.div(vn()),Pn=f.b.a(hn()),An=f.b.a(gn()),Cn=f.b.img(bn());function Fn(){var n=Object(c.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    box-sizing: border-box;\n  }\n"]);return Fn=function(){return n},n}U.a.locale("pt-br"),U.a.extend(Z.a);var Hn=Object(f.a)(Fn());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Hn,null),r.a.createElement(W,null),r.a.createElement(On,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.86271df7.chunk.js.map