// //print hello(This is a comment)
// /*learn
// javascript*/

// console.log("Hello World");

// //arthemtic operators
// let a=10;
// let b=67;
// let c=a+b;
// console.log(c);
// console.log("a+b=",a+b);

// console.log(b-a);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(2**3);

// //unary opertaor

// let s=10;
// s++;
// console.log(s);
// console.log(++s);
// console.log(s--);
// console.log(s);

// //assignment operator

// let n=10;
// n+=10;
// console.log(n);

// console.log(n-=1);
// console.log(n*=1);
// console.log(n/=4);
// console.log(n**4);


// //comparison opertors

// let st="123";
// let m=123;
// console.log(st==m);
// console.log(st===m);

// let h=10;
// let g=90;
// console.log(h<=g);

// let cond1=true;
// let cond2=false;
// console.log(cond1 || cond2);

// console.log(10<=89 || 78<=10);
// console.log(!(10>89));


// let age=10;
// if(age>=18){
//     console.log("Can Vote");
// }
// if(age<18){
//     console.log("Can't Vote");
// }

// let mode="Light";
// let color;
// if(mode==="Dark"){
//     color="Black";
// }
// // if(mode==="Light"){
// //     color="White";
// // }
// else{
//     color="White";
// }
// console.log(color);


// let age=26;
// if(age>=18){
//     console.log("Can Vote");
// }
// else{
//     console.log("Cant Vote");
// }


// let num=9;
// if(num%2==0){
//     console.log("Even");
// }
// else{
//     console.log(num,"is Odd");
// }

// let mode="dark";
// if(mode==="dark"){
//     console.log(mode);
// }

// let age=10;
// // age>18?console.log("Vote"):console.log("No");
// let res=age>18?"Vote":"No";
// console.log(res);

// let num=prompt("Enter a number");
// if(num%5==0){
//     alert("Yes!");
// }
// else{
//     alert("Nope!");
// }


// let grade=prompt("Enter grade:");
// if(grade>=90 && grade<=100){
//     console.log("A");
// }
// else if(grade>=70 && grade<=89){
//     console.log("B");
// }
// else if(grade>=60 && grade<=69){
//     console.log("C");
// }
// else if(grade>=50 && grade<=59){
//       console.log("D");
// }
// else{
//     console.log("F");
// }

// let age=10;
// for(let i=1;i<=10;i++){
//     age+=1;
//     console.log(age);
// }
// let string="Hi";
// for(let i=1;i<=5;i++){
//     console.log(string);
// }

// for(let count=0;count<=1000;count++){
//     console.log("count");
// }


// console.log("loop has ended");

//calculate sum of n
// let sum=0;
// let num=prompt("Enter a number:");
// for(let i=1;i<=num;i++){
//     sum+=i;

// }
// console.log(sum);

// for(var n=1;n<=100;n++){
//     console.log("n is ",n);
// }
// console.log(n);

// for(let n=1;n<=100;n++){
//     console.log("n is ",n);
// }
// console.log(n);

// let n=1;
// while(n<=5){
//     console.log("Hi JS");
//     n++;
// }

// let n=10;
// do{
//     console.log("Hi");
//     n++;
// }
// while(n<=5);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);

// let str="JavaScript";
// let count=0;
// for(let val of str){
//     console.log(val);
//     count++;
// }
// console.log("Word count is ",count);


// let student={
//     name:"Priya",
//     age:20,
//     gpca:7.5,
//     isPass: true
// };

// for(let key in student){
//     console.log(key,student[key]);
// }

// let n=100;
// let count=0;
// for(let i=0;i<=n;i++){
//     if(i%2!=0){
//         console.log(i,"is Odd");
//         count++;
//     }
// }
// console.log(count,"numbers found");

// let number=25;
// let guess=prompt("Guess the number");
// if(number==guess){
//     console.log("Correct!");
// }
// else{
//     console.log("Nope,Gues Again!");
// }

