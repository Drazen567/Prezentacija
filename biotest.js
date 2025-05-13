 window.onload = function(){
if(localStorage.getItem("IsAdmin") !== "true"){

  window.location = "https://drazen567.github.io/Prezentacija/bioindex.html"
  

}
  
}




let currentPlayer = 0;
let players = [];

const questions = [
  {
    question: "Šta su pantljičare?",
    answer: "Pantljičare su parazitski crvi koji žive u crijevima domaćina i mogu dostići dužinu od 10 metara."
  },
  {
    question: "Koje su glavne vrste pantljičara?",
    answer: "Goveđa pantljičara (Taenia saginata) i svinjska pantljičara (Taenia solium)."
  },
  {
    question: "Kako pantljičare zakace za zid creva?",
    answer: "Pantljičare koriste kukice i usisne čašice na glavi da bi se čvrsto pričvrstile za zid creva domaćina."
  },
  {
    question: "Koji je razvojni ciklus pantljičara?",
    answer: "Pantljičare imaju dva domaćina: čovek je konačni domaćin, dok su krava i svinja prelazni domaćini."
  },
  {
    question: "Koji je najpoznatiji metilj koji napada ljude?",
    answer: "Jetreni metilj (Fasciola hepatica) napada jetru i može inficirati ljude."
  },
  {
    question: "Koji su simptomi infekcije pantljičarom?",
    answer: "Simptomi mogu uključivati mučninu, slabost, gubitak apetita, anemiju, pa čak i neurološke probleme ako larve završe u mozgu."
  },
  {
    question: "Kako se prenosi infekcija metiljima?",
    answer: "Infekcija metiljima prenosi se konzumiranjem kontaminirane hrane, kao što su sirove vodene biljke."
  },
  {
    question: "Šta uzrokuje bolest šistosomijazu?",
    answer: "Šistosomijaza je uzrokovana krvnim metiljima (Schistosoma spp.), koji parazitiraju u krvnim sudovima ljudi."
  },
  {
    question: "Koji su simptomi šistosomijaze?",
    answer: "Simptomi šistosomijaze mogu uključivati bolove u stomaku, groznicu, uvećanje jetre, i u nekim slučajevima paralizu."
  },
  {
    question: "Koji su preventivni koraci za izbegavanje infekcija pantljičarom?",
    answer: "Prevencija uključuje termičku obradu mesa, pranje ruku i izbegavanje konzumiranja sirovih vodenih biljaka."
  },
  {
    question: "Šta je karakteristično za razvoj metilja?",
    answer: "Metilji imaju složen razvojni ciklus koji uključuje puža kao prvog prelaznog domaćina."
  },
  {
    question: "Koje su najpoznatije vrste metilja?",
    answer: "Najpoznatiji metilji su jetreni metilj i krvni metilj."
  },
  {
    question: "Kako se prenose metilji?",
    answer: "Metilji se prenose kontaktom sa kontaminiranom vodom, biljkama ili životinjama."
  },
  {
    question: "Kako se dijagnostikuje infekcija pantljičarom?",
    answer: "Dijagnoza se postavlja analizom stolice na prisustvo jaja pantljičare."
  },
  {
    question: "Koji su problemi povezani sa zaraženim pantljičarama?",
    answer: "Infekcija može izazvati probleme sa varenjem, mučninu, bolove u stomaku i druge ozbiljne zdravstvene probleme."
  }
];

let currentQuestionIndex = 0;


function showAnswer() {
  const answerDiv = document.getElementById("answer");
  answerDiv.style.display = "block"; 
}


function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0;
  }
  renderQuestion();
  document.getElementById("answer").style.display = "none"; 
}


function renderQuestion() {
  const questionDiv = document.getElementById("question");
  const questionText = questions[currentQuestionIndex].question;
  questionDiv.innerHTML = `<div class="question">Pitanje: ${questionText}</div>`;
  
  const answerDiv = document.getElementById("answer");
  const answerText = questions[currentQuestionIndex].answer;
  answerDiv.innerHTML = `Odgovor: ${answerText}`;
}


function addPlayer() {
  const playerNameInput = document.getElementById("player-name");
  const playerName = playerNameInput.value.trim();
  
  if (playerName === "") return; 

  const player = {
    name: playerName,
    points: 0
  };

  players.push(player);
  playerNameInput.value = ""; 

  renderPlayers();
}


function renderPlayers() {
  const playersContainer = document.getElementById("players-container");
  playersContainer.innerHTML = "";

  players.forEach((player, index) => {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player");
    playerDiv.innerHTML = `${player.name} - Poeni: <span id="points-${index}">${player.points}</span> 
      <button onclick="addPoint(${index})">+</button>`;
    playersContainer.appendChild(playerDiv);
  });
}


function addPoint(playerIndex) {
  players[playerIndex].points += 1; 
  renderPlayers(); 
}


renderQuestion();
