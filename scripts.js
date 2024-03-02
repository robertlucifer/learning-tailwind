const wordInput = document.getElementById("wordInput");
const definition = document.getElementById("definition");

function lookupWord() {
    const searchWord = wordInput.value.toLowerCase().trim(); // Ensure case-insensitive search and remove leading/trailing spaces

    if (!searchWord) {
        definition.textContent = "Please enter a word to look up.";
        return;
    }

    // Replace this with your actual dictionary data structure or API implementation
    const dictionary = {
        "hello": "A greeting used to express salutations.",
        "world": "The planet Earth and its inhabitants.",
        "example": "An instance or illustration used to demonstrate something.",
    };

    if (dictionary.hasOwnProperty(searchWord)) {
        definition.textContent = dictionary[searchWord];
    } else {
        definition.textContent = "Word not found in dictionary.";
    }
}