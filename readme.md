<h1 style="text-align: center;">DMShop- Platforma de e-commerce</h1>
<p>Pentru a testa aplicatia poti accesa link-ul acesta: <a href="https://dmshop.herokuapp.com/">Click here</a>
<h3>Descriere</h3>
<p>DMShop este o platforma de e-commerce care permite utilizatorilor sa navigheze prin produsele din magazin, sa adauge produse in cosul de cumparaturi si sa finalizeze comanda.</p>
<h3>Tehnologii folosite</h3>
<h5>Frontend:</h5>
<b>React:</b> o biblioteca JavaScript pentru crearea de interfete de utilizator.
<b>React-Bootstrap:</b> un set de componente pentru React, bazat pe framework-ul Bootstrap.
<b>React-Router:</b> o biblioteca pentru rutarea paginilor in React.
<b>Redux(si pe partea de backend):</b>o biblioteca open-source pentru managementul starii aplicatiei.

<h5>Backend:</h5>
<b>Node.js:</b> Un mediu de rulare JavaScript construit pe motorul V8 de la Chrome, folosit pentru a crea aplicatii back-end.
<b>Express.js:</b> Un cadru usor de utilizat pentru Node.js, care simplifica dezvoltarea serverului si rutarea.
<b>MongoDB:</b> O baza de date NoSQL scalabila si flexibila, care stocheaza date intr-un format similar JSON.
<b>Mongoose:</b> Un ODM (Object Data Modeling) pentru MongoDB, care simplifica lucrul cu baze de date.
<b>JSON Web Tokens (JWT):</b> Un standard deschis pentru a transmite informatii intre partile implicate intr-un format JSON compact.
<h3>Structura:</h3>
<h5>Frontend:</h5>
<b>actions:</b> contine actiunile care sunt apelate in interactiunea utilizatorului cu aplicatia.
<b>components:</b> contine componente React reutilizabile pentru a construi interfata de utilizator.
<b>constants:</b> contine constante utilizate pentru a defini tipurile actiunilor.
<b>reducers:</b> contine reduceri care gestioneaza starea aplicatiei si actualizeaza componentele corespunzatoare.
<b>screens:</b> contine componente React care reprezinta paginile aplicatiei.
<b>store.js:</b> contine configurarea magazinului Redux( care a fost folosit pentru a gestiona starea globala a aplicatiei si pentru a face schimbul de informatii intre diferite componente mai usor si mai eficient.)
<b>App.js:</b> Fisierul principal al aplicatiei React, care definește rutarea si navigarea intre diferitele componente ale aplicatiei.

Backend:
Aplicatia web este impartita in mai multe parti esentiale, care includ:

<b>Controllers:</b> Aceste fisiere gestioneaza logica si datele aplicatiei.
<b>Data:</b> Fisierele care contin datele predefinite pentru aplicatie, precum produsele si utilizatorii.
<b>Middleware:</b> Functiile care sunt apelate inaintea executarii controlerelor, pentru a prelucra datele sau a gestiona autentificarea.
<b>Models:</b> Schema bazei de date si structura documentelor MongoDB.
<b>Routes:</b> Rutarea si organizarea diferitelor cereri API.
<b>server.js:</b> fisierul principal din backend-ul aplicatiei si este responsabil pentru pornirea serverului si gestionarea rutelelor HTTP.

<h5>Comunicarea cu backend-ul</h5>
Comunicarea cu backend-ul este gestionata prin intermediul actiunilor din directorul "actions". Actiunile efectueaza cereri HTTP catre API-ul backend-ului folosind biblioteca "axios". Dupa ce raspunsul este primit, actiunile actualizeaza starea aplicatiei prin apelarea reducer-ilor corespunzatori. De exemplu, actiunea "addToCart" efectueaza o cerere GET pentru a obtine informatiile despre un produs si apoi adauga produsul in cosul de cumparaturi prin apelarea reducer-ului "cartReducer".
