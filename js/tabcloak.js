document.getElementById('changeButton').addEventListener('click', function() {
    // Change Favicon
    var favicon = document.querySelector("link[rel*='icon']");
    favicon.href = '/images/cloak/schoology.ico';
    
    // Change Title
    document.title = 'Home | Schoology';
});
