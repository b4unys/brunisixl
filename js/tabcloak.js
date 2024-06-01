function changeFaviconAndTitle(newFaviconPath, newTitle) {
  
    var favicon = document.getElementById('favicon');
    favicon.href = newFaviconPath;

  
    document.title = newTitle;
}

document.getElementById('changeBtn').addEventListener('click', function() {
    changeFaviconAndTitle('/images/brunysixl.png', 'BrunysIXL');
});
