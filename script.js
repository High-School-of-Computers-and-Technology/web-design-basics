
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("clickButton");
    const output = document.getElementById("output");

    // Event listener for button click
    button.addEventListener("click", function() {
        output.textContent = "Button clicked! Welcome to your GitHub project.";
    });
});
