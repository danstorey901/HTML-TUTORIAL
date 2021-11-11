let user =
{
    id: 1,
    username: "Greg",
    password: "Baileys",
    firstname: "Greg",
    lastname: "Doud",
    phone: "5135555555",
    email: "GPD@MAX.com",
    isReviewer: true,
    isAdmin: true,
    requests: null
}

const remove = () => {
    console.log("Delete user ...");
}

const getUserByPk = () => {
    let id = getUrlId();
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:57419/api/users/${id}`, true);
    xhr.onload = () => {
        user = xhr.response;
        loaded();
    }
    xhr.send();
}

const loaded = () => {
    var url = getUrlId();

    document.getElementById("xid").value = user.id;
    document.getElementById("xusername").value = user.username;
    document.getElementById("xfirstname").value = user.firstname;
    document.getElementById("xlastname").value = user.lastname;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xisreviewer").value = user.isReviewer ? "Yes" : "No";
    document.getElementById("xisadmin").value = user.isAdmin ? "Yes" : "No";
}