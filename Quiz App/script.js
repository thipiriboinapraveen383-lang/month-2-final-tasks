// ═══════════════════════════════════════════
// QUIZVERSE — script.js
// Features: Category selection, custom Q count,
//           shuffled questions, quiz history
// ═══════════════════════════════════════════

// ─────────────────────────────────────────
// QUESTION BANK — organized by category
// ─────────────────────────────────────────
const QUESTION_BANK = {

  technology: {
    label: 'Technology',
    emoji: '💻',
    color: '#4f6bff',
    questions: [
      { q: "What does CPU stand for?", options: ["Central Processing Unit","Core Power Unit","Central Program Utility","Computer Power Unit"], a: "Central Processing Unit" },
      { q: "Which company created the JavaScript programming language?", options: ["Microsoft","Google","Netscape","Apple"], a: "Netscape" },
      { q: "What does HTML stand for?", options: ["HyperText Markup Language","HighText Machine Language","HyperTransfer Markup Layout","Hyper Transmitter Meta Linking"], a: "HyperText Markup Language" },
      { q: "Which data structure uses LIFO (Last In, First Out)?", options: ["Queue","Stack","Linked List","Tree"], a: "Stack" },
      { q: "What is the binary representation of the decimal number 10?", options: ["1001","1010","1100","0110"], a: "1010" },
      { q: "Which protocol is used to send emails?", options: ["FTP","HTTP","SMTP","SSH"], a: "SMTP" },
      { q: "What does RAM stand for?", options: ["Random Access Memory","Read-only Access Module","Rapid Array Memory","Real Application Memory"], a: "Random Access Memory" },
      { q: "Which language is primarily used for styling web pages?", options: ["HTML","JavaScript","CSS","Python"], a: "CSS" },
      { q: "What is 'Git' used for?", options: ["Database management","Version control","Network monitoring","Image editing"], a: "Version control" },
      { q: "What does API stand for?", options: ["Application Programming Interface","Advanced Program Integration","Automated Process Input","Application Protocol Index"], a: "Application Programming Interface" },
      { q: "Which sorting algorithm has the best average-case time complexity?", options: ["Bubble Sort","Merge Sort","Insertion Sort","Selection Sort"], a: "Merge Sort" },
      { q: "What is the default port for HTTPS?", options: ["80","21","443","8080"], a: "443" },
      { q: "Which company developed the Python programming language?", options: ["Google","Python Software Foundation","Microsoft","MIT"], a: "Python Software Foundation" },
      { q: "What does SQL stand for?", options: ["Simple Query Language","Structured Query Language","Standard Query Logic","System Query Layer"], a: "Structured Query Language" },
      { q: "What is the main function of an operating system?", options: ["Run web browsers","Manage hardware & software resources","Store files","Design interfaces"], a: "Manage hardware & software resources" },
      { q: "Which of these is NOT a programming language?", options: ["Ruby","Kotlin","Babel","Swift"], a: "Babel" },
      { q: "What does IoT stand for?", options: ["Internet of Things","Integration of Technology","Input of Transactions","Interface of Tools"], a: "Internet of Things" },
      { q: "In computing, what is a 'byte'?", options: ["8 bits","4 bits","16 bits","1 bit"], a: "8 bits" },
      { q: "What does VPN stand for?", options: ["Virtual Private Network","Visual Processing Node","Video Protocol Network","Virtual Public Node"], a: "Virtual Private Network" },
      { q: "Which search algorithm is faster on sorted arrays?", options: ["Linear Search","Bubble Search","Binary Search","Hash Search"], a: "Binary Search" },
    ]
  },

  science: {
    label: 'Science',
    emoji: '🔬',
    color: '#00e5ff',
    questions: [
      { q: "What is the chemical symbol for water?", options: ["WA","HO","H₂O","OW"], a: "H₂O" },
      { q: "What planet is closest to the Sun?", options: ["Venus","Earth","Mercury","Mars"], a: "Mercury" },
      { q: "What is the powerhouse of the cell?", options: ["Nucleus","Ribosome","Mitochondria","Golgi body"], a: "Mitochondria" },
      { q: "What is the speed of light (approx) in km/s?", options: ["150,000","300,000","450,000","600,000"], a: "300,000" },
      { q: "What force keeps planets in orbit around the Sun?", options: ["Magnetism","Nuclear force","Gravity","Friction"], a: "Gravity" },
      { q: "What is the atomic number of carbon?", options: ["4","6","8","12"], a: "6" },
      { q: "What gas do plants absorb during photosynthesis?", options: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], a: "Carbon Dioxide" },
      { q: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen","Carbon Dioxide","Argon","Nitrogen"], a: "Nitrogen" },
      { q: "Which organ produces insulin?", options: ["Liver","Kidney","Pancreas","Stomach"], a: "Pancreas" },
      { q: "What is Newton's 2nd Law of Motion?", options: ["F = ma","E = mc²","v = u + at","P = mv"], a: "F = ma" },
      { q: "What type of radiation has the highest frequency?", options: ["Radio","Infrared","X-ray","Gamma ray"], a: "Gamma ray" },
      { q: "DNA stands for?", options: ["Deoxyribonucleic Acid","Dioxin Nucleic Assembly","Double Nitrogen Array","Dynamic Nuclear Acid"], a: "Deoxyribonucleic Acid" },
      { q: "What is the hardest natural substance on Earth?", options: ["Iron","Diamond","Quartz","Titanium"], a: "Diamond" },
      { q: "Which planet has the most moons?", options: ["Jupiter","Saturn","Uranus","Neptune"], a: "Saturn" },
      { q: "What is the pH of pure water?", options: ["5","6","7","8"], a: "7" },
      { q: "What is the chemical symbol for gold?", options: ["Gd","Ag","Go","Au"], a: "Au" },
      { q: "How many bones are in the adult human body?", options: ["186","206","216","226"], a: "206" },
      { q: "What is the boiling point of water at sea level (°C)?", options: ["90","95","100","105"], a: "100" },
      { q: "What layer of the atmosphere contains the ozone layer?", options: ["Troposphere","Stratosphere","Mesosphere","Thermosphere"], a: "Stratosphere" },
      { q: "Which element is most abundant in the universe?", options: ["Oxygen","Carbon","Helium","Hydrogen"], a: "Hydrogen" },
    ]
  },

  mathematics: {
    label: 'Mathematics',
    emoji: '📐',
    color: '#a855f7',
    questions: [
      { q: "What is the value of π (pi) to 2 decimal places?", options: ["3.12","3.14","3.16","3.18"], a: "3.14" },
      { q: "What is 12 × 13?", options: ["144","154","156","146"], a: "156" },
      { q: "What is the square root of 144?", options: ["11","12","13","14"], a: "12" },
      { q: "What is 25% of 200?", options: ["25","40","50","75"], a: "50" },
      { q: "What is the next prime number after 11?", options: ["12","13","15","17"], a: "13" },
      { q: "What is the sum of angles in a triangle?", options: ["90°","120°","180°","360°"], a: "180°" },
      { q: "What is 2⁸?", options: ["128","256","512","64"], a: "256" },
      { q: "What is the formula for the area of a circle?", options: ["2πr","πr²","πd","2πr²"], a: "πr²" },
      { q: "Solve: 5x + 10 = 35. What is x?", options: ["4","5","6","7"], a: "5" },
      { q: "What is the Fibonacci sequence?", options: ["1,2,4,8,16","1,1,2,3,5","1,3,6,10,15","2,4,6,8,10"], a: "1,1,2,3,5" },
      { q: "What is 15% of 300?", options: ["35","40","45","50"], a: "45" },
      { q: "What type of triangle has all equal sides?", options: ["Isosceles","Scalene","Equilateral","Right"], a: "Equilateral" },
      { q: "What is the LCM of 4 and 6?", options: ["8","10","12","24"], a: "12" },
      { q: "What is the derivative of x²?", options: ["x","2","2x","x²/2"], a: "2x" },
      { q: "What is log₁₀(1000)?", options: ["2","3","4","10"], a: "3" },
      { q: "If a = 3, b = 4, what is a² + b²?", options: ["14","25","49","7"], a: "25" },
      { q: "What is the Roman numeral for 49?", options: ["IL","XLIX","XLIX","XXXXIX"], a: "XLIX" },
      { q: "What does 'n!' (n factorial) mean for n=4?", options: ["4","8","16","24"], a: "24" },
      { q: "What is the slope of a horizontal line?", options: ["1","-1","Undefined","0"], a: "0" },
      { q: "How many degrees in a full circle?", options: ["180°","270°","360°","90°"], a: "360°" },
    ]
  },

  history: {
    label: 'History',
    emoji: '🏛️',
    color: '#ff9800',
    questions: [
      { q: "In which year did World War II end?", options: ["1943","1944","1945","1946"], a: "1945" },
      { q: "Who was the first President of the United States?", options: ["Thomas Jefferson","Abraham Lincoln","George Washington","John Adams"], a: "George Washington" },
      { q: "The French Revolution began in which year?", options: ["1776","1789","1799","1804"], a: "1789" },
      { q: "What ancient wonder was located in Alexandria?", options: ["Colosseum","Lighthouse","Hanging Gardens","Temple of Zeus"], a: "Lighthouse" },
      { q: "Who wrote the Magna Carta?", options: ["King Richard I","King John","King Henry II","Pope Innocent III"], a: "King John" },
      { q: "The Berlin Wall fell in which year?", options: ["1987","1988","1989","1990"], a: "1989" },
      { q: "Which empire was ruled by Genghis Khan?", options: ["Ottoman","Roman","Mongol","Persian"], a: "Mongol" },
      { q: "In which city was the Titanic built?", options: ["Liverpool","Glasgow","Southampton","Belfast"], a: "Belfast" },
      { q: "Who was the first woman to win a Nobel Prize?", options: ["Rosalind Franklin","Ada Lovelace","Florence Nightingale","Marie Curie"], a: "Marie Curie" },
      { q: "The Renaissance began in which country?", options: ["France","Germany","Italy","England"], a: "Italy" },
      { q: "Which war was fought between the North and South states of America?", options: ["Revolutionary War","War of 1812","Civil War","Spanish-American War"], a: "Civil War" },
      { q: "Who discovered America in 1492?", options: ["Amerigo Vespucci","Vasco da Gama","Christopher Columbus","Ferdinand Magellan"], a: "Christopher Columbus" },
      { q: "The ancient Olympic Games originated in which country?", options: ["Rome","Egypt","Greece","Persia"], a: "Greece" },
      { q: "Who was the longest-reigning British monarch?", options: ["George V","Queen Victoria","Elizabeth II","George III"], a: "Elizabeth II" },
      { q: "What year did India gain independence from Britain?", options: ["1945","1946","1947","1948"], a: "1947" },
      { q: "The Cold War was primarily between which two nations?", options: ["USA & China","USA & Germany","USA & USSR","UK & USSR"], a: "USA & USSR" },
      { q: "Which pharaoh built the Great Pyramid of Giza?", options: ["Tutankhamun","Ramesses II","Khufu","Cleopatra"], a: "Khufu" },
      { q: "The atomic bomb was first used in warfare in which city?", options: ["Nagasaki","Tokyo","Kyoto","Hiroshima"], a: "Hiroshima" },
      { q: "What year was the United Nations founded?", options: ["1944","1945","1946","1950"], a: "1945" },
      { q: "Who painted the Sistine Chapel ceiling?", options: ["Leonardo da Vinci","Raphael","Donatello","Michelangelo"], a: "Michelangelo" },
    ]
  },

  geography: {
    label: 'Geography',
    emoji: '🌍',
    color: '#4caf50',
    questions: [
      { q: "What is the capital of Australia?", options: ["Sydney","Melbourne","Brisbane","Canberra"], a: "Canberra" },
      { q: "Which is the longest river in the world?", options: ["Amazon","Nile","Yangtze","Mississippi"], a: "Nile" },
      { q: "How many continents are there on Earth?", options: ["5","6","7","8"], a: "7" },
      { q: "Which country has the largest land area?", options: ["Canada","USA","China","Russia"], a: "Russia" },
      { q: "What is the tallest mountain in the world?", options: ["K2","Kangchenjunga","Mount Everest","Lhotse"], a: "Mount Everest" },
      { q: "What is the capital of Japan?", options: ["Osaka","Kyoto","Hiroshima","Tokyo"], a: "Tokyo" },
      { q: "Which ocean is the largest?", options: ["Atlantic","Indian","Arctic","Pacific"], a: "Pacific" },
      { q: "What is the smallest country in the world?", options: ["Monaco","San Marino","Liechtenstein","Vatican City"], a: "Vatican City" },
      { q: "Which desert is the largest in the world?", options: ["Gobi","Sahara","Kalahari","Antarctic"], a: "Antarctic" },
      { q: "The Amazon Rainforest is primarily in which country?", options: ["Colombia","Peru","Venezuela","Brazil"], a: "Brazil" },
      { q: "What is the capital of Canada?", options: ["Toronto","Montreal","Ottawa","Vancouver"], a: "Ottawa" },
      { q: "Which country is both a continent and a country?", options: ["Greenland","New Zealand","Antarctica","Australia"], a: "Australia" },
      { q: "Which European country has the most time zones?", options: ["Russia","France","Germany","Spain"], a: "France" },
      { q: "What is the capital of Brazil?", options: ["Rio de Janeiro","São Paulo","Salvador","Brasília"], a: "Brasília" },
      { q: "Which is the most populous country in the world?", options: ["USA","India","China","Indonesia"], a: "India" },
      { q: "The Sahara Desert is in which continent?", options: ["Asia","South America","Australia","Africa"], a: "Africa" },
      { q: "Which is the deepest lake in the world?", options: ["Lake Superior","Caspian Sea","Lake Baikal","Crater Lake"], a: "Lake Baikal" },
      { q: "What is the capital of South Africa (executive)?", options: ["Cape Town","Pretoria","Johannesburg","Durban"], a: "Pretoria" },
      { q: "Mount Kilimanjaro is in which country?", options: ["Kenya","Ethiopia","Tanzania","Uganda"], a: "Tanzania" },
      { q: "Which country has the longest coastline?", options: ["USA","Norway","Russia","Canada"], a: "Canada" },
    ]
  },

  english: {
    label: 'English',
    emoji: '📖',
    color: '#f06292',
    questions: [
      { q: "What is a synonym for 'happy'?", options: ["Gloomy","Jovial","Tired","Angry"], a: "Jovial" },
      { q: "What is an antonym of 'ancient'?", options: ["Old","Historical","Modern","Classic"], a: "Modern" },
      { q: "Which of these is a proper noun?", options: ["city","river","London","book"], a: "London" },
      { q: "What literary device is 'The wind whispered'?", options: ["Simile","Metaphor","Personification","Alliteration"], a: "Personification" },
      { q: "What is the plural of 'ox'?", options: ["Oxes","Oxen","Oxs","Ox"], a: "Oxen" },
      { q: "'She sells seashells' is an example of?", options: ["Rhyme","Onomatopoeia","Alliteration","Assonance"], a: "Alliteration" },
      { q: "Which punctuation ends an exclamatory sentence?", options: [".","?","!",";"], a: "!" },
      { q: "What is a word that imitates a sound called?", options: ["Simile","Metaphor","Onomatopoeia","Hyperbole"], a: "Onomatopoeia" },
      { q: "In grammar, what tense is 'She was running'?", options: ["Simple Past","Past Continuous","Present Perfect","Future"], a: "Past Continuous" },
      { q: "What is the subject in 'The dog barked loudly'?", options: ["loudly","barked","the","dog"], a: "dog" },
      { q: "Which word is a conjunction?", options: ["Quickly","Although","River","Happy"], a: "Although" },
      { q: "What does the prefix 'pre-' mean?", options: ["After","Before","Against","Below"], a: "Before" },
      { q: "Which of these is a metaphor?", options: ["As fast as a cheetah","Time is money","The wind blew hard","She smiled sweetly"], a: "Time is money" },
      { q: "What part of speech is 'beautiful'?", options: ["Noun","Verb","Adverb","Adjective"], a: "Adjective" },
      { q: "What is the passive voice of 'She wrote a letter'?", options: ["A letter is writing","A letter was written by her","She was writing a letter","She had written a letter"], a: "A letter was written by her" },
      { q: "A haiku has how many syllables in its 2nd line?", options: ["5","7","3","9"], a: "7" },
      { q: "Which novel features a character named Atticus Finch?", options: ["1984","Brave New World","To Kill a Mockingbird","The Great Gatsby"], a: "To Kill a Mockingbird" },
      { q: "What does 'ubiquitous' mean?", options: ["Rare","Old","Everywhere","Hidden"], a: "Everywhere" },
      { q: "What is a group of paragraphs forming a unit called?", options: ["Sentence","Phrase","Stanza","Essay"], a: "Stanza" },
      { q: "Which word correctly completes: 'Neither he ___ she was present'?", options: ["or","and","nor","but"], a: "nor" },
    ]
  },

  generalknowledge: {
    label: 'General Knowledge',
    emoji: '🌐',
    color: '#ffb300',
    questions: [
      { q: "How many sides does a hexagon have?", options: ["5","6","7","8"], a: "6" },
      { q: "What is the largest organ in the human body?", options: ["Heart","Brain","Liver","Skin"], a: "Skin" },
      { q: "How many colors are in a rainbow?", options: ["5","6","7","8"], a: "7" },
      { q: "What sport is played at Wimbledon?", options: ["Cricket","Golf","Football","Tennis"], a: "Tennis" },
      { q: "Which planet is known as the Red Planet?", options: ["Venus","Mars","Jupiter","Saturn"], a: "Mars" },
      { q: "What year was the first iPhone released?", options: ["2005","2006","2007","2008"], a: "2007" },
      { q: "How many strings does a standard guitar have?", options: ["4","5","6","8"], a: "6" },
      { q: "What is the currency of Japan?", options: ["Yuan","Won","Yen","Baht"], a: "Yen" },
      { q: "Who invented the telephone?", options: ["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Guglielmo Marconi"], a: "Alexander Graham Bell" },
      { q: "What is the largest animal on Earth?", options: ["African Elephant","Blue Whale","Giraffe","Great White Shark"], a: "Blue Whale" },
      { q: "How many players are on a football (soccer) team?", options: ["9","10","11","12"], a: "11" },
      { q: "What do bees produce?", options: ["Wax only","Honey only","Honey & wax","Silk"], a: "Honey & wax" },
      { q: "What is the hardest rock type?", options: ["Sedimentary","Igneous","Metamorphic","All are equal"], a: "Igneous" },
      { q: "Which country is the Eiffel Tower in?", options: ["Italy","Germany","Spain","France"], a: "France" },
      { q: "What is the main language spoken in Brazil?", options: ["Spanish","English","French","Portuguese"], a: "Portuguese" },
      { q: "How many planets are in our Solar System?", options: ["7","8","9","10"], a: "8" },
      { q: "What does UNESCO stand for?", options: ["United Nations Educational Scientific and Cultural Organization","United Nations Energy Science Council","Universal Nations Education Standard Council","United National Environmental Science Center"], a: "United Nations Educational Scientific and Cultural Organization" },
      { q: "In which year was the World Wide Web invented?", options: ["1985","1989","1991","1994"], a: "1989" },
      { q: "Which element is needed for rusting of iron?", options: ["Nitrogen","Oxygen","Carbon dioxide","Hydrogen"], a: "Oxygen" },
      { q: "What is the most spoken language in the world?", options: ["English","Hindi","Spanish","Mandarin Chinese"], a: "Mandarin Chinese" },
    ]
  },

  sports: {
    label: 'Sports',
    emoji: '⚽',
    color: '#26c6da',
    questions: [
      { q: "How many players are on a basketball team on court?", options: ["4","5","6","7"], a: "5" },
      { q: "Which country won the FIFA World Cup in 2018?", options: ["Germany","Brazil","France","Argentina"], a: "France" },
      { q: "In tennis, what is the term for 40-40?", options: ["Tie","Deuce","Love","Break"], a: "Deuce" },
      { q: "How many rings are on the Olympic flag?", options: ["4","5","6","7"], a: "5" },
      { q: "In which sport would you perform a 'slam dunk'?", options: ["Volleyball","Basketball","Baseball","Tennis"], a: "Basketball" },
      { q: "How long is a standard marathon in km?", options: ["40km","42.195km","44km","38km"], a: "42.195km" },
      { q: "Which country invented the sport of cricket?", options: ["Australia","India","South Africa","England"], a: "England" },
      { q: "What is the maximum score in a single bowling frame?", options: ["20","25","30","10"], a: "30" },
      { q: "Which sport is played at Augusta National?", options: ["Tennis","Golf","Rugby","Polo"], a: "Golf" },
      { q: "How many points is a touchdown worth in American football?", options: ["3","6","7","2"], a: "6" },
      { q: "In cricket, how many balls are in an over?", options: ["4","5","6","8"], a: "6" },
      { q: "Which country has won the most Cricket World Cups?", options: ["India","Pakistan","Sri Lanka","Australia"], a: "Australia" },
      { q: "Usain Bolt is famous for which sport?", options: ["Long Jump","Swimming","Sprinting","Cycling"], a: "Sprinting" },
      { q: "How many players are in a volleyball team on court?", options: ["5","6","7","8"], a: "6" },
      { q: "What sport uses a shuttlecock?", options: ["Squash","Badminton","Tennis","Pickleball"], a: "Badminton" },
      { q: "How long is a standard football (soccer) match?", options: ["80 mins","90 mins","100 mins","120 mins"], a: "90 mins" },
      { q: "Which country has won the most Olympic gold medals in history?", options: ["China","Russia","UK","USA"], a: "USA" },
      { q: "In swimming, what stroke is performed face-down with both arms moving together?", options: ["Backstroke","Breaststroke","Butterfly","Freestyle"], a: "Butterfly" },
      { q: "What is the term for scoring three goals in one game (football/soccer)?", options: ["Hat-trick","Triple","Treble","Three-peat"], a: "Hat-trick" },
      { q: "How many holes are played in a standard round of golf?", options: ["12","16","18","20"], a: "18" },
    ]
  }
};

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let selectedCategory  = null;  // Category key (e.g. 'technology')
let selectedCount     = 5;     // Number of questions requested
let quizQuestions     = [];    // Shuffled subset for the current quiz
let currentIndex      = 0;     // Current question index
let score             = 0;     // Current quiz score
let answered          = false; // Whether current Q has been answered
let quizHistory       = [];    // Array of past quiz results

