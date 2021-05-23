(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(A,e,t){},27:function(A,e,t){},53:function(A,e,t){"use strict";t.r(e);var c=t(1),s=t.n(c),a=t(20),l=t.n(a),n=(t(26),t(27),t(5)),i=t(4),j=t.n(i),r=t(2),o=t(6),d=t.n(o),b=t(0),x=function(){var A=Object(c.useState)([]),e=Object(n.a)(A,2),t=e[0],s=e[1],a=Object(c.useState)(0),l=Object(n.a)(a,2),i=l[0],o=l[1];Object(c.useEffect)((function(){j.a.get("http://localhost:8000/api/pets").then((function(A){console.log(A),s(A.data.results)})).catch((function(A){return console.log(A)}))}),[i]);return Object(b.jsxs)("div",{className:d.a.container,children:[Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)(r.a,{to:"/pets/create",className:d.a.link,children:"+ add a pet to the shelter"})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h1",{children:"These pets are looking for a good home!"}),Object(b.jsxs)("table",{className:"table table-hover table-dark mt-3",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Type"}),Object(b.jsx)("th",{scope:"col",children:"Actions"}),Object(b.jsx)("th",{scope:"col",children:"Likes"})]})}),Object(b.jsx)("tbody",{children:t.map((function(A,e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:A.petName}),Object(b.jsx)("th",{scope:"row",children:A.type}),Object(b.jsxs)("th",{scope:"row",children:[Object(b.jsx)(r.a,{to:"/pets/update/".concat(A._id),className:"btn btn-warning",children:"Edit"}),Object(b.jsx)(r.a,{to:"/pets/".concat(A._id),className:"btn btn-info ml-3",children:"Details"})]}),Object(b.jsxs)("th",{scope:"row",className:d.a.likes,children:[Object(b.jsx)("button",{onClick:function(e){return function(A,e){o(i+1),e.likes+=1,j.a.put("http://localhost:8000/api/pets/update/".concat(e._id),e).then((function(A){return console.log(A)})).catch((function(A){return console.log(A)}))}(0,A)},className:"btn btn-danger",children:"Like"})," ",Object(b.jsx)("img",{height:"20px",width:"20px",src:"data:image/jpeg;base64,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"})," ",A.likes]})]},e)}))})]})]})]})},h=t(7),m=t(9),O=function(){var A=Object(c.useState)({petName:"",type:"",description:"",skill1:"",skill2:"",skill3:"",likes:0}),e=Object(n.a)(A,2),t=e[0],s=e[1],a=Object(c.useState)({}),l=Object(n.a)(a,2),i=l[0],o=l[1],x=function(A){s(Object(m.a)(Object(m.a)({},t),{},Object(h.a)({},A.target.name,A.target.value)))};return Object(b.jsxs)("div",{className:d.a.container,children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h1",{children:"Know a pet needing a home?"})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(r.a,{to:"/",children:"Main Page"})})]}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsxs)("form",{onSubmit:function(A){A.preventDefault(),j.a.post("http://localhost:8000/api/pets/create",t).then((function(A){console.log(A),A.data.errors?o(A.data.errors):Object(r.c)("/")})).catch((function(A){return console.log(A)}))},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Name"}),Object(b.jsx)("input",{onChange:x,type:"text",className:"form-control",name:"petName"}),Object(b.jsx)("p",{className:"text-danger",children:i.petName?i.petName.message:""})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Type"}),Object(b.jsx)("input",{onChange:x,type:"text",className:"form-control",name:"type"}),Object(b.jsx)("p",{className:"text-danger",children:i.type?i.type.message:""})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Description"}),Object(b.jsx)("textarea",{onChange:x,type:"textarea",className:"form-control",name:"description"}),Object(b.jsx)("p",{className:"text-danger",children:i.description?i.description.message:""})]})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Skill 1 (Optional)"}),Object(b.jsx)("input",{onChange:x,type:"text",className:"form-control",name:"skill1"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Skill 2 (Optional)"}),Object(b.jsx)("input",{onChange:x,type:"text",className:"form-control",name:"skill2"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Skill 3 (Optional)"}),Object(b.jsx)("input",{onChange:x,type:"text",className:"form-control",name:"skill3"})]})]})]}),Object(b.jsx)("div",{className:"mb-3 d-flex justify-content-end",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-info",children:"Add"})})]})})]})},p=function(A){var e=Object(c.useState)({}),t=Object(n.a)(e,2),s=t[0],a=t[1];Object(c.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(A.id)).then((function(A){console.log(A),a(A.data.results)})).catch((function(A){return console.log(A)}))}),[]);return Object(b.jsxs)("div",{className:d.a.container,children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col d-flex",children:Object(b.jsx)("h1",{children:"Details about:"})}),Object(b.jsx)("div",{className:"mb-3 d-flex justify-content-end",children:Object(b.jsx)(r.a,{to:"/",children:"Main Page"})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col mt-3",children:[Object(b.jsx)("h1",{children:s.petName}),Object(b.jsx)("hr",{}),Object(b.jsxs)("h3",{children:["Type: ",s.type]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("h3",{children:["Description: ",s.description]}),Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Skills:"}),Object(b.jsx)("p",{children:s.skill1}),Object(b.jsx)("p",{children:s.skill2}),Object(b.jsx)("p",{children:s.skill3})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("button",{onClick:function(){j.a.delete("http://localhost:8000/api/pets/delete/".concat(A.id)).then((function(A){console.log("this will be deleted",A),Object(r.c)("/")})).catch((function(A){return console.log(A)}))},className:"btn btn-danger",children:["Adopt ",s.petName]})})]})]})},u=function(A){var e=Object(c.useState)({petName:"",type:"",description:"",skill1:"",skill2:"",skill3:"",likes:0}),t=Object(n.a)(e,2),s=t[0],a=t[1],l=Object(c.useState)({}),i=Object(n.a)(l,2),o=i[0],x=i[1];Object(c.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(A.id)).then((function(A){console.log(A),a(A.data.results)})).catch((function(A){return console.log(A)}))}),[]);var O=function(A){a(Object(m.a)(Object(m.a)({},s),{},Object(h.a)({},A.target.name,A.target.value)))};return Object(b.jsxs)("div",{className:d.a.container,children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("h1",{children:["Update information about ",s.petName]})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(r.a,{to:"/",children:"Main Page"})})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.put("http://localhost:8000/api/pets/update/".concat(A.id),s).then((function(A){console.log(A),A.data.errors?x(A.data.errors):Object(r.c)("/")})).catch((function(A){return console.log(A)}))},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Name"}),Object(b.jsx)("input",{onChange:O,type:"text",className:"form-control",name:"petName",value:s.petName}),Object(b.jsx)("p",{className:"text-danger",children:o.petName?o.petName.message:""})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Type"}),Object(b.jsx)("input",{onChange:O,type:"text",className:"form-control",name:"type",value:s.type}),Object(b.jsx)("p",{className:"text-danger",children:o.type?o.type.message:""})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Description"}),Object(b.jsx)("textarea",{onChange:O,type:"textarea",className:"form-control",name:"description",value:s.description}),Object(b.jsx)("p",{className:"text-danger",children:o.description?o.description.message:""})]})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Skill 1 (Optional)"}),Object(b.jsx)("input",{onChange:O,type:"text",className:"form-control",name:"skill1",value:s.skill1})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Skill 2 (Optional)"}),Object(b.jsx)("input",{onChange:O,type:"text",className:"form-control",name:"skill2",value:s.skill2})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Skill 3 (Optional)"}),Object(b.jsx)("input",{onChange:O,type:"text",className:"form-control",name:"skill3",value:s.skill3})]})]})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("button",{type:"submit",children:"Add"})})})]})})]})};var N=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h1",{children:"Pet Shelter"})})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)(r.b,{children:[Object(b.jsx)(x,{path:"/"}),Object(b.jsx)(O,{path:"/pets/create"}),Object(b.jsx)(p,{path:"/pets/:id"}),Object(b.jsx)(u,{path:"/pets/update/:id"})]})})]})},f=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(e){var t=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,l=e.getTTFB;t(A),c(A),s(A),a(A),l(A)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),f()},6:function(A,e,t){A.exports={container:"Pet_container__1rL56",link:"Pet_link__tXz7p",likes:"Pet_likes__30UlJ"}}},[[53,1,2]]]);
//# sourceMappingURL=main.47a65e37.chunk.js.map