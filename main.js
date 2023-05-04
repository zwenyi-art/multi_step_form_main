import './style.scss';

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
             <div class="d-flex justify-content-evenly ">
              <div class=""></div>
              <div class="btn btn-primary" id="page-2" onclick="next()">NextStep</div>
             </div>
            </div>`;

            right_page.append(div);
}



const content_2=_=>{
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
     <div class="d-flex justify-content-evenly ">
      <a class="btn bg-light" onclick="goback()">Go Back</a>
      <button type="button" class="btn btn-primary" onclick="sutown()">Next Step</button>
     </div>
    </div>
    `;
   right_page.append(content);
}
content_1();


window.next=function(){
    content_2();
    let old_content=document.querySelector(".content-1")
    let pg_1 = document.getElementById("pg-1");
    let pg_2 = document.getElementById("pg-2");

    pg_1.classList.replace("my_items","my_items1");
    pg_2.classList.replace("my_items1","my_items");
    old_content.remove();

    console.log("Hello");
    
}

window.goback=function(){
    content_1();
    let old_content=document.querySelector(".content-2")
    let pg_1 = document.getElementById("pg-1");
    let pg_2 = document.getElementById("pg-2");

    pg_1.classList.replace("my_items1","my_items");
    pg_2.classList.replace("my_items","my_items1");
    old_content.remove();
    console.log("Hello");
    
}

window.sutown=function(){
    let right_page = document.getElementById("right_page");
    right_page.innerHTML=`<h1>
    ဆုတောင်းလေ ကြည့်ချင်ရင် 😂😂😂😂
    </h1>`
}
