(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{9099:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var s=a(29),r=a(7794),n=a.n(r),i=a(9008),c=a.n(i),o=a(7294),l=a(1673),d=a.n(l),_=a(6606),m=a.n(_),h=a(3286),p=a(5893);function u(){return(0,p.jsx)("footer",{className:d().footer,children:(0,p.jsxs)("div",{children:["Vivekanand Educational Societys Institute of Technology",(0,p.jsx)("p",{className:d().footer__left,children:(0,p.jsx)("a",{href:"https://github.com/Samiksha1603/collaborative_shopping",children:"Github"})})]})})}function x(){return(0,p.jsxs)("div",{className:d().contact,children:[(0,p.jsxs)("h2",{className:d().contact__title,children:["Any questions? ",(0,p.jsx)("span",{className:d().colored,children:"Contact us."})]}),(0,p.jsx)("p",{className:d().contact__paragraph,children:"Were looking forward to hearing from you. Feel free to contact us if you have any questions!"}),(0,p.jsx)("a",{href:"#",children:(0,p.jsx)("button",{children:"Contact Us"})})]})}var j=a(1163),g=a(8182),f=a(1664),b=a.n(f),H=function(e){return(0,p.jsx)("div",{className:d().productArea,children:(0,p.jsxs)(g.Z,{style:{display:"flex",flexDirection:"row",width:"100%",marginBottom:"5%",marginTop:"5%"},children:[(0,p.jsx)(g.Z.Img,{style:{width:"20%"},src:e.product.image}),(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)(g.Z.Title,{children:e.product.name}),(0,p.jsx)(g.Z.Text,{children:e.product.description}),(0,p.jsx)("button",{className:"snipcart-add-item product__button","data-item-id":e.product.id,"data-item-name":e.product.name,"data-item-price":e.product.price,"data-item-url":e.router.pathname,"data-item-image":e.product.image,children:"Add to cart"})," "," ",(0,p.jsx)("button",{className:d().button,children:(0,p.jsx)(b(),{href:"/productDetails",children:(0,p.jsx)("a",{className:d().Link,children:"Details"})})})," "," ",(0,p.jsx)("button",{className:d().button,children:"Suggest"}),(0,p.jsxs)("div",{className:d().product__price,children:["$",e.product.price.toFixed(2)]})]})]})})},v=(0,j.withRouter)(H),y=function(e){var t;return(0,p.jsx)("div",{className:d().product_list,children:null===(t=e.products)||void 0===t?void 0:t.map(function(e,t){return(0,p.jsx)(v,{product:e},t)})})};function N(e){var t,a=(0,o.useState)(""),r=a[0],i=a[1],l=(0,o.useState)([]),_=l[0],j=l[1],g=(0,o.useState)(""),f=g[0],b=g[1],H=[];(0,o.useEffect)(function(){m().logToConsole=!0,new(m())("361f7ef1d7f18076912c",{cluster:"ap2"}).subscribe("test").bind("message",function(e){H.push(e),j(H)})});var v=(t=(0,s.Z)(n().mark(function e(t){var a;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:8000/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,message:f})});case 3:a=e.sent,console.log(a),b("");case 6:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)});return(0,p.jsxs)("div",{className:d().fullbody,children:[(0,p.jsxs)(c(),{children:[(0,p.jsx)("title",{children:"Colab"}),(0,p.jsx)("meta",{charSet:"utf-8"}),(0,p.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,p.jsx)("meta",{name:"theme-color",content:"#000000"})]}),(0,p.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js",async:!0}),(0,p.jsx)("script",{src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js","data-api-key":"ZDI1MWZjMjktMmU0My00Y2FkLWI0NjUtZTJiMDQyY2Y3MWQ1NjM4MDI2MjMyNDY4MDU1MTc1",id:"snipcart",async:!0}),(0,p.jsx)("link",{href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",rel:"stylesheet",type:"text/css"}),(0,p.jsx)("noscript",{children:"You need to enable JavaScript to run this app."}),(0,p.jsxs)(o.StrictMode,{children:[(0,p.jsx)(h.default,{}),(0,p.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossOrigin:"anonymous"}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{className:d().bg,children:[(0,p.jsx)("div",{className:d().chat,children:(0,p.jsxs)("div",{className:d().chatdecoration,children:[(0,p.jsxs)("div",{className:"d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom",children:[(0,p.jsx)("span",{className:d().chattop,children:"Enter username :"}),(0,p.jsx)("input",{className:d().input,placeholder:"  Username",value:r,onChange:function(e){return i(e.target.value)}})]}),(0,p.jsx)("div",{className:d().chatarea,style:{minHeight:"300px"},children:_.map(function(e){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:d().message,children:[(0,p.jsx)("strong",{children:e.username}),(0,p.jsx)("div",{className:"col-10 mb-1 small",children:e.message})]})})})}),(0,p.jsxs)("form",{onSubmit:v,className:d().chatbottom,children:[(0,p.jsx)("input",{className:d().input,placeholder:"Enter your message",value:f,onChange:function(e){return b(e.target.value)}}),(0,p.jsx)("button",{type:"submit",className:d().button,children:" Send "})]})]})}),(0,p.jsx)(y,{products:e.products})]})]}),(0,p.jsx)(x,{}),(0,p.jsx)(u,{}),(0,p.jsx)("script",{children:"var Alert = ReactBootstrap.Alert;"})]})}N.getInitialProps=(0,s.Z)(n().mark(function e(){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{products:[{id:"nextjs_halfmoon",name:"Halfmoon Betta",price:25,image:"../static/photo.webp",description:"The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."},{id:"nextjs_dragonscale",name:"Dragon Scale Betta",price:35,image:"../static/brown.jpg",description:"The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor."},{id:"nextjs_crowntail",name:"Crowntail Betta",price:7.5,image:"../static/smart.jpg",description:"The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."},{id:"nextjs_veiltail",name:"Veiltail Betta",price:5,image:"../static/rolex.jpeg",description:"By far the most common betta fish. You can recognize it by its long tail aiming downwards."}]});case 1:case"end":return e.stop()}},e)}))},5683:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}}),a(7294);var s=a(682),r=a(1451),n=a(1431),i=a(3769);a(8210);var c=a(1664),o=a.n(c),l=a(1673),d=a.n(l),_=a(5893);function m(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(n.Z,{bg:"light",expand:"lg",children:(0,_.jsxs)(s.Z,{fluid:!0,style:{paddingLeft:"5%",paddingRight:"5%"},children:[(0,_.jsx)(n.Z.Brand,{style:{fontSize:"30px"},children:"Colab"}),(0,_.jsx)(n.Z.Toggle,{"aria-controls":"navbarScroll"}),(0,_.jsxs)(n.Z.Collapse,{id:"navbarScroll",children:[(0,_.jsxs)(r.Z,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:["  ",(0,_.jsx)(o(),{href:"/Home",children:(0,_.jsx)("a",{children:(0,_.jsx)("p",{className:d().navitem,children:(0,_.jsx)("b",{children:"Home"})})})}),"  ",(0,_.jsxs)(i.Z,{title:"Log In / Sign Up",id:"navbarScrollingDropdown",children:[(0,_.jsx)(i.Z.Item,{children:(0,_.jsx)(o(),{href:"/Login",children:(0,_.jsx)("a",{children:(0,_.jsx)("p",{className:d().navitem,children:(0,_.jsx)("b",{children:"Log In"})})})})}),(0,_.jsx)(i.Z.Item,{children:(0,_.jsx)(o(),{href:"/Signup",children:(0,_.jsx)("a",{children:(0,_.jsx)("p",{className:d().navitem,children:(0,_.jsx)("b",{children:"Sign up"})})})})})]})]}),(0,_.jsx)(o(),{href:"/Login",children:(0,_.jsx)("a",{children:(0,_.jsx)("p",{className:d().navitem,children:(0,_.jsx)("b",{children:"Logout"})})})})]}),"  ",(0,_.jsx)("p",{className:"lead",style:{paddingTop:"10px"},children:(0,_.jsx)("small",{children:(0,_.jsx)("b",{children:"Cart : "})})})," ",(0,_.jsxs)("a",{className:"header__summary snipcart-checkout snipcart-summary",href:"#",style:{textDecoration:"none"},children:[(0,_.jsx)("svg",{width:"31",height:"27",viewBox:"0 0 31 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"M1.10512 0.368718C0.560256 0.368718 0.118164 0.812066 0.118164 1.35848C0.118164 1.9049 0.560256 2.34824 1.10512 2.34824H4.90887L8.30138 18.4009C8.43503 19.0053 8.83085 19.5079 9.32946 19.5041H25.7788C26.3005 19.5118 26.7799 19.0375 26.7799 18.5143C26.7799 17.9911 26.3006 17.5168 25.7788 17.5245H10.1315L9.71003 15.545H27.095C27.5371 15.5412 27.9547 15.2048 28.0511 14.7718L30.354 4.87412C30.4825 4.29933 29.9852 3.67172 29.3979 3.66786H7.21171L6.6771 1.15221C6.58329 0.71276 6.15921 0.368652 5.7107 0.368652L1.10512 0.368718ZM7.623 5.64746H12.7634L13.2569 8.61674H8.25005L7.623 5.64746ZM14.7785 5.64746H20.9881L20.4946 8.61674H15.2719L14.7785 5.64746ZM23.0031 5.64746H28.1537L27.4649 8.61674H22.5097L23.0031 5.64746ZM8.67181 10.5963H13.5862L14.0797 13.5656H9.29919L8.67181 10.5963ZM15.6009 10.5963H20.1656L19.6721 13.5656H16.0944L15.6009 10.5963ZM22.1807 10.5963H27.0023L26.3135 13.5656H21.6872L22.1807 10.5963ZM12.6197 20.164C10.8141 20.164 9.32979 21.6525 9.32979 23.4632C9.32979 25.2739 10.8141 26.7624 12.6197 26.7624C14.4252 26.7624 15.9095 25.2739 15.9095 23.4632C15.9095 21.6525 14.4252 20.164 12.6197 20.164ZM22.4892 20.164C20.6837 20.164 19.1994 21.6525 19.1994 23.4632C19.1994 25.2739 20.6837 26.7624 22.4892 26.7624C24.2948 26.7624 25.7791 25.2739 25.7791 23.4632C25.7791 21.6525 24.2948 20.164 22.4892 20.164ZM12.6197 22.1435C13.3586 22.1435 13.9356 22.7222 13.9356 23.4632C13.9356 24.2042 13.3586 24.7829 12.6197 24.7829C11.8807 24.7829 11.3037 24.2042 11.3037 23.4632C11.3037 22.7222 11.8807 22.1435 12.6197 22.1435ZM22.4892 22.1435C23.2282 22.1435 23.8052 22.7222 23.8052 23.4632C23.8052 24.2042 23.2282 24.7829 22.4892 24.7829C21.7503 24.7829 21.1733 24.2042 21.1733 23.4632C21.1733 22.7222 21.7503 22.1435 22.4892 22.1435Z",fill:"#9094FF"})})," ",(0,_.jsx)("span",{className:"header__price snipcart-total-price"})]})]})})})}},3286:function(e,t,a){"use strict";a.r(t);var s=a(5683);a(9099);var r=a(6769),n=a(5893);t.default=function(){return(0,n.jsx)(r.HK,{children:(0,n.jsx)(s.Z,{})})}},1673:function(e){e.exports={fullbody:"Home_fullbody__cL4Na",bg:"Home_bg__6qLiw",chat:"Home_chat__yB3ig",chatdecoration:"Home_chatdecoration__N78DU",chattop:"Home_chattop__QPdqE",chatbottom:"Home_chatbottom__BqWkl",chatarea:"Home_chatarea___4HnZ",message:"Home_message__SarrE",input:"Home_input__ZZ4GD",nonchat:"Home_nonchat__1xGHw",button:"Home_button__hQmsM",ripple:"Home_ripple__8ITeW",Link:"Home_Link__gcVxJ",suggest:"Home_suggest___VXd8",navitem:"Home_navitem__g3V5f",app:"Home_app__GbKKX",header:"Home_header__CyQ_T",header__summary:"Home_header__summary__cVR7a",header__price:"Home_header__price__8Rtzy",header__logo:"Home_header__logo__rtDeN",header__title:"Home_header__title__5g2a4",background_image:"Home_background_image__qGGaN",promotional_message:"Home_promotional_message__5ZY2D",productArea:"Home_productArea__EzzCE",product_list:"Home_product_list__R2Irx",product:"Home_product__wG_G_",product__title:"Home_product__title__LHJ8z",product__description:"Home_product__description__X8H8V",product__price:"Home_product__price__R8ENJ",product__image:"Home_product__image__bAsqc",product__price_button_container:"Home_product__price_button_container__OEy_d",product__button:"Home_product__button__7BJOz",contact:"Home_contact__Tvs4T",contact__title:"Home_contact__title__WqC7s",colored:"Home_colored__cCAqE",contact__paragraph:"Home_contact__paragraph___hnUD",footer:"Home_footer__zed0_",footer__left:"Home_footer__left__Ahr_p"}}}]);