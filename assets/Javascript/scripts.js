document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (
    (e.ctrlKey && e.shiftKey && e.code === "I") || // Ctrl+Shift+I
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.code === "J") || // Ctrl+J (Chrome console)
    (e.ctrlKey && e.shiftKey && e.code === "J") // Ctrl+Shift+J (DevTools)
  ) {
    e.preventDefault();
  }
  // Add similar checks for F12, Ctrl+Shift+J, etc.
};

const wordInput = document.getElementById("wordInput");
const definition = document.getElementById("definition");

function lookupWord() {
  const searchWord = wordInput.value.toLowerCase().trim().replace(/\s/g, ""); // Ensure case-insensitive search and remove leading/trailing spaces

  if (!searchWord) {
    definition.textContent =
      "Hey enter your full name or nickname that you and me alone know🌈🌈";
    return;
  }

  // Replace this with your actual dictionary data structure or API implementation
  const dictionary = {
    hello:
      "Hello, This is Robert Antony Guys, This is a simple web app to express my thoughts which I wasn't able to convey to you guys my situation.",

    vigas:
      "The most important person I am going to miss in my life is you buddy, I have no idea how we got connected from the first, but never connected to anyone like you. Sharing all the awards and days with you is the best, and our conversation about life is the best. I learned a lot of lessons from you, I have no idea, how these 3 ended so soon. I always thought we could share our career but, It wasn't possible in this college, If something happens in the future, I will be so delighted I love you a lot buddy, and Don't forget to update anything that happens in your life, I am always there for you to support.😊 Thanks for everything, You have done many more things for which the word 'Thanks' isn't enough.",
    darshana:
      "The most perfect person I have ever seen in my life, It was a great experience to share my college days with and really liked the late-night calls, work, projects and chat. I have no words to explain about the perfect. I am really happy to start my career with you. I am happy that I have two good friends in my professional life in the future, you are one of them. You have supported me and many people in college, and I have to thank you for that. I wouldn't have completed my records in time without you. I am very excited to share future days with you buddy.😊 Thanks for everything on behalf of me and everyone.",
    tharini:
      "The best friendship I have made in my college life is you akka, you have an irreplaceable bond with me. I have never thought I would find this great bond in my college life, I am really happy that I shared my SIH with you learned a lot, and had a great time with you every day with you sis. I will miss you a lot in the future. Thanks for giving me a great friend Karthika. I am always there to support you akka, anytime anywhere.😄😄. Thanks for everything akka.",
    karthika:
      "You are the next best person I got in my college, you have an irreplaceable bond you too sis. I still feel for getting your opportunity for SIH. I hope you too get the same experience we had in SIH next year. You can call me anytime for any help, I was there to help you with all my potential. I wanted you to develop your skills and get a real job. Enjoy your college life and be happy with your friends and, don't forget to call me anytime as a brother I am there to help.😊😊🌈",
    world: "The planet Earth and its inhabitants.",
    kuttysathan:
      "Hey Gopika, Thanks for being a good friend to me in this college life and I am sorry for teasing you a lot, I am sorry for that. And stay in touch with me, and I am always there to help you guys. And I hope your friendship in college follows after college too.😊😊🌈",
    gopika: "Hey gopika, type how do I call you..!",
    superman:
      "Hey Kiruthika, You were also a great friend to me in college, and you never forgot to torture me in all the way possible, but still you never gave up on me and so did I. I never thought we would be friends like this in the first year, but it happened. I am happy to have a friend like you. I am always there to help you anytime and anywhere. And unnoda marriage ku na confirm varuvan, so don't forget to invite me, And don't cry in future, if you have any problem just call me okay!.😊😊🌈",
    kiruthika: "Hey Kiruthika, epdi aa una na kupuduvan..?",
    shaahin: "Hey ma..! Enter the name only we two know..!",
    twin: "Hey Shaahin, You are the best friend I got in college, I never thought that I could find someone like this to connect with me and share my thoughts. I am really happy that we met in college and had a really good friendship. I am always there to help you anytime and anywhere. I hope our friendship continues after college too. You can call me anytime to annoy me. I will be a great friend to you in all the possible. Keep me updated all-time and I will be there to help. And a small comment (I get possissive on you sometimes, but till now I am fine.. Sorry I wasn't able to tell you this in person) 😊😊🌈",
    aravinthsuryaa:
      "Hey Suryaa, You thought me games and many stuff like downloading moives, games and courses which helped me lot. And I happy that I got a friend who is differnet from others. Enjoy your future studies buddy, keep me updated and I am always there to help😊😊 ",
    balaprethiv:
      "Dai bala, I have seen such ADHD person in my whole life.And everyday class became happy because of you. Thanks for being a member in hackathon and activites we have done together. And aborad poviyanu confirm thrila, pona sollu. As always be funny and enjoy buddy.🌈",
    dharineesh:
      "Hey buddy, Nee last vairukum ponuga kita persakudathu, atha tha ennode aasai, but still oru ponna mattum love pannu, if incase love panna soollu yennala enna pana mudiyumo ma pannuvan, help aa sonna. And had a great time sharing memories with you bro. And video editing and Memes aa vituratha pangu..!😊",
    gopinaath:
      "Hello Gopi, Learned a lot of lesson and characters for you buddy. And you are the most proper boy I have ever met in this college life. Future la ennga ponalum you can call me and I will help you with all the possible way. Thanks for all the help you made in this college life bro..!😊",
    tablet:
      "Hey jeeva shree., This is Robert a brother like friend, i never thought we could be this close friends but somehow now we are have a great bond.  You are the only friend who I can call as sister, I was there when you had hard time, Same like that I will be helping you all the time you can call me and feel free to share, I am always there to support you..!😊😊",
      karthik:"Dai Karthik..,",
  };

  if (dictionary.hasOwnProperty(searchWord)) {
    definition.textContent = dictionary[searchWord];
  } else {
    definition.textContent = "Word not found in dictionary.";
  }
}
