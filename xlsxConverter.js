

const XlsxPopulate = require('xlsx-populate');
const fs = require('fs');


function xlsxConverter(jsonFolder, xlsxFolder, callback){
    
    fs.readdir(jsonFolder, (err, files) => {

        var obj;

        // xlsx-populate - создвние объекта
        XlsxPopulate.fromBlankAsync().then(workbook => {

            var jsonArray = [];

            // цикл по файлам .json в папке ./files
            for (var i=0; i<files.length; i++){

                // чтение кажд из этих файлов
                fs.readFile('./files/' + files[i], function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                
                        obj = JSON.parse(data);                
                        jsonArray.push(JSON.stringify(obj));


                        workbook.sheet("Sheet1").cell("A1").value([jsonArray]);
                        workbook.toFileAsync(xlsxFolder + "out.xlsx");


                        callback();

                    }
                })
            }

        })  

    })


}



xlsxConverter("./files/", "./", function(){
    console.log("xlsx file was succesfull created");
});