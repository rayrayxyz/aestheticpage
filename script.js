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
        <p> grunge</p>
        <p> angel</p>
        <p> creepy</p>
        <p> vocaloid</p>
        <p> night</p>
        <p> star★</p>
        <p> Rain</p>
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

