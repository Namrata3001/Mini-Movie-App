// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallet=JSON.parse(localStorage.getItem("amount"));
   document.getElementById("wallet").innerHTML=wallet;

   let movie = JSON.parse(localStorage.getItem("movie"));
    
   let poster = document.createElement("img");
        poster.src=movie.Poster;

    let title = document.createElement("p");
        title.innerText=movie.Title;

    document.getElementById("movie").append(title,poster);
    document.getElementById("confirm").addEventListener("click",confirmBooking);


    function confirmBooking(){
        let seats = document.getElementById("number_of_seats").value;

        let total = Number(seats)*100;
        let saved = Number(wallet);
        if(saved < total){
            alert("Insufficient Balance !");
        }
        else{
         alert("Booking Successful");
         saved -=total;
         localStorage.setItem("amount",JSON.stringify(saved));
         window.location.reload();
        }
        console.log(total,saved);
    }