// ─────────────────────────────────────────
// DOM REFERENCES
// ─────────────────────────────────────────
const homeScreen        = document.getElementById('homeScreen');
const quizScreen        = document.getElementById('quizScreen');
const resultScreen      = document.getElementById('resultScreen');
const historyScreen     = document.getElementById('historyScreen');

const categoryGrid      = document.getElementById('categoryGrid');
const countBtns         = document.querySelectorAll('.count-btn');

const startQuizBtn      = document.getElementById('startQuizBtn');
const viewHistoryBtn    = document.getElementById('viewHistoryBtn');

const hudCategory       = document.getElementById('hudCategory');
const hudQuestion       = document.getElementById('hudQuestion');
const hudScore          = document.getElementById('hudScore');
const progressFill      = document.getElementById('progressFill');
const qNumber           = document.getElementById('qNumber');
const qText             = document.getElementById('qText');
const optionsWrap       = document.getElementById('optionsWrap');
const nextBtn           = document.getElementById('nextBtn');

const resultTrophy      = document.getElementById('resultTrophy');
const resultCategory    = document.getElementById('resultCategory');
const ringFill          = document.getElementById('ringFill');
const ringScore         = document.getElementById('ringScore');
const ringTotal         = document.getElementById('ringTotal');
const resultMsg         = document.getElementById('resultMsg');
const statCorrect       = document.getElementById('statCorrect');
const statWrong         = document.getElementById('statWrong');
const statPercent       = document.getElementById('statPercent');
const playAgainBtn      = document.getElementById('playAgainBtn');
const goHomeBtn         = document.getElementById('goHomeBtn');

