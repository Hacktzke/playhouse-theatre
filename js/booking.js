const minusAdult = document.querySelector("#minus-adult");
const plusAdult = document.querySelector("#plus-adult");
const amountAdult = document.querySelector("#amount-adult");
const minusChild = document.querySelector("#minus-child");
const plusChild = document.querySelector("#plus-child");
const amountChild = document.querySelector("#amount-child");
const minusSenior = document.querySelector("#minus-senior");
const plusSenior = document.querySelector("#plus-senior");
const amountSenior = document.querySelector("#amount-senior");
const totalPriceDisplay = document.querySelector("#total-price-display")
const chooseSeatRequest = document.querySelector("#choose-seat-request")
const chooseSeatRequestNum = document.querySelector("#choose-seat-request-num")
const bookingImg = document.querySelector("#booking-img");
const submitBtn = document.querySelector("#submit-btn");
const checkout = document.querySelector("#checkout");
const checkoutShow = document.querySelector("#checkout-show");
const checkoutDate = document.querySelector("#checkout-date");
const checkoutTickets = document.querySelector("#checkout-tickets");
const checkoutPrice = document.querySelector("#checkout-price");
const checkoutCancelBtn = document.querySelector("#checkout-cancel-btn");
const checkoutConfBtn = document.querySelector("#checkout-conf-btn");
const overlay = document.querySelector("#overlay");
const errorMsg = document.querySelector("#error-msg");
const showSelect = document.querySelector("#show-select");
const showDates = document.querySelector("#show-dates");
const seats = document.querySelectorAll(".seat");

let totalAdultTicket = 0;
let totalChildTicket = 0;
let totalSeniorTicket = 0;
let ticketTotal = 0;
let totalPrice = 0;
let seatsChoosen = [];

// CONSTRUCTOR FOR SHOW OBJECT

function Show(name, value, dates, bookingImg) {
    this.name = name;
    this.value = value;
    this.dates = dates;
    this.bookingImg = bookingImg;
}

const lesMiserables = new Show("Les Misérables", "les-mis",["08/04/2022", "15/04/2022", "22/04/2022", "29/04/2022", "06/05/2022", "13/05/2022", "20/05/2022", "27/05/2022", "03/06/2022"], "./les-mis-booking-banner.jpg");
const hamlet = new Show("Hamlet", "hamlet",["21/04/2022", "28/04/2022", "04/05/2022", "11/05/2022", "18/05/2022", "25/05/2022", "02/06/2022", "09/06/2022", "16/06/2022"], "./hamlet-booking-banner.jpg");
const shallWeDance = new Show("Shall We Dance", "shall-we-dance", ["06/08/2022", "13/08/2022", "20/08/2022", "27/08/2022", "03/09/2022", "10/09/2022", "17/09/2022", "24/09/2022", "01/10/2022"], "./shall-we-dance.jpg");
const lionKing = new Show("Lion King", "lion-king", ["05/06/2022", "12/06/2022", "19/06/2022", "26/06/2022", "03/07/2022", "10/07/2022", "17/07/2022", "24/07/2022", "01/08/2022"], "./lion-king.jpg");
const showList = [lesMiserables, hamlet, shallWeDance, lionKing];

showList.forEach(function(show) {
    let showOption = document.createElement("option");
    showOption.setAttribute("value", show.value);
    showOption.textContent = show.name;
    showSelect.appendChild(showOption);
})

showSelect.addEventListener("change", function(e) {
    while (showDates.options[1]) {
        showDates.options.remove(1);
    };
    let imgSrc = `./images/${this.value}-booking-banner.jpg`;
    bookingImg.src = imgSrc;
    let value = this.value;
    showList.forEach(function(show) {
        if (value === show.value) {
            for (let i = 0; i < show.dates.length; i++) {
                let dateOption = document.createElement("option");
                dateOption.textContent = show.dates[i];
                showDates.appendChild(dateOption);
            }
        }
    })
})


// FUNCTIONS TO BE USED IN OTHER FUNCTIONs

const updatePrice = () => totalPriceDisplay.textContent = `$${totalPrice}.00`;

const showSeatReq = () => {
    chooseSeatRequestNum.textContent = `Select your ${ticketTotal} seat(s) above.`;
    if (!ticketTotal) {
        chooseSeatRequestNum.textContent = "";
    }
}

// AUTO REMOVE SEAT. REMOVES THE LAST SELECTED SEAT IF A TICKET NUMBER IS DECREASED.

