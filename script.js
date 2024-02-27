/* <div class="carousel-item active">
<img src="./pics/slider1.jpg" class="d-block w-100" alt="car1">
</div> */

const menuElemek = [
    {text:"Home", link:"#"},
    // {text:"Cars", link:"#"},
    {text:"Context", link:"#"},
    {text:"Contact", link:"#"},
    {text:"Help", link:"#"},
]
{/* <li class="nav-item">
<a class="nav-link active" aria-current="page" href="#">Home</a>
</li> */}
function menuEpit(){
    // menuElemek.forEach(function (menuElem){
    //     listaElem = document.createElement("li")
    //     listaElem.className="nav-item"
    
    //     link = document.createElement("a")
    //     link.className="nav-link"
    //     link.href=menuElem.link
    //     link.innerHTML=menuElem.text

    //     listaElem.appendChild(link)
    //     document.getElementsByClassName("navbar-nav")[0].appendChild(listaElem)
    // });

    for (const menuElem of menuElemek) {
        listaElem = document.createElement("li")
        listaElem.className="nav-item"
    
        link = document.createElement("a")
        link.className="nav-link"
        link.href=menuElem.link
        link.innerHTML=menuElem.text

        listaElem.appendChild(link)
        document.getElementsByClassName("navbar-nav")[0].appendChild(listaElem)
    }
   

}

menuEpit()

for (let i = 1; i < 4; i++) {
    doboz = document.createElement('div')
    doboz.classList.add("carousel-item")
    if (i==1) doboz.classList.add("active")

    kep = document.createElement('img')
    kep.className="d-block w-100"
    kep.alt="car"
    kep.src="./pics/slider"+i+".jpg"
    
    doboz.appendChild(kep)

    document.getElementsByClassName("carousel-inner")[0].appendChild(doboz)
}