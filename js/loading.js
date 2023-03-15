const bg = document.querySelector('.bg');
const load = document.querySelector('.loading-text');

let loading = 0;

let int = setInterval(blur, 30)

function blur() {
    loading++
    load.innerText = `${loading}%`;
    if (loading == 100) {
        clearInterval(int)
    }

    bg.style.filter = `blur(${30 - 0.3*loading}px) `
    load.style.opacity = `${1 - loading/100}`;
}