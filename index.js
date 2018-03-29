var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf8', function(err, data) {
    if (err) throw err;
    fs.writeFile('struktura.txt', data, function(err) {
        if (err) throw err;
        console.log('Pomyslnie zapisano!'.green);
        fs.readFile('./struktura.txt', 'utf8', function(err, data) {
            console.log("Folder zawiera nastepujace pliki: \n".cyan + data); 
        });
    });
});


