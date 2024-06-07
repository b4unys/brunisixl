document.addEventListener('DOMContentLoaded', function() {
    var isToggled = false;

    function setFavicon(iconURL) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = iconURL;
    }

    function applyChanges() {
        setFavicon('/images/schoologyfavicon.png');
        localStorage.setItem('favicon', '/images/schoologyfavicon.png');
        document.title = 'Home | Schoology';
        localStorage.setItem('title', 'Home | Schoology');
    }

    function removeChanges() {
        setFavicon('/images/brunysixlfavicon.png');
        localStorage.removeItem('favicon');
        document.title = 'IXL | Math';
        localStorage.removeItem('title');
    }

    document.getElementById('toggleButton').addEventListener('click', function() {
        if (isToggled) {
            removeChanges();
            isToggled = false;
        } else {
            applyChanges();
            isToggled = true;
        }
    });

    if(localStorage.getItem('favicon') && localStorage.getItem('title')) {
        setFavicon(localStorage.getItem('favicon'));
        document.title = localStorage.getItem('title');
        isToggled = true;
    }
});
