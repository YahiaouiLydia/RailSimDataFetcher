const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '../.env' });
const createCSV = require('./createCSV');

function updateDataset(lat,lon,directionDeg) {
    const filePath = "C:\\Users\\maite\\OneDrive\\Bureau\\\Datasets\\dataset_position.csv";

    // Vérifiez si le fichier existe
    const fileExists = fs.existsSync(filePath);

    // Ajoutez les valeurs si le fichier existe
    if (fileExists) {
        let csvContent = '';

        // Lire le contenu actuel du fichier
        const existingContent = fs.readFileSync(filePath, 'utf8');
        csvContent += existingContent;
        csvContent += `${lat},${lon},${directionDeg}`;
       
        csvContent += '\n';

        // Écrire dans le fichier
        fs.writeFileSync(filePath, csvContent);
    }else{
        createCSV()
   
    }
}




module.exports = updateDataset;
