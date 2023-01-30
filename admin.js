function logoutClick() {
    localStorage.removeItem("active");
    window.location.replace("../index.html");
}

let activeUser = JSON.parse(localStorage.getItem(Object.keys(localStorage).filter((val) => {
    return (val == JSON.parse(localStorage.getItem("active")).userName && JSON.parse(localStorage.getItem("active")).userType == "admin")
})))

Object.keys(localStorage).map((val, id) => {
    if (val != "active" && val != activeUser.userName) {
        let currUser = JSON.parse(localStorage.getItem(val));
        let allMsg = document.querySelector(".allMsg");
        let userNameText = document.createElement("p");
        let userDiv = document.createElement("div");
        userDiv.style.cssText = "border : 1px solid black; padding : 15px; margin : 10px 0;"
        userNameText.innerHTML = `${currUser.fullName} <br> @${currUser.userName}`;
        userDiv.appendChild(userNameText);
        currUser.message.map((value, idx) => {
            let msgBox = document.createElement("div");
            if (value.status == "accepted") {
                msgBox.style.cssText = "border: 2px solid green; padding : 10px; margin : 10px 0"
            }
            else if (value.status == "declined") {
                msgBox.style.cssText = "border: 2px solid red; padding : 10px; margin : 10px 0"
            }
            else {
                msgBox.style.cssText = "border: 2px solid yellow; padding : 10px; margin : 10px 0"
            }
            let msgPara = document.createElement("p");
            msgPara.innerText = value.msg;
            msgBox.appendChild(msgPara);
            userDiv.appendChild(msgBox);
        })
        allMsg.appendChild(userDiv);
    }
    else {
        console.log(val)
    }
})