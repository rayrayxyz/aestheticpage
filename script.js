function sayHello() {
    alert("★");
}

function showHome() {
    document.getElementById("content").innerHTML = `
        <h2>HOME ★</h2>
        <p>Welcome to my little corner of the internet</p>
    `;
}

function showAesthetics() {
    document.getElementById("content").innerHTML = `
        <h2>✧ AESTHETICS ✧</h2>

        <button onclick="setTheme('grunge')">🖤 Grunge</button>
        <button onclick="setTheme('rainy')">🌧️ Rainy</button>
        <button onclick="setTheme('monotone')">:\ monotone</button>
        <button onclick="setTheme('vocaloid')">💿\ vocaloid</button>

    `;
}

function setTheme(theme) {
    document.body.className = theme;
}
function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        hours + ":" + minutes + ":" + seconds;
}

updateClock();
setInterval(updateClock, 1000);

