// Tutti i film iniziali convertiti da TXT
let defaultMovies = [
  {"Title":"Oppenheimer","Acting":9.5,"Pacing":7.5,"Cinematography":9.5,"Scrittura":9.0,"Plot":9.0,"Personaggi":9.5,"Finale":10.0,"Overall":9.12},
  {"Title":"Sixteen candels","Acting":5.5,"Pacing":5.0,"Cinematography":5.0,"Scrittura":4.5,"Plot":4.0,"Personaggi":5.0,"Finale":6.0,"Overall":5.03},
  {"Title":"Don’t worry darling","Acting":7.0,"Pacing":7.0,"Cinematography":8.0,"Scrittura":6.0,"Plot":7.5,"Personaggi":6.5,"Finale":7.5,"Overall":7.05},
  {"Title":"Arancia meccanica","Acting":7.0,"Pacing":5.0,"Cinematography":6.5,"Scrittura":7.0,"Plot":5.0,"Personaggi":7.0,"Finale":6.5,"Overall":6.36},
  {"Title":"La probabilità statistica dell’amore a prima vista","Acting":7.0,"Pacing":8.5,"Cinematography":6.0,"Scrittura":7.0,"Plot":6.0,"Personaggi":7.5,"Finale":7.0,"Overall":7.05},
  {"Title":"Barbie","Acting":7.5,"Pacing":7.5,"Cinematography":7.5,"Scrittura":6.0,"Plot":6.0,"Personaggi":7.0,"Finale":8.0,"Overall":7.14},
  {"Title":"Downsizing","Acting":7.0,"Pacing":7.0,"Cinematography":6.0,"Scrittura":7.0,"Plot":6.0,"Personaggi":6.0,"Finale":7.0,"Overall":6.46},
  {"Title":"Asteroid city","Acting":8.0,"Pacing":8.0,"Cinematography":8.0,"Scrittura":8.0,"Plot":4.5,"Personaggi":8.0,"Finale":6.0,"Overall":7.25},
  {"Title":"Un’impresa da Dio","Acting":6.0,"Pacing":6.5,"Cinematography":6.0,"Scrittura":5.5,"Plot":5.0,"Personaggi":6.0,"Finale":7.0,"Overall":5.95},
  {"Title":"Compagni di scuola","Acting":7.0,"Pacing":8.0,"Cinematography":6.0,"Scrittura":8.0,"Plot":6.5,"Personaggi":8.0,"Finale":7.0,"Overall":7.28},
  {"Title":"Inception","Acting":8.5,"Pacing":8.5,"Cinematography":9.0,"Scrittura":9.5,"Plot":8.0,"Personaggi":8.0,"Finale":9.0,"Overall":8.67},
  {"Title":"Mamma mia","Acting":6.0,"Pacing":7.5,"Cinematography":6.5,"Scrittura":6.0,"Plot":8.0,"Personaggi":7.0,"Finale":7.0,"Overall":6.85},
  {"Title":"Vita di Pi","Acting":8.0,"Pacing":8.0,"Cinematography":8.5,"Scrittura":8.0,"Plot":7.0,"Personaggi":8.0,"Finale":7.5,"Overall":7.85},
  {"Title":"Dallas buyers club","Acting":8.0,"Pacing":7.5,"Cinematography":7.0,"Scrittura":7.0,"Plot":6.0,"Personaggi":8.0,"Finale":8.0,"Overall":7.4},
  {"Title":"Il lato positivo","Acting":7.5,"Pacing":7.0,"Cinematography":6.0,"Scrittura":7.0,"Plot":6.5,"Personaggi":7.5,"Finale":8.0,"Overall":7.07},
  {"Title":"Eternal sunshine of the","Acting":8.0,"Pacing":7.5,"Cinematography":7.5,"Scrittura":7.5,"Plot":8.0,"Personaggi":7.5,"Finale":8.0,"Overall":7.65},
  {"Title":"The killer","Acting":7.0,"Pacing":7.0,"Cinematography":7.5,"Scrittura":5.5,"Plot":4.0,"Personaggi":6.0,"Finale":6.0,"Overall":6.14},
  {"Title":"500 giorni insieme","Acting":8.0,"Pacing":8.0,"Cinematography":7.0,"Scrittura":8.5,"Plot":7.0,"Personaggi":8.0,"Finale":7.5,"Overall":7.72},
  {"Title":"Spider-Man across the spider verse","Pacing":8.5,"Cinematography":9.0,"Scrittura":8.5,"Plot":8.0,"Personaggi":9.0,"Finale":8.0,"Overall":8.6},
  {"Title":"Assassinio a Venezia","Acting":7.0,"Pacing":7.5,"Cinematography":7.0,"Scrittura":7.0,"Plot":8.0,"Personaggi":7.5,"Finale":7.5,"Overall":7.36},
  {"Title":"Niente di nuovo sul","Acting":8.0,"Pacing":8.0,"Cinematography":9.0,"Scrittura":9.0,"Plot":8.5,"Personaggi":8.0,"Finale":8.0,"Overall":8.45},
  {"Title":"Coach Carter","Acting":7.0,"Pacing":8.0,"Cinematography":6.5,"Scrittura":7.0,"Plot":7.0,"Personaggi":8.0,"Finale":8.0,"Overall":7.5},
  {"Title":"Suxbad","Acting":7.0,"Pacing":8.5,"Cinematography":7.0,"Scrittura":8.0,"Plot":7.0,"Personaggi":8.0,"Finale":8.0,"Overall":7.67},
  {"Title":"Million dollar baby","Acting":7.5,"Pacing":7.0,"Cinematography":7.0,"Scrittura":8.0,"Plot":8.5,"Personaggi":8.0,"Finale":8.0,"Overall":7.71},
  {"Title":"Fractured","Acting":7.0,"Pacing":7.5,"Cinematography":6.5,"Scrittura":7.0,"Plot":6.0,"Personaggi":6.5,"Finale":6.0,"Overall":6.6},
  {"Title":"The interview","Acting":6.5,"Pacing":9.0,"Cinematography":7.0,"Scrittura":8.5,"Plot":6.0,"Personaggi":7.0,"Finale":7.5,"Overall":7.35},
  {"Title":"The killer of the flower moon","Acting":9.0,"Pacing":7.0,"Cinematography":8.0,"Scrittura":8.5,"Plot":7.5,"Personaggi":8.0,"Finale":8.5,"Overall":8.14},
  {"Title":"C’è ancora domani","Acting":8.0,"Pacing":7.5,"Cinematography":8.5,"Scrittura":8.5,"Plot":7.5,"Personaggi":8.0,"Finale":8.0,"Overall":8.07},
  {"Title":"Fidanzata in affitto","Acting":6.5,"Pacing":7.5,"Cinematography":6.0,"Scrittura":6.0,"Plot":5.0,"Personaggi":6.0,"Finale":7.0,"Overall":6.28},
  {"Title":"Harry ti presento Sally","Acting":7.5,"Pacing":8.0,"Cinematography":7.5,"Scrittura":8.5,"Plot":6.5,"Personaggi":8.0,"Finale":7.5,"Overall":7.64},
  {"Title":"Dream scenario","Acting":6.5,"Pacing":8.0,"Cinematography":8.0,"Scrittura":7.5,"Plot":7.0,"Personaggi":7.0,"Finale":7.5,"Overall":7.36},
  {"Title":"Società della neve","Acting":8.5,"Pacing":8.5,"Cinematography":9.0,"Scrittura":8.0,"Plot":7.5,"Personaggi":8.0,"Finale":8.5,"Overall":8.36},
  {"Title":"Una settimana da Dio","Acting":6.0,"Pacing":7.5,"Cinematography":6.0,"Scrittura":6.5,"Plot":5.0,"Personaggi":6.5,"Finale":7.0,"Overall":6.36},
  {"Title":"Metti la nonna in freezer","Acting":7.0,"Pacing":8.0,"Cinematography":6.0,"Scrittura":7.5,"Plot":6.0,"Personaggi":7.0,"Finale":7.0,"Overall":6.9},
  {"Title":"Before sunrise","Acting":7.5,"Pacing":8.0,"Cinematography":6.5,"Scrittura":8.5,"Plot":7.0,"Personaggi":8.0,"Finale":8.0,"Overall":7.64},
  {"Title":"Before sunshine","Acting":6.5,"Pacing":7.0,"Cinematography":6.0,"Scrittura":6.0,"Plot":5.0,"Personaggi":7.0,"Finale":5.5,"Overall":6.14},
  {"Title":"Zodiac","Acting":7.5,"Pacing":7.0,"Cinematography":7.0,"Scrittura":8.0,"Plot":7.5,"Personaggi":7.5,"Finale":7.5,"Overall":7.47},
  {"Title":"Before midnight","Acting":8.0,"Pacing":7.0,"Cinematography":6.0,"Scrittura":8.0,"Plot":7.0,"Personaggi":7.0,"Finale":7.0,"Overall":7.17},
  {"Title":"Attacco al potere 1","Acting":6.5,"Pacing":7.5,"Cinematography":6.0,"Scrittura":6.5,"Plot":5.0,"Personaggi":7.0,"Finale":7.0,"Overall":6.5},
  {"Title":"Memento","Acting":7.5,"Pacing":7.0,"Cinematography":7.0,"Scrittura":9.0,"Plot":7.5,"Personaggi":7.5,"Finale":8.0,"Overall":7.71},
  {"Title":"Scrivimi ancora","Acting":7.0,"Pacing":8.0,"Cinematography":7.0,"Scrittura":7.0,"Plot":6.0,"Personaggi":6.0,"Finale":7.5,"Overall":6.92},
  {"Title":"Revenant","Acting":9.0,"Pacing":8.0,"Cinematography":9.0,"Scrittura":8.5,"Plot":7.5,"Personaggi":8.0,"Finale":9.0,"Overall":8.4},
  {"Title":"Prova a prendermi","Acting":8.0,"Pacing":8.0,"Cinematography":8.0,"Scrittura":9.0,"Plot":8.0,"Personaggi":8.0,"Finale":8.5,"Overall":8.26},
  {"Title":"Kung fu panda 4","Pacing":7.0,"Cinematography":6.5,"Scrittura":5.0,"Plot":6.0,"Personaggi":7.0,"Finale":7.0,"Overall":6.41},
  {"Title":"Leon","Acting":8.5,"Pacing":8.5,"Cinematography":7.0,"Scrittura":8.0,"Plot":7.5,"Personaggi":8.0,"Finale":8.0,"Overall":7.92},
  {"Title":"Matrix","Acting":7.5,"Pacing":8.0,"Cinematography":7.5,"Scrittura":8.0,"Plot":6.5,"Personaggi":8.5,"Finale":7.0,"Overall":7.57},
  {"Title":"Civil war","Acting":7.5,"Pacing":8.0,"Cinematography":8.0,"Scrittura":7.5,"Plot":7.5,"Personaggi":7.5,"Finale":8.0,"Overall":7.71},
  {"Title":"Maze runner il labirinto","Acting":7.5,"Pacing":8.0,"Cinematography":7.0,"Scrittura":8.0,"Plot":8.0,"Personaggi":8.0,"Finale":8.0,"Overall":7.81},
  {"Title":"Rush","Acting":7.0,"Pacing":8.0,"Cinematography":7.5,"Scrittura":8.0,"Plot":8.0,"Personaggi":7.5,"Finale":8.0,"Overall":7.71},
  {"Title":"L’Odio","Acting":8.5,"Pacing":8.0,"Cinematography":7.5,"Scrittura":8.5,"Plot":8.0,"Personaggi":8.0,"Finale":8.0,"Overall":8.12},
  {"Title":"Challengers","Acting":7.0,"Pacing":8.0,"Cinematography":8.5,"Scrittura":6.5,"Plot":7.0,"Personaggi":7.0,"Finale":8.0,"Overall":7.48},
  {"Title":"The dictator","Acting":6.0,"Pacing":8.0,"Cinematography":6.0,"Scrittura":6.5,"Plot":5.5,"Personaggi":6.0,"Finale":5.0,"Overall":6.14},
  {"Title":"Smetto quando voglio","Acting":6.0,"Pacing":7.5,"Cinematography":6.0,"Scrittura":7.0,"Plot":5.5,"Personaggi":6.5,"Finale":7.0,"Overall":6.53},
  {"Title":"Hunger games e la ballata…","Acting":7.0,"Pacing":7.5,"Cinematography":8.0,"Scrittura":8.0,"Plot":7.5,"Personaggi":7.5,"Finale":7.0,"Overall":7.53},
  {"Title":"Inside out 2","Pacing":8.0,"Cinematography":7.5,"Scrittura":6.0,"Plot":6.0,"Personaggi":7.5,"Finale":7.5,"Overall":7.08},
  {"Title":"La città incantata","Pacing":8.0,"Cinematography":9.0,"Scrittura":8.0,"Plot":7.0,"Personaggi":8.0,"Finale":8.0,"Overall":8.08},
  {"Title":"Deadpool 3","Acting":7.5,"Pacing":8.5,"Cinematography":7.5,"Scrittura":8.0,"Plot":7.5,"Personaggi":8.0,"Finale":8.0,"Overall":7.89},
  {"Title":"Beautiful boy","Acting":8.5,"Pacing":8.0,"Cinematography":7.5,"Scrittura":8.0,"Plot":7.5,"Personaggi":8.5,"Finale":8.0,"Overall":8.03},
  {"Title":"A walk to remember","Acting":7.0,"Pacing":6.5,"Cinematography":6.5,"Scrittura":5.5,"Plot":6.5,"Personaggi":7.0,"Finale":7.0,"Overall":6.57},
  {"Title":"Babylon","Acting":8.5,"Pacing":8.0,"Cinematography":8.0,"Scrittura":9.0,"Plot":8.0,"Personaggi":9.0,"Finale":9.0,"Overall":8.6},
  {"Title":"La casa delle bambole","Acting":7.0,"Pacing":5.5,"Cinematography":6.0,"Scrittura":5.0,"Plot":6.0,"Personaggi":5.5,"Finale":6.0,"Overall":5.92},
  {"Title":"Spaceman","Acting":7.0,"Pacing":6.0,"Cinematography":7.5,"Scrittura":7.5,"Plot":6.0,"Personaggi":7.0,"Finale":6.5,"Overall":6.78},
  {"Title":"7 e 8","Acting":7.0,"Pacing":8.0,"Cinematography":6.0,"Scrittura":8.0,"Plot":7.5,"Personaggi":7.0,"Finale":7.5,"Overall":7.32},
  {"Title":"Perfects days","Acting":7.5,"Pacing":6.0,"Cinematography":7.5,"Scrittura":7.0,"Plot":5.5,"Personaggi":8.0,"Finale":7.0,"Overall":6.96},
  {"Title":"The prestige","Acting":7.5,"Pacing":7.5,"Cinematography":7.0,"Scrittura":8.0,"Plot":9.0,"Personaggi":8.0,"Finale":8.5,"Overall":8.0},
  {"Title":"Mystic river","Acting":8.0,"Pacing":7.5,"Cinematography":7.0,"Scrittura":8.0,"Plot":8.0,"Personaggi":8.0,"Finale":7.5,"Overall":7.75},
  {"Title":"Il primo Natale","Acting":5.0,"Pacing":7.0,"Cinematography":5.0,"Scrittura":6.0,"Plot":6.5,"Personaggi":6.0,"Finale":6.0,"Overall":5.92},
  {"Title":"Primal fear","Acting":7.0,"Pacing":7.0,"Cinematography":6.5,"Scrittura":7.5,"Plot":7.5,"Personaggi":7.0,"Finale":7.5,"Overall":7.14},
  {"Title":"Full metal jacket","Acting":7.5,"Pacing":7.0,"Cinematography":7.0,"Scrittura":8.5,"Plot":7.5,"Personaggi":9.0,"Finale":8.0,"Overall":7.78},
  {"Title":"It’s what inside","Acting":7.0,"Pacing":9.0,"Cinematography":8.0,"Scrittura":8.0,"Plot":7.5,"Personaggi":7.0,"Finale":8.0,"Overall":7.76},
  {"Title":"La persona peggiore del mondo","Acting":8.0,"Pacing":7.0,"Cinematography":8.0,"Scrittura":7.5,"Plot":7.5,"Personaggi":7.0,"Finale":7.5,"Overall":7.53},
  {"Title":"Il padrino","Acting":7.5,"Pacing":7.5,"Cinematography":7.0,"Scrittura":8.0,"Plot":7.5,"Personaggi":9.0,"Finale":8.0,"Overall":7.82},
  {"Title":"Gran Torino","Acting":7.0,"Pacing":7.5,"Cinematography":7.5,"Scrittura":8.0,"Plot":7.5,"Personaggi":8.0,"Finale":8.0,"Overall":7.67},
  {"Title":"Storia di hurry sugar e altre tre storie","Acting":8.0,"Pacing":9.0,"Cinematography":8.5,"Scrittura":8.0,"Plot":7.0,"Personaggi":7.5,"Finale":8.0,"Overall":7.96},
  {"Title":"Conclave","Acting":8.0,"Pacing":8.5,"Cinematography":8.0,"Scrittura":8.0,"Plot":8.0,"Personaggi":7.5,"Finale":8.0,"Overall":8.03},
  {"Title":"Follemente","Acting":7.5,"Pacing":8.0,"Cinematography":7.25,"Scrittura":8.25,"Plot":7.0,"Personaggi":8.0,"Finale":8.0,"Overall":7.71},
  {"Title":"Quel pazzo venerdi 2","Acting":7.0,"Pacing":8.0,"Cinematography":7.25,"Scrittura":6.5,"Plot":5.5,"Personaggi":8.0,"Finale":8.0,"Overall":7.18}

];


