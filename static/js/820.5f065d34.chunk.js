"use strict";(self.webpackChunkcar_rentals=self.webpackChunkcar_rentals||[]).push([[820],{6820:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,i,o,a,l,d,s,c,u,p=r(9439),h=r(2791),g=r(9655),m=r(4169),x=r(6694),f=r(1413),b=r(8613),Z=r(4942),v=r(2801),k=v.rS.colors,y=v.rS.transition,w=v.rS.breakpoints,C={tablet:"@media screen and (min-width: ".concat(w.tablet,")"),desktop:"@media screen and (min-width: ".concat(w.desktop,")")},j={IndicatorSeparator:function(){return null}},S={color:k.textMain,fontFamily:"inherit",fontSize:"15px",fontWeight:500,lineHeight:"1.1"},M=(0,f.Z)((0,f.Z)((0,Z.Z)({width:"100%",height:"48px"},C.tablet,{width:"250px"}),S),{},{color:k.textMain,border:"none",borderRadius:"14px",backgroundColor:k.grayLighter,boxShadow:"none",transitionDuration:y.duration,transitionTimingFunction:y.func,transitionProperty:"background-color"}),F={control:function(n,e){return(0,f.Z)((0,f.Z)((0,f.Z)({},n),M),{},{backgroundColor:e.isFocused?k.blue50:k.grayLighter})},menu:function(n){return(0,f.Z)((0,f.Z)({},n),{},{borderRadius:"14px",fontSize:"16px",fontWeight:500,lineHeight:1.25,overflow:"hidden"})},input:function(n){return(0,f.Z)((0,f.Z)({},n),{},{color:k.textMain})},valueContainer:function(n){return(0,f.Z)((0,f.Z)({},n),{},{paddingLeft:"15px",margin:0})},option:function(n,e){return(0,f.Z)((0,f.Z)({},n),{},{color:e.isFocused?k.textMain:k.gray,backgroundColor:e.isFocused&&k.grayLighter,":active":{backgroundColor:k.blue100},cursor:"pointer"})},indicatorsContainer:function(n){return(0,f.Z)((0,f.Z)({},n),{},{cursor:"pointer"})}},z=(0,f.Z)((0,f.Z)({},F),{},{control:function(n,e){var r;return(0,f.Z)((0,f.Z)((0,f.Z)({},n),M),{},(r={},(0,Z.Z)(r,C.tablet,{width:"150px"}),(0,Z.Z)(r,"backgroundColor",e.isFocused?k.blue50:k.grayLighter),r))}}),L=r(168),T=r(225),P=T.Z.form(t||(t=(0,L.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 50px;\n\n  @media screen and (min-width: ",") {\n    justify-content: center;\n    flex-direction: row;\n  }\n\n  @media screen and (min-width: ",") {\n    gap: 18px;\n  }\n"])),v.rS.breakpoints.tablet,v.rS.breakpoints.desktop),R=T.Z.label(i||(i=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    width: auto;\n  }\n"])),v.rS.breakpoints.tablet),A=T.Z.span(o||(o=(0,L.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.3;\n  text-transform: capitalize;\n"])),(function(n){return n.theme.colors.gray})),B=T.Z.div(a||(a=(0,L.Z)(["\n  display: flex;\n\n  @media screen and (min-width: ",") {\n    width: 300px;\n  }\n"])),v.rS.breakpoints.desktop),E=(0,T.Z)(v.DF)(l||(l=(0,L.Z)(["\n  width: 100%;\n  height: 48px;\n  margin: auto;\n  margin-top: 20px;\n\n  @media screen and (min-width: ",") {\n    width: max-content;\n    margin: 0;\n  }\n"])),v.rS.breakpoints.tablet),I=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land Rover"],H=r(5987),D=r(4651),N=v.rS.colors,W=T.Z.label(d||(d=(0,L.Z)(["\n  width: 100%;\n  height: 48px;\n\n  ",";\n"])),v.gc),G=T.Z.div(s||(s=(0,L.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),O=T.Z.input(c||(c=(0,L.Z)(["\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  padding-right: 30px;\n  padding-left: 15px;\n\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.1;\n  color: ",";\n\n  border: none;\n  outline: none;\n\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid #d4d4d4;\n  background-color: ",";\n\n  ",";\n\n  &:focus-visible {\n    background-color: ",";\n  }\n\n  &::placeholder {\n    font-size: inherit;\n    letter-spacing: inherit;\n    color: ",";\n    text-transform: capitalize;\n  }\n"])),N.textMain,N.grayLighter,(0,v.uT)("background-color"),N.blue50,v.rS.colors.gray),V=(0,T.Z)(v.Xd)(u||(u=(0,L.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 5px;\n\n  height: 100%;\n  width: 20px;\n  padding: 0;\n\n  color: ",";\n  background-color: transparent;\n  transform: translateY(-50%);\n\n  ",";\n\n  &:focus-visible,\n  &:hover {\n    color: ",";\n  }\n"])),N.gray,(0,v.uT)("color"),N.textMain),_=r(184),K=["value","type","onChange","disabled","inputOverride"],U=(0,h.forwardRef)((function(n,e){var r=n.value,t=n.type,i=n.onChange,o=n.disabled,a=n.inputOverride,l=(0,H.Z)(n,K),d=a||O;return(0,_.jsx)(W,{disabled:o,children:(0,_.jsxs)(G,{children:[(0,_.jsx)(d,(0,f.Z)({ref:e,type:t||"text",onChange:i,value:r},l)),r&&(0,_.jsx)(V,{type:"button",onClick:function(){return i({target:{value:""}})},children:(0,_.jsx)(D.ven,{size:"80%"})})]})})})),X=r(7692),Y=function(n){var e=n.onSubmit,r=(0,h.useState)({brand:"",price:"",mileageFrom:"",mileageTo:""}),t=(0,p.Z)(r,2),i=t[0],o=t[1],a=i.brand,l=i.price,d=i.mileageFrom,s=i.mileageTo,c=I.map((function(n){return{label:n}})),u=Array.from({length:100}).map((function(n,e){return{label:"".concat(10*(e+1),"$")}}));return(0,_.jsxs)(P,{autoComplete:"off",onSubmit:function(n){null===n||void 0===n||n.preventDefault(),e(i)},children:[(0,_.jsxs)(R,{children:[(0,_.jsx)(A,{children:"Car brand"}),(0,_.jsx)(b.ZP,{isClearable:!0,styles:F,components:j,options:c,onChange:function(n){var r,t=null!==(r=null===n||void 0===n?void 0:n.label)&&void 0!==r?r:"";o((0,f.Z)((0,f.Z)({},i),{},{brand:t})),n||e((0,f.Z)((0,f.Z)({},i),{},{brand:""}))},value:a?{label:a}:null})]}),(0,_.jsxs)(R,{children:[(0,_.jsx)(A,{children:"Price / 1 hour"}),(0,_.jsx)(b.ZP,{isClearable:!0,styles:z,placeholder:"To...",components:j,options:u,onChange:function(n){var r=(null===n||void 0===n?void 0:n.label)||"";o((0,f.Z)((0,f.Z)({},i),{},{price:r})),n||e((0,f.Z)((0,f.Z)({},i),{},{price:""}))},value:l?{label:l}:null})]}),(0,_.jsxs)(R,{children:[(0,_.jsx)(A,{children:"\u0421ar mileage / km"}),(0,_.jsxs)(B,{children:[(0,_.jsx)(U,{pattern:"^0|[1-9]\\d*",title:"Enter a positive number",placeholder:"from",onChange:function(n){var r=n.target.value;o((0,f.Z)((0,f.Z)({},i),{},{mileageFrom:r})),r||e((0,f.Z)((0,f.Z)({},i),{},{mileageFrom:""}))},value:d}),(0,_.jsx)(U,{pattern:"^0|[1-9]\\d*",title:"Enter a positive number",placeholder:"to",onChange:function(n){var r=n.target.value;o((0,f.Z)((0,f.Z)({},i),{},{mileageTo:r})),r||e((0,f.Z)((0,f.Z)({},i),{},{mileageTo:""}))},value:s,style:{borderRadius:"0px 14px 14px 0px",border:"none"}})]})]}),(0,_.jsx)(E,{type:"submit",disabled:!(a||l||d||s),children:(0,_.jsx)(X.Goc,{size:25})})]})},$=r(8300),q=r(3390),J=function(){var n=(0,h.useState)(null),e=(0,p.Z)(n,2),r=e[0],t=e[1],i=(0,x.k)(),o=i.cars,a=i.setPage,l=i.isLoading,d=i.noMoreItems,s=i.error,c=i.setError;if(s)return g.Am.error(s.message),c(null);var u=o;if(r){var f=r.price,b=r.mileageFrom,Z=r.mileageTo,k=r.brand;(u=o.filter((function(n){var e=n.mileage,r=n.rentalPrice,t=n.make,i=r.match(/\d+/),o=(0,p.Z)(i,1)[0];return(!k||t===k)&&o<=(parseInt(f)||1/0)&&e>=(parseFloat(b)||0)&&e<=(parseFloat(Z)||1/0)}))).length&&g.Am.info("".concat(u.length," car(s) found"))}return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(v.V1,{children:"Car park"}),(0,_.jsx)(Y,{onSubmit:function(n){t((0,$.E7)(n)?null:n)}}),!l&&!u.length&&(0,_.jsx)(v.or,{children:"No items found"}),(0,_.jsx)(m.h,{items:u}),!r&&!d&&(0,_.jsx)(q.C,{onClick:function(){return a((function(n){return n+1}))},isLoading:l})]})}}}]);
//# sourceMappingURL=820.5f065d34.chunk.js.map