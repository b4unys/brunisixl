document.addEventListener('DOMContentLoaded', function() {
    var isToggled = false; 

    
    function applyChanges() {

        var favicon = document.querySelector("link[rel*='icon']");
        favicon.href = '/images/schoologyfavicon.png';
        localStorage.setItem('favicon', '/images/schoologyfavicon.png');
        
        
        document.title = 'Home | Schoology';
        localStorage.setItem('title', 'Home | Schoology');
    }

  
    function removeChanges() {

        var favicon = document.querySelector("link[rel*='icon']");
        favicon.href = '/images/cloak/brunysixlfavicon.png';
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
        applyChanges();
        isToggled = true;
    }
});
