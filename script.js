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

function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");

    clock.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    clock.dateTime = now.toISOString();
}

updateClock();
setInterval(updateClock, 1000);

