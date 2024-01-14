function imgchange1() {
    document.getElementById('logo').src = './image/tea.png';
}

function imgchange2() {
    document.getElementById('logo').src = './image/cha.png';
}

function redirectToURL(url) {
    if (document.getElementById('logo').src.includes('tea.png')) {
        window.location.href = url;
    }
}
