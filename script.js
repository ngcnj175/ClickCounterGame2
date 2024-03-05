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
    stars.style.display = 'block';
    // 星のアニメーションが終了した後、非表示にする
    setTimeout(() => {
        stars.style.display = 'none';
    }, 500); // アニメーションの持続時間と一致させる
}
