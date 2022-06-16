import{s as p,m as b,o,c as w,w as g,d as s,t as m,u as e,b as i,h,F as y,j as d,q as f,x as c,y as x,z as N}from"./index.788889cd.js";import{_ as U}from"./PageComponent.27b29dba.js";import{A as V}from"./Alert.39c1b455.js";const C={class:"flex items-center justify-between"},B={class:"text-3xl font-bold text-gray-900"},M=["onSubmit"],P={class:"shadow sm:rounded-md sm:overflow-hidden"},S={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},T=s("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Nom Complet",-1),q={key:0},O=s("label",{for:"telephone",class:"block text-sm font-medium text-gray-700"},"T\xE9l\xE9phone",-1),$={key:0},A=s("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Password",-1),D=s("label",{for:"password_confirmation",class:"block text-sm font-medium text-gray-700"},"Password Confirmation",-1),F={class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},L=s("button",{type:"submit",class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:offset-2 focus-ring-indigo-500"}," Save ",-1),H={setup(z){const t=p.state.user.data;t.password_confirmation="",t.password="";let a=b(!1),l=b({});function _(){if(l.value={},t.password!==t.password_confirmation){l.value={error:{error:"The passwords are different."}};return}p.dispatch("updateProfil",t).then(u=>{p.commit("notify",{type:"success",message:"Le profil a bien ete mis a jour."})}).catch(u=>{u.response.status===422&&(l.value=u.response.data.errors)})}return(u,r)=>(o(),w(U,null,{header:g(()=>[s("div",C,[s("h1",B,m(e(t).id?`Utilisateur ${e(t).id}`:"Utilisateur"),1)])]),default:g(()=>[s("form",{onSubmit:x(_,["prevent"]),autocomplete:"none",class:"animate-fade-in-down"},[Object.keys(e(l)).length?(o(),w(V,{key:0,class:"flex-col items-stretch text-sm"},{default:g(()=>[(o(!0),i(y,null,h(Object.keys(e(l)),(n,k)=>(o(),i("div",{key:k},[(o(!0),i(y,null,h(e(l)[n]||[],(v,j)=>(o(),i("div",{key:j}," * "+m(v),1))),128))]))),128))]),_:1})):d("",!0),s("div",P,[s("div",S,[s("div",null,[T,e(a)?d("",!0):(o(),i("span",q,m(e(t).name),1)),e(a)?f((o(),i("input",{key:1,type:"text",name:"name",id:"name","onUpdate:modelValue":r[0]||(r[0]=n=>e(t).name=n),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512)),[[c,e(t).name]]):d("",!0)]),s("div",null,[O,e(a)?d("",!0):(o(),i("span",$,m(e(t).telephone),1)),e(a)?f((o(),i("input",{key:1,type:"tel",name:"telephone",id:"telephone",pattern:"6[0-9]{8}",title:"Numero Orange, MTN ou bien Nextell","onUpdate:modelValue":r[1]||(r[1]=n=>e(t).telephone=n),autocorrect:"off",spellcheck:"false",autocomplete:"off",required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512)),[[c,e(t).telephone]]):d("",!0)]),s("div",null,[A,e(a)?f((o(),i("input",{key:0,type:"password","onUpdate:modelValue":r[2]||(r[2]=n=>e(t).password=n),id:"password",name:"password",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512)),[[c,e(t).password]]):d("",!0)]),s("div",null,[D,e(a)?f((o(),i("input",{key:0,"onUpdate:modelValue":r[3]||(r[3]=n=>e(t).password_confirmation=n),id:"password_confirmation",name:"password_confirmation",type:"password",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512)),[[c,e(t).password_confirmation]]):d("",!0)])]),s("div",F,[s("button",{onClick:r[4]||(r[4]=x(n=>N(a)?a.value=!0:a=!0,["prevent"])),class:"inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:offset-2 focus-ring-indigo-500"}," Modifier "),L])])],40,M)]),_:1}))}};export{H as default};
