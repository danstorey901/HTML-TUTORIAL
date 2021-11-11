//http://localhost57419/user-detail.html?id=1

const getUrlId = () => {
    let url = window.location.href;
   // console.log(url);
    let parts = url.split("?");
   // console.log(parts);
    let kvpair = parts[1].split("=")
  //  console.log(url);
  return +kvpair[1];
}

const displayBoolean = (aBoolean) => {
    return aBoolean ? "Yes" : "No";
}