const wordInput = document.getElementById("wordInput");
const definition = document.getElementById("definition");

function lookupWord() {
  const searchWord = wordInput.value.toLowerCase().trim(); // Ensure case-insensitive search and remove leading/trailing spaces

  if (!searchWord) {
    definition.textContent =
      "Hey enter your first name or nickname that you and me alone know🌈🌈";
    return;
  }

  // Replace this with your actual dictionary data structure or API implementation
  const dictionary = {
    hello:
      "Hello, This is Robert Antony Guys, This is a simple web app to express my thoughts which I wasn't able to convey to you guys my situation.",

    vigas:
      "The most important person I am going to miss in my life is you buddy, I have no idea how we got connected from the first, but never connected to anyone like you. Sharing all the awards and days with you is the best, and our conversation about life is the best. I learned a lot of lessons from you, I have no idea, how these 3 ended so soon. I always thought we could share our career but, It wasn't possible in this college, If something happens in the future, I will be so delighted I love you a lot buddy, and Don't forget to update anything that happens in your life, I am always there for you to support.😊😊💖. Thanks for everything, You have done many more things for which the word 'Thanks' isn't enough. ",
    darshana:
      "The most perfect person I have ever seen in my life, It was a great experience to share my college days with and really liked the late-night calls, work, projects and chat. I have no words to explain about the perfect. I am really happy to start my career with you. I am happy that I have two good friends in my professional life in the future, you are one of them. You have supported me and many people in college, and I have to thank you for that. I wouldn't have completed my records in time without you. I am very excited to share future days with you buddy. I am always there for help like you helped me.😊 Thanks for everything on behalf of me and everyone.",
    tharini:
      "The best friendship I have made in my college life is you akka, you have an irreplaceable bond with me. I have never thought I would find this great bond in my college life, I am really happy that I shared my SIH with you learned a lot, and had a great time with you every day with you sis. I will miss you a lot in the future. Thanks for giving me a great friend Karthika. I am always there to support you akka, anytime anywhere.😄😄. Thanks for everything akka.",
    karthika:
      "You are the next best person I got in my college, you have an irreplaceable bond you too sis. I still feel for getting your opportunity for SIH. I hope you too get the same experience we had in SIH next year. You can call me anytime for any help, I was there to help you with all my potential. I wanted you to develop your skills and get a real job. Enjoy your college life and be happy with your friends and, don't forget to call me anytime as a brother I am there to help.😊😊🌈",
    world: "The planet Earth and its inhabitants.",
    example: "An instance or illustration used to demonstrate something.",
  };

  if (dictionary.hasOwnProperty(searchWord)) {
    definition.textContent = dictionary[searchWord];
  } else {
    definition.textContent = "Word not found in dictionary.";
  }
}
