document.addEventListener('DOMContentLoaded', function() {
    // Check if there are stored favicon and title
    if(sessionStorage.getItem('favicon')) {
        var favicon = document.querySelector("link[rel*='icon']");
        favicon.href = sessionStorage.getItem('favicon');
    }
    if(sessionStorage.getItem('title')) {
        document.title = sessionStorage.getItem('title');
    }

    // Change Favicon and Title
    document.getElementById('changeButton').addEventListener('click', function() {
        // Change Favicon
        var favicon = document.querySelector("link[rel*='icon']");
        favicon.href = 'new_favicon.png';
        sessionStorage.setItem('favicon', '/images/cloak/schoology.ico');
        
        // Change Title
        document.title = 'New Title';
        sessionStorage.setItem('title', 'Home | Schoology');
    });
});