// Carica dal localStorage oppure usa defaultMovies
let movies = JSON.parse(localStorage.getItem("movies")) || defaultMovies;

// Funzione per salvare in localStorage
function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

// Gestione tabs
const tabs = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        tabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        tabContents.forEach(tc => tc.style.display = "none");
        document.getElementById(btn.dataset.tab).style.display = "block";
    });
});

// Toggle Acting per animazioni
const isAnimationCheckbox = document.getElementById("is_animation");
const actingInput = document.getElementById("Acting");
isAnimationCheckbox.addEventListener("change", () => {
    actingInput.disabled = isAnimationCheckbox.checked;
});

// Aggiungi film
document.getElementById("addMovieBtn").addEventListener("click", () => {
    const title = document.getElementById("title").value.trim();
    if (!title) { alert("Inserisci un titolo!"); return; }

    const categories = ["Acting","Pacing","Cinematography","Scrittura","Plot","Personaggi","Finale"];
    let movie = { Title: title, is_animation: isAnimationCheckbox.checked };
    let total = 0;
    let count = 0;

    for (let cat of categories) {
        if (cat === "Acting" && movie.is_animation) continue;
        let val = parseFloat(document.getElementById(cat).value);
        if (isNaN(val) || val < 0 || val > 10) { alert(`Valore non valido per ${cat}`); return; }
        movie[cat] = val;
        total += val;
        count++;
    }

    movie.Overall = parseFloat((total/count).toFixed(2));
    movies.push(movie);
    saveMovies();
    alert(`Film '${title}' aggiunto!`);
    clearInputs();
    updateRanking();
});

// Pulisci input
function clearInputs() {
    document.getElementById("title").value = "";
    ["Acting","Pacing","Cinematography","Scrittura","Plot","Personaggi","Finale"].forEach(cat => {
        document.getElementById(cat).value = "";
    });
    isAnimationCheckbox.checked = false;
    actingInput.disabled = false;
}

// Aggiorna classifica
function updateRanking() {
    const tbody = document.getElementById("rankingBody");
    tbody.innerHTML = "";
    movies.sort((a,b) => b.Overall - a.Overall);
    movies.forEach((movie, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${i+1}</td><td>${movie.Title}</td><td>${movie.Overall}</td>`;
        if (i < 3) tr.classList.add("top3");
        if (i >= movies.length-3) tr.classList.add("bottom3");
        tbody.appendChild(tr);
    });
}

// inizializza la classifica all’avvio
updateRanking();
