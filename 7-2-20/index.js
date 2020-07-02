const fs = require('fs');
const papa = require('papaparse');

const filepath = 'cs448b_ipasn.csv';
const stream = fs.createReadStream(filepath);

let count = 0; // cache the running count
papa.parse(stream, {
    worker: true,
    step: function(result) {
        // do stuff with result
        count++;
    },
    complete: function(results, file) {
        console.log(`Parsing ${filepath} complete read ${count} records.`); 
    }
});