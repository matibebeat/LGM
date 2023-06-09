const carousel = document.querySelector(".carousel");
firstImage = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    //hiding icons at the end of the carousel
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scroll width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none": "block" ;
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none": "block" ;
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        //on click off the left icon, carousel scrolls left
        let firstImageWidth = firstImage.clientWidth + 14; //getting firts img width
        carousel.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth;
        setTimeout(()=> showHideIcons(), 60); //activates showHideIcons after 60ms

    });
});

const autoSlide = () => {

    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff); 
    let firstImagWidth = firstImage.clientWidth +14;
    let valDifference = firstImagWidth - positionDiff;

    if (carousel.scrollLeft >prevScrollLeft){
        return carousel.scrollLeft += positionDiff > firstImagWidth /3 ? valDifference : -positionDiff;
    }
    return carousel.scrollLeft -= positionDiff > firstImagWidth /3 ? valDifference : -positionDiff;
}

const dragStart = (e) =>{
    //update the variable value on clic of the mouse
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft= carousel.scrollLeft;
}

const dragging = (e) => { 
    //scrolling images to left
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);


function generate() {
    var myForm = document.forms.ajoutPWD;
    var nbPersonnes = myForm.length.value;
    var dateArrivee = myForm.arrive.value;
    var dateDepart = myForm.depart.value;
    var nom = myForm.Nom.value;
    var prenom = myForm.prenom.value;
    var email = myForm.email.value;

    var newRow = document.createElement("tr");

    var cell1 = document.createElement("td");
    cell1.textContent = nbPersonnes;
    newRow.appendChild(cell1);

    var cell2 = document.createElement("td");
    cell2.textContent = dateArrivee;
    newRow.appendChild(cell2);

    var cell3 = document.createElement("td");
    cell3.textContent = dateDepart;
    newRow.appendChild(cell3);

    var cell4 = document.createElement("td");
    cell4.textContent = nom;
    newRow.appendChild(cell4);

    var cell5 = document.createElement("td");
    cell5.textContent = prenom;
    newRow.appendChild(cell5);

    var cell6 = document.createElement("td");
    cell6.textContent = email;
    newRow.appendChild(cell6);

    var table = document.getElementById("myTab");
    table.appendChild(newRow);
}
