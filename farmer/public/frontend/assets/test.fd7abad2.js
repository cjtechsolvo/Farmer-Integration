import{A as t,b as a,i as s,t as r,C as o,o as c}from"./vendor.74c179f5.js";const u={setup(n){const e=t({url:"http://127.0.0.1:8000/api/method/farmer.api.user_api.fetch_site_list",method:"GET"});return e.fetch(),console.log(e.data),(l,i)=>(c(),a("div",null,[s("pre",null,"      "+r(JSON.stringify(o(e).data.data,null,2))+`
    `,1)]))}};export{u as default};