const historyList       = document.getElementById('historyList');
const clearHistoryBtn   = document.getElementById('clearHistoryBtn');
const backFromHistoryBtn= document.getElementById('backFromHistoryBtn');

// ═══════════════════════════════════════════
// SCREEN MANAGEMENT
// ═══════════════════════════════════════════
function showScreen(screen) {
  // Hide all screens first
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ═══════════════════════════════════════════
// HOME SCREEN — build category cards
// ═══════════════════════════════════════════
function buildCategoryGrid() {
  categoryGrid.innerHTML = '';

  Object.entries(QUESTION_BANK).forEach(([key, cat]) => {
    const card = document.createElement('div');
    card.className  = 'cat-card';
    card.dataset.key = key;
    card.style.setProperty('--cat-color', cat.color);

    card.innerHTML = `
      <span class="cat-emoji">${cat.emoji}</span>
      <div class="cat-name">${cat.label}</div>
      <div class="cat-count">${cat.questions.length} questions</div>
    `;

    card.addEventListener('click', () => selectCategory(key, card));
    categoryGrid.appendChild(card);
  });
}

// Select a category card
function selectCategory(key, cardEl) {
  selectedCategory = key;
  // Remove selected from all, add to clicked
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
  cardEl.classList.add('selected');
}

// Count button selection
countBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    countBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCount = parseInt(btn.dataset.count);
  });
});

