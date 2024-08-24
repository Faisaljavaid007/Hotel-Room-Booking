document.querySelector("form").addEventListener("submit", function(event) {
    const checkin = new Date(document.getElementById("checkin").value);
    const checkout = new Date(document.getElementById("checkout").value);

    if (checkout <= checkin) {
        alert("Check-out date must be later than check-in date.");
        event.preventDefault();
    }
});
