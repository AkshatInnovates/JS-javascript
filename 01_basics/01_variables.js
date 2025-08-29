const accountID = 144553
let accountEmail = "akshat@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2
accountEmail = "akshat123@gmail.com"
accountPassword = "212121212"
accountCity = "Mumbai"
console.log(accountID);




/*
Prefer not to use var because of 
issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState])

