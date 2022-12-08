let tabs = document.getElementsByClassName("tab")


for (let tab of tabs) {
    tab.style.display = "none"
}

function displayTab(id){
    for (let tab of tabs) {
    tab.style.display = "none"}

    document.getElementById(id).style.display = "block"
}



let buttons = document.querySelectorAll("button")

for(var button of buttons ) {
    button.addEventListener("click", function(){
        for(var x of buttons){
           
            x.classList.remove("selected")
        }
        
        this.classList.add("selected")
    })
}

var backgroundColors = ["#000000", "#3f1e13", "#720008"]

for (button of buttons) {
    button.addEventListener("click", function(){
        var index = this.getAttribute("index")

        document.body.style.background = backgroundColors[index]
    })
}