// while(number!=guess){
//       guess=prompt("Wrong,Guess Again:");
// }
// console.log("Got it!");

// let str="Tony";
// let str2='pabitha';

// console.log(str2,str2.length);
// console.log(str2[3]);
// console.log(str2[10]);

// let obj={
//     item:"pen",
//     price:10
// };

// console.log(`The item is ${obj.item} \n is ${obj.price}`);
// let sent=`This is a template literal`;
// console.log(sent);
// console.log(typeof(sent));
// console.log(`output is ${1+2+3}`);

// let str="Pencilballon";
// // let strnew=str.trim();
// // console.log(str);
// // console.log(strnew);
// console.log(str.slice(3));
// console.log(str.concat("ball"));
// console.log(str.replace("b","v"));


// let name=prompt("Enter your name:");
// console.log(name);
// let username="@"+name+name.length;
// console.log(username);

// let m1=90;
// let m2=89;
// let m3=67;
// let m4=44;
// let m5=92;

// let marks={
//     m1:34,
//     m2:90,
//     m4:87
// };


// let marks=[98,78,65,43];
// console.log(marks);
// console.log(marks.length);

// let heroes=["ironman","hulk","spiderman","antman"];
// // for(let i in heroes){
// //     console.log(heroes[i]);
// // }

// // for(let i=0;i<heroes.length;i++){
// //     console.log(heroes[i]);
// // }

// for(let hero of heroes){
//       console.log(hero.toUpperCase());
// }

// let marks=[85,97,44,37,76,60];
// let sum=0;
// let count=0;
// for(let mark of marks){
//     sum+=mark;
//     count++;
// }
// console.log(sum/count);
// console.log(sum/marks.length);

// let items=[250,645,300,900,50];
// for(let i in items){
//     offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

// let marks=[90,87,65];
// marks.push(54);
// console.log(marks);
// console.log(marks.toString());

// let m1=[100,98,76];
// let m2=[54,23,18];
// let m3=[98,76,54];
// let slic=m3.slice(1,);
// console.log(slic);
// console.log(m3);
// // m3.shift();
// console.log(m3);
// console.log(m1.concat(m2,m3));


// let arr=[1,2,3,4,5,6];
// let res=arr.splice(2,2,2,101,104);
// console.log(res);


// let company=["Bloomberg","Micorsoft","Uber","Google","IBM","Netflix"];
// company.shift();
// console.log(company);
// company.splice(2,1,"Ola");
// console.log(company);
// company.push("Amazon");
// console.log(company);

// function myfunc(){
//     console.log("Welcome to JS");
//     console.log("We are learning JS");
// }

// myfunc();
// myfunc();

// function myfunc(msg,name){
//     console.log(msg,name) ;
// }
// myfunc("Hello","Priya");


// function sum(a,b){
//     s=x+y;
//     console.log(s);
    
//     console.log(s);
//     return s;
// }
// let x=10;
// let y=10;
// let res=sum(x,y);
// console.log(res);

// function sum(a,b){
//     return a+b;
// }

// function mul(a,b){
//     return a*b;
// }

// const sum=(a,b)=>{
//     return a+b;
// }

// let res=sum(10,10);
// console.log(res);

// const mul=(a,b)=>{
//     console.log(a*b);
// }

// mul(3,4);

// const printhello=()=>{
//     console.log("Hi");
// }

// printhello();

// const hi=()=>console.log("hi");

// hi();

// function vowelcount(str){
//     let count=0;
//     for(let val of str){
//         if(val==='a' || val==='e' || val==='i' || val==='o' || val==='u'){
//             count++;
//         }
//     }
//         return count;
    
    
// }


// let res=vowelcount("Pabi");
// console.log(res);

// const vowelcount=(str)=>{
//     for(let val of str){
//         if(val==='a' || val==='i' || val==='o' || val==='e' || val==='u'){
            
//         }
//     }
// }


// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val);
// })

