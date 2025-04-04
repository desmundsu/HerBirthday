// Typewriter effect function
const text = `HAPPY 20TH BIRTHDAY VIIIIII !!! 🥳🥳
X You officially old asf now heheh X
I've said most of the stuff in the letter X
But, I'm still so happy that you're around :) X
Hope you have a good celebration X with your family and enjoy the X stuff I got youuu X
Click the cat for a surprise 👀`;

let currentLine = 0;
const lines = text.split('X'); // Split the text by "X" to create separate lines

function typeWriter() {
    if (currentLine < lines.length) {
        let line = lines[currentLine].trim(); // Get the current line
        let charIndex = 0; 

        // Create a new span for the current line and add the "cursor" class
        let newLineSpan = document.createElement("span");
        newLineSpan.classList.add("cursor");  // Adds blinking cursor effect
        document.getElementById("typewriter-text").appendChild(newLineSpan);

        function typeNextCharacter() {
            if (charIndex < line.length) {
                newLineSpan.innerHTML += line.charAt(charIndex);
                charIndex++;
                setTimeout(typeNextCharacter, 80); // Adjust the speed here
            } else {
                // Remove the cursor class after typing finishes
                newLineSpan.classList.remove("cursor");

                // Move to the next line after a delay
                currentLine++;
                if (currentLine < lines.length) {
                    document.getElementById("typewriter-text").appendChild(document.createElement("br"));
                    setTimeout(typeWriter, 500); // Delay before typing the next line
                } else {
                    // Show the image after all lines are typed
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
    imageContainer.style.display = "block"; // Make the image visible
}

// Make the image clickable to go to another page
document.getElementById("birthday-image").addEventListener("click", function() {
    window.location.href = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmdkYjQxMjJxYno4czZyaDVvbTQ1Yml1NThudzB1bml4Zmk3cThjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l9fVX1zfHYGd4rIk47/giphy.gif"; // Replace with your desired link
});

window.onload = typeWriter;  // Start the typing effect when the page loads
