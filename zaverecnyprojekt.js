const books = [
    { title: "Nový zákon - evangelia", author: "Bible", century: "18.", genre: "próza" },
    { title: "Starý zákon - Genesis", author: "Bible", century: "18.", genre: "próza" },
    { title: "Co Bůh? Člověk?", author: "Bridel", century: "18.", genre: "próza" },
    { title: "Robinson Crusoe", author: "Dafoe", century: "18.", genre: "próza"},
    { title: "Utrpení mladého Werthera", author: "Goethe", century: "18.", genre:"próza"},
    { title: "Odysseia", author: "Homér", century: "18.", genre:"próza"},
    { title: "Labyrint světa a ráj srdce", author: "Komenský",century:"18.", genre:"próza"},
    { title:"Legenda o sv. Kateřině", author:"",century:"18.",genre:"próza"},
    {title: "Lakomec", author:"Moliere", century:"18.",genre:"drama"},
    {title:"Romeo a Julie", author:"Shakespear",century:"18.",genre:"drama"},
    {title: "Zkrocení zlé ženy", author: "Shakespear",century:"18.",genre:"drama"},
    {title: "Hamlet", author:"Shakespear",century:"18.",genre:"drama"},
    {title:"Oidipús vladař", author:"Sofoklés",century:"18.",genre:"drama"},
    {title:"Testament",author:"Villon",century:"18.",genre:"poezie"},
    {title: "Květy zla", author:"Baudelaire", century:"19.", genre:"poezie"},
    {title: "Jana Eyrová", author:"Brontëová",century:"19.",genre:"próza"},
    {title:"Nový epochální výlet pana Broučka, tentokráte do XV. století",author:"Čech", century:"19.",genre:"próza"},
    {title: "Oliver Twist", author:"Dickens", century:"19.",genre:"próza"},
    {title:"Zločin a trest", author:"Dostojevský",century:"19.",genre:"próza"},
    {title:"Kytice",author:"Erben",century:"19.",genre:"poezie"},
    {title:"Paní Bovaryová",author:"Flaubert",century:"19.",gerne:"próza"},
    {title:"Revizor",author:"Gogol",century:"19.",gerne:"drama"},
    {title:"Křest sv. Vladimíra",author:"Havlíček",century:"19.",gerne:"drama"},
    {title:"Chrám Matky Boží v Paříži",author:"Hugo",century:"19.",gerne:"drama"},
    {title:"Máj",author:"Mácha",century:"19.",gerne:"poezie"},
    {title:"Kulička",author:"Maupassant",century:"19.",gerne:"próza"},
    {title:"Maryša",author:"Mrštíkové",century:"19.",gerne:"próza"},
    {title:"Babička",author:"Němcová",century:"19.",gerne:"próza"},
    {title:"V zámku a podzámčí",author:"Němcová",century:"19.",gerne:"próza"},
    {title:"Povídky malostranské",author:"Neruda",century:"19.",gerne:"próza"},
    {title:"Balady a romance",author:"Neruda",century:"19.",gerne:"poezie"},
    {title:"Havran + Filosofie básnické skladby",author:"Poe",century:"19.",gerne:"poezie"},
    {title:"Evžen Oněgin",author:"Puškin",century:"19.",gerne:"próza"},
    {title:"Kalibův zločin",author:"Rais",century:"19.",gerne:"próza"},
    {title:"Quo Vadis",author:"Sienkiewicz",century:"19.",gerne:"próza"},
    {title:"Kříž u potoka",author:"Světlá",century:"19.",gerne:"próza"},
    {title:"Anna Kareninová",author:"Tolstoj",century:"19.",gerne:"próza"},
    {title:"Strakonický dudák",author:"Tyl",century:"19.",gerne:"drama"},
    {title:"Obraz Doriana Graye",author:"Wilde",century:"19.",gerne:"próza"},
    {title:"Tereza Raquinová",author:"Zola",century:"19.",gerne:"próza"},
    {title:"Popraviště",author:"Ajtmatov",century:"20.",gerne:"próza"},
    {title:"Čekání na Godota",author:"Beckett",century:"20.",gerne:"drama"},
    {title:"",author:"",century:"",gerne:""},
];

let filterOpen = false;

