document.getElementById('changeBtn').addEventListener('click', function() {
    // Change Favicon
    var favicon = document.getElementById('favicon');
    favicon.href = 'new-favicon.png';

    // Change Title
    document.title = 'New Title';
});
