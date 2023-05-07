import './style.scss';
import 'animate.css';
const content_1=_=>{
   
    let right_page = document.getElementById("right_page");
    let div=document.createElement("div");
    div.classList.add("d-flex","flex-column","right_content","content-1");
    div.innerHTML=`
    <div class="p-2 bg-white rounded-3 right_form">
              
              
                <div class="d-flex flex-column">
                    <div class="py-1">
                        <h4 class="fw-bold">Personal Info</h4>
                        <div class="">Please provide your name,email address,and phone number.</div>
                    </div>
                 <div class=" my-2">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.Stephen King"> 
                      </div>
                 </div>
                 <div class=" my-2">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.stephenking@lorem.com">
                         </div>
                 </div>
                 <div class=" my-2">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input type="number" class="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.+1234567890">
                        </div>
                 </div>
                </div>
            </div>
            
            <div class=" right_btn bg-light">
             <div class="d-flex justify-content-evenly p-2 rounded-1">
              <div class=""></div>
              <div class="btn btn-primary"  onclick ="page_transform('next_page','content_1')" >NextStep</div>
             </div>
            </div>`;

            right_page.append(div);

            
           
}



export const content_2=_=>{
    let right_page = document.getElementById("right_page");
    
    let content = document.createElement("div");
    content.classList.add('content-2');
    content.innerHTML=`
    <div class="p-2 bg-white rounded-3 right_form">
              
              
        <div class="d-flex flex-column">
            <div class="py-1 ">
                <h4 class="fw-bold p-0">Select Your Plan</h4>
                <div class="">You have the option of monthly of yearly billing.</div>
            </div>
      
          <div class="d-flex gap-3 pt-3">
            <div class=" card shadow-sm bg-light" >
                <div class="px-3 pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
                </div>
                <div class="card-body mt-3">
                  <h5 class="card-title mt-4">Arcade</h5>
                  <p class="card-text p-0 fw-light" style="font-size: 0.8rem;">$9/mo</p>

                </div>
             </div>

             <div class="card shadow-sm bg-light" >
              <div class="px-3 pt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
              </div>
              <div class="card-body mt-3">
                <h5 class="card-title mt-4">Advanced</h5>
                <p class="card-text p-0 fw-light" style="font-size: 0.8rem;">$9/mo</p>

              </div>
            </div>

            <div class="card shadow-sm bg-light" >
              <div class="px-3 pt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
              </div>
              <div class="card-body mt-3">
                <h5 class="card-title mt-4">Pro</h5>
                <p class="card-text p-0 fw-light" style="font-size: 0.8rem;">$9/mo</p>

              </div>
           </div>

          
        </div>

       <div class="py-3">

        <div class="d-flex plan_select" >
          <div class="">
            <div class="text-primary">Monthly</div>
          </div>
          <div class="">
            <div class="form-check form-switch mx-3">
              <input class="form-check-input" type="checkbox"  id="flexSwitchCheckChecked">
              <label class="form-check-label" for="flexSwitchCheckChecked"></label>
            </div>
          </div>
          <div class="">
            <div class="text-primary">Yearly</div>
          </div>
          
        </div>
       </div>
        </div>
    </div>
    
    <div class=" right_btn bg-light">
     <div class="d-flex justify-content-evenly p-2 rounded-1">
      <a class="btn bg-light" id="bpage-1" onclick="page_transform('back_page','content_2')">Go Back</a>
      <button type="button" class="btn btn-primary" id="npage-2" onclick="page_transform('next_page','content_2')">Next Step</button>
     </div>
    </div>
    `;
   right_page.append(content);
  //  pageDetect('content_2','page-2');
}




const content_3=_=>{
  let right_page = document.getElementById("right_page");

  let content = document.createElement("div");
  content.classList.add('content-3');
  content.innerHTML=`
  <div class="p-2 bg-white rounded-3 right_form">
              
              
  <div class="d-flex flex-column">
      <div class="py-1 ">
          <h4 class="fw-bolder p-0">Pick add-ons</h4>
          <div class="text-black-50">Add-ons help enhance your gaming experience.</div>
      </div>
     
    <div class=" pt-3">
       <div class="d-flex flex-column gap-3 justify-content-center">
         <div class="rounded-2 services p-3">
            
          <div class=" d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-center">
              <input  type="checkbox" value="" id="flexCheckChecked" checked>
               <label for="flexCheckChecked" class="px-3">
                 <span class="fw-bolder">Online Service</span><br>
                 <span class="small text-black-50">Access to multiplayer games</span>
               </label>
            </div>
            <div class="text-primary fw-semibold">+ $10/yr</div>
          </div>
         </div>

         <div class="rounded-2 services p-3">
            
          <div class=" d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-center">
              <input  type="checkbox" value="" id="flexCheckChecked" checked>
               <label for="flexCheckChecked" class="px-3">
                 <span class="fw-bolder">Larger Storage</span><br>
                 <span class="small text-black-50">Extra 1TB of cloud save</span>
               </label>
            </div>
            <div class="text-primary fw-semibold">+ $20/yr</div>
          </div>
         </div>

         <div class="rounded-2 services p-3">
            
          <div class=" d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-center">
              <input  type="checkbox" value="" id="flexCheckChecked">
               <label for="flexCheckChecked" class="px-3">
                 <span class="fw-bolder">Customizable Profile</span><br>
                 <span class="small text-black-50">Custom theme on your profile</span>
               </label>
            </div>
            <div class="text-primary fw-semibold">+ $20/yr</div>
          </div>
         </div>
          
         
       </div>
    </div>


  </div>
</div>

<div class=" right_btn bg-light">
<div class="d-flex justify-content-evenly p-2 rounded-1">
<a class="btn bg-light"  onclick="page_transform('back_page','content_3')">Go Back</a>
<button type="button" class="btn btn-primary" onclick="page_transform('next_page','content_3')">Next Step</button>
</div>
</div>

    
</div>
  `;
 right_page.append(content);

}

