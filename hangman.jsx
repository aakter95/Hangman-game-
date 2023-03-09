import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function Header(){
    return(
      <header>
  <div id="alertbox"></div>
  <div className="jumbotron text-center">
  <h1 id="top">Hangman Game!!</h1><hr /> <br /> <br /> <br /> <br /> <br /> <br />
 
  </div>
  </header>
    )
      
  }
  function Footer(){
    return(
      <footer className="page-footer bg-light">
  <div className="footer-copyright text-center"><br /> <br /> <br /> <hr />&copy; Worked by AFSANA </div>
  </footer>
    )
  }
let newGuessedWord = [];
let wordList = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
];
function randomSecretWord() {
    return wordList.map(v => v.toLocaleLowerCase())[Math.floor(Math.random() * wordList.length)];
}

const App = () => {
    const [secretWord, setSecretWord] = useState(randomSecretWord());
    //guessedWord is used for displaying the word guessed so far
    const [guessedWord, setGuessedWord] = useState(new Array(secretWord.length).fill('-'));
    // set a correct initial value for wrongCount
    const [wrongCount, setWrongCount] = useState(0);
    const [message, setMessage] = useState('');

    let guessedLetter = '';

    function resetGame() {
        setTimeout(() => {
            let newSecretWord = randomSecretWord();
            // set new secretWord, reset guessedWord, count and message here!
            setSecretWord(newSecretWord);
            setGuessedWord(new Array(newSecretWord.length).fill('-'));
            setWrongCount(0);
            setMessage('');
        }, 3000);

    }

    const handleClick = (event) => {
        // assign correct value to the guessedLetter
        
        guessedLetter = event.target.value;

        newGuessedWord = [...guessedWord]; //shallow copy of array

        //check if the letter clicked is in the secretWord
        if (secretWord.includes(guessedLetter)) {
            //formulate new guessedWord to display
            //fill - with the correct guessed letter
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] == guessedLetter) {
                    newGuessedWord[i] = guessedLetter;
                }
            }
            //set the new guessedWord to display here!
            setGuessedWord(newGuessedWord);

            //Check if the newGuessedWord is the same as the secretWord
            if (newGuessedWord.join('') == secretWord) {
                //set message state that you have won and resetGame here!
                setMessage('YOU HAVE WON!!!');
                resetGame();
            }
        } else {
            setWrongCount(wrongCount + 1);
            // Check if the letter is guessed incorrectly 6 times
            if (wrongCount >= 6) {
                // set message state that you have lost
                setMessage(`YOU HAVE LOST!!! The correct word is:--  ` +  secretWord);
                resetGame();
            }
        }

    }
    return (
        <div>
            <Header />
            <GuessedWord guessedWord={guessedWord} />
            <Keyboard onBtnClick={handleClick} />
            {/* pass wrongCount and message as props here */}
            <Alert message={message} wrongCount={wrongCount} />
            <Footer />
        </div>
    )
}

const GuessedWord = (props) => {
    return (
        // complete this statement to show each letter in guessedWord passed from props
        props.guessedWord.map((obj) => {
            return (
                <span className="hangman-word"> {obj} </span>
            )
        })
    )
}

const Alert = (props) => {
    // complete Alert Component here with props
    return (
        <div>Wrong : {props.wrongCount}
            <p>The message: {props.message}</p>
        </div>
    )
}

const Keyboard = (props) => {
    const buttons = "abcdefghijklmnopqrstuvwxyz".split('');
    // complete the rendering of the keyboard here!
    return (
        <p className="hangman-keyboard">
            {buttons.map((letter) => {
                return (
                    <button className="hangman-button" onClick={props.onBtnClick} key={letter} value={letter}>{letter}</button>
                )
            })}
        </p>
    )
}

export default App