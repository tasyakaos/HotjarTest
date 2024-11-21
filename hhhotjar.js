document.getElementById("clickButton").addEventListener("click", function() {
    const outputDiv = document.getElementById("output");
    outputDiv.classList.remove("hidden");
    outputDiv.innerHTML = "<p>You clicked the button! Great job!</p>";
});
