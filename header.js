let header_resp = document.querySelector(".header-responsive");

document.querySelector("#menu-click").addEventListener("click", () => {
    header_resp.style.right = "0";
})

document.querySelector("#back-icon").addEventListener("click", () => {
    header_resp.style.right = "-80vw";
})