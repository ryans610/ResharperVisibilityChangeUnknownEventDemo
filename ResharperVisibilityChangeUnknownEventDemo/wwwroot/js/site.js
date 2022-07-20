document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        document.getElementById("display").value += `${new Date()} visible\n`;
    } else {
        document.getElementById("display").value += `${new Date()} not visible\n`;
    }
});
