const row=document.querySelector('.row')
const getAPI=async()=>{
    const respone=await fetch('./coffee.json');
    const data =await respone.json()
    // console.log(data);
    data.forEach(({name,image,price})=>{
        
        
        row.innerHTML+=`
        <div class="col-3 mt-4">
                <div class="card " style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text">Price :$${price}</p>
                      <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                  </div>
            </div>
    `;
    })
}
getAPI()