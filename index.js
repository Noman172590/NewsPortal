function newCatagory() {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => displaydataCatagory(data.data.news_category))

}

const displaydataCatagory = (data) => {
    console.log(data);
    AllDatashow(data[7].category_id)
    const ulCatagory = document.getElementById("ulCatagory")
    data.map(datas => {
        const li = document.createElement("li")
        li.classList.add("nav-item")
        li.innerHTML = `
    
    <button
     onclick="newDetalies(${datas.category_id})" type="button" class="btn btn-secondary me-2 ">${datas.category_id}. ${datas.category_name} </button>
    
    `
        ulCatagory.appendChild(li)
      
    })
}

const AllDatashow=(data)=>{
    console.log(data);
    fetch(`https://openapi.programming-hero.com/api/news/category/${data}`)
        .then(res => res.json())
        .then(data => datashow(data.data))



}

const datashow=(datashowall)=>{
    const sectionthree = document.getElementById("sectionthree")
    sectionthree.innerHTML=""
    const div = document.createElement("div")

    console.log(datashowall);
    datashowall.map(data => {
        console.log(data)
        div.innerHTML += `
        <div class="card mb-3 mt-2" >
        
        <div class="row g-0">
        <div class="col-md-4 p-3 ">
            <img src=${data.image_url} class="img-fluid rounded " alt="...">
        </div>
        <div class="col-md-8 mt-5">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.details}</p>
                <div class="d-flex align-items-center justify-content-between ">
                <div class="d-flex align-items-center ">

                    <img src=${data.author.img} class="imgAuther me-3" alt="...">
                    <div>
                        <h4>${data.author.name}</h4>
                        <div class="d-flex">
                            <h5 class="me-2">${data.author.published_date}</h5>
                           
                        </div>

                    </div>
                </div>
                <div>
                    <i class="fa-regular fa-eye"></i>${data.total_view
                    }

                </div>
                <div>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star"></i>

                </div>
                <button type="button" class="btn btn-success fs-4 "><i class="fa-brands fa-telegram me-2 fs-4 "></i>See
                    Details</button>
            </div>
            </div>
        </div>
    </div>
        
        
        
        </div>
        
    `
        sectionthree.appendChild(div)
    })
}
     
const newDetalies = (newDetaliesData) => {
    console.log(newDetaliesData);
    fetch(`https://openapi.programming-hero.com/api/news/category/0${newDetaliesData}`)
        .then(res => res.json())
        .then(data => dataalldetalies(data.data))

   
 

}
const dataalldetalies = (dataalldetalies) => {
    console.log(dataalldetalies);
  
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => placeholdersetting(data.data.news_category))

   const placeholdersetting=(datashowplacehoder)=>{
   
    document.getElementById("placeholderInput").value=`${dataalldetalies.length} items found  `

   }

   
    const sectionthree = document.getElementById("sectionthree")
    sectionthree.innerHTML=""
    const div = document.createElement("div")

    console.log(dataalldetalies);
    dataalldetalies.map(data => {
        console.log(data)
        div.innerHTML += `
        <div class="card mb-3 mt-2" >
        
        <div class="row g-0">
        <div class="col-md-4 p-3 ">
            <img src=${data.image_url} class="img-fluid rounded " alt="...">
        </div>
        <div class="col-md-8 mt-5">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.details}</p>
                <div class="d-flex align-items-center justify-content-between ">
                <div class="d-flex align-items-center ">

                    <img src=${data.author.img} class="imgAuther me-3" alt="...">
                    <div>
                        <h4>${data.author.name}</h4>
                        <div class="d-flex">
                            <h5 class="me-2">${data.author.published_date}</h5>
                           
                        </div>

                    </div>
                </div>
                <div>
                    <i class="fa-regular fa-eye"></i>${data.total_view
                    }

                </div>
                <div>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star"></i>

                </div>
                <button 
                onclick="dataModel(${data._id})" 
                type="button" class="btn btn-success fs-4 "><i class="fa-brands fa-telegram me-2 fs-4 "></i>See
                    Details</button>
            </div>
            </div>
        </div>
    </div>
        
        
        
        </div>
        
    `
        sectionthree.appendChild(div)
    }

    
  
)



}
const dataModel=(data)=>{
    console.log(data);
  }



newCatagory()