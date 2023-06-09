var table = document.querySelector('table');
var tbody = table.querySelector('tbody');
var reservations = localStorage.getItem("reservations");
reservations = JSON.parse(reservations);
for (var i = 0; i < reservations.length; i++) {
    var tr = document.createElement('tr');
    var id = document.createElement('td');
    id.textContent = i;
    var nom = document.createElement('td');
    nom.textContent = reservations[i].name;
    var arrival = document.createElement('td');
    arrival.textContent = reservations[i].arrival;
    var departure = document.createElement('td');
    departure.textContent = reservations[i].departure;
    var guests = document.createElement('td');
    guests.textContent = reservations[i].total;
    var email = document.createElement('td');
    email.textContent = reservations[i].email;
    var tel = document.createElement('td');
    tel.textContent = reservations[i].tel;
    var breakfast = document.createElement('td');
    if (reservations[i].breakfast) {
        breakfast.textContent = "Yes";
        breakfast.style.color = "green";
    }
    else {
        breakfast.textContent = "No";
        breakfast.style.color = "red";
    }
    var dinner = document.createElement('td');
    if (reservations[i].dinner) {
        dinner.textContent = "Yes";
        dinner.style.color = "green";
    }
    else {
        dinner.textContent = "No";
        dinner.style.color = "red";
    }
    var cleaning = document.createElement('td');
    if (reservations[i].cleaning) {
        cleaning.textContent = "Yes";
        cleaning.style.color = "green";
    }
    else {
        cleaning.textContent = "No";
        cleaning.style.color = "red"; 
    }
    var price = document.createElement('td');
    price.textContent = reservations[i].price;
    tr.append(id, nom, arrival, departure, guests, email, tel, breakfast, dinner, cleaning, price);
    tbody.appendChild(tr);
}