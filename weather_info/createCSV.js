const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '../.env' });



function createCSV() {

    let csvContent = '';
    
    csvContent += `null,WEATHER INFORMATION,Visibility,Cloud cover,Intensity,Liquidity,Wind,Amb Temp,nulll`;
    csvContent += '\n';

 

    // Obtenez le chemin du répertoire

    const outputFolderPath = "C:\\Users\\maite\\OneDrive\\Bureau\\\Datasets\\";


    // Vérifiez si le répertoire existe, sinon, créez-le
    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
    }

    // Écrire dans le fichier
    const filePath = path.join(outputFolderPath, 'dataset_weather.csv');
    fs.writeFileSync(filePath, csvContent);

}

module.exports = createCSV;
