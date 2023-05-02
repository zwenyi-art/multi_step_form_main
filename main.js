import './style.scss';

const content_1=_=>{
    let my_content =  document.getElementById("content-1");
    my_content.innerHTML=`
    <div class="p-2 row">
    <div class="col-12 mt-1">
        <h4 class=" fw-bold">Personal Info</h4>
        <p class="">Please provide your name,email address,and phone number.</p>
    </div>
 <div class="col-12 my-2">
    <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.Stephen King"> 
      </div>
 </div>
 <div class="col-12 my-2">
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.stephenking@lorem.com">
         </div>
 </div>
 <div class="col-12 my-2">
    <div class="form-group">
        <label for="exampleInputEmail1">Phone Number</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.+1234567890">
        </div>
 </div>

 <div class="col-12 my-3">
    <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-primary">Next Step</button>
    </div>
 </div>
</div>
    `
}

// content_1();
