(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){},261:function(e,t,a){},288:function(e,t,a){e.exports=a(584)},294:function(e,t,a){},354:function(e,t,a){},384:function(e,t,a){e.exports=a.p+"static/media/lax1.27f0dfb6.jpeg"},385:function(e,t,a){e.exports=a.p+"static/media/lax4.a7db8c88.JPG"},386:function(e,t,a){e.exports=a.p+"static/media/lax3.ba14877f.jpeg"},390:function(e,t){},392:function(e,t){},429:function(e,t){},430:function(e,t){},565:function(e,t,a){},566:function(e,t,a){e.exports=a.p+"static/media/riptide_team.4b91a5a0.JPG"},578:function(e,t,a){},579:function(e,t,a){},580:function(e,t,a){},584:function(e,t,a){"use strict";a.r(t);a(115);var n=a(12),r=a(16),c=a(17),i=a(19),l=a(18),o=a(23),s=a(20),u=(a(290),a(65)),d=a(0),m=a.n(d),h=(a(294),u.b.SubMenu),p=u.b.ItemGroup,b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={current:"home"},a.handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.setState({current:e.key})}},{key:"render",value:function(){return m.a.createElement("div",{className:"navbar-wrapper"},m.a.createElement("div",{className:"navbar-logo"}),m.a.createElement(u.b,{className:"navbar",onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal",style:{borderBottom:"none"}},m.a.createElement(h,{title:m.a.createElement("span",{className:"submenu-title-wrapper"},m.a.createElement(n.a,{type:"camera"}),"Gallery")},m.a.createElement(p,{title:"Lacrosse"},m.a.createElement(u.b.Item,{key:"Riptide Orange"},"Riptide Orange"),m.a.createElement(u.b.Item,{key:"Riptide Grey"},"Riptide Grey")),m.a.createElement(p,{title:"Soccer"},m.a.createElement(u.b.Item,{key:"Starfires"},"Starfires"))),m.a.createElement(u.b.Item,{key:"about"},"About"),m.a.createElement(u.b.Item,{key:"contact"},"Contact")))}}]),t}(d.Component),v=a(80),f=a(283),g=a(45),y=function(e){return{type:"SET_PLAYER",player:e}},E=function(e){return{type:"ADD_ITEM_TO_CART",photoId:e}},O=function(e){return{type:"REMOVE_ITEM_FROM_CART",photoId:e}},j={player:"",amount:0,cartPhotoIds:[]},C=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER":return Object.assign({},a,{player:n.player,cartPhotoIds:a.cartPhotoIds});case"ADD_ITEM_TO_CART":return Object(g.a)({},a,{amount:a.amount+1,cartPhotoIds:[].concat(Object(f.a)(a.cartPhotoIds),[n.photoId])});case"REMOVE_ITEM_FROM_CART":var r=(e=a.cartPhotoIds,t=n.photoId,e.filter(function(e){return e!==t}));return Object(g.a)({},a,{amount:a.amount-1,cartPhotoIds:r});case"CLEAR_CART":return Object(g.a)({},a,{amount:0,cartPhotoIds:[]});default:return a}},k=Object(v.c)({playerState:C}),I=a(267),S=a(9),w=a.n(S),x=(a(354),a(210),a(57)),P=(a(164),a(82)),N=(a(359),a(281)),F=(a(87),a(31)),T=a(91),A=a(29),R=(a(361),a(280)),M=(a(211),a(363),a(268)),_=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(M.a,{autoplay:!0,autoplaySpeed:3e3},m.a.createElement("div",{className:"carousel-image"},m.a.createElement("img",{src:a(384)})),m.a.createElement("div",{className:"carousel-image"},m.a.createElement("img",{src:a(385)})),m.a.createElement("div",{className:"carousel-image"},m.a.createElement("img",{src:a(386)}))))}}]),t}(d.Component),L=a(30),D=a.n(L),$=a(26),B=a(78),q=a.n(B);a(490);function z(){var e=Object(A.a)(["\n  mutation login($credentials: LoginInput!) {\n    login(credentials: $credentials)\n  }\n"]);return z=function(){return e},e}function J(){var e=Object(A.a)(["\n{\n  getFeatured {\n  \tid\n    url\n\t}\n}\n"]);return J=function(){return e},e}R.a.Title,D()(J());var G=D()(z()),Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={ModalText:"Enter your email and you team's coupon code to view team photos",visible:!1,confirmLoading:!1,email:"",coupon:""},a.showModal=a.showModal.bind(Object(o.a)(a)),a.handleOk=a.handleOk.bind(Object(o.a)(a)),a.handleCancel=a.handleCancel.bind(Object(o.a)(a)),a.handleFieldChange=a.handleFieldChange.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"showModal",value:function(){this.setState({visible:!0})}},{key:"handleFieldChange",value:function(e,t){this.setState(Object(T.a)({},e,t))}},{key:"loginUser",value:function(){var e=this.state,t={email:e.email,coupon:e.coupon};return this.props.client.mutate({mutation:G,variables:{credentials:t}})}},{key:"handleOk",value:function(){var e=this;this.setState({ModalText:"Verifying...",confirmLoading:!0}),this.loginUser().then(function(t){q.a.decode(t.data.login).email;var a=t.data.login;localStorage.setItem("token",a),e.setState({visible:!1,confirmLoading:!1}),e.props.history.push("/teams")}).catch(function(t){e.setState({ModalText:"There was an error logging in. Incorrect coupon code.",confirmLoading:!1})})}},{key:"handleCancel",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var e=this.state,t=e.visible,a=e.confirmLoading,n=e.ModalText;return m.a.createElement("div",{className:"App"},m.a.createElement(_,null),m.a.createElement(F.a,{className:"carousel-button",onClick:this.showModal,type:"primary",size:"large",style:{position:"absolute",top:"70%",left:"50%",transform:"translate(-50%, -50%)"}},"Find your team"),m.a.createElement(N.a,{title:"Sign in",visible:t,onOk:this.handleOk,confirmLoading:a,onCancel:this.handleCancel},m.a.createElement("p",null,n),m.a.createElement(H,{onChange:this.handleFieldChange})))}}]),t}(d.Component),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e,t){var a=e.target.value;this.props.onChange(t,a)}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return m.a.createElement(x.a,{layout:"inline"},m.a.createElement(x.a.Item,null,t("email",{rules:[{type:"email",message:"The input is not valid E-mail!"}]})(m.a.createElement(P.a,{onChange:function(t){return e.handleChange(t,"email")},prefix:m.a.createElement(n.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),m.a.createElement(x.a.Item,null,t("coupon",{})(m.a.createElement(P.a,{onChange:function(t){return e.handleChange(t,"coupon")},prefix:m.a.createElement(n.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Coupon"}))))}}]),t}(m.a.Component),H=x.a.create({name:"horizontal_login"})(U),V=Object($.d)(Y),W=(a(135),a(63));function K(){var e=Object(A.a)(["\n    {\n      getTeams(orgId: 1) {\n        id\n        name\n        thumbnail\n        roster\n      }\n    }\n"]);return K=function(){return e},e}W.a.Meta;var Z=D()(K()),Q=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("h1",null,"Photo grid"),m.a.createElement("div",{className:"photo-grid"},m.a.createElement($.c,{query:Z},function(e){var t=e.loading;e.data;return!t&&m.a.createElement(m.a.Fragment,null)})))}}]),t}(d.Component),X=a(47),ee=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={hello:"1"},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,"HELLLO")}}]),t}(d.Component),te=Object(X.b)(function(e){return Object(g.a)({},e)})(ee),ae=(a(563),a(276)),ne=a(32),re=(a(565),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"spinner"},m.a.createElement("div",{className:"bounce1"}),m.a.createElement("div",{className:"bounce2"}),m.a.createElement("div",{className:"bounce3"}))}}]),t}(d.Component));function ce(){var e=Object(A.a)(["\n  query getPhotosById($ids: [ID!]!) {\n    getPhotosById(ids: $ids) {\n        id\n        image(spec: { height: 300, width: 300, watermark: true }) {\n          url\n          height\n          width\n        }\n    }\n  }\n"]);return ce=function(){return e},e}function ie(){var e=Object(A.a)(["\n  query getTeam($teamId: ID!) {\n    getTeam(teamId: $teamId) {\n        id\n        name\n        thumbnail\n        roster {\n          id\n          name\n          thumbnail\n        }\n    }\n  }\n"]);return ie=function(){return e},e}var le=W.a.Meta,oe=D()(ie()),se=D()(ce()),ue=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).handlePlayerClick=a.handlePlayerClick.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handlePlayerClick",value:function(e,t){this.props.setCurrentPlayer(t),this.props.history.push("/player/".concat(e))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement($.c,{query:oe,variables:{teamId:"v514TjOMNqHu5w9cHSlV"}},function(t){var n=t.loading,r=(t.error,t.data);return n?m.a.createElement(re,null):m.a.createElement("div",{className:"team-wrapper"},m.a.createElement("div",{className:"team-hero"},m.a.createElement("img",{src:a(566),className:"team-hero-image"})),m.a.createElement("h1",{className:"team-name"},r.getTeam.name),m.a.createElement("div",{className:"team-roster-wrapper"},m.a.createElement("div",{className:"team-roster"},r.getTeam.roster.map(function(t){return m.a.createElement($.c,{key:t.id,query:se,variables:{ids:[t.thumbnail]}},function(a){var n=a.loading,r=a.error,c=a.data;return r?m.a.createElement("div",null,JSON.stringify(c)):n?m.a.createElement(re,null):m.a.createElement(W.a,{style:{width:300,margin:"16px 56px 16px 56px",boxShadow:"0 0.46875rem 2.1875rem rgba(90,97,105,.1), 0 0.9375rem 1.40625rem rgba(90,97,105,.1), 0 0.25rem 0.53125rem rgba(90,97,105,.12), 0 0.125rem 0.1875rem rgba(90,97,105,.1)"},cover:m.a.createElement("img",{alt:"example",src:c.getPhotosById[0].image.url}),title:" ",hoverable:!0,onClick:function(){return e.handlePlayerClick(t.id,t.name)}},m.a.createElement(le,{title:t.name,avatar:m.a.createElement(ae.a,{src:"https://res-1.cloudinary.com/hireclub/image/upload/c_fill,f_auto,g_north,h_200,q_auto,w_200/nlpxwm4loty0zh77b7hn"})}))})}))))}))}}]),t}(d.Component),de=Object(ne.e)(ue),me=(d.Component,Object(X.b)(function(e){return Object(g.a)({},e)},function(e){return{setCurrentPlayer:function(t){return e(y(t))},addItemToCart:function(){return e(E())}}})(de)),he=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={added:!1},a.handleAddClick=a.handleAddClick.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleAddClick",value:function(){this.setState({added:!0}),this.props.handleAddToCart()}},{key:"handleRemoveClick",value:function(){this.setState({added:!1}),this.props.handleRemoveFromCart()}},{key:"render",value:function(){var e=this,t=this.state.added?"Added!":"Click to add to cart";return m.a.createElement("div",{className:"cart-button"},m.a.createElement(F.a,{className:"cart-button-icon",disabled:!this.state.added,size:"small",type:"primary",shape:"circle",icon:"minus",onClick:function(){return e.handleRemoveClick()}}),m.a.createElement(F.a,{className:"cart-button-icon",disabled:this.state.added,size:"small",type:"primary",shape:"circle",icon:this.state.added?"check":"plus",onClick:function(){return e.handleAddClick()}}),m.a.createElement("h4",{className:"cart-button-text"},t))}}]),t}(d.Component);a(261);function pe(){var e=Object(A.a)(["\n  query getPhotosById($ids: [ID!]!) {\n    getPhotosById(ids: $ids) {\n        id\n        image(spec: { height: 1200, width: 1200, watermark: true }) {\n          url\n          height\n          width\n        }\n    }\n  }\n"]);return pe=function(){return e},e}var be=D()(pe()),ve={position:"fixed",color:"#fff",fontSize:"30px",top:"20px",right:"40px"},fe=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=(e.loading,e.showModal),r=e.handleCancel,c=e.photoId;return m.a.createElement("div",null,m.a.createElement($.c,{query:be,variables:{ids:[c]}},function(e){var c=e.loading,i=e.error,l=e.data;return i?m.a.createElement("div",null):c?"Loading...":m.a.createElement("div",{className:t?"modal-wrapper":"modal-wrapper-closed"},m.a.createElement(n.a,{type:"close",className:"modal-close",style:ve,onClick:r}),m.a.createElement(re,null),m.a.createElement("div",{onClick:function(){return a(l.getPhotosById.id)},className:"individual-player-photo"},m.a.createElement("img",{src:l.getPhotosById[0].image.url,className:"team-hero-image"})))}))}}]),t}(d.Component);function ge(){var e=Object(A.a)(["\n  query getPhotosByPlayer($playerId: ID!) {\n    getPhotosByPlayer(playerId: $playerId) {\n        id\n        image(spec: { height: 300, width: 300, watermark: true }) {\n          url\n          height\n          width\n        }\n    }\n  }\n"]);return ge=function(){return e},e}var ye=D()(ge()),Ee=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={loading:!1,visible:!1,currentPhotoId:""},a.showModal=a.showModal.bind(Object(o.a)(a)),a.handleAddToCart=a.handleAddToCart.bind(Object(o.a)(a)),a.handleRemoveFromCart=a.handleRemoveFromCart.bind(Object(o.a)(a)),a.handleCancel=a.handleCancel.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"showModal",value:function(e){this.setState({visible:!0,currentPhotoId:e})}},{key:"handleAddToCart",value:function(e){this.props.addItemToCart(e),this.setState({visible:!1})}},{key:"handleRemoveFromCart",value:function(e){this.props.removeItemFromCart(e)}},{key:"handleCancel",value:function(){this.setState({visible:!1})}},{key:"handleImageLoaded",value:function(){this.setState({imageStatus:"loaded"})}},{key:"handleImageErrored",value:function(){this.setState({imageStatus:"failed to load"})}},{key:"render",value:function(){var e=this,t=this.props.playerState,a=this.props.match.params.playerId,r=this.state,c=r.visible,i=r.loading,l=r.currentPhotoId;return m.a.createElement("div",{className:"player-grid-wrapper"},m.a.createElement("div",{className:"player-grid-header"},m.a.createElement("h3",{className:"player-name"},t.player),m.a.createElement(n.a,{type:"shopping-cart",style:{fontSize:"32px",transform:"translateY(-6px)"},theme:"outlined",onClick:function(){return e.props.history.push("/checkout")}}),m.a.createElement("p",null,t.amount)),m.a.createElement($.c,{query:ye,variables:{playerId:a}},function(t){var a=t.loading,n=(t.error,t.data);return a?"Loading...":m.a.createElement("div",{className:"player-wrapper"},n.getPhotosByPlayer.map(function(t){return m.a.createElement("div",{key:t.id},m.a.createElement(W.a,{style:{width:300,margin:"16px 56px 16px 56px"},cover:m.a.createElement("img",{alt:"example",src:t.image.url,onClick:function(){return e.showModal(t.id)}}),actions:[m.a.createElement("span",null,"$25")]},m.a.createElement(he,{handleAddToCart:function(){return e.handleAddToCart(t.id)},handleRemoveFromCart:function(){return e.handleRemoveFromCart(t.id)}})))}))}),m.a.createElement(fe,{visible:c,loading:i,showModal:this.showModal,handleCancel:this.handleCancel,photoId:l}))}}]),t}(d.Component),Oe=(d.Component,Object(X.b)(function(e){return Object(g.a)({},e)},function(e){return{setCurrentPlayer:function(t){return e(y(t))},addItemToCart:function(t){return e(E(t))},removeItemFromCart:function(t){return e(O(t))}}})(Ee)),je=a(93),Ce=a(113),ke=a.n(Ce),Ie=a(192);function Se(){var e=Object(A.a)(["\n    mutation Charge($input: PurchaseInput!) {\n    \tpurchase(input: $input)\n    }\n"]);return Se=function(){return e},e}var we=D()(Se()),xe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={complete:!1},a.submit=a.submit.bind(Object(o.a)(a)),a.handleSuccess=a.handleSuccess.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"submit",value:function(){var e=Object(Ie.a)(ke.a.mark(function e(){var t,a;return ke.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.props.stripe.createToken({name:"Name"});case 3:return t=e.sent,a=t.token,e.abrupt("return",a.id);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleSuccess",value:function(){this.setState({complete:!0}),this.props.props.clearCart()}},{key:"render",value:function(){var e=this;if(this.state.complete)return m.a.createElement("h1",null,"Purchase Complete");var t=this.props.props.playerState,a=q.a.decode(localStorage.getItem("token")).email,n=25*t.amount,r=t.cartPhotoIds;return m.a.createElement($.a,null,function(c){return m.a.createElement("div",{className:"checkout"},m.a.createElement("h3",null,"".concat(t.amount," photos in your cart. Your total is $").concat(n,".")),m.a.createElement("p",null,"Would you like to complete the purchase?"),m.a.createElement(je.CardElement,null),m.a.createElement("button",{className:"stripe-button",onClick:Object(Ie.a)(ke.a.mark(function t(){var i;return ke.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.t1=we,t.t2=a,t.t3=n,t.t4=r,t.next=7,e.submit();case 7:return t.t5=t.sent,t.t6={email:t.t2,amount:t.t3,photoIds:t.t4,token:t.t5},t.t7={input:t.t6},t.t8={mutation:t.t1,variables:t.t7},t.next=13,t.t0.mutate.call(t.t0,t.t8);case 13:i=t.sent,"success"===i.data.purchase&&e.handleSuccess();case 16:case"end":return t.stop()}},t)}))},"Complete Purchase"))})}}]),t}(d.Component),Pe=Object(je.injectStripe)(xe),Ne=a(590),Fe=a(591);a(578);function Te(){var e=Object(A.a)(["\n  query getPhotosById($ids: [ID!]!) {\n    getPhotosById(ids: $ids) {\n        id\n        image(spec: { height: 300, width: 300, watermark: true }) {\n          url\n          height\n          width\n        }\n    }\n  }\n"]);return Te=function(){return e},e}var Ae=D()(Te()),Re=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleRemoveFromCart=a.handleRemoveFromCart.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleRemoveFromCart",value:function(e){this.props.props.removeItemFromCart(e)}},{key:"handleImageLoaded",value:function(){this.setState({imageStatus:"loaded"})}},{key:"handleImageErrored",value:function(){this.setState({imageStatus:"failed to load"})}},{key:"render",value:function(){var e=this,t=this.props.props.playerState.cartPhotoIds;return Object(Ne.a)(t)||Object(Fe.a)(t)?m.a.createElement("div",{className:"cart-wrapper"},m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("h3",null,"Cart is empty")):m.a.createElement("div",{className:"cart-wrapper"},m.a.createElement($.c,{query:Ae,variables:{ids:t}},function(t){var a=t.loading,n=t.error,r=t.data;return n?m.a.createElement("div",null,console.log("error",n)):a?"Loading...":m.a.createElement("div",{className:"cart-items-wrapper"},r.getPhotosById.map(function(t){return m.a.createElement("div",{key:t.id},m.a.createElement(W.a,{style:{width:300,margin:"16px 30px 16px 30px"},cover:m.a.createElement("img",{alt:"example",src:t.image.url}),bodyStyle:{display:"flex",flexDirection:"column",alignItems:"center"}},m.a.createElement(F.a,{type:"danger",htmlType:"submit",onClick:function(){return e.handleRemoveFromCart(t.id)}},"Remove from cart")))}))}))}}]),t}(d.Component),Me=(a(579),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(je.StripeProvider,{apiKey:"pk_live_sWJaTzrAYpYjBB08MgiZ9xSH00U4ESCqEP"},m.a.createElement("div",{className:"stripe-form"},m.a.createElement("h1",null,"Checkout"),m.a.createElement(je.Elements,null,m.a.createElement(Pe,{props:this.props})))),m.a.createElement(Re,{props:this.props}))}}]),t}(d.Component)),_e=(d.Component,Object(X.b)(function(e){return Object(g.a)({},e)},function(e){return{removeItemFromCart:function(t){return e(O(t))},clearCart:function(){return e({type:"CLEAR_CART"})}}})(Me)),Le=(a(580),a(282)),De=function(e){var t=Object(d.useCallback)(function(t){e.getAcceptedFiles(t)},[]),a=Object(Le.a)({onDrop:t,minSize:0,maxSize:2e7}),n=a.isDragActive,r=a.getRootProps,c=a.getInputProps,i=a.isDragReject,l=(a.acceptedFiles,a.rejectedFiles),o=l.length>0&&l[0].size>2e7;return m.a.createElement("div",{className:"container text-center mt-5"},m.a.createElement("div",r(),m.a.createElement("input",c()),!n&&"Click here or drop a file to upload!",n&&!i&&"Drop it like it's hot!",i&&"File type not accepted, sorry!",o&&m.a.createElement("div",{className:"text-danger mt-2"},"File is too large.")))};function $e(){var e=Object(A.a)(["\n  mutation AddPhotos($photos: PhotosInput!) {\n    addPhotos(photos: $photos)\n  }\n"]);return $e=function(){return e},e}var Be=D()($e()),qe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={teamId:null,eventId:null,playerId:null,acceptedFiles:[]},a.getAcceptedFiles=a.getAcceptedFiles.bind(Object(o.a)(a)),a.handleFieldChange=a.handleFieldChange.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"getAcceptedFiles",value:function(e){this.setState({acceptedFiles:e})}},{key:"handleFieldChange",value:function(e,t){this.setState(Object(T.a)({},e,t))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.playerId,n=t.teamId,r=t.eventId,c={files:t.acceptedFiles,playerId:a,teamId:n,eventId:r};this.props.client.mutate({mutation:Be,variables:{photos:c}})}},{key:"render",value:function(){return m.a.createElement("div",{className:"Uploader"},m.a.createElement(De,{getAcceptedFiles:this.getAcceptedFiles}),m.a.createElement(Je,{onChange:this.handleFieldChange}),m.a.createElement(F.a,{type:"primary",htmlType:"submit",onClick:this.handleSubmit},"Submit"),m.a.createElement(De,null))}}]),t}(d.Component),ze=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e,t){var a=e.target.value;this.props.onChange(t,a)}},{key:"render",value:function(){var e=this;return m.a.createElement(x.a,{layout:"inline"},m.a.createElement(x.a.Item,null,m.a.createElement(P.a,{onChange:function(t){return e.handleChange(t,"teamId")},placeholder:"teamID"})),m.a.createElement(x.a.Item,null,m.a.createElement(P.a,{onChange:function(t){return e.handleChange(t,"eventId")},placeholder:"eventID"})),m.a.createElement(x.a.Item,null,m.a.createElement(P.a,{onChange:function(t){return e.handleChange(t,"playerId")},placeholder:"playerId"})))}}]),t}(d.Component),Je=x.a.create({name:"horizontal_login"})(ze),Ge=Object($.d)(qe),Ye=a(188),Ue=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={isLoggedIn:"pending"},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.isLoggedIn,t=localStorage.getItem("token")||"";if(t){var a=q.a.decode(t,{complete:!0}).payload.exp;this.setState({isLoggedIn:(new Date).getTime()/1e3<a})}else this.setState({isLoggedIn:!1}),this.props.history.push("/");e||this.props.history.push("/")}},{key:"render",value:function(){return this.state.isLoggedIn?this.props.children:m.a.createElement("p",null,"not logged in")}}]),t}(m.a.Component);var He=Object(ne.e)(Ue),Ve=Object(X.b)(function(e){return Object(g.a)({},e)})(function(){return m.a.createElement(Ye.a,null,m.a.createElement(ne.c,null,m.a.createElement(ne.a,{exact:!0,path:"/",component:V}),m.a.createElement(ne.a,{path:"/admin",component:Ge}),m.a.createElement(He,null,m.a.createElement(ne.a,{path:"/organization",component:te}),m.a.createElement(ne.a,{path:"/photos",component:Q}),m.a.createElement(ne.a,{path:"/teams",component:me}),m.a.createElement(ne.a,{path:"/player/:playerId",component:Oe}),m.a.createElement(ne.a,{path:"/checkout",component:_e}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=a(148),Ke=a(279),Ze=a(284),Qe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return t}}(),Xe=Object(v.d)(k,Qe,Object(v.a)(I.a));Xe.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){return a}}(Xe.getState())});var et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new We.a({ssrMode:"undefined"!==typeof window,cache:(new Ze.a).restore(e),link:Object(Ke.createUploadLink)({uri:"http://localhost:9000/graphql"})})}();w.a.render(m.a.createElement($.b,{store:Xe,client:et},m.a.createElement(X.a,{store:Xe},m.a.createElement(b,null),m.a.createElement(Ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[288,1,2]]]);
//# sourceMappingURL=main.cce31ced.chunk.js.map