// ═══════════════════════════════════════════
// START QUIZ
// ═══════════════════════════════════════════
function startQuiz() {
  // Validate category selection
  if (!selectedCategory) {
    // Flash the category grid
    categoryGrid.style.outline = '2px solid #ff1744';
    categoryGrid.style.borderRadius = '16px';
    setTimeout(() => categoryGrid.style.outline = 'none', 1500);
    return;
  }

  const cat = QUESTION_BANK[selectedCategory];

  // Get a shuffled subset of questions (up to selectedCount)
  quizQuestions = shuffleArray([...cat.questions]).slice(0, selectedCount);

  // Reset state
  currentIndex = 0;
  score        = 0;
  answered     = false;

  // Update HUD
  hudCategory.textContent = cat.emoji + ' ' + cat.label;
  hudScore.textContent    = '0';

  showScreen(quizScreen);
  loadQuestion();
}

// ═══════════════════════════════════════════
// LOAD QUESTION
// ═══════════════════════════════════════════
function loadQuestion() {
  answered = false;
  nextBtn.style.display = 'none';

  const total = quizQuestions.length;
  const q     = quizQuestions[currentIndex];

  // Update HUD
  hudQuestion.textContent = `${currentIndex + 1}/${total}`;

  // Update progress bar
  const pct = (currentIndex / total) * 100;
  progressFill.style.width = pct + '%';

  // Update question card with re-entrance animation
  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  void card.offsetWidth; // force reflow
  card.style.animation = 'cardEntrance 0.4s cubic-bezier(0.22,1,0.36,1)';

  qNumber.textContent = `Q${currentIndex + 1}`;
  qText.textContent   = q.q;

  // Shuffle and render answer options
  optionsWrap.innerHTML = '';
  const shuffledOptions = shuffleArray([...q.options]);

  shuffledOptions.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className   = 'option-btn';
    btn.textContent = opt;
    btn.style.animationDelay = `${i * 0.06}s`;

    btn.addEventListener('click', () => handleAnswer(btn, opt, q.a));
    optionsWrap.appendChild(btn);
  });
}

