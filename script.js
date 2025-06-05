const creativeIdeas = [
  {
    title: "Corpse-Creative Writing",
    description:
      'Take a famous line and rewrite it to change the story. Example: "I am your father." becomes "I was your clone all along." Rewrite a famous line to reveal a hidden secret.',
    favorite: false,
    level: "medium",
    topic: "writing",
  },
  {
    title: "Earth Watercolors",
    description:
      "Collect clay, dirt, or sand and mix with water to create natural paints. Each color has a magical property. Paint a spell or a map with these “enchanted” colors.",
    favorite: false,
    level: "easy",
    topic: "art",
  },
  {
    title: "Floral Jewels",
    description:
      'Make jewelry from flowers and plants. Give each piece a fantasy name like "Crown of Petalshade". What powers does your flower jewel hold?',
    favorite: false,
    level: "experienced",
    topic: "crafting",
  },
  {
    title: "Mad Libs Mash-Up",
    description:
      'Mix storylines and characters from different books, movies, or shows. "Harry Potter and the Hunger Games Maze". Create a fill-in-the-blank story with wild crossovers.',
    favorite: false,
    level: "easy",
    topic: "writing",
  },
  {
    title: "Live Game Board",
    description:
      "Use boxes, containers, or chalk to make a giant board game. Add a theme like “Spy Mission” or “Fairy Tale Quest”. Roll a die to move and complete real-world challenges.",
    favorite: false,
    level: "medium",
    topic: "gaming",
  },
  {
    title: "Chalk Walk",
    description:
      "Draw paths and destinations with chalk on sidewalks. Add-on: Make paths with names like “Wiggly Way of Whispers” Include surprises like QR codes with sounds or music.",
    favorite: false,
    level: "easy",
    topic: "exercise",
  },
  {
    title: "Remix Master",
    description:
      "Play one song’s instrumental and sing lyrics from another. Mash completely different genres (rap + lullaby?). How does this unexpected combo make you feel?",
    favorite: false,
    level: "experienced",
    topic: "music",
  },
];


function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


let ideaQueue = shuffleArray(creativeIdeas);
let ideaIndex = 0;

function getNextIdea() {
  if (ideaIndex >= ideaQueue.length) {
    ideaQueue = shuffleArray(creativeIdeas);
    ideaIndex = 0;
  }

  const idea = ideaQueue[ideaIndex];
  ideaIndex++;

  const ideaBox = document.getElementById("Idea-Box");

  

  
  ideaBox.innerHTML = `
    <h3>${idea.title}</h3>
    <p>${idea.description}</p>
    <p><strong>Topic:</strong> ${idea.topic}</p>
    <p><strong>Difficulty:</strong> ${idea.level}</p>
    <button id="favBtn">⭐ ${idea.favorite ? "Unfavorite" : "Favorite"}</button>
  `;

  ideaBox.classList.add("slide-in"); 

 
  document.getElementById("favBtn").addEventListener("click", function () {
    idea.favorite = !idea.favorite;
    this.textContent = idea.favorite ? "⭐ Unfavorite" : "⭐ Favorite";
  });
}

document.getElementById("generateBtn").addEventListener("click", function (event) {
  event.preventDefault();
  getNextIdea();
});
document.getElementById("favBtn").addEventListener("click", function () {
  idea.favorite = !idea.favorite;
  this.textContent = idea.favorite ? " Unfavorite" : "⭐ Favorite";
});
