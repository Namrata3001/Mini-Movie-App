// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click", addToWallet);

function addToWallet(){
    let amount = document.getElementById("amount").value;
    let wallet=JSON.parse(localStorage.getItem("amount")) || 0;
    let wallet_amount=Number(wallet);
    wallet_amount += Number(amount);
    localStorage.setItem("amount",JSON.stringify(wallet_amount));
    window.location.reload();
}
let wallet=JSON.parse(localStorage.getItem("amount"));
   document.getElementById("wallet").innerHTML=wallet;
