//Username and Password
let user_name = prompt("Enter Username:");
let user_password = prompt("Enter Password:");

const storedUser = "Asantander";
const storedPass = "Vin11";

if (user_name === storedUser && user_password === storedPass) {
    alert(`Welcome ${user_name}`);
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");
}