const btn = document.querySelectorAll('button');
btn.forEach(d => d.addEventListener('click', (e) => {
   let trg = (e.target).getAttribute('class')
   document.getElementById(trg).play()
}))


document.addEventListener('keydown', (e) => {
    if (e.key === 'w') {
        document.getElementById('w').play();
    } else if (e.key === 'a') {
        document.getElementById('a').play();
    } else if (e.key === 's') {
        document.getElementById('s').play();
    } else if (e.key === 'd') {
        document.getElementById('d').play();
    } else if (e.key === 'j') {
        document.getElementById('j').play();
    } else if (e.key === 'k') {
        document.getElementById('k').play();
    } else if (e.key === 'l') {
        document.getElementById('l').play();
    }
});

