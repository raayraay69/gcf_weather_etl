

//importing the packages
const{Storage} = require(`@google-cloud/storage`);
const csv = require(`csv-parser`);



exports.readObservation = (file, context) => {
    // console.log(`  Event: ${context.eventId}`);
    // console.log(`  Event Type: ${context.eventType}`);
    // console.log(`  Bucket: ${file.bucket}`);
    // console.log(`  File: ${file.name}`);

//connecting the the google storage
    const gcs = new Storage();

    //create a variable to get contents of the file itself
    const dataFile = gcs.bucket(file.bucket).file(file.name);



    //read the data as a string (open and read then close the file ) works good for small files 
    //if they were larger dont go this route 
    dataFile.createReadStream()
    .on(`error`, () => {//handle the error
    
        console.error(error); //will output to the console
    
    })
     //this function will run if read string gives us error
        //if it passes the error check 
        .pipe(csv()) //allows you to read the file

        //when getting data pass it to 'row' and log it to the console
    .on(`data`, (row) => {
            //log row data
            concole.log(row);
        })

    .on(`end`, () => {


        concole.log(`End!`);
    })

    //helper function 
    function printDict(row)
    {
//for each column in the row it will create its own console entry

for(let key in row) {
    console.log(Key + `:` + row[key]);
console.log(`${key} : ${row[key]}`);
        }

        }

}