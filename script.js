let movies = JSON.parse(localStorage.getItem("movies") || "[]");

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
