(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{730:function(e,t,n){},731:function(e,t,n){},732:function(e,t,n){},738:function(e,t,n){"use strict";n.r(t);var a=n(126),r=n(7),i=n(9),s=n(11),o=n(10),c=n(12),l=n(0),u=n.n(l),p=n(8),d=n.n(p),h=n(55),k=n(5),m=n.n(k),f=n(39),v=n(32),S=n.n(v),b=n(73),E=n.n(b),g=n(475),w=n.n(g),y=n(735),C=n(14),j=n.n(C),O=n(24),P=n(423),M=n(401),R=n(29),x=n(400),N=(n(730),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).loadContent=function(){var e=n.props.info;if(e){var t=e.stickers;if(t){var a=x.a.getStore();t.forEach(function(e){Object(M.q)(a,e,null)})}}},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return this.props.info!==e.info}},{key:"componentDidMount",value:function(){this.loadContent()}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.info,a=e.onSelect;if(!n)return null;var r=n.title,i=n.stickers.map(function(e){return u.a.createElement("div",{className:d()("sticker-set-item",t.stickerSetItem),key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:function(){return a(e)}},u.a.createElement(P.a,{key:e.sticker.id,className:"sticker-set-item-sticker",sticker:e,displaySize:R.V-6,blur:!1}))});return u.a.createElement("div",{className:"sticker-set"},u.a.createElement("div",{className:d()("sticker-set-title",t.title)},u.a.createElement("span",null,r)),u.a.createElement("div",{className:"sticker-set-content"},i))}}]),t}(u.a.Component)),U=m()(function(e){return{title:{background:"dark"===e.palette.type?e.palette.background.paper:"#FFFFFF",color:e.palette.text.primary},stickerSetItem:{width:R.V,height:R.V,padding:3,boxSizing:"border-box","&:hover":{background:"dark"===e.palette.type?"#303030":"#f4f4f4",borderRadius:6}}}})(N),L=n(480),I=n(2),D=(n(731),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).loadContent=Object(O.a)(j.a.mark(function e(){var t,a,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.stickerSets){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,I.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 5:return t=e.sent,a=[],t.sets.slice(0,5).forEach(function(e){a.push(I.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=10,Promise.all(a);case 10:r=e.sent,n.setsLength=r.length,n.setState({stickerSets:t,sets:r});case 13:case"end":return e.stop()}},e)})),n.handleScroll=Object(O.a)(j.a.mark(function e(){var t,a,r,i,s,o,c,l,u;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.scrollRef.current,!n.loadingChunk){e.next=3;break}return e.abrupt("return");case 3:if(a=!1,t.scrollTop+t.offsetHeight>=t.scrollHeight-400&&(a=!0),a){e.next=7;break}return e.abrupt("return",!1);case 7:if(r=n.state,i=r.sets,(s=r.stickerSets).sets.length!==i.length){e.next=10;break}return e.abrupt("return");case 10:return n.loadingChunk=!0,o=Date.now(),c=[],s.sets.slice(n.setsLength,n.setsLength+5).forEach(function(e){c.push(I.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=16,Promise.all(c).finally(function(){return n.loadingChunk=!1});case 16:l=e.sent,n.setsLength+=l.length,console.log("StickersPicker.handleScroll",Date.now()-o,i.concat(l),s),u=i.concat(l),n.setState({sets:u});case 21:case"end":return e.stop()}},e)})),n.getItems=function(e){var t=[];return e.forEach(function(e){e.stickers.forEach(function(e){t.push(e)})}),t},n.loadPreviewContent=function(e){var t=n.state.sets,a=n.getItems(t).find(function(t){return t.sticker.id===e});if(a){var r=x.a.getStore();Object(M.q)(r,a,null);I.a.send({"@type":"getStickerEmojis",sticker:{"@type":"inputFileId",id:e}}).then(function(t){n.state.previewStickerId===e&&n.setState({previewStickerEmojis:t.emojis.join(" ")})})}},n.handleMouseOver=function(e){},n.handleMouseOut=function(e){},n.handleMouseDown=function(e){var t=Number(e.target.dataset.stickerId);if(t){n.mouseDownStickerId=t;var a=Date.now();return n.setState({previewStickerId:t,timestamp:a,showPreview:!1,cancelSend:!1}),setTimeout(function(){n.state.timestamp===a&&n.setState({showPreview:!0,cancelSend:!0})},500),n.loadPreviewContent(t),n.mouseDown=!0,document.addEventListener("mouseup",n.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1}},n.handleMouseUp=function(){n.setState({previewStickerId:0,timestamp:0,showPreview:!1}),n.mouseDown=!1,document.removeEventListener("mouseup",n.handleMouseUp)},n.scrollRef=u.a.createRef(),n.state={stickerSets:null,sets:[],position:0},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return t.stickerSets!==this.state.stickerSets||t.sets!==this.state.sets||t.position!==this.state.position}},{key:"render",value:function(){var e=this.props.onSelect,t=this.state,n=t.stickerSets,a=t.sets,r=t.previewStickerId,i=t.showPreview,s=t.previewStickerEmojis;t.position;if(!n)return null;if(!a)return null;if(!a.length)return null;var o=a.map(function(t){return u.a.createElement(U,{key:t.id,info:t,onSelect:e})}),c=this.getItems(a).find(function(e){return e.sticker.id===r});return u.a.createElement("div",{className:"stickers-picker"},u.a.createElement("div",{className:"stickers-picker-header"}),u.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-scroll",onScroll:this.handleScroll},o),Boolean(c)&&i&&u.a.createElement("div",{className:"sticker-set-dialog-preview"},u.a.createElement("div",{className:"sticker-set-dialog-preview-emoji"},s),u.a.createElement(L.a,{sticker:c,displaySize:R.U})))}}]),t}(u.a.Component)),T=n(28),F=n(89),B=(n(732),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).onClientUpdateChange=function(e){n.picker=null},n.handleButtonMouseEnter=function(e){n.buttonEnter=!0,setTimeout(function(){n.buttonEnter&&n.updateAnchorEl(!0)},R.d)},n.handleButtonMouseLeave=function(){n.buttonEnter=!1,setTimeout(function(){n.paperEnter||n.buttonEnter||n.updateAnchorEl(!1)},R.d)},n.handlePaperMouseEnter=function(){n.paperEnter=!0},n.handlePaperMouseLeave=function(){n.paperEnter=!1,setTimeout(function(){n.paperEnter||n.buttonEnter||n.updateAnchorEl(!1)},R.d)},n.updateAnchorEl=function(e){n.setState({open:e})},n.switchPopover=function(){n.updateAnchorEl(!n.state.open)},n.handleEmojiClick=function(){n.setState({tab:0})},n.handleStickersClick=function(){n.stickersPickerRef.current.loadContent(),n.setState({tab:1})},n.handleStickerSend=function(e){e&&(I.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),n.updateAnchorEl(null))},n.state={open:!1,tab:0},n.stickersPickerRef=u.a.createRef(),n.popoverRef=u.a.createRef(),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){T.a.on("clientUpdateThemeChange",this.onClientUpdateChange),F.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"componentWillUnmount",value:function(){T.a.removeListener("clientUpdateThemeChange",this.onClientUpdateChange),F.a.removeListener("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.theme,r=e.t,i=this.state,s=i.open,o=i.tab;if(s&&!this.picker){var c={search:r("Search"),notfound:r("NotEmojiFound"),skintext:r("ChooseDefaultSkinTone"),categories:{search:r("SearchResults"),recent:r("Recent"),people:r("SmileysPeople"),nature:r("AnimalsNature"),foods:r("FoodDrink"),activity:r("Activity"),places:r("TravelPlaces"),objects:r("Objects"),symbols:r("Symbols"),flags:r("Flags"),custom:r("Custom")}};this.picker=u.a.createElement(y.a,{set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:n.palette.primary.dark,i18n:c,style:{width:338,overflowX:"hidden"}}),this.stickersPicker=u.a.createElement(D,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend})}return u.a.createElement(u.a.Fragment,null,u.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===n.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),u.a.createElement(E.a,{className:t.iconButton,"aria-label":"Emoticon",onClick:this.switchPopover,onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},u.a.createElement(w.a,null)),u.a.createElement("div",{className:d()(t.pickerRoot,Object(a.a)({},t.pickerRootOpened,s)),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},u.a.createElement("div",{className:"emoji-picker-header"},u.a.createElement(S.a,{color:0===o?"primary":"default",className:t.headerButton,onClick:this.handleEmojiClick},"EMOJI"),u.a.createElement(S.a,{color:1===o?"primary":"default",className:t.headerButton,onClick:this.handleStickersClick},"STICKERS")),u.a.createElement("div",{className:d()("emoji-picker-content",{"emoji-picker-content-stickers":1===o})},this.picker,this.stickersPicker)))}}]),t}(u.a.Component)),A=Object(h.a)(m()(function(e){return{iconButton:{margin:"8px 0px"},headerButton:{borderRadius:0,flex:"50%"},pickerRoot:{width:338,overflowX:"hidden",backgroundColor:e.palette.background.paper,color:e.palette.text.primary,borderRadius:e.shape.borderRadius,boxShadow:e.shadows[8],position:"absolute",bottom:80,display:"none"},pickerRootOpened:{display:"block"}}},{withTheme:!0}),Object(f.c)());t.default=A(B)}}]);
//# sourceMappingURL=5.a423a6aa.chunk.js.map