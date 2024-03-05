let count = 0;

document.getElementById('click-me').addEventListener('click', function() {
    count++;
    document.getElementById('click-count').textContent = count;
});