document.getElementById("filtr2").addEventListener("click", () => {
    const filtrDiv = document.getElementById("filtr");
    const button = document.getElementById("filtr2");

    if (!filterOpen) {
        const panel = document.createElement("div");
        panel.id = "filter-panel";
        panel.style.display = "flex";
        panel.style.gap = "40px";
        panel.style.marginTop = "20px";

        panel.innerHTML = `
            <div class="filter-column">
                <h3>Století:</h3>
                <p><label><input type="checkbox" value="18." class="century">18.</label></p>
                <p><label><input type="checkbox" value="19." class="century">19.</label></p>
                <p><label><input type="checkbox" value="20." class="century">20. a 21.</label></p>
                <p><label><input type="checkbox" value="20.c" class="century">20. a 21. (česko)</label></p>
            </div>
            <div class="filter-column">
                <h3>Druh:</h3>
                <p><label><input type="checkbox" value="poezie" class="genre">Poezie</label></p>
                <p><label><input type="checkbox" value="próza" class="genre">Próza</label></p>
                <p><label><input type="checkbox" value="drama" class="genre">Drama</label></p>
            </div>
            <div class="filter-column">
                <h3>Autor:</h3>
                <div class="author-container">
                    <p><label><input type="checkbox" value="Bible" class="author">Bible</label></p>
                    <p><label><input type="checkbox" value="Bridel" class="author">Bridel</label></p>
                    <p><label><input type="checkbox" value="Dafoe" class="author">Dafoe</label></p>
                    <p><label><input type="checkbox" value="Goethe" class="author">Goethe</label></p>
                    <p><label><input type="checkbox" value="Homér" class="author">Homér</label></p>
                    <p><label><input type="checkbox" value="Komenský" class="author">Komenský</label></p>
                    <p><label><input type="checkbox" value="Moliere" class="author">Moliere</label></p>
                    <p><label><input type="checkbox" value="Shakespear" class="author">Shakespear</label></p>
                    <p><label><input type="checkbox" value="Sofoklés" class="author">Sofoklés</label></p>
                    <p><label><input type="checkbox" value="Villon" class="author">Villon</label></p>
                    <p><label><input type="checkbox" value="Baudelaire" class="author">Baudelaire</label></p>
                    <p><label><input type="checkbox" value="Brontëová" class="author">Brontëová</label></p>
                    <p><label><input type="checkbox" value="Čech" class="author">Čech</label></p>
                    <p><label><input type="checkbox" value="Dickens" class="author">Dickens</label></p>
                    <p><label><input type="checkbox" value="Dostojevský" class="author">Dostojevsý</label></p>
                    <p><label><input type="checkbox" value="Erben" class="author">Erben</label></p>
                </div>
            </div>
            <button id="vyhledat">Vyhledat</button>
        `;
        filtrDiv.appendChild(panel); 

        button.innerHTML = "Zavřít"; 
        filterOpen = true;

        document.getElementById("vyhledat").addEventListener("click", applyFilters);
    } else {
        const panel = document.getElementById("filter-panel");
        if (panel) panel.remove();
        button.innerHTML = "Filtr"; 
        filterOpen = false;
    }
});

function applyFilters() {
    const selectedCenturies = [...document.querySelectorAll(".century:checked")].map(el => el.value);
    const selectedGenres = [...document.querySelectorAll(".genre:checked")].map(el => el.value);
    const selectedAuthors = [...document.querySelectorAll(".author:checked")].map(el => el.value);

    const results = books.filter(book => {
        return (selectedCenturies.length === 0 || selectedCenturies.includes(book.century)) &&
               (selectedGenres.length === 0 || selectedGenres.includes(book.genre)) &&
               (selectedAuthors.length === 0 || selectedAuthors.includes(book.author));
    });

    renderBooks(results);
}

