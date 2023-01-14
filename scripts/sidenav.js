// Changes the Hamburger Button on click
const sideFunction = x => {
    x.classList.toggle("change");
}

// Brings out sideNav when hamburger clicked
let toggleStatus = 1;

const toggleMenu = () => {
    if(toggleStatus === 1) {
        document.getElementById('mySidenav').style.height = "300px";
        sideFunction(document.getElementById('line'));
        toggleStatus = 0;
    } else if (toggleStatus === 0) {
        document.getElementById('mySidenav').style.height = "0";
        sideFunction(document.getElementById("line"));
        toggleStatus = 1;
    }
}