// arr.forEach((val)=>{
//     console.log(val);
// })

let arr=[1,2,3,4,5];
// arr.forEach((val,ind)=>{
//     console.log(ind,val*val);
// })
// let calc=(num)=>{
//     console.log(num*num);
// };

// arr.forEach(calc);

// let newarr=arr.map((val)=>{
//     return val*val;
// })
// console.log(newarr);

// let newarr=arr.filter((val)=>{
//     return val>3;
// })


// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// })

// console.log(output);

// const output=arr.reduce((prev,curr)=>{
//     return prev<curr?prev:curr;
// });
// console.log(output);

// let marks=[123,45,67,43,110];
// let arr1=marks.filter((val)=>{
//     return val>90;
// });

// console.log(arr1);

// let num=prompt("Enetr a number:");
// let nums=[];
// for(let i=1;i<=num;i++){
//     nums[i-1]=i;
// }

// console.log(nums);

// const output=nums.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output);

// const mul=nums.reduce((res,curr)=>{
//     return res*curr;
// })

// console.log(mul);

// console.log("Hellwo!");
// alert("Hi");

// console.log(window);
// window.console.log("Hello");
// window.alert("Hi");

// document.body.childNodes[1].innerText="abc";

// console.log(document.body);
// let heading1=document.getElementById("heading1");
// console.dir(heading1);

// let heading=document.getElementsByClassName("heading");
// console.dir(heading);
// console.log(heading);

// let paras=document.getElementsByTagName("p");
// console.log(paras);

// let elem=document.querySelector("p");

// console.log(elem);


// let div=document.querySelector("div");
// console.log(div);

// let heading=document.querySelector("h2");
// console.log(heading);

// let element=document.querySelector(".myhead");
// console.log(element);

// let ele=document.querySelectorAll(".box");
// console.log(ele[0]);

// let idx=1;
// for(let div of ele){
//     console.log(div.innerText=`New div ${idx}`);
//     idx++;
// }

// let div=document.querySelector("div");
// console.log(div.setAttribute("id","newid"));

// let attr=div.getAttribute("id");
// console.log(attr);

// let div=document.querySelector("div");
// console.log(div);
// div.style.backgroundColor="purple";
// div.style.color="white";
// div.innerText="Hellow";

// let div=document.querySelector("div");
// let el=document.createElement("button");
// el.innerText="Click Me!";
// div.after(el);
// console.log(el);
// let head=document.createElement("Hi");
// head.innerText="hi"
// let body=document.querySelector("body");
// body.prepend(head);
// console.log(head);
// head.remove();

// let btn=document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// document.querySelector("body").prepend(btn);
// console.log(btn);

// let para=document.querySelector("p");
// let attr=para.getAttribute("class");

// let btn=document.querySelector("#myid");
// btn.onclick=()=>{
//     console.log("Button was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

// let btn=document.querySelector("#myid");
// btn.addEventListener("click",(evt)=>{
//     console.log("button was clicked")
//     console.log(evt.target);
//     console.log(evt.type);
// })

// let btn=document.querySelector("#myid");
// let mode="light";
// const changecolor=()=>{
//     console.log("change mode");
//     if(mode==="light"){
//         mode="Dark";
//         document.querySelector("body").classList.add("dark");
//         document.querySelector("body").classList.remove("light");
//     }
//     else{
//         mode="light";
//         document.querySelector("body").classList.add("light");
//         document.querySelector("body").classList.remove("dark");
//     }
//     console.log(mode);
// }
// btn.addEventListener("mouseover",changecolor);

// const std={
//     name:"priya",
//     age:20,
//     mark:189,
//     printmark:function(){
//         console.log("marks=",this.mark);
//     },
// };


// const emp={
//     calc1(){
//         console.log("Tax rate");
//     },
//     // calc2:function(){
//     //     console.log("Tax rate")
//     // },
// };

