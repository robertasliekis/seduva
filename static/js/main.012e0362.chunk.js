(this.webpackJsonpseduva=this.webpackJsonpseduva||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i(1),n=i.n(a),c=i(7),o=i.n(c),l=(i(13),i(14),i(2)),r=i(3),d=i(5),m=i(4),u=i.p+"static/media/sounds.4eaa207b.mp3",j=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(e){var s;return Object(l.a)(this,i),(s=t.call(this,e)).btnPlayBackgroundAudio=function(){var e=s.state.playBackgroundAudio;e?s.audioBackgroundRef.current.pause():s.audioBackgroundRef.current.play(),s.setState({playBackgroundAudio:!e})},s.state={playBackgroundAudio:!1},s.audioBackgroundRef=n.a.createRef(),s}return Object(r.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"btn btn-audio",onClick:this.btnPlayBackgroundAudio,children:"AUDIO"}),Object(s.jsx)("audio",{loop:!0,ref:this.audioBackgroundRef,children:Object(s.jsx)("source",{src:u})})]})}}]),i}(a.Component),b=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(e){var s;return Object(l.a)(this,i),(s=t.call(this,e)).readMoreLtClicked=function(){var e=s.state.readMoreLtClicked;s.setState({readMoreLtClicked:!e})},s.readMoreEnClicked=function(){var e=s.state.readMoreEnClicked;s.setState({readMoreEnClicked:!e})},s.state={readMoreLtClicked:!1,readMoreEnClicked:!1},s}return Object(r.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"website-info",children:[Object(s.jsx)("h1",{children:"\u0160EDUVA: KELION\u0116 LAIKU"}),Object(s.jsxs)("div",{className:"text-boxes-container",children:[Object(s.jsxs)("div",{className:"text-box",children:[Object(s.jsx)("p",{className:"text",style:{height:this.state.readMoreLtClicked?"15rem":"6rem"},children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque, amet?"}),Object(s.jsx)("button",{className:"btn btn-read-more",onClick:this.readMoreLtClicked,children:"SKAITYTI DAUGIAU"})]}),Object(s.jsxs)("div",{className:"text-box",children:[Object(s.jsx)("p",{className:"text ",style:{height:this.state.readMoreEnClicked?"15rem":"6rem"},children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquid saepe harum ipsam, odit reprehenderit quidem adipisci, praesentium molestias illum facere iste sit! Itaque, amet?"}),Object(s.jsx)("button",{className:"btn btn-read-more",onClick:this.readMoreEnClicked,children:"READ MORE"})]})]})]})}}]),i}(a.Component),p=(i.p,i.p,i.p,i.p,function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(e){var s;return Object(l.a)(this,i),(s=t.call(this,e)).mouseEnterHistoryHandler=function(){s.setState({iconHistoryHovered:!0})},s.mouseLeaveHistoryHandler=function(){s.setState({iconHistoryHovered:!1})},s.mouseEnterLegendsHandler=function(){s.setState({iconLegendsHovered:!0})},s.mouseLeaveLegendsHandler=function(){s.setState({iconLegendsHovered:!1})},s.mouseEnterPresentHandler=function(){s.setState({iconPresentHovered:!0})},s.mouseLeavePresentHandler=function(){s.setState({iconPresentHovered:!1})},s.btnGalleryOpenClicked=function(){var e=s.state.containerGalleryOpen;s.setState({containerGalleryOpen:!e})},s.btnVideoOpenClicked=function(){var e=s.state.containerVideoOpen;s.setState({containerVideoOpen:!e})},s.btnAudioOpenClicked=function(){var e=s.state.containerAudioOpen;s.setState({containerAudioOpen:!e})},s.btnVROpenClicked=function(){var e=s.state.containerVROpen;s.setState({containerVROpen:!e,confirmVROpen:!1})},s.nextImageClicked=function(){6===s.state.galleryImageIndex?s.setState({galleryImageIndex:1}):s.setState({galleryImageIndex:s.state.galleryImageIndex+1})},s.previousImageClicked=function(){1===s.state.galleryImageIndex?s.setState({galleryImageIndex:6}):s.setState({galleryImageIndex:s.state.galleryImageIndex-1})},s.btnVRConfirmClicked=function(){s.setState({confirmVROpen:!0})},s.state={iconHistoryHovered:!1,iconLegendsHovered:!1,iconPresentHovered:!1,containerVideoOpen:!1,containerAudioOpen:!1,containerGalleryOpen:!1,containerVROpen:!1,galleryImageIndex:1,confirmVROpen:!1},s}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state.iconHistoryHovered?"logo-scale-animation":"",t=this.state.iconLegendsHovered?"logo-scale-animation":"",i=this.state.iconPresentHovered?"logo-scale-animation":"";return Object(s.jsxs)("div",{className:"interactive-map",children:[Object(s.jsxs)("div",{className:"categories",children:[Object(s.jsxs)("div",{className:"text-container",children:[Object(s.jsx)("h1",{children:"Pasirinkite kategorij\u0105 - apra\u0161ym\u0105"}),Object(s.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nulla nemo nostrum voluptates repellat soluta est quasi deleniti? Vero, excepturi?"})]}),Object(s.jsxs)("div",{className:"buttons-container",children:[Object(s.jsxs)("div",{className:"btn",onMouseEnter:this.mouseEnterHistoryHandler,onMouseLeave:this.mouseLeaveHistoryHandler,children:[Object(s.jsx)("div",{className:"circle"}),Object(s.jsx)("p",{children:"\u0160eduvos istorija"})]}),Object(s.jsxs)("div",{className:"btn",onMouseEnter:this.mouseEnterLegendsHandler,onMouseLeave:this.mouseLeaveLegendsHandler,children:[Object(s.jsx)("div",{className:"circle"}),Object(s.jsx)("p",{children:"\u0160eduvos legendos"})]}),Object(s.jsxs)("div",{className:"btn",onMouseEnter:this.mouseEnterPresentHandler,onMouseLeave:this.mouseLeavePresentHandler,children:[Object(s.jsx)("div",{className:"circle"}),Object(s.jsx)("p",{children:"\u0160eduva dabar"})]})]})]}),Object(s.jsxs)("div",{className:"map-zone-container",children:[Object(s.jsx)("div",{className:"map-image"}),Object(s.jsxs)("div",{className:"overlay-buttons",children:[Object(s.jsxs)("div",{className:"btn btn-history",onClick:this.btnGalleryOpenClicked,children:[Object(s.jsx)("div",{className:"logo "+e,children:"Galerija"}),Object(s.jsx)("div",{className:"circle"})]}),Object(s.jsxs)("div",{className:"btn btn-history",onClick:this.btnAudioOpenClicked,children:[Object(s.jsx)("div",{className:"logo "+e,children:"Babos audio"}),Object(s.jsx)("div",{className:"circle"})]}),Object(s.jsxs)("div",{className:"btn btn-legends",onClick:this.btnVideoOpenClicked,children:[Object(s.jsx)("div",{className:"logo "+t,children:"Video"}),Object(s.jsx)("div",{className:"circle"})]}),Object(s.jsxs)("div",{className:"btn btn-legends",children:[Object(s.jsx)("div",{className:"logo "+t}),Object(s.jsx)("div",{className:"circle"})]}),Object(s.jsxs)("div",{className:"btn btn-legends",children:[Object(s.jsx)("div",{className:"logo "+t}),Object(s.jsx)("div",{className:"circle"})]}),Object(s.jsxs)("div",{className:"btn btn-present",onClick:this.btnVROpenClicked,children:[Object(s.jsx)("div",{className:"logo "+i,children:"VR"}),Object(s.jsx)("div",{className:"circle"})]}),Object(s.jsxs)("div",{className:"btn btn-present",children:[Object(s.jsx)("div",{className:"logo "+i}),Object(s.jsx)("div",{className:"circle"})]}),Object(s.jsxs)("div",{className:"btn btn-present",children:[Object(s.jsx)("div",{className:"logo "+i}),Object(s.jsx)("div",{className:"circle"})]})]})]}),Object(s.jsx)("div",{className:"modal-window-container window-video",style:{display:this.state.containerVideoOpen?"flex":"none"},children:Object(s.jsxs)("div",{className:"window-content",children:[Object(s.jsxs)("div",{className:"content-top",children:[Object(s.jsx)("h1",{children:"Babos video"}),Object(s.jsx)("div",{className:"btn btn-close",onClick:this.btnVideoOpenClicked,children:"CLOSE"})]}),Object(s.jsxs)("div",{className:"content-bottom",children:[Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo."}),Object(s.jsx)("div",{className:"video-screen",children:"VIDEO SCREEN"})]})]})}),Object(s.jsx)("div",{className:"modal-window-container window-audio",style:{display:this.state.containerAudioOpen?"flex":"none"},children:Object(s.jsxs)("div",{className:"window-content",children:[Object(s.jsxs)("div",{className:"content-top",children:[Object(s.jsx)("h1",{children:"Babos audio"}),Object(s.jsx)("div",{className:"btn btn-close",onClick:this.btnAudioOpenClicked,children:"CLOSE"})]}),Object(s.jsxs)("div",{className:"content-bottom",children:[Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officiis veritatis perferendis dolores obcaecati. Modi veniam, consequuntur nisi fuga, adipisci nam unde fugiat beatae sunt ipsam voluptatem vel saepe quo."}),Object(s.jsx)("div",{className:"video-screen",children:"AUDIO SCREEN"})]})]})}),Object(s.jsx)("div",{className:"modal-window-container window-gallery",style:{display:this.state.containerGalleryOpen?"flex":"none"},children:Object(s.jsxs)("div",{className:"window-content",children:[Object(s.jsxs)("div",{className:"content-top",children:[Object(s.jsx)("h1",{children:"Babos galerija"}),Object(s.jsx)("div",{className:"btn btn-close",onClick:this.btnGalleryOpenClicked,children:"Close"})]}),Object(s.jsxs)("div",{className:"content-bottom",children:[Object(s.jsx)("div",{className:"btn btn-previous",onClick:this.previousImageClicked,children:"PREVIUOS"}),Object(s.jsx)("div",{className:"image-container plant-image-container",children:Object(s.jsx)("div",{className:"image-carousel-overflow",children:Object(s.jsx)("div",{className:"image-carousel plant-image-carousel",style:{left:"".concat(-100*this.state.galleryImageIndex,"%")},children:[1,2,3,4,5,6,7,8].map((function(e){return Object(s.jsx)("div",{className:"image"},"image"+e)}))})})}),Object(s.jsx)("div",{className:"btn btn-next",onClick:this.nextImageClicked,children:"NEXT"})]})]})}),Object(s.jsx)("div",{className:"modal-window-container window-virtual-reality",style:{display:this.state.containerVROpen?"flex":"none"},children:Object(s.jsxs)("div",{className:"window-content",children:[Object(s.jsx)("div",{className:"content-top",children:Object(s.jsx)("div",{className:"btn btn-close",onClick:this.btnVROpenClicked,children:"Close"})}),Object(s.jsxs)("div",{className:"content-bottom",children:[Object(s.jsx)("div",{className:"vr-video-container"}),Object(s.jsx)("div",{className:"btn-container",style:{display:this.state.confirmVROpen?"none":"flex"},children:Object(s.jsx)("div",{className:"btn btn-confirm-vr",onClick:this.btnVRConfirmClicked,children:"J\u016bs \u012feinate \u012f 360\xb0 VRT"})})]})]})})]})}}]),i}(a.Component));var v=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"website-wrapper",children:[Object(s.jsx)(j,{}),Object(s.jsx)(b,{}),Object(s.jsx)(p,{})]})})},O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),s(e),a(e),n(e),c(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.012e0362.chunk.js.map