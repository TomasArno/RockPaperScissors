function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequire29b5;function r(){const n=o("908Ah"),e=o("gLTua"),t=o("fOLdg"),i=document.createElement("div");i.className="container",i.innerHTML=`\n    <h1 class="intro-title">Piedra Papel ó Tijera</h1>\n    <div class="button-container">\n      <button-comp>¡Empezar!</button-comp>\n    </div>\n    <div class="images">\n      <img class="hand-img" src="${t}">\n      <img class="hand-img" src="${n}">\n      <img class="hand-img" src="${e}">\n    </div>`,function(n){const e=document.createElement("style");e.innerHTML="\n  .container {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .intro-title {\n    margin-top: 115px;\n\n    width: 284px;\n    height: 204px;\n    \n    color: #009048;\n    font-size: 80px;\n    font-weight: 700;\n    line-height: 70px;\n    letter-spacing: 0em;\n  }\n  \n  .button-container {\n    width: 320px;\n  }\n  \n  .hand-img {\n    height: 170px;\n    position: relative;\n    top: 40px;\n  }\n\n  @media (min-width: 767px) {\n    .hand-img {\n      height: 250px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .intro-title {\n\n    width: 350px;\n    height: 280px;\n    font-size: 100px;\n    line-height: 90px;\n    }\n\n    .button-container {\n      width: 400px;\n\n    }\n\n  }\n\n  ",n.appendChild(e)}(i);return i.querySelector(".button-container").addEventListener("click",(()=>{m("/details")})),i}function s(){const n=o("908Ah"),e=o("gLTua"),t=o("fOLdg"),i=document.createElement("div");i.className="container",i.innerHTML=`\n    <h3 class="descrip-title">Presioná jugar\n    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>\n    <div class="button-container">\n      <button-comp>¡Jugar!</button-comp>\n    </div>\n    <div class="images">\n    <img class="hand-img" src="${t}">\n      <img class="hand-img" src="${n}">\n      <img class="hand-img" src="${e}">\n    </div>`;return i.querySelector(".button-container").addEventListener("click",(()=>{m("/game")})),function(n){const e=document.createElement("style");e.innerHTML="\n  .container {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .descrip-title {\n    margin-top: 115px;\n\n    width: 320px;\n    height: 240px;\n    \n    color: black;\n    font-family: American Typewriter;\n    font-size: 40px;\n    font-weight: 600;\n    line-height: 40px;\n    letter-spacing: 0em;\n    text-align: center;\n  }\n\n  @media (min-width: 767px) {\n    .descrip-title {\n      width: 600px;\n      height: 320px;\n      font-size: 60px;\n      line-height: 60px;\n    }\n  }\n  \n  .button-container {\n    width: 320px;\n  }\n\n  @media (min-width: 767px) {\n    .button-container {\n      width: 400px;\n    }\n  }\n  \n  .hand-img {\n    height: 170px;\n    position: relative;\n    top: 40px;\n  }\n  \n  @media (min-width: 767px) {\n    .hand-img {\n      height: 250px;\n    }\n  }\n  ",n.appendChild(e)}(i),i}null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){i[n]=e},e.parcelRequire29b5=o),o.register("27Lyk",(function(e,t){var i,o;n(e.exports,"register",(()=>i),(n=>i=n)),n(e.exports,"resolve",(()=>o),(n=>o=n));var r={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},o=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o.register("908Ah",(function(n,e){n.exports=new URL(o("27Lyk").resolve("jYzGd"),import.meta.url).toString()})),o.register("gLTua",(function(n,e){n.exports=new URL(o("27Lyk").resolve("lyYKJ"),import.meta.url).toString()})),o.register("fOLdg",(function(n,e){n.exports=new URL(o("27Lyk").resolve("cK2FM"),import.meta.url).toString()})),o.register("9kXCL",(function(n,e){n.exports=new URL(o("27Lyk").resolve("boiuE"),import.meta.url).toString()})),o.register("97MQI",(function(n,e){n.exports=new URL(o("27Lyk").resolve("4SRT3"),import.meta.url).toString()})),o.register("l0yyQ",(function(n,e){n.exports=new URL(o("27Lyk").resolve("7NApM"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.c060500b.js","jYzGd":"papel.5f79bbf0.svg","lyYKJ":"piedra.c88f7ccf.svg","cK2FM":"tijera.6a2fdda1.svg","boiuE":"tacho.f6d4b14c.svg","4SRT3":"win.4b96d87d.svg","7NApM":"lose.342a139d.svg"}'));const a={data:{currentMoves:{myMove:"",cpuMove:""},history:{myWins:0,cpuWins:0,draws:0},lastWinner:""},syncroWithLocalStorage(){const n=localStorage.getItem("saved-state");null!=n&&this.setState(JSON.parse(n))},getState(){return this.data},setState(n){this.data=n,localStorage.setItem("saved-state",JSON.stringify(n))},deleteHistory(){const n=this.getState();this.setState({...n,history:{myWins:0,cpuWins:0,draws:0}})},getWinner(n){const e=n.currentMoves.myMove,t=n.currentMoves.cpuMove;console.log(e,t),"rock"==e&&"scissors"==t||"paper"==e&&"rock"==t||"scissors"==e&&"paper"==t?(n.history.myWins=n.history.myWins+1,n.lastWinner="user"):e==t?(n.history.draws=n.history.draws+1,n.lastWinner="draw"):(n.history.cpuWins=n.history.cpuWins+1,n.lastWinner="cpu"),this.setState(n)},setMove(n){const e=this.getState();e.currentMoves=n,this.getWinner(e)}};function c(n){const e=document.createElement("style");e.innerHTML="\n  .container {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .timer-container {\n    border: 23px solid #000000;\n    border-radius: 50%;\n    width: 300px;\n    height: 300px;\n    margin: auto;\n  }\n  .timer {\n    margin-top: 80px;\n    font-family: American Typewriter;\n    font-size: 100px;\n    font-weight: 700;\n    line-height: 100px;\n    letter-spacing: 0em;\n    text-align: center;\n  }\n\n  .my-images {\n    position: relative;\n    top: 50px;\n  }\n\n  .my-hand-img {\n    height: 235px;\n  }\n\n  @media (min-width: 767px) {\n    .hand-img {\n      height: 250px;\n    }\n  }\n\n  .computer-hand-img {\n    height: 355px;\n    transform: rotate(180deg);\n\n    position: relative;\n    bottom: 40px;\n  }\n  \n  .hand-selected {\n    height: 355px;\n  }\n\n  .warning-container {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n\n  }\n\n  @media (min-width: 767px) {\n    .warning-container {\n      row-gap: 80px;\n    }\n  }\n\n  .warning {\n    color: black;\n    width: 410px;\n\n    font-family: American Typewriter;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 40px;\n    letter-spacing: 0em;\n    text-align: center;\n  }\n\n  @media (min-width: 767px) {\n    .warning {\n      width: 700px;\n      font-size: 50px;\n      line-height: 60px;\n    }\n  }\n\n  .btn-container {\n    width: 80%;\n    max-width: 400px;\n    margin: 0 auto;\n  }\n  \n  ",n.appendChild(e)}function l(){const n=document.createElement("div");n.className="container";const e=o("908Ah"),t=o("fOLdg"),i=o("gLTua");n.innerHTML=`\n\n  <div class="timer-container">\n    <div class="timer"></div>\n  </div>\n  <div class="my-images">\n  <img class="my-hand-img scissors" id=scissors src="${t}">\n  <img class="my-hand-img paper" id=paper src="${e}">\n  <img class="my-hand-img rock" id=rock src="${i}">\n  </div>\n  `,c(n);const r=n.querySelector(".my-images"),s=n.querySelector(".timer");let l=3;const d=setInterval((()=>{s.textContent=l.toString(),l--,l<0&&(clearInterval(d),function(n){n.innerHTML='\n      <div class="warning-container">\n        <p class="warning">¡Recordá elegir una opción antes que pasen los 3 segundos!</p>\n        \n        <div class ="btn-container">\n          <button-comp class ="redirect-btn">Volver</button-comp>\n        </div>\n      </div>\n      ',c(n),n.querySelector(".redirect-btn").addEventListener("click",(()=>{m("/details")}))}(n))}),1e3);return r.addEventListener("click",(e=>{clearInterval(d),function(n,e){const t=n.querySelector(".my-images").querySelectorAll(".my-hand-img"),i=e.target,o=i.getAttribute("src"),r=i.getAttribute("id"),s=t[Math.floor(3*Math.random())],l=s.getAttribute("src"),d=s.getAttribute("id");a.setMove({myMove:r,cpuMove:d}),n.innerHTML=`\n      <div class="computer-image">\n        <img class="computer-hand-img" src="${l}">\n      </div>\n\n      <div class="my-images">\n        <img class="hand-selected" src="${o}">\n      </div>\n      `,c(n),setTimeout((()=>{m("/results")}),2500)}(n,e)})),n}function d(){const n=document.createElement("div");n.className="container";const e=a.getState(),t=e.history.myWins,i=e.history.cpuWins,r=o("9kXCL");console.log(r),n.innerHTML=`\n  <div class="img-container">\n  </div>\n    <div class="score">\n        <h3 class="score_title">Score</h3>\n        <div class="history-container">\n            <p class="history">Vos: ${t}</p>\n            <p class="history">Máquina: ${i}</p>\n            <div class="delete-container">\n              <img class="delete-history" src="${r}"/>\n            </div>\n        </div>\n    </div>\n    <div class="button-container">\n      <button-comp>Volver a jugar!</button-comp>\n    </div>`;const s=n.querySelector(".img-container");"user"==e.lastWinner?(s.innerHTML="<result-img-win>¡Ganaste!</result-img-win>",n.style.backgroundColor="#888949E5"):"cpu"==e.lastWinner?(s.innerHTML="<result-img-lose>Perdiste</result-img-lose>",n.style.backgroundColor="#894949E5"):(s.innerHTML='<p class ="p-draw">¡Empate!</p>',n.style.backgroundColor="#FDEBD0"),console.log(e.lastWinner);const c=n.querySelector(".button-container");return n.querySelector(".delete-history").addEventListener("click",(()=>{a.deleteHistory()})),c.addEventListener("click",(()=>{m("/details")})),function(n){const e=document.createElement("style");e.innerHTML="\n  .container {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n  }\n  .score {\n    background-color: white;\n    border: 10px solid #000000;\n    border-radius: 10px;\n    width: 280px;\n    height: 220px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n  .score_title {\n    font-family: Odibee Sans;\n    font-size: 55px;\n    font-weight: 400;\n    line-height: 61px;\n    text-align: center;\n  }\n  .history-container {\n    margin-top: 17px;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    column-gap: 25px;\n    \n    font-size: 55px;\n    text-align: right;\n  }\n  @media (min-width: 1023px) {\n    .history-container {\n      flex-direction: column;\n    }\n  }\n  .history {\n    margin: 0 5px 0 0;\n    \n    font-family: Odibee Sans;\n    font-size: 43px;\n    font-weight: 400;\n    line-height: 50px;\n    letter-spacing: 0.05em;\n  }\n  \n  @media (min-width: 1023px) {\n    .score {\n      width: 400px;\n      height: 290px;\n    }\n    \n    .score_title {\n      font-size: 60px;\n    }\n    \n    \n    \n    \n    .history {\n      margin: 0 15px 0 0;\n      \n      font-size: 55px;\n    }\n    \n    .button-container {\n      width: 400px;\n      height: 80px;\n    }\n  }\n  \n  .p-draw{\n    font-family: Odibee Sans;\n    font-size: 62px;\n    font-weight: 400;\n    line-height: 50px;\n    letter-spacing: 0.05em;\n  }\n  \n  @media (min-width: 1023px) {\n    .p-draw {\n      font-size: 80px;\n    }\n  }\n  \n  .delete-container {\n    align-self: end;\n    margin-left: 6px;\n  }\n  @media (min-width: 1023px) {\n    .delete-container {\n      align-self: start;\n    }\n  }\n  \n  .delete-history {\n    height: 35px;\n    display: flex;\n  }\n  @media (min-width: 1023px) {\n    .delete-history {\n      height: 43px;\n    }\n  }\n  ",n.appendChild(e)}(n),n}const p="/RockPaperScissors";function h(){return location.host.includes("github.io")}function m(n){const e=h()?p+n:n;history.pushState({},"",e),function(n){const e=document.querySelector(".root"),t=h()?n.replace(p,""):n,i=[{path:/\/welcome/,handler:()=>r()},{path:/\/details/,handler:()=>s()},{path:/\/game/,handler:()=>l()},{path:/\/result/,handler:()=>d()}];for(const n of i)if(n.path.test(t)){const t=n.handler();e.hasChildNodes()&&(e.textContent=""),e.appendChild(t)}}(e)}customElements.define("button-comp",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const n=document.createElement("style");n.innerHTML="\n      .button {\n        background-color: #006CFC;\n        border: 10px solid #001997;\n        border-radius: 10px;\n        \n        width: 100%;\n        height: 100%;\n\n        color: white;\n        font-family: Odibee Sans;\n        font-size: 45px;\n        font-weight: 400;\n        line-height: 50px;\n        letter-spacing: 0.05em;\n        text-align: center;\n\n\n      }",this.shadow.appendChild(n),this.render()}render(){const n=this.textContent,e=document.createElement("div");e.innerHTML=`\n        <button class="button">${n}</button>\n        `,this.shadow.appendChild(e)}}),customElements.define("result-img-win",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const n=document.createElement("style");n.innerHTML="\n      .img-result {\n        width: 255px;\n        height: auto;\n      }\n      \n      .p-win {\n        margin: 0;\n        color: white;\n        position: relative;\n        bottom: 170px;\n\n        font-family: Odibee Sans;\n        font-size: 40px;\n        font-weight: 400;\n        line-height: 61px;\n        letter-spacing: 0.05em;\n        text-align: center;\n      }\n\n      @media (min-width: 768px) {\n        .img-result {\n          width: 300px;\n        }\n\n        .p-win {\n          bottom: 190px;\n          left: 5px;\n        }\n      }\n      \n      @media (min-width: 1023px) {\n        .img-result {\n          width: 400px;\n        }\n\n        .p-win {\n          bottom: 240px;\n          left: 5px;\n\n          font-size: 55px;\n        }\n      }\n      ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div"),e=o("97MQI");n.innerHTML=`\n      <img class="img-result" src="${e}">\n      <p class ="p-win">Ganaste!</p>\n      `,this.shadow.appendChild(n)}}),customElements.define("result-img-lose",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const n=document.createElement("style");n.innerHTML="\n\n        .img-result {\n          width: 255px;\n          height: auto;\n        }\n        \n        .p-lose {\n          margin: 0;\n          color: white;\n          position: relative;\n          bottom: 170px;\n\n          font-family: Odibee Sans;\n          font-size: 40px;\n          font-weight: 400;\n          line-height: 61px;\n          letter-spacing: 0.05em;\n          text-align: center;\n        }\n\n        @media (min-width: 768px) {\n          .img-result {\n            width: 300px;\n          }\n  \n          .p-lose {\n            bottom: 190px;\n            left: 5px;\n          }\n        }\n        \n        @media (min-width: 1023px) {\n          .img-result {\n            width: 400px;\n          }\n  \n          .p-lose {\n            bottom: 240px;\n            left: 5px;\n  \n            font-size: 55px;\n          }\n        }\n\n        ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div"),e=o("l0yyQ");n.innerHTML=`\n        <img class="img-result" src="${e}">\n        <p class="p-lose">Perdiste</p>\n        `,this.shadow.appendChild(n)}}),a.syncroWithLocalStorage(),(h()||"/"==location.pathname||"/"!=location.pathname)&&m("/welcome");
//# sourceMappingURL=index.c060500b.js.map
