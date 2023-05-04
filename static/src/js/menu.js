


"Est ce que le menu est déplié ?"
var is_menu_deployed = { docs:false, courses:false};

function menuAction(id) {
    console.log(document.URL)

    img = document.getElementById(id+'-arrow')
    sub_menu = document.getElementById(id+'-sub-menu')
    console.log(sub_menu)
    is_menu_deployed["docs"] = is_menu_deployed["docs"] ? false : true;
    is_menu_deployed["courses"] = is_menu_deployed["courses"] ? false : true;


    if (id == "docs") {
        if (is_menu_deployed["docs"]) {
            img.style.transform = "rotate(0deg)";
            sub_menu.style.display = "list-item";
        } else {
            img.style.transform = "rotate(180deg)";
            sub_menu.style.display = "none";

        }
    }
    else if (id == "courses") {
        if (is_menu_deployed["courses"]) {
            img.style.transform = "rotate(0deg)";
            sub_menu.display = "list-item";

        } else {
            img.style.transform = "rotate(180deg)";
            sub_menu.display = "none" 
        }
    }  
}

document.addEventListener('DOMContentLoaded', ()=> {
    mooveInvoiceTable()
})

function mooveInvoiceTable() {
    console.log("test")
    //var session = require('web.session');
    //console.log(session)
    //user = session.uid
    //console.log(user)
    let container = document.getElementById('wrap').childNodes[1]
    
    div = document.createElement('div')
    div.classList.add("d-flex")
    div.classList.add("justify-content-between")
    div.classList.add("col-12")

    /* menu */
    div.appendChild(container.childNodes[3])
    
    /* table */
    container.childNodes[4].classList.add("col-12")
    container.childNodes[4].classList.add("col-xl-70")  
    div.appendChild(container.childNodes[4])
    
    console.log(container.firstChild)
    container.childNodes[1].after(div)
    /*container.insertAfter(div, container.firstChild);*/ 
    console.log(container)

}



