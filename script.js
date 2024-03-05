let count = 0;

document.getElementById('click-me').addEventListener('click', function() {
    count++;
    document.getElementById('click-count').textContent = count;
    
    // 10の倍数であれば星を表示
    if (count % 10 === 0) {
        showStars();
    }
});

function showStars() {
    const stars = document.getElementById('stars');
    stars.style.display = 'block'; // Show the stars
    // Hide the stars after animation completes
    setTimeout(() => {
        stars.style.display = 'none';
    }, 500); // The duration should match the animation
}
