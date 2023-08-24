

const login=document.getElementById("login")
const logout=document.getElementById("logout")

const loginbuttom=()=>{
    localStorage.setItem("name",prompt("enter your name"));
    localStorage.setItem("email",prompt("enter your email"))
    localStorage.setItem("password",prompt("enter your password"))

    document.querySelector("h1").innerText="User is logged in"
}

const logoutbuttom=()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    document.querySelector("h1").innerText="User has not  logged in"

}