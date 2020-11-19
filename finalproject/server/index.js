const bodyParser = require('body-parser');
const express = require('express');
var routes = require("./routes.js");
const cors = require('cors');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ---------------------------------------------------------------- */
/* ------------------- Route handler registration ----------------- */
/* ---------------------------------------------------------------- */




/* ---- (Dashboard) ---- */
// The route localhost:8081/genres is registered to the function
// routes.getAllGenres, specified in routes.js.
app.get('/genres', routes.getAllGenres);

app.get('/first10Categories', routes.testGetCategories);






/* ---- Q1b (Dashboard) ---- */
app.get('/genres/:genre', () => {}); // Hint: Replace () => {} with the appropriate route handler.








/* ---- Q2 (Recommendations) ---- */






/* ---- (Best Genre) ---- */
app.get('/decades', routes.getDecades);






/* ---- Q3b (Best Genre) ---- */








app.listen(8081, () => {
	console.log(`Server listening on PORT 8081`);
});