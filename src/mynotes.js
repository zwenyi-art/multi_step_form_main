// window.next=function(){
//     content_2();
//     let old_content=document.querySelector(".content-1")
//     let pg_1 = document.getElementById("pg-1");
//     let pg_2 = document.getElementById("pg-2");

//     pg_1.classList.replace("my_items","my_items1");
//     pg_2.classList.replace("my_items1","my_items");
//     old_content.remove();

//     console.log("Hello");
    
// }

// window.goback=function(){
//     content_1();
//     let old_content=document.querySelector(".content-2")
//     let pg_1 = document.getElementById("pg-1");
//     let pg_2 = document.getElementById("pg-2");

//     pg_1.classList.replace("my_items1","my_items");
//     pg_2.classList.replace("my_items","my_items1");
//     old_content.remove();
//     console.log("Hello");
    
// }

// window.sutown=function(){
//     let right_page = document.getElementById("right_page");
//     right_page.innerHTML=`<h1>
//     ဆုတောင်းလေ ကြည့်ချင်ရင် 😂😂😂😂
//     </h1>`
// }


// let page_1 = document.getElementById("page-1");
// page_1.addEventListener('click',function(){
//     let page_2 = 'page-2';
//     next(page_2);
// })



// console.log(page_1);
// window.back=function(back_page){
//   console.log(back_page)
// }


window.pageDetect= (page) =>{
    console.log(page);
    let pages=['content_1','content_2'];
    let result = pages.find(function(z){
     if(z ==page){
       return z;
     }
    })
    
 }
 
 function second_page(page){
     
   
     content_2();
     let old_content=document.querySelector(".content-1")
     let pg_1 = document.getElementById("pg-1");
     let pg_2 = document.getElementById("pg-2");
 
     pg_1.classList.replace("my_items","my_items1");
     pg_2.classList.replace("my_items1","my_items");
     old_content.remove();
 
     console.log("Hello");
 
 }
 
 
 
 function next_page(page){
   let page_name = 'content_'
   console.log(page);
   let charArray = [...page];
 
   // let numbers=charArray.filter(function(e){
   //   let nums = "0123456789";
   //   if(nums.includes(e)){
   //     return e;
   //   }
   // })
   // console.log(numbers.join(""));
 
 
   let numbers = charArray.reduce(function(pv,cv){
     let nums = "0123456789";
     if(nums.includes(cv)){
       return pv+cv;
     }
     return pv;
   },"")
   let pg_no = Number(numbers)+1;
   page_name=page_name+pg_no;
   console.log(page_name);
 
  
   // content_2();
   //   let old_content=document.querySelector(".content-1")
   //   let pg_1 = document.getElementById("pg-1");
   //   let pg_2 = document.getElementById("pg-2");
 
   //   pg_1.classList.replace("my_items","my_items1");
   //   pg_2.classList.replace("my_items1","my_items");
   //   old_content.remove();
 
   //   console.log("Hello");
 }




  // let pages=[
  //   { page:"content_1",
  //     btn:"#page-1"},
  //   { page:"content_2",
  //     btn:"#page-2"},
  //        ];
 
  //  pages.find(function({page,btn}){
  //   if(page == pageId){
  //     let my_btn =document.querySelector(btn);
  //     console.log(my_btn);
  //     my_btn.addEventListener('click',function(){
  //       console.log("you clicked");
         
  //     })
  //   }
  // });
     





  function fun1(arg) {
    console.log(arg);
  }
  
  function fun2(arg) {
    console.log(arg);
  }
  const operations = {
    fun1,
    fun2
  };
  operations["fun1"]("Hello World");
  operations.fun2("Hello World");





  window.next_page=function(old_page_name,my_num,pg_no){
    let old_content=document.querySelector(old_page_name)
    let pg_1 = document.getElementById("pg-"+my_num);
    let pg_2 = document.getElementById("pg-"+pg_no);
  
    pg_1.classList.replace("my_items","my_items1");
    pg_2.classList.replace("my_items1","my_items");
    old_content.remove();
  
    console.log("Hello");
  }

  window.pageDetect=function(pageId,btn){
    let charArray = [...pageId];
    let myfunctions = {
      "content_1":content_1,
      "content_2":content_2,
      "content_3":content_3,
      "content_4":content_4,
    }
    let myhello ="hello";
    let my_num = charArray.reduce(function(pv,cv){
      let nums="0123456789";
      if(nums.includes(cv)){
        return pv+cv;
      }
      return pv;
    },"");
    let my_real_num = Number(my_num);
      let my_btn=document.getElementById(btn);
      my_btn.addEventListener('click',function(){
         myfunctions[myhello]();
      })
     
  }