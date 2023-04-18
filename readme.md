<h1 style="text-align: center;">DMShop- Platforma de e-commerce</h1>
<p>Descarcati aplicatia, introduceti folderul in VsCode si executati comanda de mai jos:</p>
<code>npm run dev</code>
<p>Cont admin:admin@admin.com Password:123456</p>
<p>Cont User:dragos@gmail.com Password:123456</p>

<h3>Descriere</h3>
<p>DMShop este o platforma de e-commerce care permite utilizatorilor sa navigheze prin produsele din magazin, sa adauge produse in cosul de cumparaturi si sa finalizeze comanda.</p>
<h3>Tehnologii folosite</h3>
<h5>Frontend:</h5>
<p> <b>React:</b>o biblioteca JavaScript pentru crearea de interfete de utilizator.</p>
<p> <b>React-Bootstrap:</b> un set de componente pentru React, bazat pe framework-ul Bootstrap.</p>
<p> <b>React-Router:</b> o biblioteca pentru rutarea paginilor in React.</p>
<p> <b>Redux(si pe partea de backend):</b>o biblioteca open-source pentru managementul starii aplicatiei.</p>

<h5>Backend:</h5>
<p><b>Node.js:</b> Un mediu de rulare JavaScript construit pe motorul V8 de la Chrome, folosit pentru a crea aplicatii back-end.</p>
<p><b>Express.js:</b> Un cadru usor de utilizat pentru Node.js, care simplifica dezvoltarea serverului si rutarea.</p>
<p><b>MongoDB:</b> O baza de date NoSQL scalabila si flexibila, care stocheaza date intr-un format similar JSON.</p>
<p><b>Mongoose:</b> Un ODM (Object Data Modeling) pentru MongoDB, care simplifica lucrul cu baze de date.</p>
<p><b>JSON Web Tokens (JWT):</b> Un standard deschis pentru a transmite informatii intre partile implicate intr-un format JSON compact.</p>
<h3>Structura:</h3>
<h5>Frontend:</h5>
<p><b>actions:</b> contine actiunile care sunt apelate in interactiunea utilizatorului cu aplicatia.</p>
<p><b>components:</b> contine componente React reutilizabile pentru a construi interfata de utilizator.</p>
<p><b>constants:</b> contine constante utilizate pentru a defini tipurile actiunilor.</p>
<p><b>reducers:</b> contine reduceri care gestioneaza starea aplicatiei si actualizeaza componentele corespunzatoare.</p>
<p><b>screens:</b> contine componente React care reprezinta paginile aplicatiei.</p>
<p><b>store.js:</b> contine configurarea magazinului Redux( care a fost folosit pentru a gestiona starea globala a aplicatiei si pentru a face schimbul de informatii intre diferite componente mai usor si mai eficient.)</p>
<p><b>App.js:</b> Fisierul principal al aplicatiei React, care definește rutarea si navigarea intre diferitele componente ale aplicatiei.</p>

Backend:

<p>Aplicatia web este impartita in mai multe parti esentiale, care includ:</p>

<p><b>Controllers:</b> Aceste fisiere gestioneaza logica si datele aplicatiei.</p>
<p><b>Data:</b> Fisierele care contin datele predefinite pentru aplicatie, precum produsele si utilizatorii.</p>
<p><b>Middleware:</b> Functiile care sunt apelate inaintea executarii controlerelor, pentru a prelucra datele sau a gestiona autentificarea.</p>
<p><b>Models:</b> Schema bazei de date si structura documentelor MongoDB.</p>
<p><b>Routes:</b> Rutarea si organizarea diferitelor cereri API.</p>
<p><b>server.js:</b> fisierul principal din backend-ul aplicatiei si este responsabil pentru pornirea serverului si gestionarea rutelelor HTTP.</p>

<h5>Comunicarea cu backend-ul</h5>
<p>Comunicarea cu backend-ul este gestionata prin intermediul actiunilor din directorul "actions". Actiunile efectueaza cereri HTTP catre API-ul backend-ului folosind biblioteca "axios". Dupa ce raspunsul este primit, actiunile actualizeaza starea aplicatiei prin apelarea reducer-ilor corespunzatori. De exemplu, actiunea "addToCart" efectueaza o cerere GET pentru a obtine informatiile despre un produs si apoi adauga produsul in cosul de cumparaturi prin apelarea reducer-ului "cartReducer".</p>