const autoRemoveSeat = () => {
    if (ticketTotal < 0) {
        let lastSeat = seatsChoosen[seatsChoosen.length-1];
        for (seat of seats) {
            if (seat.textContent == lastSeat) {
                seat.style.backgroundColor = "white";
                ticketTotal++;
                seatsChoosen.pop();
                showSeatReq();
            }
        }
    }
}

// PLUS/MINUS BTN LISTENERS

plusAdult.addEventListener("click", function() {
    totalAdultTicket++;
    ticketTotal++;
    totalPrice += 25.00;
    amountAdult.textContent = totalAdultTicket;
    updatePrice();
    if (ticketTotal) {
        showSeatReq();
    }
} )

minusAdult.addEventListener("click", function() {
   
    if (totalAdultTicket){
        totalAdultTicket--;
        ticketTotal--;
        totalPrice -= 25.00;
        amountAdult.textContent = totalAdultTicket;
        updatePrice();
        showSeatReq();
        autoRemoveSeat();
    }
} )

plusChild.addEventListener("click", function() {
    totalChildTicket++;
    ticketTotal++;
    totalPrice += 10.00;
    amountChild.textContent = totalChildTicket;
    updatePrice();
    if (ticketTotal) {
        showSeatReq();
    }
} )

minusChild.addEventListener("click", function() {
    if (totalChildTicket > 0){
        totalChildTicket--;
        ticketTotal--;
        totalPrice -= 10.00;
        amountChild.textContent = totalChildTicket;
        updatePrice();
        showSeatReq();
        autoRemoveSeat();
    }
} )

plusSenior.addEventListener("click", function() {
    totalSeniorTicket++;
    ticketTotal++;
    totalPrice += 20.00;
    amountSenior.textContent = totalSeniorTicket;
    updatePrice();
    if (ticketTotal) {
        showSeatReq();
    }
} )

minusSenior.addEventListener("click", function() {
    if (totalSeniorTicket > 0){
        totalSeniorTicket--;
        ticketTotal--;
        totalPrice -=20.00
        amountSenior.textContent = totalSeniorTicket;
        updatePrice();
        showSeatReq();
        autoRemoveSeat();
    }
} )

// SEAT GRID LISTENERS

for (seat of seats) {
    seat.addEventListener("click", function() {
        let red = this.style.backgroundColor === "red";
        let seatName = this.textContent;
         if (ticketTotal) {
            if(red) {
                this.style.backgroundColor = "white";
                // let seatName = this.textContent;
                let deleteSeatIndex = seatsChoosen.indexOf(seatName); 
                seatsChoosen.splice(deleteSeatIndex, 1);
                ticketTotal++;
                showSeatReq(); 
            }
            else {
                this.style.backgroundColor = "red"; 
                seatsChoosen.push(seatName);
                ticketTotal--;
                showSeatReq();
            }
        }
        else if (seatsChoosen.length != 0 && !ticketTotal) {
            if(red) {
                this.style.backgroundColor = "white";
                let deleteSeatIndex = seatsChoosen.indexOf(seatName); 
                seatsChoosen.splice(deleteSeatIndex, 1);
                ticketTotal++;
                showSeatReq(); 
            }
        }
    })
}

// SUBMIT BUTTON

submitBtn.addEventListener("click", function(e) {
    if (showSelect.value && showDates.value) {
        e.preventDefault();
        
        if (totalPrice == 0) {
            errorMsg.textContent = "Please select a ticket";
            setTimeout(() => {
                errorMsg.textContent = "";
            },3000);
        }
        else if (ticketTotal === 1) {
            errorMsg.textContent = "Please select a seat";
            setTimeout(() => {
                errorMsg.textContent = "";
            },3000);
        }
        else if (ticketTotal > 1) {
            errorMsg.textContent = "Please select your seats";
            setTimeout(() => {
                errorMsg.textContent = "";
            },3000);
        }
        else {
            checkout.classList.remove("hide");
            checkoutShow.textContent = showSelect.options[showSelect.selectedIndex].textContent;
            checkoutDate.textContent = showDates.value;
            seatsChoosen.sort();
            checkoutTickets.textContent = seatsChoosen.join(", ");
            checkoutPrice.textContent = `$${totalPrice}.00`;
            overlay.classList.add("overlay")
        }
    }
})

checkoutCancelBtn.addEventListener("click", () => {
    checkout.classList.add("hide");
    overlay.classList.remove("overlay")
})

checkoutConfBtn.addEventListener("click", function() {
    alert("Booking confirmed! \nThe checkout page is beyond the scope of the course, you will now be redirected to the Homepage.");
    location.href = "./index.html";
})