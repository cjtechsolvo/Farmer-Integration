import{z as t,b as a,h as s,t as r,A as o,o as n}from"./vendor.3db60d45.js";const d={setup(c){const e=t({url:"http://127.0.0.1:8000/api/method/farmer.api.user_api.fetch_site_list",method:"GET"});return e.fetch(),console.log(e.data),(l,i)=>(n(),a("div",null,[s("pre",null,"      "+r(JSON.stringify(o(e).data.data,null,2))+`
    `,1)]))}};export{d as default};
