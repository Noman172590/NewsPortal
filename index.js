function newCatagory() {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => displaydataCatagory(data.data.news_category))

}

const displaydataCatagory = (data) => {
    console.log(data);
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
const newDetalies = (newDetaliesData) => {
    console.log(newDetaliesData);
    fetch(`https://openapi.programming-hero.com/api/news/category/0${newDetaliesData}`)
        .then(res => res.json())
        .then(data => console.log(data))

    const sectiontwo = document.getElementById("sectiontwo")
    const div = document.createElement("div")
    div.innerHTML = `
    
      
      
      
      `
      sectiontwo.appendChild(div)
}
newCatagory()