// const karn={
//     salary:500000,
//     calc(){
//         console.log("TX RATE INC");
//     }
// }

// karn.__proto__=emp;

// class BMWCar{
//     constructor(brand,mileage){
//         console.log("Construtor");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("starting");
//        }
//        stop(){
//         console.log("Stopped");
//        }

//     //    setBrand(brand){
//     //     this.brand=brand;
//     //    }
// }

// let fort=new BMWCar("fort",10);
// console.log(fort);
// let xeu=new BMWCar("xeu",12);
// console.log(xeu);

// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }

// class Child extends Parent{}

// let obj=new Child();


// class Person{
//     constructor(name){
//         this.species="human";
        
//         this.name=name;
//         console.log("Parents");
//     }
//     eat(){
//         console.log("Eating");
//     }
//     // sleep(){
//     //     console.log("Sleeping");
//     // }

//     // work(){
//     //     console.log("nthg");
//     // }
// }

// class Doc extends Person{
//     constructor(name){
//         console.log("Child cons");
//         super(name);
        
        
//         console.log("Child cons exited");
//     }
//     work(){
//         super.eat();
//         console.log("Working in hosp");
//     }
// }
// let obj=new Doc("Ravi");

// let data="Secret code";
// class User{
//     constructor(name,mail){
//      this.name=name;
//      this.mail=mail;
//     }
//     viewData(){
//         console.log(data);
//     }
// }

// class Admin extends User{
//     constructor(name,mail){
//         super(name,mail);
//     }
//     editData(){
//         console.log("Editing");
//         data="Editted";
//         console.log(data);
//     }
// }

// let std=new User("pavi","pavi");
// let admin1=new Admin("pabi","pabi");

// console.log("one");
// console.log("Two");
// console.log("Three");

// function hello(){
//     console.log("hellow");
// }

// setTimeout(hello,2000);
// console.log("One");
// setTimeout(()=>{
//     console.log("Hi");
// },4000);
// console.log("Two");
// console.log("Three");

// function sum(a,b){
//     console.log(a+b);
// }

// function calc(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calc(1,2,(a,b)=>{
//     console.log(a+b);
// });

// const hello=()=>{
//     console.log("Hello");
// }

// setTimeout(hello,3000);

// function getdata(dataId,getnext){
   
//     setTimeout(()=>{
//         console.log("data : ",dataId);
//         if(getnext){
//         getnext();
//         }
//     },1000);
// }

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4);
//         });
//     });
// });
// let promise=new Promise((resolve,reject)=>{
// //          console.log("I m a promisee");
// //          //resolve("Success");
// //          reject("some error");
// // });
// // 

// function getdata(dataId,getnext){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //console.log("data ",dataId);
//             //resolve("success");
//             reject("Errror");
//             if(getnext){
//                 getnext();
//             }
//         },5000);
//     });
// }

// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Promise");
//         //resolve("success");
//         reject("error");
//     });
// };

// let promise=getpromise();
// promise.then(()=>{
//     console.log("Fulfilled");
// });

// promise.catch((err)=>{
//     console.log("network Rejected ",err);
// });


// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//  console.log("data1");
//  resolve("Success");
//         },2000);
//     });
// }

// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//  console.log("data2");
//  resolve("Success");
//         },2000);
//     });
// }
// console.log("Findig it");
// let p1=asyncfunc1();
// p1.then((res)=>{
//     console.log(res);
//     let p2=asyncfunc2();
//     p2.then((res)=>{});
// });

// console.log("Findig it");
// let p2=asyncfunc2();
// p2.then((res)=>{
//     console.log(res)
// });

// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },2000);

//     });
// }

// async function getdata(){
//     await api();
//     await api();
// }

// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(dataid);
//             resolve("Success");
//         },2000)
//     });
// }

// (async function(){
//     console.log("data1");
//     await getdata(1);
//     console.log("data2");
//     await getdata(2);
//     console.log("data3");
//     await getdata(3);
// })();