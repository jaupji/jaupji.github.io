const status = document.querySelector(".status");

let online = () => {
    status.innerText = 'Connection Available';
    status.style.backgroundColor = '#373844';
};

let offline = () => {
    status.innerText = 'No Connection';
    status.style.backgroundColor = '#4286f2'
}

if (window.navigator.onLine) {
    online();
} else {
    offline();
}

window.addEventListener('online', online);
window.addEventListener('offline', offline);