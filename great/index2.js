var FileSystem = require('fileSystem');

const fileName = __dirname + '/../data/text.txt';
FileSystem.createNewfile(fileName);

let jsonObject = {
    food : [
        {
            foodName : "Cream Tea",
            foodDepcription : "This is a cup of tea",
        },
        {
            foodName : "Careman Tra Xanh",
            foodDepcription : "Very good"
        }
    ],
    resultCode : 200,
    restaurantName : "BBQ club"
};

FileSystem.saveJsonObjecttoFile(jsonObject,fileName);