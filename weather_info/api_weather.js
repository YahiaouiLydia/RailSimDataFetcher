const axios = require('axios');
const updateDataset = require('./updateCSV');

// Fonction pour récupérer les données de l'API et mettre à jour le dataset
function api_weather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get("http://localhost:2150/API/HUD/8")
            .then(response => {
                // Vérifier si la requête a réussi
                if (response.status === 200) {
                    var extraTable = response.data.extraTable;
                   
                    updateDataset(extraTable);
                    
                } else {
                    console.error("Erreur: " + response.status);
                }
            })
            .catch(error => {
                console.error("Une erreur s'est produite: ", error);
            });
            resolve();
        }, 1500); // Simuler une opération asynchrone
    });
    
   
}


module.exports = api_weather;