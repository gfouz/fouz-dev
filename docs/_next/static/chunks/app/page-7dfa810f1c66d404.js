(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3918:function(A,e,t){Promise.resolve().then(t.t.bind(t,413,23)),Promise.resolve().then(t.t.bind(t,3376,23)),Promise.resolve().then(t.bind(t,7563)),Promise.resolve().then(t.bind(t,3404)),Promise.resolve().then(t.bind(t,5072)),Promise.resolve().then(t.bind(t,5426)),Promise.resolve().then(t.bind(t,9775)),Promise.resolve().then(t.bind(t,6666)),Promise.resolve().then(t.bind(t,7632))},9775:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return footer_ContactForm}});var r=t(7437),a=t(2265),s=t(1865),i=t(8110),n=t(4578);let o=n.z.object({email:n.z.string().email({message:"Please enter a valid email address"})}),useContactService=()=>{let[A,e]=(0,a.useState)(void 0),[t,r]=(0,a.useState)(!1),[s,i]=(0,a.useState)(void 0),fetchData=async A=>{r(!0);try{let t=await fetch("https://formspree.io/f/xdovlonj",{cache:"no-cache",method:"POST",body:JSON.stringify(A),headers:{"content-type":"application/json"}});if(!t.ok)throw Error(t.statusText);let r=await t.json();e(r)}catch(A){i(A.message)}finally{r(!1)}};return{data:A,loading:t,error:s,fetchData}};var l=t(4887),footer_SubmitButton=function(){let A=(0,l.useFormStatus)();return(0,r.jsx)("button",{className:"btn btn-primary join-item",type:"submit",disabled:A.pending,children:A.pending?"Submitting...":"Subscribe"})},footer_ContactForm=()=>{var A,e,t,a;let{register:n,handleSubmit:l,formState:{errors:d}}=(0,s.cI)({resolver:(0,i.F)(o)}),{data:g,error:h,fetchData:c}=useContactService(),onSubmit=async A=>{let e={...A,message:"Hello Giovanoti. I want to hire you!"};c(e)};return(0,r.jsxs)("form",{onSubmit:l(onSubmit),children:[(0,r.jsx)("header",{className:"footer-title",children:"Newsletter"}),(0,r.jsxs)("fieldset",{className:"form-control w-80",children:[(0,r.jsx)("label",{className:"label",children:(null==d?void 0:null===(A=d.email)||void 0===A?void 0:A.message)?(0,r.jsx)("span",{className:"label-text text-red-500",children:null==d?void 0:null===(e=d.email)||void 0===e?void 0:e.message}):(0,r.jsx)("span",{className:"label-text",children:"Enter your email address"})}),(0,r.jsxs)("div",{className:"join",children:[(0,r.jsx)("input",{...n("email"),placeholder:"username@site.com",className:"input join-item input-bordered"}),(0,r.jsx)(footer_SubmitButton,{})]})]}),(null===(t=d.email)||void 0===t?void 0:t.message)&&(0,r.jsx)("p",{children:null===(a=d.email)||void 0===a?void 0:a.message})]})}},6666:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return menu_HamburgerMenu}});var r=t(7437),a=t(2265),s=t(6691),i=t.n(s),n={src:"/_next/static/media/fouz-golden.398f1be3.png",height:104,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXHIoRblzmHUqAOykDW6mCm/oVHawkDp1GO0kjro0mHWqgDWrAHjzGDUqwLUqgC7mTy7mT127xqtAAAAEnRSTlMAHE5OShE5CTEtQjRhyIGtnJ6hTByRAAAACXBIWXMAAAG8AAABvAFoqEWdAAAAOklEQVR4nAXBhwHAIAzAMAcCWaz+/2wlsLZ3M/B0d0+ngXRIppy+TgWz31V3TSKshkWACgw1MH2fDn461AGjoWxycAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},menu_HamburgerMenu=()=>{let[A,e]=a.useState(!1);return(0,r.jsx)("nav",{className:"border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800",children:(0,r.jsxs)("div",{className:"mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4",children:[(0,r.jsxs)("a",{href:"#",className:"flex items-center space-x-3 rtl:space-x-reverse",children:[(0,r.jsx)(i(),{src:n,className:"w-[25px] h-[25px]",alt:"fouz-logo"}),(0,r.jsx)("span",{className:"self-center whitespace-nowrap text-2xl font-semibold dark:text-white",children:"Giovani Fouz"})]}),(0,r.jsx)("button",{onClick:()=>e(!A),type:"button",className:"group relative me-2 inline-flex items-center justify-center  overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800 md:hidden",children:(0,r.jsx)("span",{className:"relative rounded-md bg-white px-6 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900",children:A?"close":"open"})}),(0,r.jsx)("div",{className:A?"w-full md:block md:w-auto":"hidden w-full md:block md:w-auto",id:"navbar-solid-bg",children:(0,r.jsxs)("ul",{className:"mt-4 flex flex-col rounded-lg bg-gray-50 text-left font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",className:"block rounded px-3 py-2 text-white  md:bg-transparent md:p-0  md:dark:bg-transparent","aria-current":"page",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",className:"block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500",children:"Github"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",className:"block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500",children:"Portfolio"})})]})})]})})}},7632:function(A,e,t){"use strict";t.r(e);var r=t(7437),a=t(2265),s=t(7712),i=t(3136),n=t(4327);e.default=A=>{let{children:e,variants:t,className:o}=A,l=(0,s._)(),[d,g]=(0,n.YD)();return a.useEffect(()=>{g?l.start("visible"):l.start("hidden")},[l,g]),(0,r.jsx)(i.E.div,{ref:d,variants:t,initial:"hidden",animate:l,className:o,children:e})}},7563:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/blog.9d4993b6.jpg",height:534,width:800,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABnxR//8QAFhAAAwAAAAAAAAAAAAAAAAAAAhES/9oACAEBAAEFAiUf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/AXT/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGP/8QAFxABAAMAAAAAAAAAAAAAAAAAAQARIv/aAAgBAQAGPwIArM//xAAXEAADAQAAAAAAAAAAAAAAAAAAAUER/9oACAEBAAE/IXagdVP/2gAMAwEAAgADAAAAEAf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAwEBPxCz/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQIBAT8Qh//EABgQAQADAQAAAAAAAAAAAAAAAAEAESEx/9oACAEBAAE/EMhkNNTfWp//2Q==",blurWidth:8,blurHeight:5}},3404:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/finances.978e8cd3.jpg",height:553,width:800,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABpxR//8QAFRABAQAAAAAAAAAAAAAAAAAAEgH/2gAIAQEAAQUCNf8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Bj//EABYQAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAQAGPwKjN//EABYQAQEBAAAAAAAAAAAAAAAAAAEAYf/aAAgBAQABPyFd4V//2gAMAwEAAgADAAAAEAf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxCv/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/EGh//8QAGhABAAEFAAAAAAAAAAAAAAAAAQARITFBUf/aAAgBAQABPxBK4uAXNN9n/9k=",blurWidth:8,blurHeight:6}},5072:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/forest.68bf036d.jpg",height:700,width:1300,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABmgn/xAAWEAADAAAAAAAAAAAAAAAAAAAAAyL/2gAIAQEAAQUCbJ//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGP/8QAFxAAAwEAAAAAAAAAAAAAAAAAAQIRAP/aAAgBAQAGPwJlAgu//8QAFhABAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEBAAE/IUYaH//aAAwDAQACAAMAAAAQA//EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAwEBPxCs/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/EHh//8QAGBABAAMBAAAAAAAAAAAAAAAAAQARIWH/2gAIAQEAAT8QcJtQDc7P/9k=",blurWidth:8,blurHeight:4}},5426:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fouz-green.9b990742.png",height:112,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAKlBMVEVn/wBj/wBMaXFl/wBm/wBl/wBm/wBn/wBf/wBj/wBm/wBm/wBm/wBm/wAqhQ5DAAAADnRSTlNBDwBuLnocTwomzGA1lt7J3JwAAAAJcEhZcwAAAbwAAAG8AWioRZ0AAAA2SURBVHicHcu5EcAwDASx5VH8LLn/dj1yggyo/XETC6quUqVgdlTsYcWLx+JkTuehMRmG7H8fIDQBAOdjrUUAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8}}},function(A){A.O(0,[16,971,472,744],function(){return A(A.s=3918)}),_N_E=A.O()}]);