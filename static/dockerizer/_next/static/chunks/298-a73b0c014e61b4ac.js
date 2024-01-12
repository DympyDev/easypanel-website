"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{6828:function(e,r,t){t.d(r,{u:function(){return k},A:function(){return w}});var s=t(5893),a=t(5995),n=t.n(a),i=t(6485),l=t(2010),o=t(4712);let d=e=>{let{...r}=e,{theme:t="system"}=(0,l.F)();return(0,s.jsx)(o.x,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...r})};var c=t(3162),u=t(5733),f=t.n(u);async function m(e){let r=new(f());Object.entries(e).map(e=>{let[t,s]=e;r.file("dockerizer/".concat(t),s)});let t=await r.generateAsync({type:"blob"});(0,c.saveAs)(t,"dockerizer.zip")}var x=t(1864),p=t(3025),h=t(422),g=t(6915),j=t(1664),b=t.n(j),v=t(7294),y=t(7474),N=t(6671);function w(e){let{children:r}=e;return(0,s.jsxs)("main",{className:"".concat(n().className),children:[(0,s.jsxs)("div",{className:"fixed left-0 right-0 top-0 z-10 flex justify-between bg-slate-300 mb-10 p-4",children:[(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(b(),{href:"/",children:"Dockerizer"})," by"," ",(0,s.jsx)(b(),{href:"https://easypanel.io/",children:"Easypanel"})]}),(0,s.jsx)("div",{className:""})]}),(0,s.jsx)("div",{className:"max-w-6xl px-4 mx-auto mt-28 mb-16",children:r}),(0,s.jsx)(d,{})]})}function k(e){let{children:r,title:t,description:a,getFiles:n}=e,[l,d]=(0,v.useState)(null);async function c(){let e=n();await m(e)}function u(){d(n())}return(0,v.useEffect)(()=>{null===l&&u()},[]),(0,s.jsxs)(w,{children:[(0,s.jsxs)("div",{className:"md:flex justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{className:"text-3xl tracking-tight font-medium",children:["Dockerize ",t," Applications"]}),a&&(0,s.jsx)("h2",{className:"text-xl",children:a})]}),(0,s.jsxs)("div",{className:"space-x-2",children:[(0,s.jsxs)(i.z,{onClick:c,variant:"secondary",children:[(0,s.jsx)(p.Z,{className:"mr-2 h-4 w-4"}),"Download"]}),(0,s.jsxs)(i.z,{onClick:u,children:[(0,s.jsx)(h.Z,{className:"mr-2 h-4 w-4"}),"Dockerize"]})]})]}),(0,s.jsxs)("div",{className:"grid lg:grid-cols-3 gap-8 mt-10",children:[(0,s.jsxs)("div",{className:"lg:col-span-1 min-w-0",children:[(0,s.jsx)("div",{className:"space-y-6",children:r}),(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsxs)("div",{className:"space-x-2",children:[(0,s.jsxs)(i.z,{onClick:c,variant:"secondary",children:[(0,s.jsx)(p.Z,{className:"mr-2 h-4 w-4"}),"Download"]}),(0,s.jsxs)(i.z,{onClick:u,children:[(0,s.jsx)(h.Z,{className:"mr-2 h-4 w-4"}),"Dockerize"]})]})})]}),(0,s.jsx)("div",{className:"lg:col-span-2 min-w-0",children:l&&Object.entries(l).length>0&&(0,s.jsx)("div",{className:"spacy-y-4",children:Object.entries(l).map((e,r)=>{let[t,a]=e;return(0,s.jsxs)("div",{className:"rounded overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center bg-slate-200 p-2",children:[(0,s.jsx)("div",{className:"pl-2 text-sm font-medium",children:t}),(0,s.jsxs)(i.z,{size:"xs",variant:"outline",onClick:()=>{navigator.clipboard.writeText(a),(0,o.A)("Copied to clipboard")},children:[(0,s.jsx)(g.Z,{className:"mr-2 h-3.5 w-3.5"}),"Copy"]})]}),(0,s.jsx)(y.Z,{language:function(e){let r=(0,x.basename)(e,".njk").toLowerCase();return"dockerfile"===r?"dockerfile":(0,x.extname)(r)}(t),style:N.ME,className:"text-sm !bg-slate-100 !p-4",children:a})]},t)})})})]})]})}},6485:function(e,r,t){t.d(r,{z:function(){return d}});var s=t(5893),a=t(8426),n=t(5139),i=t(7294),l=t(9186);let o=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",xs:"h-7 rounded-md px-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,r)=>{let{className:t,variant:n,size:i,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,s.jsx)(u,{className:(0,l.cn)(o({variant:n,size:i,className:t})),ref:r,...c})});d.displayName="Button"},5784:function(e,r,t){t.d(r,{yt:function(){return N},ih:function(){return k},j7:function(){return w}});var s=t(5893),a=t(7294),n=t(180),i=t(3742),l=t(9186);a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.fC,{ref:r,className:(0,l.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...a,children:(0,s.jsx)(n.z$,{className:(0,l.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})})}).displayName=n.fC.displayName;var o=t(2152);let d=a.forwardRef((e,r)=>{let{className:t,type:a,...n}=e;return(0,s.jsx)("input",{type:a,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n})});d.displayName="Input";var c=t(14),u=t(8971),f=t(4979);let m=c.fC;c.ZA;let x=c.B4,p=a.forwardRef((e,r)=>{let{className:t,children:a,...n}=e;return(0,s.jsxs)(c.xz,{ref:r,className:(0,l.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...n,children:[a,(0,s.jsx)(c.JO,{asChild:!0,children:(0,s.jsx)(u.Z,{className:"h-4 w-4 opacity-50"})})]})});p.displayName=c.xz.displayName;let h=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(c.u_,{ref:r,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",t),...a,children:(0,s.jsx)(f.Z,{className:"h-4 w-4"})})});h.displayName=c.u_.displayName;let g=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(c.$G,{ref:r,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",t),...a,children:(0,s.jsx)(u.Z,{className:"h-4 w-4"})})});g.displayName=c.$G.displayName;let j=a.forwardRef((e,r)=>{let{className:t,children:a,position:n="popper",...i}=e;return(0,s.jsx)(c.h_,{children:(0,s.jsxs)(c.VY,{ref:r,className:(0,l.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:n,...i,children:[(0,s.jsx)(h,{}),(0,s.jsx)(c.l_,{className:(0,l.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,s.jsx)(g,{})]})})});j.displayName=c.VY.displayName,a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(c.__,{ref:r,className:(0,l.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...a})}).displayName=c.__.displayName;let b=a.forwardRef((e,r)=>{let{className:t,children:a,...n}=e;return(0,s.jsxs)(c.ck,{ref:r,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(c.wU,{children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(c.eT,{children:a})]})});b.displayName=c.ck.displayName,a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(c.Z0,{ref:r,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",t),...a})}).displayName=c.Z0.displayName;var v=t(761);let y=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(v.fC,{className:(0,l.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...a,ref:r,children:(0,s.jsx)(v.bU,{className:(0,l.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});y.displayName=v.fC.displayName;let N=e=>{let{label:r,description:t,inputProps:a,...n}=e;return(0,s.jsx)(o.Wi,{...n,render:e=>{let{field:n}=e;return(0,s.jsxs)(o.xJ,{children:[(0,s.jsx)(o.lX,{children:r}),(0,s.jsx)(o.NI,{children:(0,s.jsx)(d,{...n,...a})}),t&&(0,s.jsx)(o.pf,{children:t}),(0,s.jsx)(o.zG,{})]})}})},w=e=>{let{label:r,description:t,...a}=e;return(0,s.jsx)(o.Wi,{...a,render:e=>{let{field:a}=e;return(0,s.jsxs)(o.xJ,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",children:[(0,s.jsxs)("div",{className:"space-y-0.5",children:[(0,s.jsx)(o.lX,{children:r}),t&&(0,s.jsx)(o.pf,{children:t})]}),(0,s.jsx)(o.NI,{children:(0,s.jsx)(y,{checked:a.value,onCheckedChange:a.onChange})})]})}})},k=e=>{let{label:r,description:t,options:a,...n}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Wi,{...n,render:e=>{let{field:n}=e;return(0,s.jsxs)(o.xJ,{children:[(0,s.jsx)(o.lX,{children:r}),(0,s.jsxs)(m,{onValueChange:n.onChange,defaultValue:n.value,children:[(0,s.jsx)(o.NI,{children:(0,s.jsx)(p,{children:(0,s.jsx)(x,{placeholder:"Select a verified email to display"})})}),(0,s.jsx)(j,{children:a.map((e,r)=>"string"==typeof e?(0,s.jsx)(b,{value:e,children:e},r):(0,s.jsx)(b,{value:e.value,children:e.label},r))})]}),t&&(0,s.jsx)(o.pf,{children:t}),(0,s.jsx)(o.zG,{})]})}})})}},2152:function(e,r,t){t.d(r,{l0:function(){return u},NI:function(){return j},pf:function(){return b},Wi:function(){return m},xJ:function(){return h},lX:function(){return g},zG:function(){return v}});var s=t(5893),a=t(7294),n=t(8426),i=t(7536),l=t(9186),o=t(9102);let d=(0,t(5139).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(o.f,{ref:r,className:(0,l.cn)(d(),t),...a})});c.displayName=o.f.displayName;let u=i.RV,f=a.createContext({}),m=e=>{let{...r}=e;return(0,s.jsx)(f.Provider,{value:{name:r.name},children:(0,s.jsx)(i.Qr,{...r})})},x=()=>{let e=a.useContext(f),r=a.useContext(p),{getFieldState:t,formState:s}=(0,i.Gc)(),n=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=r;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...n}},p=a.createContext({}),h=a.forwardRef((e,r)=>{let{className:t,...n}=e,i=a.useId();return(0,s.jsx)(p.Provider,{value:{id:i},children:(0,s.jsx)("div",{ref:r,className:(0,l.cn)("space-y-2",t),...n})})});h.displayName="FormItem";let g=a.forwardRef((e,r)=>{let{className:t,...a}=e,{error:n,formItemId:i}=x();return(0,s.jsx)(c,{ref:r,className:(0,l.cn)(n&&"text-destructive",t),htmlFor:i,...a})});g.displayName="FormLabel";let j=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:i,formDescriptionId:l,formMessageId:o}=x();return(0,s.jsx)(n.g7,{ref:r,id:i,"aria-describedby":a?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!a,...t})});j.displayName="FormControl";let b=a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:n}=x();return(0,s.jsx)("p",{ref:r,id:n,className:(0,l.cn)("text-sm text-muted-foreground",t),...a})});b.displayName="FormDescription";let v=a.forwardRef((e,r)=>{let{className:t,children:a,...n}=e,{error:i,formMessageId:o}=x(),d=i?String(null==i?void 0:i.message):a;return d?(0,s.jsx)("p",{ref:r,id:o,className:(0,l.cn)("text-sm font-medium text-destructive",t),...n,children:d}):null});v.displayName="FormMessage"},9186:function(e,r,t){t.d(r,{cn:function(){return n}});var s=t(512),a=t(8388);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,s.W)(r))}}}]);