document.getElementById('searchBar').addEventListener('keyup', function() {
    const searchText = this.value.toLowerCase();
    const games = document.querySelectorAll('.game');

    games.forEach(game => {
        const bio = game.getAttribute('data-bio').toLowerCase();
        if (bio.includes(searchText)) {
            game.style.display = '';
        } else {
            game.style.display = 'none';
        }
    });
});
