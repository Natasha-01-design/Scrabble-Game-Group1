function isWordValid(word) {
  const dictionary = [
    'HELLO', 'WORLD', 'REACT', 'SCRABBLE', 'CODE', 'FIGMA', 'TILE', 'RACK', 'BOARD',
    'SCORE', 'TURN', 'GAME', 'JAVASCRIPT', 'PYTHON', 'FRONTEND', 'BACKEND',
    'DEVELOPER', 'FUNCTION', 'VARIABLE', 'BUTTON', 'INPUT', 'TIMER', 'PLAYER',
    'MOVE', 'WORD',"APPLE","HEY","BE","NEH","TO","AM", "AN", "AS", "AT", "BE", "BY", "DO", "GO", "HE", "HI",
  "IF", "IN", "IS", "IT", "ME", "MY", "NO", "OF", "OH", "ON",
  "OR", "SO", "TO", "UP", "US", "WE","SIT","EAT","DOE","GAG","MILK","COX","GATO",
  "HOUSE","GAMES","ZEBRA","LIGHT","BRICK","QUEUE","DRIVE","SNAKE","CHAIR","WATER","PLANE",
  "FLOOR","HONEY","NURSE","JOKER","QUICK","VAPOR","STORM","CLOUD","TRUCK","EARTH","MUSIC","WHEEL",
  "FRUIT","TIGER","GLOVE","PEACH","SHEEP","NIGHT","BLINK","TREES","SWORD","CRANE","CLOCK",
  "MOUSE","CROWN","GLASS","SUGAR","BOOTS",
  "CAT", "DOG", "SUN", "CAR", "RUN", "JAM", "FOX", "PEN", "CUP", "BAT",
  "HAT", "MAP", "TOP", "WEB", "WIN", "JAR", "NET", "BUG", "ZIP", "KEY",
  "FAN", "FUN", "BED", "MUG", "RAT", "LOG", "BOX", "LID", "POT", "VAN",
  "YET","HOT" ,"YES", "RED", "INK", "TIN", "TIP", "ROW", "TAX", "FIX", "DRY",
 "APPLE", "HOUSE", "BREAD", "CLOUD", "WATER", "TRUCK", "SHEET", "PLANE",
  "SNAKE", "VAPOR", "JOKER", "BRICK", "SUGAR", "CHAIR", "MOUSE", "SWORD",
  "LIGHT", "CROWN", "NURSE", "TIGER", "TREES", "STORM", "PEACH", "GLOVE",
  "BLINK", "WHEEL", "FRUIT", "CRANE", "NIGHT", "CLOCK", "MUSIC", "EARTH",
 "SCRABBLE", "FIGMENT", "VIOLETS", "BUTTONS", "PYRAMIDS", "LANTERN", "KEYWORD",
  "JOURNAL", "PROJECTS", "HACKING", "BACKEND", "FRONTEND", "DEVELOPS", "FUNCTION",
  "VARIABLE", "INPUTTER", "REACTOR", "JAVASCRIPT", "PYTHONIC", "DATABASE",
  "BOARD", "TILES", "WORDS", "PLAYER", "SCORE", "WINNER", "LOSERS", "START", "TURN",
  "RESET", "ROUND", "LETTER", "POINTS", "VALID", "LEVELS", "MATCH", "RACKS", "BONUS", 
  "LEMON", "MANGO", "CHAIR", "DESK", "BROOM", "BRUSH", "STONE", "LEAF", "GRASS",
  "PLANT", "BERRY", "SHELL", "ROCKY", "CANYON", "FLOOD", "SLOPE", "HILL", "BRIDGE",
  "HAPPY", "ANGRY", "TIRED", "CRAZY", "SMART", "GENIUS", "BRAVE", "KIND", "QUIET",
  "SHY", "LAZY", "FUNNY", "COOL", "WEIRD", "LOUD", "NICE", "RUDE", "PROUD","BAR","HUE","VOTE"

  ];
  return dictionary.includes(word.toUpperCase());
}

export default isWordValid;

