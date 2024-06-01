function setBackgroundColor(color) {
    document.getElementById('particles-js').style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}

function toggleParticles() {
    var particlesContainer = document.getElementById('particles-js');
    if (!particlesActive) {
        particlesActive = true;
        particlesContainer.style.display = 'block';
        if (!(window.pJSDom && window.pJSDom.length)) {
            particlesJS('particles-js', particlesConfig);
        }
    } else {
        particlesActive = false;
        particlesContainer.style.display = 'none';
        if (window.pJSDom && window.pJSDom.length) {
            window.pJSDom[0].pJS.fn.vendors.destroy();
        }
    }
}

window.addEventListener('load', function() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        setBackgroundColor(savedColor);
        document.getElementById('color-picker').value = savedColor;
    }
});

document.getElementById('color-picker').addEventListener('input', function() {
    const newColor = this.value;
    setBackgroundColor(newColor);
});

var particlesActive = false;
var particlesConfig = {
    
};

document.getElementById('particles-toggle-button').addEventListener('click', function() {
    toggleParticles();
});

document.getElementById('settings-button').addEventListener('click', function() {
    var menu = document.getElementById('settings-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
