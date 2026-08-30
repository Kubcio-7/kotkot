function handleButtonClick() {
    // Hide TV and show black.png
    const tv = document.getElementById('tv-static');
    const black = document.getElementById('black');
    tv.style.display = 'none';
    black.style.display = 'block';
    
    // Show both gifs at tv.png position
    const gif1 = document.getElementById('gif1');
    const gif2 = document.getElementById('gif2');
    gif1.style.display = 'block';
    gif2.style.display = 'block';
}
