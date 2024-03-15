const axios = require('axios');
const updateDataset = require('./updateCSV');

function api_position(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get("http://localhost:2150/API/MAP")
            .then(response => {
                // Vérifier si la requête a réussi
                if (response.status === 200) {
        
            // Supposons que response.data contient les données fournies
    
                    const lat = response.data.LatLon.Lat;
                    const lon = response.data.LatLon.Lon;
                    const directionDeg = response.data.DirectionDeg;
                    updateDataset(lat,lon,directionDeg)
    
    
                  
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

// // Appeler fetchDataAndUpdateDataset toutes les 30 secondes
// setInterval(fetchDataAndUpdateDatasetPosition, 3000);
module.exports = api_position;