const text_flex = document.getElementsByClassName('text-flex')[0];

const text_load = () => {
    setTimeout(() => {
        text_flex.textContent = 'challenge';
    }, 0);
    setTimeout(() => {
        text_flex.textContent = 'task';
    }, 4000);
    setTimeout(() => {
        text_flex.textContent = 'fun';
    }, 8000);
}

text_load();
setInterval(text_load, 12000);