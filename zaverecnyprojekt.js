const books = [
  {
    title: "Nový zákon - evangelia",
    author: "Bible",
    century: "18.",
    genre: "próza",
  },
  {
    title: "Starý zákon - Genesis",
    author: "Bible",
    century: "18.",
    genre: "próza",
  },
  {
    title: "Co Bůh? Člověk?",
    author: "Bridel",
    century: "18.",
    genre: "próza",
  },
  { title: "Robinson Crusoe", author: "Dafoe", century: "18.", genre: "próza" },
  {
    title: "Utrpení mladého Werthera",
    author: "Goethe",
    century: "18.",
    genre: "próza",
  },
  { title: "Odysseia", author: "Homér", century: "18.", genre: "próza" },
  {
    title: "Labyrint světa a ráj srdce",
    author: "Komenský",
    century: "18.",
    genre: "próza",
  },
  {
    title: "Legenda o sv. Kateřině",
    author: "",
    century: "18.",
    genre: "próza",
  },
  { title: "Lakomec", author: "Moliere", century: "18.", genre: "drama" },
  {
    title: "Romeo a Julie",
    author: "Shakespear",
    century: "18.",
    genre: "drama",
  },
  {
    title: "Zkrocení zlé ženy",
    author: "Shakespear",
    century: "18.",
    genre: "drama",
  },
  { title: "Hamlet", author: "Shakespear", century: "18.", genre: "drama" },
  {
    title: "Oidipús vladař",
    author: "Sofoklés",
    century: "18.",
    genre: "drama",
  },
  { title: "Testament", author: "Villon", century: "18.", genre: "poezie" },
  { title: "Květy zla", author: "Baudelaire", century: "19.", genre: "poezie" },
  { title: "Jana Eyrová", author: "Brontëová", century: "19.", genre: "próza" },
  {
    title: "Nový epochální výlet pana Broučka, tentokráte do XV. století",
    author: "Čech",
    century: "19.",
    genre: "próza",
  },
  { title: "Oliver Twist", author: "Dickens", century: "19.", genre: "próza" },
  {
    title: "Zločin a trest",
    author: "Dostojevský",
    century: "19.",
    genre: "próza",
  },
  { title: "Kytice", author: "Erben", century: "19.", genre: "poezie" },
  {
    title: "Paní Bovaryová",
    author: "Flaubert",
    century: "19.",
    genre: "próza",
  },
  { title: "Revizor", author: "Gogol", century: "19.", genre: "drama" },
  {
    title: "Křest sv. Vladimíra",
    author: "Havlíček",
    century: "19.",
    genre: "drama",
  },
  {
    title: "Chrám Matky Boží v Paříži",
    author: "Hugo",
    century: "19.",
    genre: "drama",
  },
  { title: "Máj", author: "Mácha", century: "19.", genre: "poezie" },
  { title: "Kulička", author: "Maupassant", century: "19.", genre: "próza" },
  { title: "Maryša", author: "Mrštíkové", century: "19.", genre: "próza" },
  { title: "Babička", author: "Němcová", century: "19.", genre: "próza" },
  {
    title: "V zámku a podzámčí",
    author: "Němcová",
    century: "19.",
    genre: "próza",
  },
  {
    title: "Povídky malostranské",
    author: "Neruda",
    century: "19.",
    genre: "próza",
  },
  {
    title: "Balady a romance",
    author: "Neruda",
    century: "19.",
    genre: "poezie",
  },
  {
    title: "Havran + Filosofie básnické skladby",
    author: "Poe",
    century: "19.",
    genre: "poezie",
  },
  { title: "Evžen Oněgin", author: "Puškin", century: "19.", genre: "próza" },
  { title: "Kalibův zločin", author: "Rais", century: "19.", genre: "próza" },
  { title: "Quo Vadis", author: "Sienkiewicz", century: "19.", genre: "próza" },
  { title: "Kříž u potoka", author: "Světlá", century: "19.", genre: "próza" },
  {
    title: "Anna Kareninová",
    author: "Tolstoj",
    century: "19.",
    genre: "próza",
  },
  { title: "Strakonický dudák", author: "Tyl", century: "19.", genre: "drama" },
  {
    title: "Obraz Doriana Graye",
    author: "Wilde",
    century: "19.",
    genre: "próza",
  },
  { title: "Tereza Raquinová", author: "Zola", century: "19.", genre: "próza" },
  { title: "Popraviště", author: "Ajtmatov", century: "20.", genre: "próza" },
  {
    title: "Čekání na Godota",
    author: "Beckett",
    century: "20.",
    genre: "drama",
  },
  { title: "Cizinec", author: "Camus", century: "20.", genre: "próza" },
  { title: "Jméno růže", author: "Eco", century: "20.", genre: "próza" },
  { title: "Malý princ", author: "Exupery", century: "20.", genre: "próza" },
  {
    title: "Velký Gatsby",
    author: "Fitzgerland",
    century: "20.",
    genre: "próza",
  },
  { title: "Moc a sláva", author: "Green", century: "20.", genre: "próza" },
  { title: "Hlava XXII", author: "Heller", century: "20.", genre: "próza" },
  {
    title: "Stařec a moře",
    author: "Hemingway",
    century: "20.",
    genre: "próza",
  },
  { title: "Duna", author: "Herbert", century: "20.", genre: "próza" },
  {
    title: "Tisíce planoucích sluncí",
    author: "Hosseini",
    century: "20.",
    genre: "próza",
  },
  { title: "Proměna", author: "Kafka", century: "20.", genre: "próza" },
  {
    title: "Růže pro Algernon",
    author: "Keyes",
    century: "20.",
    genre: "próza",
  },
  { title: "Horalka", author: "Moravia", century: "20.", genre: "próza" },
  { title: "Očista", author: "Oksanen", century: "20.", genre: "próza" },
  { title: "1984", author: "Orwell", century: "20.", genre: "próza" },
  {
    title: "Na západní frontě klid",
    author: "Remarque",
    century: "20.",
    genre: "próza",
  },
  { title: "Petr a Lucie", author: "Rolland", century: "20.", genre: "próza" },
  { title: "Pigmalion", author: "Shaw", century: "20.", genre: "drama" },
  {
    title: "Jeden den Ivana Děnisoviče",
    author: "Solženicyn",
    century: "20.",
    genre: "próza",
  },
  {
    title: "O myších a lidech",
    author: "Steinbeck",
    century: "20.",
    genre: "próza",
  },
  { title: "Sofiina volba", author: "Styron", century: "20.", genre: "próza" },
  {
    title: "Hobit aneb Cesta tam a zase zpátky",
    author: "Tolkien",
    century: "20.",
    genre: "próza",
  },
  {
    title: "Egypťan Sinuhet",
    author: "Waltri",
    century: "20.",
    genre: "próza",
  },
  {
    title: "Kočka na rozpálené plechové střeše",
    author: "Williams",
    century: "20.",
    genre: "drama",
  },
  {
    title: "Zeptej se táty",
    author: "Balabán",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Slezské písně",
    author: "Bezruč",
    century: "20.c",
    genre: "poezie",
  },
  { title: "Bílá nemoc", author: "Čapek", century: "20.c", genre: "próza" },
  { title: "R.U.R.", author: "Čapek", century: "20.c", genre: "próza" },
  { title: "Válka s mloky", author: "Čapek", century: "20.c", genre: "próza" },
  { title: "Krysař", author: "Dyk", century: "20.c", genre: "próza" },
  { title: "Dvorní šašci", author: "Fischl", century: "20.c", genre: "próza" },
  { title: "Spalovač mrtvol", author: "Fuks", century: "20.c", genre: "próza" },
  { title: "Rybí krev", author: "Hájíček", century: "20.c", genre: "próza" },
  {
    title: "Zahradní slavnost",
    author: "Havel",
    century: "20.c",
    genre: "drama",
  },
  {
    title: "Petrolejové lampy",
    author: "Havlíček",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Ostře sledované vlaky",
    author: "Hrabal",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Magorovy labutí písně",
    author: "Jirous",
    century: "20.c",
    genre: "próza",
  },
  { title: "Memento", author: "John", century: "20.c", genre: "próza" },
  { title: "Kníška", author: "Kryl", century: "20.c", genre: "próza" },
  { title: "Kundera", author: "Žert", century: "20.c", genre: "próza" },
  { title: "Želary", author: "Legátová", century: "20.c", genre: "próza" },
  {
    title: "Modlitba pro Kateřinu Horovitzovou",
    author: "Lustig",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Tiché roky",
    author: "Mornštajnová",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Manon Lescaut",
    author: "Nezval",
    century: "20.c",
    genre: "poezie",
  },
  {
    title: "Nikola Šuhaj loupežník",
    author: "Olbracht",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Romwo, Julie a tma",
    author: "Otčenášek",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Smrt krásných srnců",
    author: "Pavel",
    century: "20.c",
    genre: "próza",
  },
  { title: "Bylo nás pět", author: "Poláček", century: "20.c", genre: "próza" },
  { title: "Maminka", author: "Seifert", century: "20.c", genre: "poezie" },
  { title: "Smuténka", author: "Skácel", century: "20.c", genre: "poezie" },
  {
    title: "Dobytí severního pólu",
    author: "Smoljak, Svěrák",
    century: "20.c",
    genre: "drama",
  },
  { title: "Zmizet", author: "Soukopová", century: "20.c", genre: "próza" },
  { title: "Zbabělci", author: "Škvorecký", century: "20.c", genre: "próza" },
  {
    title: "Vyhnání Gerty Schnirch",
    author: "Tučková",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Markéta Lazarová",
    author: "Vančura",
    century: "20.c",
    genre: "próza",
  },
  {
    title: "Báječná léta pod psa",
    author: "Viewegh",
    century: "20.c",
    genre: "próza",
  },
  { title: "Těžká hodina", author: "Wolker", century: "20.c", genre: "poezie" },
  {
    title: "Znamení moci",
    author: "Zahradníček",
    century: "20.c",
    genre: "próza",
  },
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
                    <p><label><input type="checkbox" value="Flaubert" class="author">Flaubert</label></p>
                    <p><label><input type="checkbox" value="Gogol" class="author">Gogol</label></p>
                    <p><label><input type="checkbox" value="Havlíček" class="author">Havlíček</label></p>
                    <p><label><input type="checkbox" value="Hugo" class="author">Hugo</label></p>
                    <p><label><input type="checkbox" value="Mácha" class="author">Mácha</label></p>
                    <p><label><input type="checkbox" value="Maupassant" class="author">Maupassant</label></p>
                    <p><label><input type="checkbox" value="Mrštíkové" class="author">mrštíkové</label></p>
                    <p><label><input type="checkbox" value="Němcová" class="author">Němcová</label></p>
                    <p><label><input type="checkbox" value="Neruda" class="author">Neruda</label></p>
                    <p><label><input type="checkbox" value="Poe" class="author">Poe</label></p>
                    <p><label><input type="checkbox" value="Puškin" class="author">Puškin</label></p>
                    <p><label><input type="checkbox" value="Rais" class="author">Rais</label></p>
                    <p><label><input type="checkbox" value="Sienkiewicz" class="author">Sienkiewicz</label></p>
                    <p><label><input type="checkbox" value="Světlá" class="author">Světlá</label></p>
                    <p><label><input type="checkbox" value="Tolsoj" class="author">Tolsoj</label></p>
                    <p><label><input type="checkbox" value="Tyl" class="author">Tyl</label></p>
                    <p><label><input type="checkbox" value="Wilde" class="author">Wilde</label></p>
                    <p><label><input type="checkbox" value="Zola" class="author">Zola</label></p>
                    <p><label><input type="checkbox" value="Ajtmatov" class="author">Ajtmatov</label></p>
                    <p><label><input type="checkbox" value="Beckett" class="author">Beckett</label></p>
                    <p><label><input type="checkbox" value="Camus" class="author">Camus</label></p>
                    <p><label><input type="checkbox" value="Eco" class="author">Eco</label></p>
                    <p><label><input type="checkbox" value="Exupery" class="author">Exupery</label></p>
                    <p><label><input type="checkbox" value="Fitzgerland" class="author">Fitzgerland</label></p>
                    <p><label><input type="checkbox" value="Green" class="author">Green</label></p>
                    <p><label><input type="checkbox" value="Heller" class="author">Heller</label></p>
                    <p><label><input type="checkbox" value="Hermingway" class="author">Hermingway</label></p>
                    <p><label><input type="checkbox" value="Herbert" class="author">Herbert</label></p>
                    <p><label><input type="checkbox" value="Hosseini" class="author">Hosseini</label></p>
                    <p><label><input type="checkbox" value="Kafka" class="author"></label>Kafka</p>
                    <p><label><input type="checkbox" value="Keyes" class="author">Keyes</label></p>
                    <p><label><input type="checkbox" value="Moravia" class="author">Moravia</label></p>
                    <p><label><input type="checkbox" value="Oksanen" class="author">Oksanen</label></p>
                    <p><label><input type="checkbox" value="Orwell" class="author">Orwell</label></p>
                    <p><label><input type="checkbox" value="Ramarque" class="author">Ramarque</label></p>
                    <p><label><input type="checkbox" value="Rolland" class="author">Rolland</label></p>
                    <p><label><input type="checkbox" value="Shaw" class="author">Shaw</label></p>
                    <p><label><input type="checkbox" value="Solženicyn" class="author">Solženicyn</label></p>
                    <p><label><input type="checkbox" value="Steinbeck" class="author">Steinbeck</label></p>
                    <p><label><input type="checkbox" value="Stayron" class="author">Stayroh</label></p>
                    <p><label><input type="checkbox" value="Tolkien" class="author">Tolkien</label></p>
                    <p><label><input type="checkbox" value="Waltari" class="author">Waltari</label></p>
                    <p><label><input type="checkbox" value="Williams" class="author">Williams</label></p>
                    <p><label><input type="checkbox" value="Balabán" class="author">Balabán</label></p>
                    <p><label><input type="checkbox" value="Bezruč" class="author">Bezruč</label></p>
                    <p><label><input type="checkbox" value="Čapek" class="author">Čapek</label></p>
                    <p><label><input type="checkbox" value="Dyk" class="author">Dyk</label></p>
                    <p><label><input type="checkbox" value="Fishl" class="author">Fishl</label></p>
                    <p><label><input type="checkbox" value="Fuks" class="author">Fuks</label></p>
                    <p><label><input type="checkbox" value="Hájíček" class="author">Hájíček</label></p>
                    <p><label><input type="checkbox" value="Havel" class="author">Havel</label></p>
                    <p><label><input type="checkbox" value="Havlíček" class="author">Havlíček</label></p>
                    <p><label><input type="checkbox" value="Hrabal" class="author">Hrabal</label></p>
                    <p><label><input type="checkbox" value="Jirous" class="author">Jipous</label></p>
                    <p><label><input type="checkbox" value="John" class="author">John</label></p>
                    <p><label><input type="checkbox" value="Kryl" class="author">Kryl</label></p>
                    <p><label><input type="checkbox" value="Kundera" class="author">Kundera</label></p>
                    <p><label><input type="checkbox" value="Legátová" class="author">Legátová</label></p>
                    <p><label><input type="checkbox" value="Lustig" class="author"></label>Lustig</p>
                    <p><label><input type="checkbox" value="Mornštajnová" class="author">Mornštajnová</label></p>
                    <p><label><input type="checkbox" value="Nezval" class="author">Nezval</label></p>
                    <p><label><input type="checkbox" value="Oblracht" class="author">Oblracht</label></p>
                    <p><label><input type="checkbox" value="Otčenášek" class="author">Otčenášek</label></p>
                    <p><label><input type="checkbox" value="Pavel" class="author">Pavel</label></p>
                    <p><label><input type="checkbox" value="Poláček" class="author">Poláček</label></p>
                    <p><label><input type="checkbox" value="Seifert" class="author">Seifert</label></p>
                    <p><label><input type="checkbox" value="Skácel" class="author">Skácel</label></p>
                    <p><label><input type="checkbox" value="Smoljak, Svěrák" class="author">Smoljak, Svěrák</label></p>
                    <p><label><input type="checkbox" value="Soukupová" class="author">Soukupová</label></p>
                    <p><label><input type="checkbox" value="Škvorecký" class="author">Škvorecký</label></p>
                    <p><label><input type="checkbox" value="Tučková" class="author">Tučková</label></p>
                    <p><label><input type="checkbox" value="Vančura" class="author">Vančura</label></p>
                    <p><label><input type="checkbox" value="Viewegh" class="author">Viewegh</label></p>
                    <p><label><input type="checkbox" value="Wolker" class="author">Wolker</label></p>
                    <p><label><input type="checkbox" value="Zahraníček" class="author">Zahradníček</label></p>
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
  const selectedCenturies = [
    ...document.querySelectorAll(".century:checked"),
  ].map((el) => el.value);
  const selectedGenres = [...document.querySelectorAll(".genre:checked")].map(
    (el) => el.value,
  );
  const selectedAuthors = [...document.querySelectorAll(".author:checked")].map(
    (el) => el.value,
  );

  const results = books.filter((book) => {
    return (
      (selectedCenturies.length === 0 ||
        selectedCenturies.includes(book.century)) &&
      (selectedGenres.length === 0 || selectedGenres.includes(book.genre)) &&
      (selectedAuthors.length === 0 || selectedAuthors.includes(book.author))
    );
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

  list.forEach((book) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <button class="add-btn" data-title="${book.title}">Přidat</button>
            <strong>${book.title}</strong> - ${book.author}, ${book.genre}
        `;
    container.appendChild(div);
  });

  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.dataset.title;
      const selectedBook = books.find((b) => b.title === title);
      addToList(selectedBook);
    });
  });
}

document.getElementById("searchInput").addEventListener("input", () => {
  const query = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  const results = books.filter((book) =>
    book.title.toLowerCase().includes(query),
  );

  renderBooks(results);
});



function addToList(book) {
  const listContainer = document.getElementById("list");

  const authorBooks = [...listContainer.children].filter(
    (div) => div.dataset.author === book.author,
  );

  if (listContainer.children.length >= 20) {
    alert("K maturitě dvacet knížek stačí ;)");
    return;
  }

  if (authorBooks.length >= 2) {
    alert(`Od jednoho autora můžete přidat jenom dvě knížky.`);
    return;
  }

  if (
    [...listContainer.children].some((div) => div.dataset.title === book.title)
  )
    return;

  const div = document.createElement("div");
  div.dataset.title = book.title;
  div.dataset.author = book.author;
  div.innerHTML = `
        <button class="remove-btn">X</button>
        <strong>${book.title}</strong> - ${book.author}
    `;

  div.querySelector(".remove-btn").addEventListener("click", () => {
    div.remove();
    removeFromLocalStorage(book.title);
  });

  listContainer.appendChild(div);

  addBook(book.title)

  updateRequirements();

}

function renderAllBooks() {
  const container = document.getElementById("results");
  container.innerHTML = ""; 

  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book-item";
    div.innerHTML = `
      <button onclick='addToList(${JSON.stringify(book)})'>Přidat</button>
      <strong>${book.title}</strong> – ${book.author},
      ${book.genre}
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllBooks();
  loadListHTML(); 
});


function updateRequirements() {
  const listBooks = [...document.querySelectorAll("#list > div")];
  const genreCount = {
    poezie: 0,
    próza: 0,
    drama: 0,
  };
  const centuryCount = {
    "18.": 0,
    "19.": 0,
    "20.": 0,
    "20.c": 0,
  };

  listBooks.forEach((bookDiv) => {
    const bookTitle = bookDiv.dataset.title?.trim().toLowerCase();
    const bookData = books.find(
      (b) => b.title.trim().toLowerCase() === bookTitle,
    );

    if (bookData) {
      if (bookData.genre) genreCount[bookData.genre]++;
      if (bookData.century === "18.") centuryCount["18."]++;
      else if (bookData.century === "19.") centuryCount["19."]++;
      else if (bookData.century === "20.") centuryCount["20."]++;
      else if (bookData.century === "20.c") centuryCount["20.c"]++;
    }
  });

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
            <p>20. a 21. století (celosvětově): zbývá ${Math.max(0, 4 - centuryCount["20."])}</p>
            <p>20. a 21. století (Česko): zbývá ${Math.max(0, 5 - centuryCount["20.c"])}</p>
        </ul>
    `;
}

function addBook(title) {
//   const list = document.getElementById("list");
  const div = document.createElement("div");
  div.dataset.title = title;
  div.textContent = title;
//   list.appendChild(div);
  updateRequirements();
}

document.addEventListener("DOMContentLoaded", () => {
  updateRequirements();
});
