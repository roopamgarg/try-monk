(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,a,t){e.exports=t(96)},55:function(e,a,t){},59:function(e,a,t){e.exports=t.p+"static/media/white red.60607c76.svg"},88:function(e,a,t){e.exports=t.p+"static/media/stats.f86ce585.svg"},89:function(e,a,t){e.exports=t.p+"static/media/payment-credit.dad9d022.svg"},90:function(e,a,t){e.exports=t.p+"static/media/payment-emi.c90a6a24.svg"},91:function(e,a,t){e.exports=t.p+"static/media/payment-wallet.59f7e5a4.svg"},92:function(e,a,t){e.exports=t.p+"static/media/payment-cash.a648dd52.svg"},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),s=t(16),o=t(18),i=t(42),u=(t(55),t(6)),m=t(7),p=t(10),d=t(8),h=t(11),g=t(106),f=t(105),E=t(43),_=t.n(E),b=(t(57),t(20)),v=t(98),y=t(99),N=t(100),C=t(104),x=t(101),S=t(102),O=t(103),k=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).toggle=t.toggle.bind(Object(b.a)(Object(b.a)(t))),t.state={isOpen:!1},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{className:"navigation bg-transparent position-absolute w-100 u-justify-content-space-between",light:!0,expand:"md"},r.a.createElement(y.a,{href:"/"},r.a.createElement("img",{src:t(59)})),r.a.createElement(N.a,{onClick:this.toggle}),r.a.createElement(C.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(x.a,{className:"ml-auto",navbar:!0},r.a.createElement(S.a,null,r.a.createElement(O.a,{to:"#feature"},"Feature")),r.a.createElement(S.a,null,r.a.createElement(O.a,{to:"/pricing"},"Pricing")),r.a.createElement(S.a,null,r.a.createElement(O.a,{to:"#team"},"Team")),r.a.createElement(S.a,null,r.a.createElement(O.a,{to:"#faq"},"FAQ")),r.a.createElement(S.a,null,r.a.createElement(O.a,{to:"#contact"},"Contact")),r.a.createElement(S.a,null,r.a.createElement(O.a,{to:"/signup"},"Join Now")),r.a.createElement(S.a,null,r.a.createElement(O.a,{className:"btn btn-success ",to:"/signin"},"Sign in"))))))}}]),a}(r.a.Component),w=t(3),j=t.n(w),I=t(9),D=t(23),A=t.n(D),B=A.a.create({headers:{"Content-type":"application/json"},withCredentials:!0}),H=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={email:""},t.onInputChangeHandler=function(e){t.setState({email:e.target.value})},t.onFormSubmit=function(e){e.preventDefault(),t.props.addEmail({email:t.state.email},t.props.history)},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__heading"},"Career management made easy"),r.a.createElement("p",{className:"header__paragraph"},"Services that empowered education and provide flexibility to focus on their academic task and other things leave for us"),r.a.createElement("form",{className:"header__input-box",onSubmit:function(a){return e.onFormSubmit(a)}},r.a.createElement("input",{placeholderemail:!0,type:"text",onChange:function(a){return e.onInputChangeHandler(a)},placeholder:"Email",className:"header__input",required:!0}),r.a.createElement("button",{className:"btn btn-success header__btn "},"Get Started")))}}]),a}(n.Component),P=Object(s.b)(null,{addEmail:function(e,a){return function(){var t=Object(I.a)(j.a.mark(function t(n){var r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.post("/api/save_email",JSON.stringify(e));case 2:r=t.sent,n({type:"ADD_EMAIL",payload:r.data}),a.push("/signup");case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(H),L=t(29),R=function(e){var a;return r.a.createElement("div",(a={"data-aos":"zoom-in-up"},Object(L.a)(a,"data-aos","fade-in"),Object(L.a)(a,"className","footer"),a),r.a.createElement("div",{className:"section-enroll",id:"pricing"},r.a.createElement("div",{className:"enroll-card"},r.a.createElement("div",{className:"enroll-card__content"},r.a.createElement("h2",null,"Ready to get started ?"),r.a.createElement("p",null,"Join now and be a part of next generation education platform")),r.a.createElement("div",{className:"enroll-card__btn-box"},r.a.createElement(O.a,{to:"/signin",className:"btn btn-cta"},"Enroll Now")))),r.a.createElement("div",{"data-aos":"zoom-in-up",className:"footer__content"},r.a.createElement("ul",null,r.a.createElement("li",null,"RESOURCES"),r.a.createElement("li",null,"Video Lectures"),r.a.createElement("li",null,"Short Notes"),r.a.createElement("li",null,"Question Papers"),r.a.createElement("li",null,"Bookbank")),r.a.createElement("ul",null,r.a.createElement("li",null,"OUR COMPANY"),r.a.createElement("li",null,"About Us"),r.a.createElement("li",null,"Career"),r.a.createElement("li",null,"Partner with us"),r.a.createElement("li",null,"Support")),r.a.createElement("ul",null,r.a.createElement("li",null,"SERVICES"),r.a.createElement("li",null,"Bookbank"),r.a.createElement("li",null,"Lecture & Courses"),r.a.createElement("li",null,"Resume Building"),r.a.createElement("li",null,"Skill Development"))),r.a.createElement("div",{className:"footer__privacy"},r.a.createElement("p",null,"Monktree Education Pvt Ltd 2016-2019"),r.a.createElement("p",null,"Privacy Policy | Terms of use | Contact Us ")))},q=function(e){return r.a.createElement("div",{"data-aos":"zoom-in-up",className:"user-card u-display-flex u-flex-column u-justify-content-space-around u-align-items-center"},r.a.createElement("p",{className:"user-card__heading"},"User Feedback"),r.a.createElement("div",{className:"user-card__content"},r.a.createElement("p",null,'" '+e.content+' "')),r.a.createElement("div",{className:"user-card__detail"},r.a.createElement("h2",null,e.username),r.a.createElement("p",null,e.college_name)))},F=function(e){return r.a.createElement("div",{class:"home-page"},r.a.createElement("div",{className:"header-container"},r.a.createElement(k,null),r.a.createElement(P,{history:e.history})),r.a.createElement("div",{"data-aos":"fade-in",class:"features-container u-display-flex u-justify-content-center"},r.a.createElement("div",{className:"features"},r.a.createElement("div",{"data-aos":"zoom-in-up",className:"features__box"},r.a.createElement("h4",null,"Books"),r.a.createElement("p",null,"Yes Book we will deliver your books as per your syllabus on time")),r.a.createElement("div",{"data-aos":"zoom-in-up",className:"features__box"},r.a.createElement("h4",null,"VIDEO LECTURES"),r.a.createElement("p",null,"Prepared by experts and based on your specific subject"))),r.a.createElement("div",null,r.a.createElement("div",{"data-aos":"zoom-in-up",className:"features__box"},r.a.createElement("h4",null,"COOL SERVICES"),r.a.createElement("p",null,"All best services to make your education hasslefree")),r.a.createElement("div",{"data-aos":"zoom-in-up",className:"features__box"},r.a.createElement("h4",null,"PLACEMENTS ASSISTANCE"),r.a.createElement("p",null,"Most important! our HR experts are ready to launch you for best career opportunities.")),r.a.createElement("div",{"data-aos":"zoom-in-up",className:"features__box"},r.a.createElement("h4",null,"AND"),r.a.createElement("p",null,"We are offering support like Notes, Instruments & many more things")))),r.a.createElement("div",{"data-aos":"fade-in",className:"our-dashboard"},r.a.createElement("div",{className:"our-dashboard__content u-display-flex u-flex-column u-justify-content-center u-align-items-center"},r.a.createElement("h2",null,"Manage all benefits  in single Dashboard"),r.a.createElement("div",{className:"u-display-flex"},r.a.createElement("div",null,r.a.createElement("div",{"data-aos":"zoom-in-up",className:"our-dashboard__card"},r.a.createElement("h4",null,"Books"),r.a.createElement("p",null,"Manage your bookbank and account")),r.a.createElement("div",{"data-aos":"zoom-in-up",className:"our-dashboard__card"},r.a.createElement("h4",null,"Lectures"),r.a.createElement("p",null,"Customized lectures Video directories Courses")),r.a.createElement("div",{"data-aos":"zoom-in-up",className:"our-dashboard__card"},r.a.createElement("h4",null,"Resume Building"),r.a.createElement("p",null,"Manage your resume Skill Management"))),r.a.createElement("div",null,r.a.createElement("div",{"data-aos":"zoom-in-up",className:"our-dashboard__card"},r.a.createElement("h4",null,"Customized Notes"),r.a.createElement("p",null,"Question Paper Sample papers")),r.a.createElement("div",{"data-aos":"zoom-in-up",className:"our-dashboard__card"},r.a.createElement("h4",null,"Internship"),r.a.createElement("p",null,"Manage your application")))))),r.a.createElement("div",{"data-aos":"fade-in",className:"reach u-display-flex  u-align-items-center"},r.a.createElement("div",{className:"reach__banner"}),r.a.createElement("div",{"data-aos":"zoom-in-up",className:"reach__content"},r.a.createElement("h4",null,"OUR SERVICES"),r.a.createElement("p",null,"Presently we are opening for every institute of Delhi NCR"),r.a.createElement("img",{src:t(88)}))),r.a.createElement("div",{"data-aos":"fade-in",className:"section-feedback u-display-flex  u-justify-content-center u-align-items-center"},r.a.createElement(q,{content:"I really appreciate monktree  for support It is providing \r\nto students, I think it is the one stop solution for a student,\r\nThank you so much for your support ",username:"Pankaj Mehra",college_name:"Guru Nanak Dev Institute of Technology"})),r.a.createElement(R,null))},M=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",email:"",password:"",error:""},t.onInputChange=function(e,a){switch(a){case"username":t.setState({username:e.target.value});break;case"email":t.setState({email:e.target.value});break;case"password":t.setState({password:e.target.value})}},t.onFormSubmit=function(e){if(e.preventDefault(),t.state.password.length<8){var a=r.a.createElement("div",{className:"error"},r.a.createElement("p",null,"Password must have 8 characters long."));t.setState({error:a})}else t.setState({error:""}),t.props.signUp({username:t.state.email,password:t.state.password},t.props.history)},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.username,n=a.email,l=a.password;return r.a.createElement("div",{className:"signup-page u-display-flex u-justify-content-center u-align-items-center u-text-white"},r.a.createElement("div",{className:"signup-page__card u-display-flex u-justify-content-center u-align-items-center"},r.a.createElement("div",{className:"signup-page__card__left flex-fill u-display-flex u-justify-content-center u-align-items-center u-flex-column"},r.a.createElement("h2",{className:"signup-page__header"},"Create your account"),r.a.createElement("p",{className:"signup-page__dash"}),r.a.createElement("p",{className:"signup-page__para"},"Sign up and start to chase your dreams")),r.a.createElement("form",{onSubmit:function(a){return e.onFormSubmit(a)},className:"signup-page__card__right u-text-black flex-fill u-display-flex u-justify-content-center u-align-items-center u-flex-column"},r.a.createElement("h2",{className:"signup-page__header  u-margin-y-sm"},"Sign Up"),this.state.error,r.a.createElement("input",{type:"text",className:"signup-page__input ",placeholder:"Username",value:t,onChange:function(a){return e.onInputChange(a,"username")},required:!0}),r.a.createElement("input",{type:"email",className:"signup-page__input ",placeholder:"Email",value:n,onChange:function(a){return e.onInputChange(a,"email")},required:!0}),r.a.createElement("input",{id:"password",type:"password",className:"signup-page__input",placeholder:"Password",value:l,onChange:function(a){return e.onInputChange(a,"password")},required:!0}),r.a.createElement("button",{type:"submit",className:"btn-sign-up "},"Create Account"),r.a.createElement(O.a,{to:"/signin"},"Already have an accout ?"))))}}]),a}(n.Component),T=Object(s.b)(null,{signUp:function(e,a){return function(){var t=Object(I.a)(j.a.mark(function t(n){var r,l;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,B.post("/auth/local_register",JSON.stringify(e));case 3:return r=t.sent,t.next=6,B.post("/auth/local_login",JSON.stringify(e));case 6:if(!r){t.next=15;break}return a.push("/personal_details"),n({type:"USER_SIGN_UP",payload:r.data}),t.next=11,B.get("/api/redirect_route");case 11:l=t.sent,a.push(l.data.page),t.next=16;break;case 15:a.push("/signin");case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(M),Y=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",email:"",fathers_name:"",dob:"",personal_contact_number:"",guardian_contact_number:"",address:"",city:"",pin_code:"",state:""},t.onInputChangeHandler=function(e,a){var n=e.target.value;switch(a){case"username":t.setState({username:n});break;case"email":t.setState({email:n});break;case"fathers_name":t.setState({fathers_name:n});break;case"dob":t.setState({dob:n});break;case"personal_contact_number":t.setState({personal_contact_number:n});break;case"guardian_contact_number":t.setState({guardian_contact_number:n});break;case"address":t.setState({address:n});break;case"city":t.setState({city:n});break;case"pin_code":t.setState({pin_code:n});break;case"state":t.setState({state:n})}},t.onFormSubmitHandler=function(e){e.preventDefault();var a=t.state,n={full_name:a.username,email:a.email,fathers_name:a.fathers_name,dob:a.dob,personal_contact_number:a.personal_contact_number,guardian_contact_number:a.guardian_contact_number,address:a.address,city:a.city,pin_code:a.pin_code,state:a.state};t.props.addPersonalDetails(n,t.props.history)},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.username,n=a.email,l=a.fathers_name,c=a.dob,s=a.personal_contact_number,o=a.guardian_contact_number,i=a.address,u=a.city,m=a.pin_code,p=a.state,d=new Date;return r.a.createElement("div",{className:"personal-detail-page u-display-flex"},r.a.createElement("div",{className:"personal-detail-page__sidebar"},r.a.createElement("h2",{className:"u-text-white"},"EDGE"),r.a.createElement("ul",{id:"progressbar"},r.a.createElement("li",{className:"active"},"Personal Details"),r.a.createElement("li",null,"Academic Details"),r.a.createElement("li",null,"Completed"))),r.a.createElement("div",{className:"personal-detail-page__content flex-fill"},r.a.createElement("h1",{className:"personal-detail-page__header"},"Let us know about you !"),r.a.createElement("form",{className:"detail__form",onSubmit:function(a){return e.onFormSubmitHandler(a)}},r.a.createElement("input",{type:"text",onChange:function(a){return e.onInputChangeHandler(a,"username")},value:t,className:"detail__input",placeholder:"Full Name",required:!0}),r.a.createElement("input",{type:"email",onChange:function(a){return e.onInputChangeHandler(a,"email")},value:n,className:"detail__input",placeholder:"Email",required:!0}),r.a.createElement("input",{type:"text",onChange:function(a){return e.onInputChangeHandler(a,"fathers_name")},value:l,className:"detail__input",placeholder:"Father's name",required:!0}),r.a.createElement("input",{type:"text",onFocus:function(e){e.target.type="date"},onBlur:function(e){e.target.type="text"},className:"detail__input",placeholder:"D.O.B",onChange:function(a){return e.onInputChangeHandler(a,"dob")},value:c,max:"".concat(d.getFullYear(),"-").concat(("0"+d.getMonth()+1).slice(-2),"-").concat(("0"+d.getDate()).slice(-2)),required:!0}),r.a.createElement("input",{type:"number",onChange:function(a){return e.onInputChangeHandler(a,"personal_contact_number")},value:s,className:"detail__input",placeholder:"Contact number (Personal)",required:!0}),r.a.createElement("input",{type:"number",onChange:function(a){return e.onInputChangeHandler(a,"guardian_contact_number")},value:o,className:"detail__input",placeholder:"Contact Number (Guardian)",required:!0}),r.a.createElement("input",{type:"text",onChange:function(a){return e.onInputChangeHandler(a,"address")},value:i,className:"detail__input",placeholder:"Address",required:!0}),r.a.createElement("input",{type:"text",onChange:function(a){return e.onInputChangeHandler(a,"city")},value:u,className:"detail__input",placeholder:"City",required:!0}),r.a.createElement("input",{type:"number",onChange:function(a){return e.onInputChangeHandler(a,"pin_code")},value:m,className:"detail__input",placeholder:"Pin Code",required:!0}),r.a.createElement("input",{type:"text",onChange:function(a){return e.onInputChangeHandler(a,"state")},value:p,className:"detail__input",placeholder:"State",required:!0}),r.a.createElement("button",{className:" btn-success detail-btn u-margin-y-lg",type:"submit"},"Next"))))}}]),a}(n.Component),U=Object(s.b)(null,{addPersonalDetails:function(e,a){return function(){var t=Object(I.a)(j.a.mark(function t(n){var r,l;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,B.post("/api/save_personal_details",JSON.stringify(e));case 3:if(!(r=t.sent)){t.next=12;break}return n({type:"ADD_PERSONAL_DETAILS",payload:r}),t.next=8,B.get("/api/redirect_route");case 8:l=t.sent,a.push(l.data.page),t.next=13;break;case 12:a.push("/personal_details");case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(Y),z=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={},t.componentDidMount=function(){t.props.getColleges("Diploma"),t.props.getBranches("Diploma")},t.componentWillMount=function(){t.setState({course:"Diploma",college:t.props.allColleges[0],branch:t.props.allBranches[0],admissionYear:"",complitionYear:"",course_duration:"",aadharNumber:""})},t.onInputChangeHandler=function(e,a){switch(a){case"branch":t.setState({branch:e.target.value});break;case"admissionYear":t.setState({admissionYear:e.target.value});break;case"complitionYear":t.setState({complitionYear:e.target.value});break;case"course_duration":t.setState({course_duration:e.target.value});break;case"aadharNumber":t.setState({aadharNumber:e.target.value})}},t.onCourseChangeHandler=function(e){t.props.getColleges(e.target.value),0===e.target.value.localeCompare("Diploma")?t.props.getBranches(e.target.value,"Aryabhatt Institute Of Technology"):t.props.getBranches(e.target.value,"Delhi Technical University"),t.setState({course:e.target.value})},t.onCollegeChangeHandler=function(e){t.props.getBranches(t.state.course,e.target.value),t.setState({college:e.target.value})},t.renderBranchList=function(){return t.props.allBranches.map(function(e,a){return r.a.createElement("option",{key:a},e)})},t.renderCollegeList=function(){return t.props.allColleges.map(function(e,a){return r.a.createElement("option",{key:a},e)})},t.onFormSubmitHandler=function(e){e.preventDefault();var a=t.state,n=a.course,r=a.college,l=a.branch,c=a.admissionYear,s=a.complitionYear,o=a.course_duration,i=a.aadharNumber;n||t.setState({college:"Diploma"}),r||t.setState({college:t.props.allColleges[0]}),l||t.setState({branch:t.props.allBranches[0]});var u={institution:r,branch:l,course:n,admissionYear:c,complitionYear:s,course_duration:o,aadharNumber:i};t.props.addAcademicDetails(u,t.props.history)},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props.allBranches),console.log(this.props.allColleges);var a=new Date;return r.a.createElement("div",{className:"personal-detail-page u-display-flex"},r.a.createElement("div",{className:"personal-detail-page__sidebar"},r.a.createElement("h2",{className:"u-text-white"},"EDGE"),r.a.createElement("ul",{id:"progressbar"},r.a.createElement("li",{className:"active"},"Personal Details"),r.a.createElement("li",{className:"active"},"Academic Details"),r.a.createElement("li",null,"Completed"))),r.a.createElement("div",{className:"personal-detail-page__content flex-fill"},r.a.createElement("h1",{className:"personal-detail-page__header"},"Tell us about your academics !"),r.a.createElement("form",{onSubmit:function(a){return e.onFormSubmitHandler(a)},className:"detail__form detail__form--2"},r.a.createElement("select",{className:"detail__input",onChange:function(a){return e.onCourseChangeHandler(a)},placeholder:"Course"},r.a.createElement("option",null,"Diploma"),r.a.createElement("option",null,"B.tech")),r.a.createElement("select",{className:"detail__input",onChange:function(a){return e.onCollegeChangeHandler(a)},placeholder:"institute"},this.renderCollegeList()),r.a.createElement("select",{className:"detail__input",onChange:function(a){e.onInputChangeHandler(a,"branch")},placeholder:"Branch/Discipline"},this.renderBranchList()),r.a.createElement("input",{type:"text",onFocus:function(e){e.target.type="month"},onBlur:function(e){e.target.type="text"},className:"detail__input",placeholder:"Admission Year",onChange:function(a){e.onInputChangeHandler(a,"admissionYear")},max:"".concat(a.getFullYear(),"-").concat(("0"+a.getMonth()+1).slice(-2)),required:!0}),r.a.createElement("input",{type:"text",onFocus:function(e){e.target.type="month"},onBlur:function(e){e.target.type="text"},className:"detail__input",placeholder:"Completion Year",onChange:function(a){e.onInputChangeHandler(a,"complitionYear")},max:"".concat(a.getFullYear()+4,"-").concat(("0"+a.getMonth()+1).slice(-2)),required:!0}),r.a.createElement("input",{type:"number",onChange:function(a){e.onInputChangeHandler(a,"course_duration")},className:"detail__input",placeholder:"Course Duration",required:!0}),r.a.createElement("input",{type:"text",onChange:function(a){e.onInputChangeHandler(a,"aadharNumber")},className:"detail__input",placeholder:"Enrollment No/Aadhar No.",required:!0}),r.a.createElement("button",{className:" btn-success detail-btn u-margin-y-lg",type:"submit"},"Next"))))}}]),a}(n.Component),G=Object(s.b)(function(e){var a=e.allBranches;return{allColleges:e.allColleges,allBranches:a}},{getBranches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Diploma",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Aryabhatt Institute Of Technology";return function(){var t=Object(I.a)(j.a.mark(function t(n){var r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.localeCompare("Diploma")){t.next=6;break}return t.next=3,B.get("/api/search_branch/diploma?college=".concat(a));case 3:r=t.sent,t.next=9;break;case 6:return t.next=8,B.get("/api/search_branch/btech?college=".concat(a));case 8:r=t.sent;case 9:n({type:"GET_ALL_BRANCHES",payload:r.data});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},getColleges:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Diploma";return function(){var a=Object(I.a)(j.a.mark(function a(t){var n;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==e.localeCompare("Diploma")){a.next=6;break}return a.next=3,B.get("/api/search_college/diploma");case 3:n=a.sent,a.next=9;break;case 6:return a.next=8,B.get("/api/search_college/btech");case 8:n=a.sent;case 9:t({type:"GET_ALL_COLLEGES",payload:n.data});case 10:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},addAcademicDetails:function(e,a){return function(){var t=Object(I.a)(j.a.mark(function t(n){var r,l;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,B.post("/api/save_academic_details",JSON.stringify(e));case 3:if(!(r=t.sent)){t.next=12;break}return n({type:"ADD_ACADEMIC_DETAILS",payload:r}),t.next=8,B.get("/api/redirect_route");case 8:l=t.sent,a.push(l.data.page),t.next=13;break;case 12:a.push("/academic_details");case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(z),J=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",password:""},t.onInputChangeHandler=function(e,a){switch(a){case"username":t.setState({username:e.target.value});break;case"password":t.setState({password:e.target.value})}},t.onFormSubmitHandler=function(e){e.preventDefault();var a=t.state,n=a.username,r=a.password;t.props.signIn({username:n,password:r},t.props.history)},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signin-page u-display-flex u-justify-content-center"},r.a.createElement("div",{className:"signin-page__left flex-fill"}),r.a.createElement("form",{onSubmit:function(a){return e.onFormSubmitHandler(a)},className:"signin-page__right flex-fill u-display-flex u-justify-content-center u-align-items-center u-flex-column"},r.a.createElement("h1",{className:"signin-page__header"},"Monktree"),r.a.createElement("p",{className:"signin-page__para"},"Welcome back! Please log in to your account."),r.a.createElement("p",{className:"error"},this.props.userAuth.error),r.a.createElement("input",{onChange:function(a){return e.onInputChangeHandler(a,"username")},value:this.state.username,className:"signin-page__input",placeholder:"Email",type:"text",required:!0}),r.a.createElement("input",{onChange:function(a){return e.onInputChangeHandler(a,"password")},value:this.state.password,className:"signin-page__input",placeholder:"Password",type:"password",required:!0}),r.a.createElement("div",{className:"signin-page__btn-grp"},r.a.createElement("button",{type:"submit",className:"signin-page__btn active"},"Sign In"),r.a.createElement(O.a,{to:"/signup",className:"signin-page__btn"},"Sign Up")),r.a.createElement("h4",{className:"signin-page__header--2"},"One account for All")))}}]),a}(n.Component),V=Object(s.b)(function(e){return{userAuth:e.userAuth}},{signIn:function(e,a){return function(){var t=Object(I.a)(j.a.mark(function t(n){var r,l;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.post("/auth/local_login",JSON.stringify(e)).catch(function(){return{error:"Invalid Email or password"}});case 2:if(r=t.sent,console.log(r),r.error){t.next=12;break}return n({type:"USER_SIGN_IN",payload:r.data}),t.next=8,B.get("/api/redirect_route");case 8:l=t.sent,a.push(l.data.page),t.next=13;break;case 12:n({type:"USER_SIGN_IN",payload:r});case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(J),W=function(){return r.a.createElement("div",{className:"done-page u-display-flex u-justify-content-center"},r.a.createElement("div",{className:"done-page__box"},r.a.createElement("h3",null," You have successfully registered and our team will contact you soon .")))},Q=function(e){return r.a.createElement("div",{"data-aos":"zoom-in-up",className:"pricing-card ".concat(e.card_color)},r.a.createElement("div",{className:"pricing-card__header"},r.a.createElement("p",null,e.course)),r.a.createElement("div",{className:"pricing-card__content"},r.a.createElement("div",{className:"pricing-card__pricing"},r.a.createElement("h2",null,e.price),r.a.createElement("h4",null,e.duration," YEARS")),r.a.createElement("ul",{className:"pricing-card__features"},e.features.map(function(e){return r.a.createElement("li",null,e)}))))},K=function(e){return r.a.createElement("div",{"data-aos":"zoom-in-up",className:"payment-card"},r.a.createElement("div",{className:"payment-card__image"},r.a.createElement("img",{src:e.image,alt:"payment option"})),r.a.createElement("div",{className:"payment-card__content"},r.a.createElement("h2",null,e.heading),r.a.createElement("p",null,e.content,".")))},X=function(e){return r.a.createElement("div",{class:"pricing-page"},r.a.createElement(k,null),r.a.createElement("div",{className:" pricing-page__header"},r.a.createElement("h1",null,"Start Reading"),r.a.createElement("div",{className:"pricing-page__card-list u-display-flex u-justify-content-space-evenly u-align-items-center"},r.a.createElement(Q,{card_color:"orange",course:"DIPLOMA",price:"3500\u20b9",duration:"3",features:["Books","Lectures","Short Notes","Internship Support","Placement Assistance"]}),r.a.createElement(Q,{card_color:"green",course:"BTECH/BE",price:"5000\u20b9",duration:"4",features:["Books","Lectures","Short Notes","Internship Support","Placement Assistance"]}),r.a.createElement(Q,{card_color:"purple",course:"BCA/BVOC/BSC",price:"4000\u20b9",duration:"3",features:["Books","Lectures","Short Notes","Internship Support","Placement Assistance"]})),r.a.createElement("h2",{className:"header_secondary"},"Payment Options"),r.a.createElement("div",{className:"pricing-page__card-list u-display-flex u-justify-content-space-evenly u-align-items-center"},r.a.createElement(K,{image:t(89),heading:"Credit/Debit Card",content:"Accepting payments through Credit/Debitcards from all major banks."}),r.a.createElement(K,{image:t(90),heading:"EMI option",content:"Split the payment fee across 3 or more months. Option is available for all plans."}),r.a.createElement(K,{image:t(91),heading:"Payment Wallets",content:"Accepting  all major Digital wallets through our payment Gatways i.e PayTm/Phonepe"}),r.a.createElement(K,{image:t(92),heading:"Cash Pickup",content:"We can collect playments by cash from your place"}))),r.a.createElement(R,null))};_.a.init();var Z=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(f.a,{path:"/",exact:!0,component:F}),r.a.createElement(f.a,{path:"/signup",exact:!0,component:T}),r.a.createElement(f.a,{path:"/personal_details",exact:!0,component:U}),r.a.createElement(f.a,{path:"/academic_details",exact:!0,component:G}),r.a.createElement(f.a,{path:"/signin",exact:!0,component:V}),r.a.createElement(f.a,{path:"/done",exact:!0,component:W}),r.a.createElement(f.a,{path:"/pricing",exact:!0,component:X})))}}]),a}(n.Component),$=Object(o.c)({userAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_SIGN_UP":case"USER_SIGN_IN":return a.payload;default:return e}},PersonalDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PERSONAL_DETAILS":return console.log(a.payload),a.payload;default:return e}},allColleges:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ALL_COLLEGES":return a.payload;default:return e}},allBranches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ALL_BRANCHES":return a.payload;default:return e}},academicDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_ACADEMIC_DETAILS":return console.log(a.payload),a.payload;default:return e}}});t(94);window.axios=A.a;var ee=Object(o.d)($,Object(o.a)(i.a));c.a.render(r.a.createElement(s.a,{store:ee},r.a.createElement(Z,null)),document.getElementById("root"))}},[[46,2,1]]]);
//# sourceMappingURL=main.350976ee.chunk.js.map