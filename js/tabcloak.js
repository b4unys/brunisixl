document.addEventListener('DOMContentLoaded', function() {
    var isToggled = false; 

    
    function applyChanges() {

        var favicon = document.querySelector("link[rel*='icon']");
        favicon.href = 'new_favicon.png';
        localStorage.setItem('favicon', '/images/cloak/schoologyfavicon.png');
        
        
        document.title = 'New Title';
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