// ═══════════════════════════════════════════
// HANDLE ANSWER
// ═══════════════════════════════════════════
function handleAnswer(selectedBtn, selected, correct) {
  if (answered) return; // Block double-clicking
  answered = true;

  // Disable all option buttons
  const allBtns = optionsWrap.querySelectorAll('.option-btn');
  allBtns.forEach(btn => {
    btn.disabled = true;
    // Highlight the correct answer
    if (btn.textContent === correct) btn.classList.add('correct');
  });

  if (selected === correct) {
    score++;
    hudScore.textContent = score;
    // Add score glow pulse
    hudScore.style.animation = 'none';
    void hudScore.offsetWidth;
    hudScore.style.textShadow = '0 0 20px #00e5ff';
    setTimeout(() => hudScore.style.textShadow = '', 800);
  } else {
    // Mark selected btn as wrong
    selectedBtn.classList.add('wrong');
  }

  // Show next button
  nextBtn.style.display = 'block';
}

// ═══════════════════════════════════════════
// NEXT QUESTION
// ═══════════════════════════════════════════
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
});

// ═══════════════════════════════════════════
// FINISH QUIZ — show results and save history
// ═══════════════════════════════════════════
function finishQuiz() {
  const total    = quizQuestions.length;
  const pct      = Math.round((score / total) * 100);
  const catData  = QUESTION_BANK[selectedCategory];

  // Set final progress to 100%
  progressFill.style.width = '100%';

  // Determine trophy & message
  let trophy, msg;
  if (pct === 100) {
    trophy = '🏆'; msg = 'Flawless Victory! You answered every question correctly!';
  } else if (pct >= 80) {
    trophy = '🎖️'; msg = 'Outstanding! You really know your stuff!';
  } else if (pct >= 60) {
    trophy = '👍'; msg = 'Good job! A bit more practice and you\'ll be unstoppable.';
  } else if (pct >= 40) {
    trophy = '😅'; msg = 'Not bad! Keep studying and you\'ll improve.';
  } else {
    trophy = '📚'; msg = 'Keep going! Every expert was once a beginner.';
  }

  // Update result screen
  resultTrophy.textContent    = trophy;
  resultCategory.textContent  = catData.emoji + ' ' + catData.label;
  ringScore.textContent       = score;
  ringTotal.textContent       = `/${total}`;
  resultMsg.textContent       = msg;
  statCorrect.textContent     = score;
  statWrong.textContent       = total - score;
  statPercent.textContent     = pct + '%';

  // Animate SVG ring (circumference = 2πr = 2π×50 ≈ 314)
  const circumference   = 2 * Math.PI * 50;
  const dashOffset      = circumference - (pct / 100) * circumference;
  ringFill.style.strokeDasharray  = circumference;
  ringFill.style.strokeDashoffset = circumference; // start at 0
  // Animate to target after a tiny delay
  setTimeout(() => { ringFill.style.strokeDashoffset = dashOffset; }, 100);

  // Color ring based on performance
  if (pct >= 80) ringFill.style.stroke = '#00e676';
  else if (pct >= 50) ringFill.style.stroke = '#ffd54f';
  else ringFill.style.stroke = '#ff1744';

  // Save to history
  saveToHistory(catData, score, total, pct);

  showScreen(resultScreen);
}

