function changeFaviconAndTitle(newFaviconPath, newTitle) {
    var favicon = document.getElementById('favicon');
    favicon.href = newFaviconPath;
    document.title = newTitle;
}

document.getElementById('changeBtn').addEventListener('click', function() {
    changeFaviconAndTitle('new-favicon.png', 'New Title');
});
