document.getElementById('changeBtn').addEventListener('click', function() {
    
    var favicon = document.getElementById('favicon');
    var newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.href = '/images/brunysixl.png';
    newFavicon.type = 'image/png';

    
    favicon.parentNode.replaceChild(newFavicon, favicon);

    
    document.title = 'BrunysIXL';
});
