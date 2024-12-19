import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {"message": "Type in your URL: ", name: "URL"}
    ])
    .then((answers) => {
        /*console.log(answers);*/
        const url = answers.URL;
        let qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));
        fs.writeFile('url.txt', url, (err) => {
            if (err) throw err;
            console.log('Saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment.");
        } else {
            console.error("An unexpected error occurred:", error);
        }
    });





