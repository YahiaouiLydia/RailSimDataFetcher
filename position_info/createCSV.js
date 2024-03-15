const fs = require('fs');
const path = require('path');


function createCSV() {

    let csvContent = '';
    
    csvContent += `latitude,longitude,DirectionDeg`;
    csvContent += '\n';

 

    // Obtenez le chemin du répertoire
    const outputFolderPath = "C:\\Users\\maite\\OneDrive\\Bureau\\\Datasets\\";

    console.log(outputFolderPath)
    // Vérifiez si le répertoire existe, sinon, créez-le
    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
    }

    // Écrire dans le fichier
    const filePath = path.join(outputFolderPath, 'dataset_position.csv');
    fs.writeFileSync(filePath, csvContent);
}

module.exports = createCSV;
