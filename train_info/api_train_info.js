const axios = require('axios');
const updateDataset = require('./updateCSV');

// Fonction pour récupérer les données de l'API et mettre à jour le dataset
function api_train_info() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get("http://localhost:2150/API/HUD/1")
        .then(response => {
            // Vérifier si la requête a réussi
            if (response.status === 200) {
                var commonTable = response.data.commonTable;
                updateDataset(commonTable);
            } else {
                console.error("Erreur: " + response.status);
            }
        })
        .catch(error => {
            console.error("Une erreur s'est produite: ", error);
        });
      
            resolve();
        }, 2500); // Simuler une opération asynchrone
    });
}

// // Appeler fetchDataAndUpdateDataset toutes les 30 secondes
// setInterval(api_train_info, 30000);
module.exports = api_train_info;

