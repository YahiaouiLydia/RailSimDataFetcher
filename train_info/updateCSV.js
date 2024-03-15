const fs = require('fs');
const path = require('path');
const createCSV = require('./createCSV');
require('dotenv').config({ path: '../.env' });
function updateDataset(commonTable) {
    const filePath = "C:\\Users\\maite\\OneDrive\\Bureau\\\Datasets\\dataset_train.csv";

    // Vérifiez si le fichier existe
    const fileExists = fs.existsSync(filePath);

    // Ajoutez les valeurs si le fichier existe
    if (fileExists) {
        let csvContent = '';

        // Lire le contenu actuel du fichier
        const existingContent = fs.readFileSync(filePath, 'utf8');
        csvContent += existingContent;

        // Ajouter les valeurs
        for (let i = 0; i < commonTable.values.length; i += 3) {
            let value = commonTable.values[i + 2];
            
                csvContent += `"${value}",`;
            
        }
        csvContent += '\n';

        // Écrire dans le fichier
        fs.writeFileSync(filePath, csvContent);
    }else{
        createCSV(commonTable);
   
    }
}




module.exports = updateDataset;