// ═══════════════════════════════════════════
// HISTORY — save and render
// ═══════════════════════════════════════════
function saveToHistory(catData, score, total, pct) {
  const entry = {
    id:       Date.now(),
    category: catData.label,
    emoji:    catData.emoji,
    score,
    total,
    pct,
    date:     new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  };

  quizHistory.unshift(entry); // Newest first
}

function renderHistory() {
  historyList.innerHTML = '';

  if (quizHistory.length === 0) {
    historyList.innerHTML = '<div class="history-empty">No quizzes taken yet. Go test yourself! 🚀</div>';
    return;
  }

  quizHistory.forEach((entry, i) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.style.animationDelay = `${i * 0.06}s`;

    // Score class based on performance
    const scoreClass =
      entry.pct >= 80 ? 'score-great' :
      entry.pct >= 50 ? 'score-ok' : 'score-poor';

    item.innerHTML = `
      <div class="history-emoji">${entry.emoji}</div>
      <div class="history-info">
        <div class="history-cat">${entry.category}</div>
        <div class="history-meta">${entry.date} · ${entry.total} questions</div>
      </div>
      <div class="history-score ${scoreClass}">${entry.score}/${entry.total} <small>(${entry.pct}%)</small></div>
    `;

    historyList.appendChild(item);
  });
}

