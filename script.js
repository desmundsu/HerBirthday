// Typewriter effect function
const text = `HAPPY 20TH BIRTHDAY VIIIIII !!!
X You officially old asf now heheh X
I think I've said most of the stuff in the letter I wrote for you already X
But you know what, I'm still gonna tell you how happy I am that you're around :) X
Hope you have a good celebration with your family and enjoy the stuff I got youu X
Click the cat for a surprise 👀`;

let index = 0;
let currentLine = 0; // Keeps track of which line we are on
const lines = text.split('X'); // Split the text by "X" to create separate lines

function typeWriter() {
    if (currentLine < lines.length) {
        let line = lines[currentLine].trim(); // Get the current line and remove excess whitespace
        let charIndex = 0; // Index to track the character being typed

        function typeNextCharacter() {
            if (charIndex < line.length) {
                document.getElementById("typewriter-text").innerHTML += line.charAt(charIndex);
                charIndex++;
                setTimeout(typeNextCharacter, 100); // Adjust the speed here
            } else {
                // Once the current line is typed, move to the next line
                currentLine++;
                if (currentLine < lines.length) {
                    document.getElementById("typewriter-text").innerHTML += '<br>'; // Add a line break
                    setTimeout(typeWriter, 500); // Wait before typing the next line
                }
            }
        }

        // Start typing the current line
        typeNextCharacter();
    }
}

window.onload = typeWriter;  // Start the typing effect when the page loads