function renderBooks(list) {
    const container = document.getElementById("results");
    container.innerHTML = "";

    if (list.length === 0) {
        container.textContent = "Žádné výsledky."; 
        return;
    }

    list.forEach(book => {
        const div = document.createElement("div");
        div.innerHTML = `
            <strong>${book.title}</strong> - ${book.author} (${book.century} století, ${book.genre})
            <button class="add-btn" data-title="${book.title}">Přidat</button>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll(".add-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const title = btn.dataset.title;
            const selectedBook = books.find(b => b.title === title);
            addToList(selectedBook);
        });
    });
}

document.getElementById("searchInput").addEventListener("input", () => {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    const results = books.filter(book =>
        book.title.toLowerCase().includes(query)
    );

    renderBooks(results);
});

function addToList(book) {
    const listContainer = document.getElementById("list");

    const authorBooks = [...listContainer.children].filter(div =>
        div.dataset.author === book.author
    );

    if (listContainer.children.length >= 20) {
        alert("K maturitě dvacet knížek stačí ;)");
        return;
    }
    

    if (authorBooks.length >= 2) {
        alert(`Od jednoho autora můžete přidat jenom dvě knížky.`);
        return;
    }

    if ([...listContainer.children].some(div => div.dataset.title === book.title)) return;

    const div = document.createElement("div");
    div.dataset.title = book.title;
    div.dataset.author = book.author;
    div.innerHTML = `
        <strong>${book.title}</strong> - ${book.author}
        <button class="remove-btn">X</button>
    `;

    div.querySelector(".remove-btn").addEventListener("click", () => {
        div.remove();
        removeFromLocalStorage(book.title);
    });

    listContainer.appendChild(div);
    saveToLocalStorage(book);
}

function saveToLocalStorage(book) {
    let saved = JSON.parse(localStorage.getItem("bookList")) || [];
    if (!saved.find(b => b.title === book.title)) {
        saved.push(book);
        localStorage.setItem("bookList", JSON.stringify(saved));
    }
}

function removeFromLocalStorage(title) {
    let saved = JSON.parse(localStorage.getItem("bookList")) || [];
    saved = saved.filter(book => book.title !== title);
    localStorage.setItem("bookList", JSON.stringify(saved));
}

function loadBookList() {
    const saved = JSON.parse(localStorage.getItem("bookList")) || [];
    saved.forEach(book => {
        addToList(book, false); 
    });
}

window.addEventListener("DOMContentLoaded", loadBookList);

// Add this function to update the requirements display
function updateRequirements() {
    const listBooks = [...document.querySelectorAll("#list div")];  // Books in the list
    const genreCount = {
        poezie: 0,
        próza: 0,
        drama: 0
    };
    const centuryCount = {
        "18.": 0,
        "19.": 0,
        "20.": 0,  // worldwide
        "20.c": 0 // Czechia
    };

    // Count the genres and centuries of the books in the list
    listBooks.forEach(bookDiv => {
        const bookTitle = bookDiv.dataset.title;  // The title of the book in the list
        const bookData = books.find(b => b.title === bookTitle);

        if (bookData) {
            // Count genres and centuries
            if (bookData.genre) genreCount[bookData.genre]++;
            if (bookData.century === '18.') centuryCount["18."]++;
            else if (bookData.century === '19.') centuryCount["19."]++;
            else if (bookData.century === '20.') centuryCount["20."]++;
            else if (bookData.century === '20.c') centuryCount["20.c"]++;
        }
    });

    // Update the requirements section
    const requirementsDiv = document.getElementById("requirements");
    requirementsDiv.innerHTML = `
        <ul>
            <p>Poezie: zbývá ${Math.max(0, 2 - genreCount["poezie"])}</p>
            <p>Próza: zbývá ${Math.max(0, 2 - genreCount["próza"])}</p>
            <p>Drama: zbývá ${Math.max(0, 2 - genreCount["drama"])}</p>
        </ul>
        <ul>
            <p>18. století: zbývá ${Math.max(0, 2 - centuryCount["18."])}</p>
            <p>19. století: zbývá ${Math.max(0, 3 - centuryCount["19."])}</p>
            <p>20. a 21. století: zbývá (celosvětově): ${Math.max(0, 4 - centuryCount["20."])}</p> 
            <p>20. století (Česko): zbývá ${Math.max(0, 5 - centuryCount["20.c"])}</p>
        </ul>
    `;
}

function addToList(book) {
    const listContainer = document.getElementById("list");

    const authorBooks = [...listContainer.children].filter(div =>
        div.dataset.author === book.author
    );

    if (authorBooks.length >= 2) {
        alert(`You can only add 2 books by ${book.author}.`);
        return;
    }

    if ([...listContainer.children].some(div => div.dataset.title === book.title)) return;

    const div = document.createElement("div");
    div.dataset.title = book.title;
    div.dataset.author = book.author;
    div.innerHTML = `
        <strong>${book.title}</strong> - ${book.author}
        <button class="remove-btn">X</button>
    `;

    div.querySelector(".remove-btn").addEventListener("click", () => {
        div.remove();
        removeFromLocalStorage(book.title);
        updateRequirements(); 
    });

    listContainer.appendChild(div);
    saveToLocalStorage(book);
    updateRequirements(); 
}
