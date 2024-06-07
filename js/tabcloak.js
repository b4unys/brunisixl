// Function to change the title of the website
function changeTitle(newTitle) {
    document.title = newTitle;
}

// Function to change the favicon
function changeFavicon(newFaviconURL) {
    // Find the existing favicon link element
    let favicon = document.getElementById("favicon");
    
    // If it doesn't exist, create one
    if (!favicon) {
        favicon = document.createElement("link");
        favicon.id = "favicon";
        favicon.rel = "icon";
        document.head.appendChild(favicon);
    }

    // Set the new favicon URL
    favicon.href = newFaviconURL;
}

// Function to change both the title and the favicon
function changeFaviconAndTitle() {
    const newTitle = "Schoology";
    const newFaviconURL = "/images/cloak/schoology.ico"; // Change to the path of your new favicon

    changeTitle(newTitle);
    changeFavicon(newFaviconURL);
}
