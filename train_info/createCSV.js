const fs = require('fs');
const path = require('path');
require('dotenv').config();
function createCSV(commonTable) {
    let csvContent = '';

    // Ajouter les étiquettes de colonne
    for (let i = 0; i < commonTable.values.length; i += 3) {
        let label = commonTable.values[i];
       
            csvContent += `"${label}",`;
        
    }
    csvContent += '\n';

 

    // Obtenez le chemin du répertoire
    const outputFolderPath ="C:\\Users\\maite\\OneDrive\\Bureau\\\Datasets\\";

    // Vérifiez si le répertoire existe, sinon, créez-le
    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
    }

    // Écrire dans le fichier
    const filePath = path.join(outputFolderPath, 'dataset_train.csv');
    fs.writeFileSync(filePath, csvContent);
}

module.exports = createCSV;
