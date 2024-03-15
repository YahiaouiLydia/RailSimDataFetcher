const api_position = require('./position_info/api_position');
const api_train_info = require('./train_info/api_train_info');
const api_weather = require('./weather_info/api_weather');

// Définissez une fonction qui appelle les trois fonctions en parallèle
function fetchDataAndUpdateDatasets() {
    Promise.all([
      api_position(),
        api_train_info(),
      api_weather()
    ]).then(() => {
        console.log("Les trois fonctions ont été exécutées avec succès.");
    }).catch(error => {
        console.error("Une erreur s'est produite lors de l'exécution des fonctions:", error);
    });
}

// Appelez cette fonction toutes les 30 secondes
setInterval(fetchDataAndUpdateDatasets, 30000);
