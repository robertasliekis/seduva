(this.webpackJsonpseduva=this.webpackJsonpseduva||[]).push([[0],{27:function(e,a,t){},28:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var i=t(1),s=t(5),o=t.n(s),n=t(13),r=t.n(n),d=(t(27),t(2)),l=t(6),c=t(3),u=t(4),m=(t(28),t(10)),p=function(e){return{type:"PLAY_BACKGROUND_AUDIO",payload:e}},v=function(e){return{type:"SET_MODEL_LOADED",payload:e}},g=t.p+"static/media/audio_background.72a221e0.mp3",k=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(d.a)(this,t),(i=a.call(this,e)).btnPlayBackgroundAudio=function(){var e=i.props.backgroundAudioPlaying;e?i.audioBackgroundRef.current.pause():(i.audioBackgroundRef.current.play(),i.audioBackgroundRef.current.volume=.5),i.props.playBackgroundAudio(!e)},i.audioBackgroundRef=o.a.createRef(),i}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,a){this.props.backgroundAudioPlaying!==e.backgroundAudioPlaying&&(this.props.backgroundAudioPlaying||this.audioBackgroundRef.current.pause())}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{className:"btn btn-audio",onClick:this.btnPlayBackgroundAudio,children:this.props.backgroundAudioPlaying?Object(i.jsx)("div",{className:"icon icon-audio-pause"}):Object(i.jsx)("div",{className:"icon icon-audio-play"})}),Object(i.jsx)("audio",{loop:!0,ref:this.audioBackgroundRef,children:Object(i.jsx)("source",{src:g})})]})}}]),t}(s.Component),j={playBackgroundAudio:p},b=Object(m.b)((function(e){return{backgroundAudioPlaying:e.playBackgroundAudio.backgroundAudioPlaying}}),j)(k),h=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(d.a)(this,t),(i=a.call(this,e)).readMoreLtClicked=function(){var e=i.state.readMoreLtClicked;i.setState({readMoreLtClicked:!e}),i.textBoxLtRef.current.style.height="".concat(e?i.textPart1Ref.current.clientHeight:i.textPart1Ref.current.clientHeight+i.textPart2Ref.current.clientHeight,"px")},i.readMoreEnClicked=function(){var e=i.state.readMoreEnClicked;i.setState({readMoreEnClicked:!e}),i.textBoxEnRef.current.style.height="".concat(e?i.textPart3Ref.current.clientHeight:i.textPart3Ref.current.clientHeight+i.textPart4Ref.current.clientHeight,"px")},i.state={readMoreLtClicked:!1,readMoreEnClicked:!1},i.textBoxLtRef=o.a.createRef(),i.textBoxEnRef=o.a.createRef(),i.textPart1Ref=o.a.createRef(),i.textPart2Ref=o.a.createRef(),i.textPart3Ref=o.a.createRef(),i.textPart4Ref=o.a.createRef(),i}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.textBoxLtRef.current.style.height="".concat(this.textPart1Ref.current.clientHeight,"px"),this.textBoxEnRef.current.style.height="".concat(this.textPart3Ref.current.clientHeight,"px")}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"website-info",children:[Object(i.jsxs)("div",{className:"website-info-top",children:[Object(i.jsxs)("div",{className:"text-box",children:[Object(i.jsx)("h1",{children:"Virtualus \u0160eduvos turas:"}),Object(i.jsx)("h1",{children:"\u201eKelion\u0117 laiku\u201c"})]}),Object(i.jsx)("a",{className:"logo-image",href:"https://www.seduvoskultura.lt/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("div",{className:"logo-text",style:{display:"none"},children:"text"})})]}),Object(i.jsxs)("div",{className:"text-boxes-container",children:[Object(i.jsxs)("div",{className:"text-box text-box-lt",children:[Object(i.jsx)("h1",{children:"Apie projekt\u0105:"}),Object(i.jsxs)("div",{className:"text",ref:this.textBoxLtRef,children:[Object(i.jsx)("div",{className:"text-part1 text-part",ref:this.textPart1Ref,children:"Projektas \u0160eduvos virtualus turas \u201eKelion\u0117 laiku\u201c kvie\u010dia keliauti trimis skirtingais mar\u0161rutais: \u201e\u0160eduvos istorija\u201c, \u201e\u0160eduvos legendos\u201c ir \u201e\u0160eduva dabar\u201c. Pirmame mar\u0161rute \u201e\u0160eduvos istorija\u201c susipa\u017einsite su miesto istorija, ap\u017ei\u016br\u0117site Daugyven\u0117s muziejaus \u0160eduvos kra\u0161totyros skyriaus rinkini\u0173 3D parod\u0105, i\u0161girsite \u0160eduvos Babos \u2013 Emilijos Brajinskien\u0117s pasakojim\u0105 apie miesto kilm\u0119."}),Object(i.jsx)("div",{className:"text-part2 text-part",ref:this.textPart2Ref,children:"Mar\u0161rute \u201eLegendos\u201c pamatysite 7 \u017eymiausias ir \u012fdomiausias \u0160eduvos kra\u0161to legendas, kurias vizualizuos bei \u012fgarsins profesional\u016bs ir \u017einomi Valstybinio \u0160iauli\u0173 dramos teatro aktoriai: Sigitas Jakubauskas, Monika \u0160altyt\u0117-Dovydavi\u010dien\u0117, Nomeda B\u0117\u010diut\u0117, Severinas Norgaila bei \u201e\u0160eduvos bernai\u201c. Tre\u010diajame mar\u0161rute \u201e\u0160eduva dabar\u201c keliausite po \u0160eduvos lankytinas vietas bei kult\u016bros paveldo objektus 360\xb0 kampu."})]}),Object(i.jsx)("div",{className:"btn btn-read-more",onClick:this.readMoreLtClicked,children:this.state.readMoreLtClicked?"Skaityti ma\u017eiau":"Skaityti daugiau"})]}),Object(i.jsxs)("div",{className:"text-box text-box-en",children:[Object(i.jsx)("h1",{children:"About project:"}),Object(i.jsxs)("div",{className:"text",ref:this.textBoxEnRef,children:[Object(i.jsx)("div",{className:"text-part3 text-part",ref:this.textPart3Ref,children:'The project \u0160eduva virtual Tour "Journey in Time" invites you to travel on three different routes: "History of \u0160eduva", "Legends of \u0160eduva" and "\u0160eduva nowadays". On the first route "History of \u0160eduva" you will get acquainted with the history of the town, see a 3D exhibition of \u0160eduva Local Ethnographic Department Daugyvene Museum\u2018s collections , listen to the story of \u0160eduva\u2018s Baba - Emilija Brajinskien\u0117 about the origin of the city.'}),Object(i.jsx)("div",{className:"text-part4 text-part",ref:this.textPart4Ref,children:'On the route "Legends" you will see 7 most famous and interesting legends of \u0160eduva region, which will be visualized and dubbed by professional and well-known actors of \u0160iauliai State Drama Theater: Sigitas Jakubauskas, Monika \u0160altyt\u0117-Dovydavi\u010dien\u0117, Nomeda B\u0117\u010diut\u0117, Severinas Norgaila and "\u0160eduva\u2018s Guys"folk group. On the third route "\u0160eduva nowadays" you will travel around the sights and cultural heritage objects of \u0160eduva at a 360 \xb0 angle.'})]}),Object(i.jsx)("div",{className:"btn btn-read-more",onClick:this.readMoreEnClicked,children:this.state.readMoreEnClicked?"Read less":"Read more"})]})]})]})}}]),t}(s.Component),y=t(0),f=t(14),x=t(15),O=t.n(x),R=[[[0,0,0],[0,.7,0],[1.1,1.1,1.1]],[[0,0,0],[0,.7,0],[1.2,1.2,1.2]],[[0,0,0],[0,.2,0],[1.5,1.5,1.5]],[[0,0,0],[0,90,0],[1.5,1.5,1.5]],[[0,0,0],[0,90,0],[1.5,1.5,1.5]],[[0,0,0],[0,1,0],[1.3,1.3,1.3]],[[0,0,0],[0,.7,0],[1.2,1.2,1.2]],[[0,0,0],[0,1.3,0],[1,1,1]],[[0,0,0],[0,3,0],[1.5,1.5,1.5]],[[0,0,0],[0,.9,0],[1.5,1.5,1.5]]],C=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(d.a)(this,t),(i=a.call(this,e)).start=function(){i.frameId||(i.frameId=requestAnimationFrame(i.animate))},i.stop=function(){cancelAnimationFrame(i.frameId)},i.animate=function(){var e;switch(i.props.containerType){case"gallery":e=.005;break;case"audio":e=.001}i.model&&(i.model.rotation.y+=e),i.renderScene(),i.frameId=window.requestAnimationFrame(i.animate)},i.renderScene=function(){i.renderer&&i.renderer.render(i.scene,i.camera)},i.state={modelLoading:!1},i}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,a=this.mount.clientHeight;this.scene=new y.Scene({alpha:!0}),this.renderer=new y.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(e,a),this.mount.appendChild(this.renderer.domElement),this.addCamera(e,a),this.addLights(),this.addModels(),this.renderScene(),this.start()}},{key:"setModelTransforms",value:function(){var e=this,a=this.model;[a.position,a.rotation,a.scale].map((function(a,t){return a.x=R[e.props.contentIndex-1][t][0],a.y=R[e.props.contentIndex-1][t][1],a.z=R[e.props.contentIndex-1][t][2],null}))}},{key:"addCamera",value:function(e,a){var t,i,s;switch(this.props.containerType){case"gallery":t=75,i=100,s=25;break;case"audio":t=50,i=20,s=0}this.camera=new y.PerspectiveCamera(t,e/a,.1,1e3),this.camera.position.z=i,this.camera.position.y=s,new O.a(this.camera,this.renderer.domElement).rotateSpeed=.4}},{key:"addLights",value:function(){var e=[];switch(this.props.containerType){case"gallery":e[0]=new y.PointLight("white",1,0),e[1]=new y.AmbientLight("white",.75,0),e[0].position.set(0,0,400),this.scene.add(e[0]),this.scene.add(e[1]);break;case"audio":e[0]=new y.AmbientLight("white",.75,0),this.scene.add(e[0])}}},{key:"addModels",value:function(){var e,a,t=this;switch(this.props.containerType){case"gallery":e="./models/model_".concat(this.props.contentIndex,".glb"),a="./textures/model_".concat(this.props.contentIndex,".jpg");break;case"audio":e="./models/sphere.glb",a="./images/panorama/Seduva_0".concat(this.props.contentIndex,".jpg")}var i=new y.LoadingManager;i.onStart=function(){t.props.setModelLoaded(!1)},i.onLoad=function(){t.props.setModelLoaded(!0)},i.onProgress=function(){},this.loader=new f.a,void 0!==e&&this.loader.load(e,(function(e){t.model=e.scene,t.setModelTransforms();var s=new y.TextureLoader(i).load(a);s.wrapS=y.RepeatWrapping,s.flipY=!1;var o=new y.MeshStandardMaterial({roughness:.7,map:s});o.side=y.DoubleSide,t.model.traverse((function(e){e.isMesh&&(e.material=o)})),t.scene.add(t.model)}),(function(e){}),(function(e){}))}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"model-view-container",ref:function(a){e.mount=a},children:Object(i.jsx)("div",{className:"loading-screen",style:{display:this.props.modelLoaded?"none":"flex"},children:Object(i.jsx)("div",{className:"icon"})})})}}]),t}(s.Component),S={setModelLoaded:v},w=Object(m.b)((function(e){return{modelLoaded:e.setModelLoaded.modelLoaded}}),S)(C),N=(s.Component,s.Component,[["\u0160eduvos istorija Daugyven\u0117s muziejaus \u0160eduvos kra\u0161totyros skyriaus rinkiniuose. 3D paroda.","1884 m. statytame Bencelio Blocho name, esan\u010diame V\u0117ri\u0161ki\u0173 gatv\u0117je, kadaise veik\u0117 od\u0173 perdirbimo \u012fmon\u0117. 1958 metais \u010dia buvo \u012fkurtas \u0160eduvos kra\u0161totyros muziejus, prad\u017eioje veik\u0119s visuomeniniais pagrindais. 1959\u20131998 m. \u0160eduvos kra\u0161totyros muziejaus ved\u0117ju buvo kra\u0161totyrininkas, muziejininkas Vytautas \u0160enauskas (1929\u20132007).\n    Atgimimo metais \u0160eduvos muziejus tapo Daugyven\u0117s kult\u016bros istorijos muziejaus - draustinio \u0160eduvos kra\u0161totyros skyriumi. Jam ir toliau vadovavo Vytautas \u0160enauskas. Muziejaus ekspozicijoje buvo rodomi archeologiniai radiniai, liaudies meno meistr\u0173 darbai, nuotraukos, archyviniai dokumentai, pinig\u0173, medali\u0173 ir ordin\u0173 kolekcijos, kiti vertingi eksponatai. Vertingi kunigaik\u0161\u010di\u0173 Giedrai\u010di\u0173 paveikslai, bei 1994 m. dailininko Boleslovo Plung\u0117s padovanoti tapybos darbai - paveiksl\u0173 kolekcija. \n    \u0160iuo metu visi muziejaus eksponatai saugomi Daugyven\u0117s kult\u016bros istorijos muziejaus - draustinio saugyklose."],["\u0160eduvos baba","Etnograf\u0117, Lietuvos \u0161viesuol\u0117 Emilija Brajinskien\u0117, dar vadinama \u0160eduvos Baba, gim\u0117 1930 m. Ji yra surinkusi vis\u0105 lietuvi\u0173 liaudies k\u016brybos lobyn\u0105, kuriame yra dainuojamoji tautosaka (dainos, raudos) ir sakytin\u0117 tautosaka (pasakos, sakm\u0117s, padavimai, nutikimai, m\u012fsl\u0117s, minkl\u0117s, patarl\u0117s, prie\u017eod\u017eiai, burtai, oracijos ir kt.). Emilija yra puiki pasakotoja,turinti fenomenali\u0105 atmint\u012f ir kalbanti \u0161eduvi\u0173 tarme."],["Legenda \u201eMal\u016bnas\u201c. Kod\u0117l mal\u016bno sparnai sukasi be v\u0117jo?",""],["Legenda \u201eVelnias ne Boba\u201c.",""],["\u0160eduvos ir Niauduvos vard\u0173 kilm\u0117.",""],["Legenda \u201e\u0160vento Petro rakteliai\u201c. Kod\u0117l rakta\u017eol\u0117 dar vadinama \u0160v. Petro rakteliais?",""],["Legenda \u201eKirkibala\u201c apie velnio monus.",""],["Legenda \u201eVakoni\u0161kio laum\u0117s\u201c.",""],["Legenda \u201e\u0160ni\u016brgalis\u201c apie u\u017ekeikt\u0105 lob\u012f.",""],["\u0160eduvos mal\u016bnas","\u0160eduvos mal\u016bno prad\u017eia \u2013 1905-ieji metai. Tada jis buvo prad\u0117tas statyti. Tarsi ka\u017ekokio u\u017ekeikimo persekiojimas, mal\u016bnas, dar nebaigtas statyti, u\u017esideg\u0117, buvo smarkiai apgriautas. Ta\u010diau mal\u016bnas niekada nebuvo u\u017emir\u0161tas \u2013 tarybiniais (1967 aisiais) metais jis tapo pasilinksminim\u0173 vieta \u2013 \u017emon\u0117s \u012f j\u012f plaukdavo kaip \u012f atlaidus. Kelet\u0105 met\u0173 mal\u016bnas buvo apleistas, paliktas likimo valiai.\n    Ta\u010diau 2000-aisiais metais tarsi i\u0161 naujo atgim\u0117. Mal\u016bnas v\u0117l gyvas ir puikuojasi, modamas sparnais atvykstantiems \u012f \u0160eduv\u0105!\n"],["\u0160eduvos \u0160v. Kry\u017eiaus Atradimo ba\u017eny\u010dia","Tai \u2013 seniausias \u0160eduvos kult\u016bros paveldo objektas ir vienas i\u0161 vertingiausi\u0173 Lietuvos sakralin\u0117s architekt\u016bros k\u016brini\u0173. Ba\u017eny\u010dia pastatyta XVII a. vid. Renesansin\u0117, turi baroko bruo\u017e\u0173, kry\u017eminio plano, su pusapskrite apside, \u017eemomis zakristijomis, dvibok\u0161t\u0117. Vidus \u2013 halinis, 3 nav\u0173, yra 5 altoriai. Skliautai cilindriniai. \u0160ventoriaus tvora \u2013 akmen\u0173 m\u016bro."],["Retromobiliai","Mobili istorin\u0117s, taip pat istorin\u0117s karin\u0117s technikos muziejaus \u201eRetromobile\u201c ekspozicija, kuri bet kuriuo momentu gali pajud\u0117ti i\u0161 vietos. \u0160eduvos muziejaus ekspozicija - ne\u012fkainojama: kiekviena priemon\u0117 yra visi\u0161ki originali iki pat variklio ir va\u017eiuokl\u0117s. Pats \u012fsp\u016bdingiausias - a\u0161tuoni\u0173 cilindr\u0173 galingasis amerikieti\u0161kasis \u201eKadilakas\u201c, pagamintas dar 1929 metais. Tai - tikra legenda. Lankytojams si\u016bloma pamatyti ne tik amerikieti\u0161k\u0105, bet ir voki\u0161k\u0105, \u010dekoslovaki\u0161k\u0105 ir, \u017einoma, sovietin\u0119 technik\u0105. Kiekvienas gali ne tik pasi\u017evalgyti, bet ir i\u0161girsti i\u0161sam\u0173 gido pasakojim\u0105.\n    \n    Kontaktai: el.p. info@retromobile.lt  tel. 868227122, 861737078, 868527479."],["U\u017eva\u017eiuojamieji namai \u2013 kar\u010dema. Aik\u0161t\u0117","Nuo 18 a. antros pus\u0117s prie \u0160eduvos Laisv\u0117s aik\u0161t\u0117s \u0161liejosi dideli, \u012fdom\u016bs savo architekt\u016bra ir planavimu pirkli\u0173 ir \u0161iaip pakeleivi\u0173 nakvyn\u0117s namai su arklid\u0117mis (U\u017eva\u017eiuojamieji namai). XVIII a. aik\u0161t\u0117s pakra\u0161ty stovin\u010diame pastate buvo galima pails\u0117ti, pernakvoti ir pakeisti arklius. Pastate buvo \u012frengtos stadalos, skirtos keliautoj\u0173 arkliams ir transporto priemon\u0117ms, kitam gale \u2013 patalpos keliautojams.\n    Per I-\u0105j\u012f pasaulin\u012f kar\u0105, 1915 m. pastatas sudeg\u0117. Buvo atstatyta tik gyvenamoji dalis ir gerokai pakeistas planas. Nakvyn\u0117s namai neteko senosios architekt\u016brin\u0117s i\u0161vaizdos.\n    Laisv\u0117s aik\u0161t\u0117je 2007 m. pastatytas \u0160iauli\u0173 Prisik\u0117limo apygardos partizanams skirtas paminklas - SAKALAS. Paminklo autoriai: skulptorius Romanas Kazlauskas, architektai Ar\u016bnas Eduardas Paslaitis ir Viktorija Paslaityt\u0117."],["\u017dyd\u0173 kapin\u0117s","Kapin\u0117se, esan\u010diose \u017dvej\u0173 gatv\u0117s gale iki antrojo pasaulinio karo buvo laidojami mieste gyven\u0119 \u017eydai. Pirmasis laidojimas \u017eymimas 1820 m. data.\n    2013 \u2013 2018 m. \u0160eduvos \u017eyd\u0173 memorialinis fondas atliko kapini\u0173 restauracijos darbus, \u012fvairius tyrin\u0117jimo darbus, surado ir su\u017eym\u0117jo mirusi\u0173j\u0173 palaidojimo vietas.\n    \u0160alia \u0160eduvos \u017dyd\u0173 kapini\u0173 2018 m. prad\u0117tos analog\u0173 pasaulyje neturin\u010dio projekto \u2013 moderniausiomis technologijomis paremto litvak\u0173 miesteli\u0173 istorijos, kult\u016bros bei atminimo muziejaus \u201eDing\u0119s \u0160tetlas\u201c (\u201eThe Lost Shtetl\u201c) statybos. Projekto fundatorius \u0160veicarijoje gyvenantis verslininkas Ivan Glasenberg gim\u0119s Piet\u0173 Afrikoje, kurio seneliai kil\u0119 i\u0161 \u0160eduvos. \u010cia bus atkurtas ka\u017ekada vienos did\u017eiausi\u0173 Europoje \u017eyd\u0173 diasporos miesteli\u0173 gyvenimas."],["Pastatas",""],["Pastatas",""],["Stotis",""]]),L=["Telefono komutatorius. Skirtas ry\u0161i\u0173 kanalams sujungti. 29 linij\u0173 su 8 svirtiniais perjungikliais ir 29 lizdais. Pagamintas SSRS XX a. vidurys.","Fotoaparatas. Pagamintas vokie\u010di\u0173 firmos Vogtlander XX a. pirmoje pus\u0117je.","\u012emovinis ietigalis su karklo lapo formos plunksna. V \u2013 VIII am\u017eius po Kr. Rastas \u0160eduvos apylink\u0117se.","Kardas su Rusijos imperijos caro Aleksandro III monograma. Rusijos imperijos 1881 met\u0173 modelio drag\u016bn\u0173 karininko kardas. Rastas \u0160eduvoje.","Siauraa\u0161menis \u012fmovinis kirvis. III \u2013 V am\u017eius po Kr. Rastas \u0160eduvos apylink\u0117se.","Lazda. Dro\u017eta i\u0161 obels med\u017eio. 1936 metais j\u0105 i\u0161dro\u017e\u0117 \u0160eduvoje gyven\u0119s liaudies meistras Jonas Les\u010dinskas.","Lygintuvas-laidyn\u0117. XX a. pirma pus\u0117. Rastas \u0160eduvoje.","Puodelis. Sidabrinis. Pagamintas Maskvoje Ivano Sve\u0161nikovo fabrike 1881 metais. Rastas \u0160eduvoje K\u0117daini\u0173 gatv\u0117je.","Nepriklausomos Lietuvos kaimo seni\u016bno \u017eenklas. Skydelyje pavaizduota krivul\u0117. XX a. pirma pus\u0117.","\u0160eduvos miesto rotu\u0161\u0117s spaudas. Naudotas carin\u0117s Rusijos okupacijos laikais. XX a. pr. Rastas \u0160eduvoje ver\u010diant sen\u0105 nam\u0105 Laisv\u0117s aik\u0161t\u0117je."],P=[[["\u0160eduvos istorija","history"],["\u0160eduvos legendos","legends"],["\u0160eduva dabar","present"]],[["history","gallery",1],["history","video",0],["legends","video",1],["legends","video",2],["legends","video",3],["legends","video",4],["legends","video",5],["legends","video",6],["legends","video",7],["present","audio",0],["present","audio",1],["present","audio",2],["present","audio",3],["present","audio",4],["passive","",1],["passive","",2],["passive","",3]],["Seduva_1","Seduva_2_1","Seduva_3_2","Seduva_4","Seduva_5"],["seduvos istorija - icon 1-1-01.png","seduvos istorija - icon 2-1-01.png","seduvos legendos 1-1-01.png","seduvos legendos 2-1-01.png","seduvos legendos 3-1-01.png","seduvos legendos 4-1-01.png","seduvos legendos 5-1-01.png","seduvos legendos 6-1-01.png","seduvos legendos 7-1-01.png","seduva dabar 1-1-01.png","seduva dabar 2-1-01.png","seduva dabar 3-1-01.png","seduva dabar 4-1-01.png","seduva dabar 6-1-01.png","seduva dabar 5-1-01.png","seduva dabar 7-1-01.png","seduva dabar 8-1-01.png"],["seduvos istorija - icon 1-2-01.png","seduvos istorija - icon 2-2-01.png","seduvos legendos 1-2-01.png","seduvos legendos 2-2-01.png","seduvos legendos 3-2-01.png","seduvos legendos 4-2-01.png","seduvos legendos 5-2-01.png","seduvos legendos 6-2-01.png","seduvos legendos 7-2-01.png","seduva dabar 1-2-01.png","seduva dabar 2-2-01.png","seduva dabar 3-2-01.png","seduva dabar 4-2-01.png","seduva dabar 6-2-01.png","seduva dabar 5-2-01.png","seduva dabar 7-2-01.png","seduva dabar 8-2-01.png"],["seduvos istorija - icon 1-3-01.png","seduvos istorija - icon 2-3-01.png","seduvos legendos 1-3-01.png","seduvos legendos 2-3-01.png","seduvos legendos 3-3-01.png","seduvos legendos 4-3-01.png","seduvos legendos 5-3-01.png","seduvos legendos 6-3-01.png","seduvos legendos 7-3-01.png","seduva dabar 1-3-01.png","seduva dabar 2-3-01.png","seduva dabar 3-3-01.png","seduva dabar 4-3-01.png","seduva dabar 6-3-01.png","seduva dabar 5-3-01.png","seduva dabar 7-3-01.png","seduva dabar 8-3-01.png"]],T=t.p+"static/media/babos_video.679f2ea8.mp4",I=t.p+"static/media/legendos_video_02.f60b18a5.mp4",A=t.p+"static/media/legendos_video_01.de5430a9.mp4",_=t.p+"static/media/legendos_video_03.4c0ddfcf.mp4",M=t.p+"static/media/legendos_video_07.47c8349f.mp4",B=t.p+"static/media/legendos_video_04.7ed6e197.mp4",E=t.p+"static/media/legendos_video_05.3b2127a2.mp4",D=t.p+"static/media/legendos_video_06.36331065.mp4",z=t.p+"static/media/audio_malunas.29f644ca.mp3",H=t.p+"static/media/audio_baznycia.31f21a20.mp3",V=t.p+"static/media/audio_retromobiliai.738a67fb.mp3",K=t.p+"static/media/audio_karcema.9b43efce.mp3",W=t.p+"static/media/audio_kapines.60a82e7f.mp3",X=[T,I,A,_,M,B,E,D],F=[z,H,V,K,W],J=P[0],U=P[1],G=P[2],q=P[3],Y=P[4],$=P[5],Q=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(d.a)(this,t),(i=a.call(this,e)).mouseEnterCategory=function(e){i.setState({categoryTypeHovered:e})},i.mouseLeaveCategory=function(){i.setState({categoryTypeHovered:""})},i.mouseClickCategory=function(e,a){i.setState({categoryTypeClicked:e,categoryRef:a})},i.openContainerClicked=function(e,a,t){""===i.state.containerType?(i.setState({containerType:e,containerIndex:a}),"audio"===e?(i.setState({mediaRef:i.audioAboutRef,audioIndex:t,modelSelected:t}),i.props.playBackgroundAudio(!1)):"video"===e&&i.setState({mediaRef:i.videoAboutRef,videoIndex:t})):""!==i.state.containerType&&i.setState({containerType:"",containerIndex:0}),i.setState({mediaPlayState:!1}),void 0!==t&&i.setState({contentIndex:t}),void 0===e&&(i.videoAboutRef.current.pause(),i.videoAboutRef.current.currentTime=0,i.audioAboutRef.current.pause(),i.audioAboutRef.current.currentTime=0),i.setState({fullScreenClicked:!1,modelSelected:1}),i.renderModelView()},i.buttonPlayClickedHandler=function(e){var a=i.state.mediaPlayState;i.setState({mediaPlayState:!a}),i.props.playBackgroundAudio(!1),a?e.current.pause():e.current.play()},i.nextModelClicked=function(){10!==i.state.modelSelected&&i.setState({modelSelected:i.state.modelSelected+1}),i.renderModelView()},i.previousModelClicked=function(){1!==i.state.modelSelected&&i.setState({modelSelected:i.state.modelSelected-1}),i.renderModelView()},i.btnVRConfirmClicked=function(){i.setState({confirmVROpen:!0,containerType:""})},i.fullScreenClicked=function(){var e=i.state.fullScreenClicked;i.setState({fullScreenClicked:!e}),i.renderModelView()},i.state={categoryTypeHovered:"",categoryTypeClicked:"",categoryRef:"",containerType:"",containerIndex:0,contentIndex:1,galleryImageIndex:0,confirmVROpen:!1,scrollPosition:0,mouseEnterMap:!0,mediaPlayState:!1,mediaRef:void 0,videoIndex:0,audioIndex:0,modelSelected:1,fullScreenClicked:!1,clickCount:0,browserName:""},i.categoriesRefs={},i.logoButtonRefs={},i.logoInnactiveRefs={},i.logoHoveredRefs={},i.logoClickedRefs={},i.mediaScreenRef=o.a.createRef(),i.videoAboutRef=o.a.createRef(),i.audioAboutRef=o.a.createRef(),i}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,a){if(this.state.categoryTypeHovered!==a.categoryTypeHovered)for(var t=0;t<U.length;t++)this.logoHoveredRefs[t].style.opacity=0,""!==this.state.categoryTypeHovered?this.logoHoveredRefs[t].classList.contains("logo-".concat(this.state.categoryTypeHovered))&&(this.logoHoveredRefs[t].style.opacity=1):this.logoHoveredRefs[t].style.opacity=0;if(this.state.categoryTypeClicked!==a.categoryTypeClicked)for(var i=0;i<U.length;i++){this.logoClickedRefs[i].style.opacity=0;for(var s=0;s<3;s++)this.categoriesRefs[s].classList.remove("btn-border-".concat(J[s][1]));this.state.categoryRef.classList.add("btn-border-".concat(this.state.categoryTypeClicked)),this.logoClickedRefs[i].classList.contains("logo-".concat(this.state.categoryTypeClicked))?(this.logoInnactiveRefs[i].style.opacity=0,this.logoHoveredRefs[i].style.opacity=0,this.logoClickedRefs[i].style.opacity=1,this.logoClickedRefs[i].style.pointerEvents="auto",this.logoClickedRefs[i].classList.add("logo-animation"),this.logoButtonRefs[i].classList.add("btn-active")):(this.logoInnactiveRefs[i].style.opacity=1,this.logoClickedRefs[i].style.opacity=0,this.logoClickedRefs[i].style.pointerEvents="none")}this.props.modelLoaded!==e.modelLoaded&&!0===this.props.modelLoaded&&"audio"===this.state.containerType&&(console.log("audio play"),this.audioAboutRef.current.play())}},{key:"componentDidMount",value:function(){var e="";e=navigator.vendor.match(/google/i)?"chrome/blink":navigator.vendor.match(/apple/i)?"safari/webkit":navigator.userAgent.match(/firefox\//i)?"firefox/gecko":navigator.userAgent.match(/edge\//i)?"edge/edgehtml":navigator.userAgent.match(/trident\//i)?"ie/trident":navigator.userAgent+"\n"+navigator.vendor,this.setState({browserName:e})}},{key:"renderModelView",value:function(){var e=this.state.clickCount;this.setState({clickCount:e+1})}},{key:"render",value:function(){var e=this,a=this.state.fullScreenClicked?"window-full-screen":"";return Object(i.jsxs)("div",{className:"interactive-map-section",children:[Object(i.jsxs)("div",{className:"map-container",children:[Object(i.jsxs)("div",{className:"map-images-container",children:[Object(i.jsx)("div",{className:"main-map-image"}),Object(i.jsx)("div",{className:"map-icons-container",children:U.map((function(a,t){return Object(i.jsx)("div",{ref:function(a){e.logoButtonRefs[t]=a},className:"btn btn-".concat(a[0]),children:Object(i.jsxs)("div",{className:"logo-wrapper",children:[Object(i.jsx)("div",{ref:function(a){e.logoInnactiveRefs[t]=a},className:"logo logo-".concat(a[0]," logo-innactive"),style:{backgroundImage:'url("./images/'.concat(q[t],'")')}}),Object(i.jsx)("div",{ref:function(a){e.logoHoveredRefs[t]=a},className:"logo logo-".concat(a[0]," logo-hovered"),style:{backgroundImage:'url("./images/'.concat(Y[t],'")')}}),Object(i.jsx)("div",{onClick:function(){e.openContainerClicked(a[1],t,a[2])},ref:function(a){e.logoClickedRefs[t]=a},className:"logo logo-".concat(a[0]," logo-clicked"),style:{backgroundImage:'url("./images/'.concat($[t],'")')}})]})},"".concat(a[0]).concat(t))}))})]}),Object(i.jsxs)("div",{className:"categories",children:[Object(i.jsx)("div",{className:"text-container",children:"Rinkis kategorij\u0105:"}),Object(i.jsx)("div",{className:"buttons-container",children:J.map((function(a,t){return Object(i.jsxs)("div",{className:"btn btn-".concat(a[1]),ref:function(a){e.categoriesRefs[t]=a},onMouseEnter:function(){e.mouseEnterCategory(a[1])},onMouseLeave:e.mouseLeaveCategory,onClick:function(){e.mouseClickCategory(a[1],e.categoriesRefs[t])},children:[Object(i.jsx)("div",{className:"circle"}),Object(i.jsx)("p",{children:a[0]})]},"key".concat(t))}))})]})]}),Object(i.jsxs)("div",{className:"modal-window-container window-".concat(this.state.containerType),style:{display:""!==this.state.containerType?"flex":"none"},children:[Object(i.jsxs)("div",{className:"window-content",style:{display:"virtual-reality"!==this.state.containerType&&"model-view"!==this.state.containerType?"flex":"none"},children:[Object(i.jsxs)("div",{className:"content-top "+a,children:[Object(i.jsxs)("div",{className:"media-screen",style:{display:"audio"===this.state.containerType||"video"===this.state.containerType?"flex":"none"},children:[Object(i.jsxs)("div",{className:"video-container",style:{display:"video"===this.state.containerType?"flex":"none"},children:[Object(i.jsx)("video",{ref:this.videoAboutRef,children:Object(i.jsx)("source",{src:X[this.state.videoIndex],type:"video/mp4"})},this.state.videoIndex),Object(i.jsx)("div",{className:"btn btn-play",onClick:function(){e.buttonPlayClickedHandler(e.state.mediaRef)},style:{display:this.state.mediaPlayState?"none":"flex"}}),Object(i.jsx)("div",{className:"btn btn-play btn-pause",onClick:function(){e.buttonPlayClickedHandler(e.state.mediaRef)},style:{display:this.state.mediaPlayState?"flex":"none"}})]}),Object(i.jsxs)("div",{className:"panorama-view-wrapper model-view-wrapper",style:{display:"audio"===this.state.containerType?"flex":"none"},children:[Object(i.jsx)("iframe",{src:"http://panorama.seduvoskultura.lt/#media-name=".concat(G[this.state.audioIndex]),title:"virtual tour",frameBorder:"0",allowFullScreen:!0,style:{border:"2px solid yellow"}},"iframe".concat(this.state.containerType)),Object(i.jsx)("audio",{ref:this.audioAboutRef,children:Object(i.jsx)("source",{src:F[this.state.audioIndex],type:"audio/mp3"})})]},"panorama".concat(this.state.audioIndex)),"audio"!==this.state.containerType?Object(i.jsx)("div",{className:"btn-full-screen",onClick:this.fullScreenClicked}):""]}),Object(i.jsxs)("div",{className:"media-screen",ref:this.mediaScreenRef,style:{display:"gallery"===this.state.containerType?"flex":"none"},children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("div",{className:"btn btn-gallery btn-previous",onClick:this.previousModelClicked,style:{opacity:1===this.state.modelSelected?.6:1,cursor:1===this.state.modelSelected?"default":"pointer",pointerEvents:1===this.state.modelSelected?"none":"auto"}}),Object(i.jsx)("div",{className:"btn btn-gallery btn-next",onClick:this.nextModelClicked,style:{opacity:10===this.state.modelSelected?.6:1,cursor:10===this.state.modelSelected?"default":"pointer",pointerEvents:10===this.state.modelSelected?"none":"auto"}})]}),Object(i.jsxs)("div",{className:"model-view-wrapper",children:[Object(i.jsx)(w,{containerType:this.state.containerType,contentIndex:this.state.modelSelected,clickCount:this.state.clickCount},this.state.clickCount),Object(i.jsx)("div",{className:"model-description",children:L[this.state.modelSelected-1]})]}),Object(i.jsx)("div",{className:"btn-full-screen",onClick:this.fullScreenClicked})]}),Object(i.jsx)("div",{className:"btn btn-close",onClick:function(){e.openContainerClicked()}})]}),Object(i.jsx)("div",{className:"content-bottom",children:Object(i.jsxs)("div",{className:"legends"!==this.state.categoryTypeClicked?"content-bottom-wrapper":"content-bottom-wrapper content-bottom-wrapper-legends",children:[Object(i.jsx)("h1",{children:N[this.state.containerIndex][0]}),"legends"!==this.state.categoryTypeClicked?Object(i.jsx)("p",{children:N[this.state.containerIndex][1]}):""]})})]}),Object(i.jsxs)("div",{className:"window-content",style:{display:"virtual-reality"===this.state.containerType?"flex":"none"},children:[Object(i.jsx)("div",{className:"btn btn-close",onClick:this.openContainerClicked}),Object(i.jsx)("p",{children:"J\u016bs \u012feinate \u012f 360\xb0 tur\u0105"}),Object(i.jsx)("div",{className:"btn btn-confirm-vr",onClick:this.btnVRConfirmClicked,children:"Ok"})]}),Object(i.jsx)("div",{className:"window-content window-content-model-view",style:{display:"model-view"===this.state.containerType?"flex":"none"},children:Object(i.jsx)("div",{className:"btn btn-close",onClick:this.openContainerClicked})})]})]})}}]),t}(s.Component),Z={playBackgroundAudio:p,setModelLoaded:v},ee=Object(m.b)((function(e){return{modelLoaded:e.setModelLoaded.modelLoaded}}),Z)(Q),ae=["./images/partners/B_W_Au\u0161ros muziejus logo.png","./images/partners/B_W_Daugyvien\u0117s logo.png","./images/partners/B_W_Kurtuv\u0117n\u0173 parko logo.png","./images/partners/B_W_Retromobili\u0173 logo.png","./images/partners/B_W_\u0160eduvos mal\u016bno logo.png","./images/partners/B_W_\u0160eduvos \u017eyd\u0173 memorialinis fondas logo.png"],te=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"footer-wrapper",children:Object(i.jsxs)("div",{className:"footer-container",children:[Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("h1",{children:"Projekt\u0105 finansuoja"}),Object(i.jsx)("div",{className:"logo",style:{backgroundImage:'url("'.concat("./images/partners/B_W_LTK_Logotipas_Juodas.png",'")')}})]}),Object(i.jsxs)("div",{className:"column partners-container",children:[Object(i.jsx)("h1",{children:"Partneriai"}),Object(i.jsx)("div",{className:"partners-wrapper",children:ae.map((function(e,a){return Object(i.jsx)("div",{className:"partner",children:Object(i.jsx)("div",{className:"logo",style:{backgroundImage:'url("'.concat(e,'")')}})},a)}))})]})]})})}}]),t}(s.Component),ie=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"overflow-wrapper",children:[Object(i.jsxs)("div",{className:"website-wrapper",children:[Object(i.jsx)(b,{}),Object(i.jsx)(h,{}),Object(i.jsx)(ee,{}),Object(i.jsx)("iframe",{className:"test-frame",src:"https://gluk.synology.me/tours/urmas/#/",title:"virtual tour",frameBorder:"0",allowFullScreen:!0,style:{border:"2px solid yellow"}})]}),Object(i.jsx)(te,{})]})})}}]),t}(o.a.Component),se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(a){var t=a.getCLS,i=a.getFID,s=a.getFCP,o=a.getLCP,n=a.getTTFB;t(e),i(e),s(e),o(e),n(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=t(12),ne=t(9),re={mapEntered:!1},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"MOUSE_ENTER_MAP":return Object(ne.a)(Object(ne.a)({},e),{},{mapEntered:a.payload});default:return e}},le={scrollPosition:0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SCROLL_POSITION":return Object(ne.a)(Object(ne.a)({},e),{},{scrollPosition:a.payload});default:return e}},ue={backgroundAudioPlaying:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PLAY_BACKGROUND_AUDIO":return Object(ne.a)(Object(ne.a)({},e),{},{backgroundAudioPlaying:a.payload});default:return e}},pe={modelLoaded:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_MODEL_LOADED":return Object(ne.a)(Object(ne.a)({},e),{},{modelLoaded:a.payload});default:return e}},ge=Object(oe.b)({mouseEnterMap:de,setScrollPosition:ce,playBackgroundAudio:me,setModelLoaded:ve}),ke=Object(oe.c)(ge);r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m.a,{store:ke,children:Object(i.jsx)(ie,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),se()}},[[35,1,2]]]);
//# sourceMappingURL=main.e9f391c6.chunk.js.map