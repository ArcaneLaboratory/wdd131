const themeSelector = document.querySelector("select");
function changeTheme() {
    const theme = themeSelector.value;
    console.log(themeSelector.value);
    theme == "dark" ? document.body.setAttribute("class", "dark") : document.body.setAttribute("class", "");
    const image = document.querySelector("img");
    theme == "dark" ? image.setAttribute("src", "images/byui-logo_white.png") : image.setAttribute("src", "images/byui-logo_blue.webp");
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);