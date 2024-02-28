document.addEventListener("DOMContentLoaded", function() {
    const main = document.getElementById("main");
    main.addEventListener("click", function() {
        console.log("main clicked");
    });
    const nav = document.getElementById("header");
    nav.addEventListener("click", function() {
        console.log("header clicked");
    });
    const section = document.getElementById("section");
    section.addEventListener("click", function() {
        console.log("section clicked");
    });
    const footer = document.getElementById("footer");
    footer.addEventListener("click", function() {
        console.log("footer clicked");
    });

});