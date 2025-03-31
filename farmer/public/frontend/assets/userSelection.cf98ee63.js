var k=(o,s,d)=>new Promise((f,r)=>{var l=p=>{try{c(d.next(p))}catch(q){r(q)}},t=p=>{try{c(d.throw(p))}catch(q){r(q)}},c=p=>p.done?f(p.value):Promise.resolve(p.value).then(l,t);c((d=d.apply(o,s)).next())});import{_ as U,o as i,b as n,i as e,w as A,j as m,v as h,n as b,t as u,k as a,l as g,m as v,F as y,p as x,q as N,u as P,x as E,y as C,z as S,r as F}from"./vendor.74c179f5.js";const w="http://138.199.212.24",V={data(){return{step:1,form:{firstName:"",lastName:"",email:"",phoneCode:"+234",phone:"",age:"",gender:"",site:"",processor:"",crop:"",currentEquipment:"",desiredEquipment:"",quantity:"",quantityUnit:"Unit",address:"",idType:"",idNumber:"",idDocument:null,profilePicture:null,password:"",confirmPassword:"",smartphone:"",bankAccount:"",bankName:"",bankAccountNumber:"",farmName:"",farmAddress:"",longitude:"",latitude:"",crops:[{name:"",volume:"",volumeUnit:"kg",startMonth:"",endMonth:""}]},profilePictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsaTeFqurvUDvMYOcgZAd-JPf-dtLogrrog&s",showPassword:!1,showConfirmPassword:!1,errors:{},siteList:[],cropList:[],equipmentList:[],monthList:["January","February","March","April","May","June","July","August","September","October","November","December"]}},mounted(){this.fetchSites()},watch:{"form.firstName"(o){o?/^[A-Za-z\s]+$/.test(o)?this.errors.firstName="":this.errors.firstName="First name cannot contain numbers":this.errors.firstName="First name is required"},"form.lastName"(o){o?/^[A-Za-z\s]+$/.test(o)?this.errors.lastName="":this.errors.lastName="Last name cannot contain numbers":this.errors.lastName="Last name is required"},"form.email"(o){o?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?this.errors.email="":this.errors.email="Enter a valid email address":this.errors.email="Email is required"},"form.phone"(o){o?/^[0-9]{7,15}$/.test(o)?this.errors.phone="":this.errors.phone="Enter a valid phone number (numbers only)":this.errors.phone="Phone number is required"},"form.age"(o){o?/^\d+$/.test(o)?this.errors.age="":this.errors.age="Enter a valid age (positive numbers only)":this.errors.age="Valid age is required"},"form.gender"(o){this.errors.gender=o?"":"Gender is required"},"form.address"(o){this.errors.address=o?"":"Address is required"},"form.site"(o){this.errors.site=o?"":"Site is required"},"form.crop":function(o){this.errors.crop=o?"":"Crops is required"},"form.currentEquipment":function(o){this.errors.currentEquipment=o?"":"Current Equipment is required",o===this.form.desiredEquipment&&(this.errors.currentEquipment="Current Equipment Can't be Same as Desired Equipment")},"form.desiredEquipment":function(o){this.errors.desiredEquipment=o?"":"Desired Equipment is required",this.form.currentEquipment===o&&(this.errors.desiredEquipment="Desired Equipment Can't be Same as Current Equipment")},"form.quantity":function(o){o?/^\d+$/.test(o)?this.errors.quantity="":this.errors.quantity="Quantity must be a positive number":this.errors.quantity="Quantity is required"},"form.idType"(o){o&&!this.form.idNumber?this.errors.idNumber="Selected ID's Number is required":this.errors.idNumber=""},"form.idNumber"(o){this.form.idType&&!o?this.errors.idNumber="Selected ID's Number is required":this.errors.idNumber=""},"form.password"(o){o?/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(o)?this.errors.password="":this.errors.password="Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character":this.errors.password="Password is required"},"form.confirmPassword"(o){o?o!==this.form.password?this.errors.confirmPassword="Passwords do not match":this.errors.confirmPassword="":this.errors.confirmPassword="Confirm Password is required"},"form.smartphone"(o){o?this.errors.smartphone="":this.errors.smartphone="Please select if you have a smartphone"},"form.bankAccount"(o){o?this.errors.bankAccount="":this.errors.bankAccount="Please select one of the above options"},"form.bankAccountNumber"(o){this.form.bankAccount==="Yes"&&(o?/^\d+$/.test(o)?this.errors.bankAccountNumber="":this.errors.bankAccountNumber="Bank Account Number must contain only numbers":this.errors.bankAccountNumber="Bank Account Number is required")},"form.farmName"(o){o?/^[A-Za-z\s]+$/.test(o)?this.errors.farmName="":this.errors.farmName="Farm name can only contain letters and spaces":this.errors.farmName="Farm name is required"},"form.latitude"(o){o&&!/^-?([1-8]?[0-9]|90)(\.\d+)?$/.test(o)?this.errors.latitude="Invalid latitude format":this.errors.latitude=""},"form.longitude"(o){o&&!/^-?((1[0-7][0-9])|([1-9]?[0-9]))(\.\d+)?$/.test(o)?this.errors.longitude="Invalid longitude format":this.errors.longitude=""},"form.crops":{handler(o){!Array.isArray(o)||o.forEach((s,d)=>{s.name?this.errors[`crop_${d}_name`]="":this.errors[`crop_${d}_name`]="Crop name is required",s.volume?/^\d+$/.test(s.volume)?this.errors[`crop_${d}_volume`]="":this.errors[`crop_${d}_volume`]="Volume must be a positive number":this.errors[`crop_${d}_volume`]="Volume is required",s.startMonth?this.errors[`crop_${d}_startMonth`]="":this.errors[`crop_${d}_startMonth`]="Start month is required",s.endMonth?this.errors[`crop_${d}_endMonth`]="":this.errors[`crop_${d}_endMonth`]="End month is required"})},deep:!0}},methods:{fetchSites(){return k(this,null,function*(){try{const s=yield(yield fetch(`${w}/api/method/farmer.api.user_api.fetch_site_list`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();s&&s.message?this.siteList=s.message.data.map(d=>d):this.errors.site="Unexpected response format"}catch(o){this.errors.site="Failed to fetch sites",console.error(o)}try{const s=yield(yield fetch(`${w}/api/resource/Equipment Master?fields=["name"]&limit_page_length=1000`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();s&&s.data?(this.equipmentList=s.data.map(d=>d),console.log("data",this.equipmentList)):(this.errors.currentEquipment="Unexpected response format",this.errors.desiredEquipment="Unexpected response format")}catch(o){this.errors.currentEquipment="Failed to fetch Equipment",this.errors.desiredEquipment="Failed to fetch Equipment",console.error(o)}try{const s=yield(yield fetch(`${w}/api/method/farmer.api.user_api.get_all_crops`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();s&&s.message?this.cropList=s.message.crops.map(d=>d):this.errors.crop="Unexpected response format"}catch(o){this.errors.crop="Failed to fetch Crops",console.error(o)}})},registerUser(){return k(this,null,function*(){try{const o={first_name:this.form.firstName,last_name:this.form.lastName,email:this.form.email,phone:`${this.form.phoneCode}${this.form.phone}`,gender:this.form.gender,location:this.form.address,new_password:this.form.password,id_type:this.form.idType,id_number:this.form.idNumber,bank_name:this.form.bankName,account_number:this.form.bankAccountNumber,crops_processed:this.form.processor==="Yes"&&this.form.crop||"",qty_processed_daily:this.form.processor==="Yes"&&this.form.quantity||"",equipments_used:this.form.processor==="Yes"&&this.form.currentEquipment||"",unit:this.form.processor==="Yes"&&this.form.quantityUnit||"",site:this.form.site,farm_name:this.form.farmName,longitude:this.form.longitude,latitude:this.form.latitude,crops:this.form.crops.map(f=>f.name),actual_crops:this.form.crops.map(f=>({crop_name:f.name,start_month:f.startMonth,end_month:f.endMonth,quantity:f.volume,unit:f.volumeUnit}))};console.log({requestData:o});const d=yield(yield fetch(`${w}/api/method/farmer.api.user_api.create_user`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();d&&d.message?console.log("User Registration Success:",d.message):console.error("Unexpected API response format:",d)}catch(o){console.error("Failed to register user:",o)}})},upload_file(o){return k(this,null,function*(){})},validateStep(){if(this.errors={},this.step===1){this.errors={};const o=/^[A-Za-z\s]+$/,s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d=/^[0-9]{7,15}$/,f=/^[1-9]\d*$/;this.form.firstName?o.test(this.form.firstName)||(this.errors.firstName="First name cannot contain numbers"):this.errors.firstName="First name is required",this.form.lastName?o.test(this.form.lastName)||(this.errors.lastName="Last name cannot contain numbers"):this.errors.lastName="Last name is required",this.form.email?s.test(this.form.email)||(this.errors.email="Enter a valid email address"):this.errors.email="Email is required",this.form.phone?d.test(this.form.phone)||(this.errors.phone="Enter a valid phone number (numbers only)"):this.errors.phone="Phone number is required",this.form.age?f.test(this.form.age)||(this.errors.phone="Enter a valid age (positive numbers only)"):this.errors.age="Valid age is required",this.form.gender||(this.errors.gender="Gender is required"),this.form.address||(this.errors.address="Address is required"),this.form.site||(this.errors.site="Site is required"),this.form.processor||(this.errors.processor="Processor is required"),this.form.processor==="Yes"&&(this.form.crop||(this.errors.crop="Crops is required"),this.form.currentEquipment||(this.errors.currentEquipment="Current Equipment is required"),this.form.desiredEquipment||(this.errors.desiredEquipment="Desired Equipment is required"),this.form.quantity?f.test(this.form.quantity)||(this.errors.quantity="Quantity must be a positive number"):this.errors.quantity="Quantity is required"),this.form.idType&&!this.form.idNumber&&(this.errors.idNumber="Selected ID's Number is required")}if(this.step===2){const o=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;this.form.password?o.test(this.form.password)||(this.errors.password="Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character"):this.errors.password="Password is required",this.form.confirmPassword?this.form.confirmPassword!==this.form.password&&(this.errors.confirmPassword="Passwords do not match"):this.errors.confirmPassword="Confirm Password is required"}if(this.step===3&&(this.form.smartphone||(this.errors.smartphone="Please select one of the above options"),this.form.bankAccount?this.form.bankAccount==="Yes"&&(this.form.bankName||(this.errors.bankName="Bank name is required"),this.form.bankAccountNumber?/^\d+$/.test(this.form.bankAccountNumber)||(this.errors.bankAccountNumber="Bank account number must be numeric"):this.errors.bankAccountNumber="Bank account number is required"):this.errors.bankAccount="Please select one of the above options"),this.step===4){const o=/^[A-Za-z\s]+$/;this.form.farmName?o.test(this.form.farmName)?this.errors.farmName="":this.errors.farmName="Farm name can only contain letters and spaces":this.errors.farmName="Farm name is required";const s=/^-?([1-8]?[0-9]|90)(\.\d+)?$/,d=/^-?((1[0-7][0-9])|([1-9]?[0-9]))(\.\d+)?$/;this.form.latitude&&!s.test(this.form.latitude)?this.errors.latitude="Invalid latitude format":this.errors.latitude="",this.form.longitude&&!d.test(this.form.longitude)?this.errors.longitude="Invalid longitude format":this.errors.longitude="",this.form.crops.forEach((f,r)=>{f.name?this.errors[`crop_${r}_name`]="":this.errors[`crop_${r}_name`]="Crop name is required",f.volume?/^\d+$/.test(f.volume)?this.errors[`crop_${r}_volume`]="":this.errors[`crop_${r}_volume`]="Volume must be a positive number":this.errors[`crop_${r}_volume`]="Volume is required",f.startMonth?this.errors[`crop_${r}_startMonth`]="":this.errors[`crop_${r}_startMonth`]="Start month is required",f.endMonth?this.errors[`crop_${r}_endMonth`]="":this.errors[`crop_${r}_endMonth`]="End month is required"})}return Object.keys(this.errors).length===0},addAnotherCrop(){console.log("this.crops",this.form.crops),this.form.crops.push({name:"",volume:"",volumeUnit:"Unit",startMonth:"",endMonth:""})},removeCrop(o){this.form.crops.splice(o,1)},nextStep(){if(console.log("checking error",this.errors),this.validateStep())this.step<4&&this.step++;else return},previousStep(){this.step>1&&this.step--},toggleProcessorFields(){this.form.processor!=="Yes"},toggleBankDetailsFields(){this.form.bankAccount!=="Yes"&&(this.form.bankName="",this.form.bankAccountNumber="")},togglePasswordVisibility(o){o==="password"?(this.showPassword=!this.showPassword,document.getElementById("password").type=this.showPassword?"text":"password"):o==="confirm-password"&&(this.showConfirmPassword=!this.showConfirmPassword,document.getElementById("confirm-password").type=this.showConfirmPassword?"text":"password")},triggerFileInput(){this.$refs.fileInput.click()},handleFileUpload(o,s){const d=o.target.files[0];if(d){if(d.type!=="application/pdf"){alert("Only PDF files are allowed!");return}if(d.size>10*1024*1024){alert("File size must be less than 10MB!");return}s=="ID"?(this.form.idDocument=d,console.log("ID")):(this.form.farmDocument=d,console.log("Document"))}},handleFileDrop(o){o.preventDefault();const s=o.dataTransfer.files[0];s&&this.handleFileUpload({target:{files:[s]}})},changeProfilePicture(o){const s=o.target.files[0];this.profilePicture=s,this.profilePictureUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsaTeFqurvUDvMYOcgZAd-JPf-dtLogrrog&s"},handleSubmit(){if(this.validateStep())console.log("Form validation failed:",this.errors);else if(this.step==4){const o=this.registerUser();console.log("respo",o),alert("Form submitted successfully!")}}},name:"farmerRegister"},D={class:"container mx-auto p-4"},M={class:"flex justify-between items-center mb-6"},I=e("i",{class:"fas fa-arrow-left"},null,-1),R=N(" Back home "),B=[I,R],L=e("a",{class:"text-gray-600",href:"#"},[N(" Already have an account? "),e("span",{class:"text-green-600"},"Log in")],-1),T={class:"max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"},Y=e("h2",{class:"text-2xl font-semibold text-center mb-4"},"Create Account",-1),j={key:0},z=e("p",{class:"text-center text-gray-600 mb-8"},"Personal Information",-1),Z={class:"grid md:grid-cols-2 gap-4 mb-4"},G=e("label",{class:"block text-gray-700",for:"first-name"},"First Name *",-1),O={key:0,class:"text-red-500 text-sm mt-1"},J=e("label",{class:"block text-gray-700",for:"last-name"},"Last Name *",-1),W={key:0,class:"text-red-500 text-sm mt-1"},K={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},Q={class:"mb-4"},H=e("label",{class:"block text-gray-700",for:"email"},"Email",-1),X={key:0,class:"text-red-500 text-sm mt-1"},$={class:"mb-4"},ee=e("label",{class:"block text-gray-700",for:"phone"},"Phone *",-1),re={class:"flex"},se=e("option",{value:"+234"},"+234",-1),te=[se],oe={key:0,class:"text-red-500 text-sm mt-1"},ie={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},ne=e("label",{class:"block text-gray-700",for:"age-group"},"Age Group *",-1),le={key:0,class:"text-red-500 text-sm mt-1"},ae=e("label",{class:"block text-gray-700"},"Gender *",-1),de={class:"flex items-center mt-1"},me=e("label",{class:"mr-4",for:"male"},"Male",-1),ue=e("label",{for:"female"},"Female",-1),ce={key:0,class:"text-red-500 text-sm mt-1"},pe={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},fe={class:"mb-4"},he=e("label",{class:"block text-gray-700",for:"site"},"Site *",-1),be=e("option",{value:""},"Select...",-1),ge=["value"],_e={key:0,class:"text-red-500 text-sm mt-1"},ye={class:"mb-4"},ve=e("label",{class:"block text-gray-700"},"Are you a processor? *",-1),xe={class:"flex items-center mt-1"},ke=e("label",{class:"mr-4",for:"processor-yes"},"Yes",-1),we=e("label",{for:"processor-no"},"No",-1),qe={key:0,class:"text-red-500 text-sm mt-1"},Ne={key:0,class:"mb-4"},Ue={class:"mb-4"},Ae=e("label",{class:"block text-gray-700",for:"crop-field"},"What crops do you process? *",-1),Pe=e("option",{value:""},"Select...",-1),Ee=["value"],Ce={key:0,class:"text-red-500 text-sm mt-1"},Se={class:"mb-4"},Fe=e("label",{class:"block text-gray-700",for:"current-equipment"},"What equipment do you use currently? *",-1),Ve=e("option",{value:""},"Select...",-1),De=["value"],Me={key:0,class:"text-red-500 text-sm mt-1"},Ie={class:"mb-4"},Re=e("label",{class:"block text-gray-700",for:"desired-equipment"},"What equipment do you want to get? *",-1),Be=e("option",{value:""},"Select...",-1),Le=["value"],Te={key:0,class:"text-red-500 text-sm mt-1"},Ye={class:"mb-4"},je=e("label",{class:"block text-gray-700",for:"quantity"},"What quantity do you process daily? *",-1),ze={class:"flex"},Ze=e("option",{value:"Kg"},"Kg",-1),Ge=e("option",{value:"Bag"},"Bag",-1),Oe=[Ze,Ge],Je={key:0,class:"text-red-500 text-sm mt-1"},We={class:"mb-4"},Ke=e("label",{class:"block text-gray-700",for:"address"},"Residential address *",-1),Qe={key:0,class:"text-red-500 text-sm mt-1"},He={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},Xe={class:"mb-4"},$e=e("label",{class:"block text-gray-700",for:"id-type"},"ID Type *",-1),er=P('<option value="">Select...</option><option value="driver-license">Driver&#39;s License</option><option value="national-identity-number"> National Identity Number </option><option value="international-passport"> International Passport </option><option value="permanent-voter-card"> Permanent Voter&#39;s Card </option>',5),rr=[er],sr={class:"mb-4"},tr=e("label",{class:"block text-gray-700",for:"id-number"},"ID number",-1),or={key:0,class:"text-red-500 text-sm mt-1"},ir={class:"mb-4"},nr=e("label",{class:"block text-gray-700",for:"id-document"},"Upload ID document",-1),lr={key:0,class:"text-red-500 text-sm mt-1"},ar={class:"mb-4"},dr=e("label",{class:"block text-gray-700",for:"profile-picture"}," Upload profile picture (optional) ",-1),mr={class:"flex items-center mt-1"},ur=["src"],cr={class:"flex justify-between"},pr={key:1},fr=e("h2",{class:"text-2xl font-semibold text-center mb-4"}," Security Setup ",-1),hr={class:"mb-4"},br=e("label",{class:"block text-gray-700",for:"password"},"Password *",-1),gr={class:"relative"},_r=e("i",{class:"fas fa-eye"},null,-1),yr=[_r],vr={key:0,class:"text-red-500 text-sm mt-1"},xr={class:"mb-4"},kr=e("label",{class:"block text-gray-700",for:"confirm-password"},"Confirm password *",-1),wr={class:"relative"},qr=e("i",{class:"fas fa-eye"},null,-1),Nr=[qr],Ur={key:0,class:"text-red-500 text-sm mt-1"},Ar=e("div",{class:"mb-4"},[e("h3",{class:"text-gray-700 font-semibold"},"Password Requirements"),e("ul",{class:"list-disc list-inside text-gray-600"},[e("li",null,"Must be at least 8 characters"),e("li",null,"Must contain one special character and one number"),e("li",null,"Must contain one uppercase and lowercase letter")])],-1),Pr={class:"flex justify-between"},Er={key:2},Cr=e("h2",{class:"text-2xl font-semibold text-center mb-4"},"Bank Details",-1),Sr={class:"mb-4"},Fr=e("label",{class:"block text-gray-700"},"Do you have a smartphone? *",-1),Vr={class:"flex items-center mt-1"},Dr=e("label",{class:"mr-4",for:"smartphone-yes"},"Yes",-1),Mr=e("label",{for:"smartphone-no"},"No",-1),Ir={key:0,class:"text-red-500 text-sm mt-1"},Rr={class:"mb-4"},Br=e("label",{class:"block text-gray-700"},"Do you have a bank account? *",-1),Lr={class:"flex items-center mt-1"},Tr=e("label",{class:"mr-4",for:"bank-account-yes"},"Yes",-1),Yr=e("label",{for:"bank-account-no"},"No",-1),jr={key:0,class:"text-red-500 text-sm mt-1"},zr={key:0,class:"mb-4"},Zr={key:0,class:"mb-4"},Gr=e("label",{class:"block text-gray-700",for:"bank-name"},"Bank Name *",-1),Or=e("option",{value:""},"Select...",-1),Jr=[Or],Wr={key:0,class:"text-red-500 text-sm mt-1"},Kr={key:1,class:"mb-4"},Qr=e("label",{class:"block text-gray-700",for:"bank-account-number"},"Personal Bank Account Number *",-1),Hr={key:0,class:"text-red-500 text-sm mt-1"},Xr={class:"flex justify-between"},$r={key:3},es=e("h2",{class:"text-2xl font-semibold text-center mb-4"}," Farm Registration ",-1),rs={class:"mb-4"},ss=e("label",{class:"block text-gray-700",for:"farm-name"},"Farm Name *",-1),ts={key:0,class:"text-red-500 text-sm mt-1"},os={class:"mb-4"},is=e("label",{class:"block text-gray-700",for:"farm-address"},"Address",-1),ns={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},ls={class:"mb-4"},as=e("label",{class:"block text-gray-700",for:"longitude"},"Longitude",-1),ds={class:"mb-4"},ms=e("label",{class:"block text-gray-700",for:"latitude"},"Latitude",-1),us={class:"mb-4"},cs=e("label",{class:"block text-gray-700"},"Crops cultivated and planting season",-1),ps=["onClick"],fs={class:"mb-4"},hs=["for"],bs=["id","onUpdate:modelValue"],gs=["value"],_s={key:0,class:"text-red-500 text-sm mt-1"},ys={class:"mb-4"},vs=["for"],xs={class:"flex"},ks=["onUpdate:modelValue"],ws=e("option",{value:"Kg"},"Kg",-1),qs=e("option",{value:"Bag"},"Bag",-1),Ns=[ws,qs],Us=["id","onUpdate:modelValue"],As={key:0,class:"text-red-500 text-sm mt-1"},Ps={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},Es={class:"mb-4"},Cs=["for"],Ss=["id","onUpdate:modelValue"],Fs=e("option",{value:""},"Select...",-1),Vs=["value"],Ds={key:0,class:"text-red-500 text-sm mt-1"},Ms={class:"mb-4"},Is=["for"],Rs=["id","onUpdate:modelValue"],Bs=e("option",{value:""},"Select...",-1),Ls=["value"],Ts={key:0,class:"text-red-500 text-sm mt-1"},Ys={class:"mb-4"},js=e("label",{class:"block text-gray-700"},"Upload farm documents",-1),zs=e("i",{class:"fas fa-upload text-gray-600 text-2xl mb-2"},null,-1),Zs=e("p",{class:"text-gray-600"}," Click to upload or drag and drop your files here ",-1),Gs=e("p",{class:"text-gray-600"},"PDF file only (max. 10MB)",-1),Os={key:0,class:"text-green-600 mt-2"},Js={class:"flex justify-between"};function Ws(o,s,d,f,r,l){return i(),n("div",D,[e("div",M,[e("a",{class:"text-green-600",onClick:s[0]||(s[0]=t=>o.$emit("goBack")),href:"#"},B),L]),e("div",T,[Y,e("form",{class:"multiform",onSubmit:s[53]||(s[53]=A((...t)=>l.handleSubmit&&l.handleSubmit(...t),["prevent"]))},[r.step===1?(i(),n("div",j,[z,e("div",Z,[e("div",null,[G,m(e("input",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.firstName,"border-gray-300":!r.errors.firstName}]),id:"first-name",placeholder:"First Name",type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>r.form.firstName=t),required:""},null,2),[[h,r.form.firstName]]),r.errors.firstName?(i(),n("p",O,u(r.errors.firstName),1)):a("",!0)]),e("div",null,[J,m(e("input",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.lastName,"border-gray-300":!r.errors.lastName}]),id:"last-name",placeholder:"Last Name",type:"text","onUpdate:modelValue":s[2]||(s[2]=t=>r.form.lastName=t)},null,2),[[h,r.form.lastName]]),r.errors.lastName?(i(),n("p",W,u(r.errors.lastName),1)):a("",!0)])]),e("div",K,[e("div",Q,[H,m(e("input",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.email,"border-gray-300":!r.errors.email}]),id:"email",placeholder:"Email",type:"email","onUpdate:modelValue":s[3]||(s[3]=t=>r.form.email=t),required:""},null,2),[[h,r.form.email]]),r.errors.email?(i(),n("p",X,u(r.errors.email),1)):a("",!0)]),e("div",$,[ee,e("div",re,[m(e("select",{class:b(["border p-2 rounded-l",{"border-red-500":r.errors.phone,"border-gray-300":!r.errors.phone}]),"onUpdate:modelValue":s[4]||(s[4]=t=>r.form.phoneCode=t)},te,2),[[g,r.form.phoneCode]]),m(e("input",{class:b(["w-full border p-2 rounded-r",{"border-red-500":r.errors.phone,"border-gray-300":!r.errors.phone}]),id:"phone",placeholder:"Phone Number",type:"text","onUpdate:modelValue":s[5]||(s[5]=t=>r.form.phone=t),required:""},null,2),[[h,r.form.phone]])]),r.errors.phone?(i(),n("p",oe,u(r.errors.phone),1)):a("",!0)])]),e("div",ie,[e("div",null,[ne,m(e("input",{type:"number",id:"age-group",class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.age,"border-gray-300":!r.errors.age}]),placeholder:"Enter Age",min:"1","onUpdate:modelValue":s[6]||(s[6]=t=>r.form.age=t),required:""},null,2),[[h,r.form.age]]),r.errors.age?(i(),n("p",le,u(r.errors.age),1)):a("",!0)]),e("div",null,[ae,e("div",de,[m(e("input",{class:"mr-2",id:"male",name:"gender",type:"radio",value:"Male","onUpdate:modelValue":s[7]||(s[7]=t=>r.form.gender=t)},null,512),[[v,r.form.gender]]),me,m(e("input",{class:"mr-2",id:"female",name:"gender",type:"radio",value:"Female","onUpdate:modelValue":s[8]||(s[8]=t=>r.form.gender=t)},null,512),[[v,r.form.gender]]),ue]),r.errors.gender?(i(),n("p",ce,u(r.errors.gender),1)):a("",!0)])]),e("div",pe,[e("div",fe,[he,m(e("select",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.site,"border-gray-300":!r.errors.site}]),id:"site","onUpdate:modelValue":s[9]||(s[9]=t=>r.form.site=t)},[be,(i(!0),n(y,null,x(this.siteList,t=>(i(),n("option",{value:t.name},u(t.site_name),9,ge))),256))],2),[[g,r.form.site]]),r.errors.site?(i(),n("p",_e,u(r.errors.site),1)):a("",!0)]),e("div",ye,[ve,e("div",xe,[m(e("input",{class:"mr-2",id:"processor-yes",name:"processor",type:"radio",value:"Yes","onUpdate:modelValue":s[10]||(s[10]=t=>r.form.processor=t),onChange:s[11]||(s[11]=(...t)=>l.toggleProcessorFields&&l.toggleProcessorFields(...t))},null,544),[[v,r.form.processor]]),ke,m(e("input",{class:"mr-2",id:"processor-no",name:"processor",type:"radio",value:"No","onUpdate:modelValue":s[12]||(s[12]=t=>r.form.processor=t),onChange:s[13]||(s[13]=(...t)=>l.toggleProcessorFields&&l.toggleProcessorFields(...t))},null,544),[[v,r.form.processor]]),we]),r.errors.processor?(i(),n("p",qe,u(r.errors.processor),1)):a("",!0)])]),r.form.processor==="Yes"?(i(),n("div",Ne,[e("div",Ue,[Ae,m(e("select",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.crop,"border-gray-300":!r.errors.crop}]),id:"crop-field","onUpdate:modelValue":s[14]||(s[14]=t=>r.form.crop=t)},[Pe,(i(!0),n(y,null,x(this.cropList,t=>(i(),n("option",{value:t.name},u(t.name),9,Ee))),256))],2),[[g,r.form.crop]]),r.errors.crop?(i(),n("p",Ce,u(r.errors.crop),1)):a("",!0)]),e("div",Se,[Fe,m(e("select",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.currentEquipment,"border-gray-300":!r.errors.currentEquipment}]),id:"current-equipment","onUpdate:modelValue":s[15]||(s[15]=t=>r.form.currentEquipment=t)},[Ve,(i(!0),n(y,null,x(this.equipmentList,t=>(i(),n("option",{value:t.name},u(t.name),9,De))),256))],2),[[g,r.form.currentEquipment]]),r.errors.currentEquipment?(i(),n("p",Me,u(r.errors.currentEquipment),1)):a("",!0)]),e("div",Ie,[Re,m(e("select",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.desiredEquipment,"border-gray-300":!r.errors.desiredEquipment}]),id:"desired-equipment","onUpdate:modelValue":s[16]||(s[16]=t=>r.form.desiredEquipment=t)},[Be,(i(!0),n(y,null,x(this.equipmentList,t=>(i(),n("option",{value:t.name},u(t.name),9,Le))),256))],2),[[g,r.form.desiredEquipment]]),r.errors.desiredEquipment?(i(),n("p",Te,u(r.errors.desiredEquipment),1)):a("",!0)]),e("div",Ye,[je,e("div",ze,[m(e("select",{class:b(["border p-2 rounded-l",{"border-red-500":r.errors.quantity,"border-gray-300":!r.errors.quantity}]),"onUpdate:modelValue":s[17]||(s[17]=t=>r.form.quantityUnit=t)},Oe,2),[[g,r.form.quantityUnit]]),m(e("input",{class:b(["w-full border p-2 rounded-r",{"border-red-500":r.errors.quantity,"border-gray-300":!r.errors.quantity}]),id:"quantity",placeholder:"E.g. 35",type:"text","onUpdate:modelValue":s[18]||(s[18]=t=>r.form.quantity=t)},null,2),[[h,r.form.quantity]])]),r.errors.quantity?(i(),n("p",Je,u(r.errors.quantity),1)):a("",!0)])])):a("",!0),e("div",We,[Ke,m(e("input",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.address,"border-gray-300":!r.errors.address}]),id:"address",placeholder:"Residential address",type:"text","onUpdate:modelValue":s[19]||(s[19]=t=>r.form.address=t)},null,2),[[h,r.form.address]]),r.errors.address?(i(),n("p",Qe,u(r.errors.address),1)):a("",!0)]),e("div",He,[e("div",Xe,[$e,m(e("select",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:"id-type","onUpdate:modelValue":s[20]||(s[20]=t=>r.form.idType=t)},rr,512),[[g,r.form.idType]])]),e("div",sr,[tr,m(e("input",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.idNumber,"border-gray-300":!r.errors.idNumber}]),id:"id-number",placeholder:"Enter your selected ID number",type:"text","onUpdate:modelValue":s[21]||(s[21]=t=>r.form.idNumber=t)},null,2),[[h,r.form.idNumber]]),r.errors.idNumber?(i(),n("p",or,u(r.errors.idNumber),1)):a("",!0)])]),e("div",ir,[nr,e("input",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:"id-document",type:"file",onChange:s[22]||(s[22]=t=>l.handleFileUpload(t,"ID"))},null,32),r.errors.idDocument?(i(),n("p",lr,u(r.errors.idDocument),1)):a("",!0)]),e("div",ar,[dr,e("div",mr,[e("img",{id:"profilePic",alt:"Profile picture",class:"w-10 h-10 rounded-full mr-4",src:this.profilePictureUrl},null,8,ur),e("input",{type:"file",id:"fileInput",onChange:s[23]||(s[23]=(...t)=>l.changeProfilePicture&&l.changeProfilePicture(...t))},null,32)])]),e("div",cr,[e("button",{class:"bg-green-600 text-white px-4 py-2 rounded ml-auto",onClick:s[24]||(s[24]=(...t)=>l.nextStep&&l.nextStep(...t))}," Continue ")])])):a("",!0),r.step===2?(i(),n("div",pr,[fr,e("div",hr,[br,e("div",gr,[m(e("input",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.password,"border-gray-300":!r.errors.password}]),id:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",type:"password","onUpdate:modelValue":s[25]||(s[25]=t=>r.form.password=t)},null,2),[[h,r.form.password]]),e("button",{class:"absolute right-2 top-2 text-gray-600",type:"button",onClick:s[26]||(s[26]=t=>l.togglePasswordVisibility("password"))},yr)]),r.errors.password?(i(),n("p",vr,u(r.errors.password),1)):a("",!0)]),e("div",xr,[kr,e("div",wr,[m(e("input",{class:b(["w-full border p-2 rounded mt-1",{"border-red-500":r.errors.confirmPassword,"border-gray-300":!r.errors.confirmPassword}]),id:"confirm-password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",type:"password","onUpdate:modelValue":s[27]||(s[27]=t=>r.form.confirmPassword=t)},null,2),[[h,r.form.confirmPassword]]),e("button",{class:"absolute right-2 top-2 text-gray-600",type:"button",onClick:s[28]||(s[28]=t=>l.togglePasswordVisibility("confirm-password"))},Nr)]),r.errors.confirmPassword?(i(),n("p",Ur,u(r.errors.confirmPassword),1)):a("",!0)]),Ar,e("div",Pr,[e("button",{class:"bg-gray-200 text-gray-700 px-4 py-2 rounded",onClick:s[29]||(s[29]=(...t)=>l.previousStep&&l.previousStep(...t))}," Back "),e("button",{class:"bg-green-600 text-white px-4 py-2 rounded",onClick:s[30]||(s[30]=(...t)=>l.nextStep&&l.nextStep(...t))}," Continue ")])])):a("",!0),r.step===3?(i(),n("div",Er,[Cr,e("div",Sr,[Fr,e("div",Vr,[m(e("input",{class:"mr-2",id:"smartphone-yes",name:"smartphone",type:"radio",value:"Yes","onUpdate:modelValue":s[31]||(s[31]=t=>r.form.smartphone=t)},null,512),[[v,r.form.smartphone]]),Dr,m(e("input",{class:"mr-2",id:"smartphone-no",name:"smartphone",type:"radio",value:"No","onUpdate:modelValue":s[32]||(s[32]=t=>r.form.smartphone=t)},null,512),[[v,r.form.smartphone]]),Mr]),r.errors.smartphone?(i(),n("p",Ir,u(r.errors.smartphone),1)):a("",!0)]),e("div",Rr,[Br,e("div",Lr,[m(e("input",{class:"mr-2",id:"bank-account-yes",name:"bank-account",type:"radio",value:"Yes","onUpdate:modelValue":s[33]||(s[33]=t=>r.form.bankAccount=t),onChange:s[34]||(s[34]=(...t)=>l.toggleBankDetailsFields&&l.toggleBankDetailsFields(...t))},null,544),[[v,r.form.bankAccount]]),Tr,m(e("input",{class:"mr-2",id:"bank-account-no",name:"bank-account",type:"radio",value:"No","onUpdate:modelValue":s[35]||(s[35]=t=>r.form.bankAccount=t),onChange:s[36]||(s[36]=(...t)=>l.toggleBankDetailsFields&&l.toggleBankDetailsFields(...t))},null,544),[[v,r.form.bankAccount]]),Yr]),r.errors.bankAccount?(i(),n("p",jr,u(r.errors.bankAccount),1)):a("",!0)]),r.form.bankAccount==="Yes"?(i(),n("div",zr,[r.form.bankAccount==="Yes"?(i(),n("div",Zr,[Gr,m(e("select",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:"bank-name","onUpdate:modelValue":s[37]||(s[37]=t=>r.form.bankName=t)},Jr,512),[[g,r.form.bankName]]),r.errors.bankName?(i(),n("p",Wr,u(r.errors.bankName),1)):a("",!0)])):a("",!0),r.form.bankAccount==="Yes"?(i(),n("div",Kr,[Qr,m(e("input",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:"bank-account-number",placeholder:"E.g. 3892756930",type:"text","onUpdate:modelValue":s[38]||(s[38]=t=>r.form.bankAccountNumber=t)},null,512),[[h,r.form.bankAccountNumber]]),r.errors.bankAccountNumber?(i(),n("p",Hr,u(r.errors.bankAccountNumber),1)):a("",!0)])):a("",!0)])):a("",!0),e("div",Xr,[e("button",{class:"bg-gray-200 text-gray-700 px-4 py-2 rounded",onClick:s[39]||(s[39]=(...t)=>l.previousStep&&l.previousStep(...t))}," Back "),e("button",{class:"bg-green-600 text-white px-4 py-2 rounded",onClick:s[40]||(s[40]=(...t)=>l.nextStep&&l.nextStep(...t))}," Continue ")])])):a("",!0),r.step===4?(i(),n("div",$r,[es,e("div",rs,[ss,m(e("input",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:"farm-name",placeholder:"E.g. Armenia Farms Inc",type:"text","onUpdate:modelValue":s[41]||(s[41]=t=>r.form.farmName=t),onInput:s[42]||(s[42]=(...t)=>o.validateFarmName&&o.validateFarmName(...t))},null,544),[[h,r.form.farmName]]),r.errors.farmName?(i(),n("p",ts,u(r.errors.farmName),1)):a("",!0)]),e("div",os,[is,m(e("input",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:"farm-address",placeholder:"E.g. 12 landon community, Kogi",type:"text","onUpdate:modelValue":s[43]||(s[43]=t=>r.form.farmAddress=t)},null,512),[[h,r.form.farmAddress]])]),e("div",ns,[e("div",ls,[as,m(e("input",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:"longitude",placeholder:"E.g. 8.8765",type:"text","onUpdate:modelValue":s[44]||(s[44]=t=>r.form.longitude=t)},null,512),[[h,r.form.longitude]])]),e("div",ds,[ms,m(e("input",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:"latitude",placeholder:"E.g. 8.8765",type:"text","onUpdate:modelValue":s[45]||(s[45]=t=>r.form.latitude=t)},null,512),[[h,r.form.latitude]])])]),e("div",us,[cs,(i(!0),n(y,null,x(r.form.crops,(t,c)=>(i(),n("div",{key:c,class:"mb-4 flex flex-col bg-gray-100 p-6 rounded-lg mt-5 relative"},[r.form.crops.length>1?(i(),n("button",{key:0,class:"absolute top-2 right-2 text-black-500 text-xl font-bold",onClick:p=>l.removeCrop(c)}," \u2716 ",8,ps)):a("",!0),e("div",fs,[e("label",{class:"block text-gray-700",for:`crop-${c}`},"What crop do you want to cultivate on this farm? *",8,hs),m(e("select",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:`crop-${c}`,"onUpdate:modelValue":p=>t.name=p},[(i(!0),n(y,null,x(this.cropList,p=>(i(),n("option",{value:p.name},u(p.name),9,gs))),256))],8,bs),[[g,t.name]]),r.errors[`crop_${c}_name`]?(i(),n("p",_s,u(r.errors[`crop_${c}_name`]),1)):a("",!0)]),e("div",ys,[e("label",{class:"block text-gray-700",for:`volume-${c}`},"What volume of this crop will you cultivate? *",8,vs),e("div",xs,[m(e("select",{class:"border border-gray-300 p-2 rounded-l","onUpdate:modelValue":p=>t.volumeUnit=p},Ns,8,ks),[[g,t.volumeUnit]]),m(e("input",{class:"w-full border border-gray-300 p-2 rounded-r",id:`volume-${c}`,placeholder:"E.g. 56",type:"text","onUpdate:modelValue":p=>t.volume=p},null,8,Us),[[h,t.volume]])]),r.errors[`crop_${c}_volume`]?(i(),n("p",As,u(r.errors[`crop_${c}_volume`]),1)):a("",!0)]),e("div",Ps,[e("div",Es,[e("label",{class:"block text-gray-700",for:`start-month-${c}`},"Start Month *",8,Cs),m(e("select",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:`start-month-${c}`,"onUpdate:modelValue":p=>t.startMonth=p},[Fs,(i(!0),n(y,null,x(this.monthList,p=>(i(),n("option",{value:p},u(p),9,Vs))),256))],8,Ss),[[g,t.startMonth]]),r.errors[`crop_${c}_startMonth`]?(i(),n("p",Ds,u(r.errors[`crop_${c}_startMonth`]),1)):a("",!0)]),e("div",Ms,[e("label",{class:"block text-gray-700",for:`end-month-${c}`},"End Month *",8,Is),m(e("select",{class:"w-full border border-gray-300 p-2 rounded mt-1",id:`end-month-${c}`,"onUpdate:modelValue":p=>t.endMonth=p},[Bs,(i(!0),n(y,null,x(this.monthList,p=>(i(),n("option",{value:p},u(p),9,Ls))),256))],8,Rs),[[g,t.endMonth]]),r.errors[`crop_${c}_endMonth`]?(i(),n("p",Ts,u(r.errors[`crop_${c}_endMonth`]),1)):a("",!0)])])]))),128)),e("button",{class:"rounded-lg text-[14px] leading-[20px] w-[180px] text-[#0d8a6a] bg-white border border-[#90D0BF] font-medium mb-6 py-2 px-4",onClick:s[46]||(s[46]=(...t)=>l.addAnotherCrop&&l.addAnotherCrop(...t))}," + Add another crop "),e("div",Ys,[js,e("div",{class:"border border-dashed border-gray-300 p-4 rounded mt-1 text-center cursor-pointer",onClick:s[48]||(s[48]=(...t)=>l.triggerFileInput&&l.triggerFileInput(...t)),onDragover:s[49]||(s[49]=A(()=>{},["prevent"])),onDrop:s[50]||(s[50]=(...t)=>l.handleFileDrop&&l.handleFileDrop(...t))},[zs,Zs,Gs,e("input",{ref:"fileInput",class:"hidden",type:"file",accept:".pdf",onChange:s[47]||(s[47]=(...t)=>l.handleFileUpload&&l.handleFileUpload(...t))},null,544)],32),r.form.farmDocument?(i(),n("p",Os,u(r.form.farmDocument.name),1)):a("",!0)]),e("div",Js,[e("button",{class:"bg-gray-200 text-gray-700 px-4 py-2 rounded",onClick:s[51]||(s[51]=(...t)=>l.previousStep&&l.previousStep(...t))}," Back "),e("button",{class:"bg-green-600 text-white px-4 py-2 rounded",onClick:s[52]||(s[52]=(...t)=>o.submitForm&&o.submitForm(...t))}," Submit ")])])])):a("",!0)],32)])])}var Ks=U(V,[["render",Ws]]),Qs="/assets/farmer/frontend/assets/buyerIcon.4fc4bdd0.svg",Hs="/assets/farmer/frontend/assets/vendorIcon.c3c11c63.svg",Xs="/assets/farmer/frontend/assets/farmerIcon.af9f6ef6.svg",$s="/assets/farmer/frontend/assets/deliveryAgentIcon.1252a6f7.svg";const et={data(){return{showSignupForm:!1}},methods:{selectUserType(o){o==="farmer"?this.showSignupForm=!0:alert("Signup for "+o+" is under development!")}},components:{farmerRegister:Ks}},_=o=>(C("data-v-fd118ea8"),o=o(),S(),o),rt={key:0,class:"bg-green-50 flex items-center justify-center min-h-screen"},st={class:"bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl mb-40"},tt=_(()=>e("h1",{class:"text-2xl font-semibold text-center mb-2"},"Create an account",-1)),ot=_(()=>e("p",{class:"text-center text-gray-600 mb-6"}," How would you like to sign up? ",-1)),it={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6"},nt=_(()=>e("img",{alt:"Icon representing a buyer",class:"mb-2",src:Qs},null,-1)),lt=_(()=>e("p",{class:"text-center"},"Buyer",-1)),at=[nt,lt],dt=_(()=>e("img",{alt:"Icon representing a vendor",class:"mb-2",src:Hs},null,-1)),mt=_(()=>e("p",{class:"text-center"},"Vendor",-1)),ut=[dt,mt],ct=_(()=>e("img",{alt:"Icon representing a farmer",class:"mb-2",src:Xs},null,-1)),pt=_(()=>e("p",{class:"text-center"},"Farmer",-1)),ft=[ct,pt],ht=_(()=>e("img",{alt:"Icon representing a delivery agent",class:"mb-2",src:$s},null,-1)),bt=_(()=>e("p",{class:"text-center"},"Delivery Agent",-1)),gt=[ht,bt],_t=_(()=>e("p",{class:"text-center text-gray-600 mt-4"},[N(" Already have an account? "),e("a",{class:"text-green-500",href:"#"}," Log in ")],-1));function yt(o,s,d,f,r,l){const t=F("farmerRegister");return i(),n(y,null,[r.showSignupForm?a("",!0):(i(),n("div",rt,[e("div",st,[tt,ot,e("div",it,[e("div",{class:"flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow cursor-pointer",onClick:s[0]||(s[0]=c=>l.selectUserType("buyer"))},at),e("div",{class:"flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow cursor-pointer",onClick:s[1]||(s[1]=c=>l.selectUserType("vendor"))},ut),e("div",{class:"flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow cursor-pointer",onClick:s[2]||(s[2]=c=>l.selectUserType("farmer"))},ft),e("div",{class:"flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow cursor-pointer",onClick:s[3]||(s[3]=c=>l.selectUserType("delivery_agent"))},gt)]),_t])])),r.showSignupForm?(i(),E(t,{key:1,onGoBack:s[4]||(s[4]=c=>r.showSignupForm=!1)})):a("",!0)],64)}var kt=U(et,[["render",yt],["__scopeId","data-v-fd118ea8"]]);export{kt as default};
