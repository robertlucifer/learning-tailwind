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
    hello:
      "Hello, This is Robert Antony Guys, This is simple web app to express my thoughts which I wasn't able to convey to you guys by situation.",

    vigas:
      "The most important person I am going to miss in my life is you buddy, I have no idea how we got connected from the first, but never connected to anyone like you. Sharing all the awards and days with you are the best, and our conversation about life is the best. I learned a lot of lesson from you, I have no idea, how these 3 ended so soon. I always thought we could share our career but, It wasn't possible in this college, If something happens in future, I will be so delighted I love a lot buddy, and Don't forget to update annything that happens in your life, I am always there for you to support.😊😊💖. Thanks for everything, You have done many more things for which the word 'Thanks' isn't enough. ",
    darshana:
      "The most perfect person I have ever seen in my life, It was a great experience to share my college days with and really liked the late night calls, work, project and chat. I have no words to explain about the perfect. I am really happy to start my career with you. I am happy that I got my two good friends in my professional life in future, you are one of them. You have support me and many people in college, I have to thank you for that. I wouldn't have completed my records in-time without you. I am very much excited to share future days with you buddy. I am always there for help, life you helped me.😊 Thanks for everything on behalf of me and everyone.",
    world: "The planet Earth and its inhabitants.",
    example: "An instance or illustration used to demonstrate something.",
  };

  if (dictionary.hasOwnProperty(searchWord)) {
    definition.textContent = dictionary[searchWord];
  } else {
    definition.textContent = "Word not found in dictionary.";
  }
}
