// Typewriter effect function
const text = `HAPPY 20TH BIRTHDAY VIIIIII !!! 🥳🥳
X You officially old asf now heheh X
I've said most of the stuff in the letter X
But, I'm still so happy that you're around :) X
Hope you have a good celebration X with your family and enjoy the X stuff I got youuu X
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
                setTimeout(typeNextCharacter, 80); // Adjust the speed here
            } else {
                // Once the current line is typed, move to the next line
                currentLine++;
                if (currentLine < lines.length) {
                    document.getElementById("typewriter-text").innerHTML += '<br>'; // Add a line break
                    setTimeout(typeWriter, 500); // Wait before typing the next line
                } else {
                    // When all lines are typed, reveal the image below the last line
                    displayImageBelowText();
                }
            }
        }

        // Start typing the current line
        typeNextCharacter();
    }
}

// Function to display the image below the text after typing is complete
function displayImageBelowText() {
    const imageContainer = document.getElementById("image-container");
    imageContainer.style.display = "block"; // Make the image container visible
}

window.onload = typeWriter;  // Start the typing effect when the page loads
