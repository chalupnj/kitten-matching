const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const findCatImage = (name) => images.find((image) => image.includes(name));

export const cats = [
  {
    catImage: findCatImage("Angeweena-Joween"),
    catName: "Angeweena",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Birdie"),
    catName: "Birdie",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Boyle"),
    catName: "Boyle",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Breakfast"),
    catName: "Breakfast",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Caboose"),
    catName: "Caboose",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Chamomile"),
    catName: "Chamomile",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Choo-Choo"),
    catName: "Choo Choo",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Chumba"),
    catName: "Chumba",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Cleo"),
    catName: "Cleo",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Cookie"),
    catName: "Cookie",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Cow"),
    catName: "Cow",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Cupcake"),
    catName: "Cupcake",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Cyclops"),
    catName: "Cyclops",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Dilly"),
    catName: "Dilly",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Dinner"),
    catName: "Dinner",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Dreamsicle"),
    catName: "Dreamsicle",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Fartima"),
    catName: "Fartima",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Franklin"),
    catName: "Franklin",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Goyle"),
    catName: "Goyle",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Holla"),
    catName: "Holla",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Liam"),
    catName: "Liam",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Liberace"),
    catName: "Liberace",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Lunch"),
    catName: "Lunch",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Marmalade"),
    catName: "Marmalade",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Meatloaf"),
    catName: "Meatloaf",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Nacho"),
    catName: "Nacho",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Noodle"),
    catName: "Noodle",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Nutella"),
    catName: "Nutella",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Skunk"),
    catName: "Skunk",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Sure-Bert"),
    catName: "Sure Bert",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Tony"),
    catName: "Tony",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Twisty"),
    catName: "Twisty",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Ween"),
    catName: "Ween",
    selected: false,
    matched: false,
  },
  {
    catImage: findCatImage("Wumba"),
    catName: "Wumba",
    selected: false,
    matched: false,
  },
];
export default cats;
