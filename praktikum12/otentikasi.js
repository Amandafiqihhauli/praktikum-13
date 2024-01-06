const username = "piki"  //const itu variabel yang ga bisa diubah
const password = "240703"

function auth(){
    //tangkap nilai yang di input user
    let userinput = document.getElementById("username").value
    let passwordinput = document.getElementById("password").value

    let form = document.getElementById("form")

    if(username == userinput && password == passwordinput){
        alert("Login Berhasil!")
        form.submit()
    } 
    else{
        alert("Login Gagal!")
    }
}