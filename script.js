let movies = JSON.parse(localStorage.getItem("movies") || "[let movies = [
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
  {"Title":"Spider-Man across the spider verse","Pacing":8.5,"Cinematography":9.0,"Scrittura":8.5,"Plot":8.0,"Personaggi":9.0,"Finale":8.0,"Overall":8.6}
];
]");

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

const isAnimationCheckbox = document.getElementById("is_animation");
const actingInput = document.getElementById("Acting");
isAnimationCheckbox.addEventListener("change", () => {
    actingInput.disabled = isAnimationCheckbox.checked;
});

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
    localStorage.setItem("movies", JSON.stringify(movies));
    alert(`Film '${title}' aggiunto!`);
    clearInputs();
    updateRanking();
});

function clearInputs() {
    document.getElementById("title").value = "";
    ["Acting","Pacing","Cinematography","Scrittura","Plot","Personaggi","Finale"].forEach(cat => {
        document.getElementById(cat).value = "";
    });
    isAnimationCheckbox.checked = false;
    actingInput.disabled = false;
}

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

// inizializza la classifica all'avvio
updateRanking();
