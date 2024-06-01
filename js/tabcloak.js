document.getElementById('changeBtn').addEventListener('click', function() {
    var favicon = document.getElementById('favicon');
    favicon.href = 'new-favicon.png';
    document.title = 'New Title';
});
