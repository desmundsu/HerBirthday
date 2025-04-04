// Typewriter effect function
const text = "Hello, this is a typewriter effect!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);  // Adjust the speed here
    }
}

window.onload = typeWriter;  // Start the typing effect when the page loads