window.plan_yr_change=function(event){
  let plan_yr_mo=document.querySelector('.plan_yr_mo');
  let plan_amount=document.querySelector('.plan_amount');
  let service_cost=document.querySelector('.service_cost');
  let storage_cost=document.querySelector('.storage_cost');
  let total_cost=document.querySelector('.total_cost');
  if(plan_yr_mo.innerText == 'Arcade(Monthly)')
  {
       plan_yr_mo.innerHTML=`Arcade&#40;Yearly&#41;`
       plan_amount.innerText='$90/mo' ;
       service_cost.innerText='+$10/mo';
       storage_cost.innerText='+$20/mo';
       total_cost.innerText='+$120/mo';
  }
  else{
       plan_yr_mo.innerHTML=`Arcade&#40;Monthly&#41;`;
       plan_amount.innerText='$9/mo' ;
       service_cost.innerText='+$1/mo';
       storage_cost.innerText='+$2/mo';
       total_cost.innerText='+$12/mo';
  }

    
  
}


const content_4=_=>{
  let right_page = document.getElementById("right_page");

  let content = document.createElement("div");
  content.classList.add('content-4');
  content.innerHTML=`
  <div class="p-2 bg-white rounded-3 right_form">     
        <div class="d-flex flex-column">
            <div class="py-1 ">
                <h4 class="fw-bolder p-0">Finishing up</h4>
                <div class="text-black-50">Double-check everything looks OK before confirming.</div>
            </div>

            <div class="bg-light rounded-2">
               <div class="d-flex justify-content-between align-items-center px-5 py-3">
                <div class="d-flex flex-column">
                  <div class="plan_yr_mo">Arcade&#40;Monthly&#41;</div>
                  <a href="#" class="small text-black-50" onclick="plan_yr_change(event)">Change</a>
                </div>
                <div class="fw-bold plan_amount" >$9/mo</div>
               </div>

               <div class="d-flex justify-content-between align-items-center px-5 py-2 pt-4">
                <div class="small text-black-50">Online Service</div>
                <div class="service_cost">+$1/mo</div>
               </div>

               <div class="d-flex justify-content-between align-items-center px-5 pb-4">
                <div class="small text-black-50">Larger Storage</div>
                <div class="storage_cost">+$2/mo</div>
               </div>
            </div>

            <div class="d-flex justify-content-between px-5 py-4">
              <div class="">Total per month</div>
              <div class="fw-semibold text-primary total_cost">+$12/mo</div>
            </div>
           
        </div>
    </div>
    
    <div class=" right_btn bg-light">
     <div class="d-flex justify-content-evenly p-2 rounded-1">
     <a class="btn bg-light"  onclick="page_transform('back_page','content_4')">Go Back</a>
     <button type="button" class="btn btn-primary"  onclick="page_transform('next_page','content_4')">Next Step</button>
     </div>
    </div>
  `;
 right_page.append(content);
}
content_1();
//  
// content_2();
// content_3();
// content_4();
window.page_transform=function(myhellobtn,pages){
  const myfunctons = {
    "back_page":back_page,
    "next_page":next_page,
    "content_1":content_1,
    "content_2":content_2,
    "content_3":content_3,
    "content_4":content_4,
  }
  
  console.log("welcome from Page_transform");
  let pages_array = [...pages];
  let my_num = pages_array.reduce(function(pv,cv){
    let nums="0123456789";
    if(nums.includes(cv)){
      return pv+cv;
    }
    return pv;
  },"");
  function back_page(){
    let page_name = "content_";
    let pg_no = Number(my_num)-1;
    let old_page_name = page_name + my_num;
    let new_page_name= page_name + pg_no;
    console.log("I left old page",old_page_name);
    console.log("I arrived at new page",new_page_name);
    myfunctons[new_page_name]();
    another_page(my_num,pg_no)
  }
  function next_page(){
    let page_name = "content_";
    let pg_no = Number(my_num)+1;
    let old_page_name = page_name + my_num;
    let new_page_name= page_name + pg_no;
    console.log("I left old page",old_page_name);
    console.log("I arrived at new page",new_page_name);
    myfunctons[new_page_name]();
    another_page(my_num,pg_no)
  }

  function another_page(my_num,pg_no){
  
    let old_page_name =".content-" + my_num;
    let old_content=document.querySelector(old_page_name);
    let pg_1 = document.getElementById("pg-"+my_num);
    let pg_2 = document.getElementById("pg-"+pg_no);
  
    pg_1.classList.replace("my_items","my_items1");
    pg_2.classList.replace("my_items1","my_items");
    old_content.remove();
    console.log(old_page_name,my_num,pg_no);
  }
  
  myfunctons[myhellobtn]();
}



