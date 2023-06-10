var myform = document.getElementById("myform");

myform.addEventListener("change", function (e) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("phone").value;

    var adult_number = document.getElementById("adults").value;
    var child_number = document.getElementById("children").value;
    var total = adult_number + child_number;

    var arrival = document.getElementById("checkin").value;
    var departure = document.getElementById("checkout").value;

    var bed = document.getElementById("bed").checked;
    var breakfast = document.getElementById("breakfast").checked;
    var dinner = document.getElementById("dinner").checked;
    var cleaning = document.getElementById("cleaning").checked;

    //si y'a pas de date d'arrivée ou de départ on ne fait rien
    if (!arrival || !departure) {
        return;
    }
    //compute the number of days
    var date1 = new Date(arrival);
    var date2 = new Date(departure);
    var diff = date2.getTime() - date1.getTime();
    var days = diff / (1000 * 3600 * 24);
    //round the number of days
    days = Math.round(days);

    var price = 0;
    if (bed) {
        price += 15;
    }
    if (breakfast) {
        price += 5;
    }
    if (dinner) {
        price += 10;
    }
    if (cleaning) {
        price += 2;
    }
    price += 40;
    price *= days;
    price *= total;
    var prix = document.getElementById("price");
    prix.textContent = price;
});

myform.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!checkvalues()) {
        return;
    }
    var name = document.getElementById("name").value;
    console.log(name);
    var email = document.getElementById("email").value;
    var tel = document.getElementById("phone").value;

    var adult_number = document.getElementById("adults").value;
    var child_number = document.getElementById("children").value;
    var total = adult_number + child_number;

    var arrival = document.getElementById("checkin").value;
    var departure = document.getElementById("checkout").value;

    var bed = document.getElementById("bed").checked;
    var breakfast = document.getElementById("breakfast").checked;
    var dinner = document.getElementById("dinner").checked;
    var cleaning = document.getElementById("cleaning").checked;

    if (!arrival || !departure) {
        alert("Please enter a valid date");
    }
    //compute the number of days
    var date1 = new Date(arrival);
    var date2 = new Date(departure);
    var diff = date2.getTime() - date1.getTime();
    var days = diff / (1000 * 3600 * 24);
    //round the number of days
    days = Math.round(days);

    var price = 0;
    if (bed) {
        price += 15;
    }
    if (breakfast) {
        price += 5;
    }
    if (dinner) {
        price += 10;
    }
    if (cleaning) {
        price += 2;
    }
    price += 40;
    price *= days;
    price *= total;

    //OPEN the localstorage
    var myStorage = window.localStorage;
    //get the list of reservations
    var reservations = localStorage.getItem("reservations");
    //if there is no reservation, create an empty array
    if (!reservations) {
        reservations = [];
    }
    //else parse the string to get the array
    else {
        reservations = JSON.parse(reservations);
    }
    //create a new reservation
    var reservation = {
        name: name,
        email: email,
        tel: tel,
        total: total,
        arrival: arrival,
        departure: departure,
        bed: bed,
        breakfast: breakfast,
        dinner: dinner,
        cleaning: cleaning,
        price: price
    };
    //add the reservation to the list
    reservations.push(reservation);
    //save the list in the localstorage
    myStorage.setItem("reservations", JSON.stringify(reservations));
    //redirect to the confirmation page
    window.location.href = "reservations.html";

});

function checkvalues() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("phone").value;

    var adult_number = document.getElementById("adults").value;
    var child_number = document.getElementById("children").value;
    var total = adult_number + child_number;

    var arrival = document.getElementById("checkin").value;
    var departure = document.getElementById("checkout").value;

    var bed = document.getElementById("bed").checked;
    var breakfast = document.getElementById("breakfast").checked;
    var dinner = document.getElementById("dinner").checked;
    var cleaning = document.getElementById("cleaning").checked;

    if (!name || !email || !tel || !adult_number || !child_number || !arrival || !departure) {
        alert("Please fill all the fields");
        return false;
    }
    if (total <= 0) {
        alert("Please enter a valid number of guests");
        return false;
    }
    if (arrival > departure) {
        alert("Please enter a valid date");
        return false;
    }
    return true;
}