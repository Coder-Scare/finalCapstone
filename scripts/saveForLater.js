// Create Variable
let savedStuffArr = [];
let saveCounter = 0;

function load() {
    if (sessionStorage.getItem("hasRun") == null) { //Checks whether sessionStorage is empty and initialises it
        sessionStorage.setItem("saveStuff", JSON.stringify(savedStuffArr));
        sessionStorage.setItem("saveCount", JSON.stringify(saveCounter));
        sessionStorage.setItem("hasRun", true);
        
    } else {
        // alert("It already exists");
        
    }
    saveLater();

}

const saveLater = () => {
    let saveBtn = document.querySelectorAll(".save-btn");
    savedStuffArr = JSON.parse(sessionStorage.getItem("saveStuff"));
    saveCounter = JSON.parse(sessionStorage.getItem("saveCount"));
    saveBtn.forEach((button, index) => {
    button.addEventListener("click", function (e) {
        let grabContent = e.target.parentElement.parentElement.parentElement.innerHTML;
        savedStuffArr.push(grabContent);
        sessionStorage.setItem("saveStuff", JSON.stringify(savedStuffArr));
        alert(`You have ${saveCounter + 1} number of items in your save for later folder.`);
        saveCounter++
        sessionStorage.setItem("saveCount", JSON.stringify(saveCounter));
    })
})
}

// setTimeout(saveLater, 2000); //Used setTimeout to allow the sessionStorage items to load up first before events fire.


const loadSave = () => {
    let favs = document.getElementById("yourFavs");
    savedStuffArr = JSON.parse(sessionStorage.getItem("saveStuff"));
    savedStuffArr.forEach(item => {
       let displayItems = document.createElement("li");
       displayItems.setAttribute("class", "fav-items");
       displayItems.innerHTML = item;
       favs.appendChild(displayItems); 
    })
}

setTimeout(loadSave, 1000);

const like = () => {
    let likeBtn = document.querySelectorAll(".like-btn");
    likeBtn.forEach(button => {
        button.addEventListener("click", function(e) {
            let grabHeart = e.target.firstElementChild;
            grabHeart.style.color = "red";
        })
    })
}

like();