// ═══════════════════════════════════════════
// UTILITY — Fisher-Yates shuffle
// ═══════════════════════════════════════════
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ═══════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════

// Home — Start quiz
startQuizBtn.addEventListener('click', startQuiz);

// Home — View history
viewHistoryBtn.addEventListener('click', () => {
  renderHistory();
  showScreen(historyScreen);
});

// Result — Play again (same category, new questions)
playAgainBtn.addEventListener('click', startQuiz);

// Result — Go home
goHomeBtn.addEventListener('click', () => showScreen(homeScreen));

// History — Clear all
clearHistoryBtn.addEventListener('click', () => {
  if (quizHistory.length === 0) return;
  if (confirm('Clear all quiz history?')) {
    quizHistory = [];
    renderHistory();
  }
});

// History — Back to home
backFromHistoryBtn.addEventListener('click', () => showScreen(homeScreen));

// ═══════════════════════════════════════════
// SUBTLE 3D TILT — mouse tracking on app shell
// ═══════════════════════════════════════════
const appShell = document.querySelector('.app-shell');

document.addEventListener('mousemove', e => {
  const rect   = appShell.getBoundingClientRect();
  const cx     = rect.left + rect.width / 2;
  const cy     = rect.top  + rect.height / 2;
  const dx     = (e.clientX - cx) / window.innerWidth;
  const dy     = (e.clientY - cy) / window.innerHeight;
  const tiltX  = dy * -6;
  const tiltY  = dx *  6;

  appShell.style.transform =
    `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

document.addEventListener('mouseleave', () => {
  appShell.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
buildCategoryGrid();