var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var backgroundColors = ["red", "orange", "yellow", "pink", "blue", "indigo", "steelblue"].reverse();
var colorIndex = 0;
function update() {
    var now = new Date();
    postMessage({
        time: now,
        color: colors[colorIndex],
        backgroundColor: backgroundColors[colorIndex]
    });
    colorIndex = (colorIndex + 1) % colors.length;
    setTimeout(update, 1000);
}

update();

