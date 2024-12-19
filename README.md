# QR Code Generator

This is a simple Node.js application that generates a QR code image from a user-provided URL and saves the URL in a text file.

## Features
- Prompts the user to input a URL.
- Generates a QR code image for the provided URL.
- Saves the QR code image as `qr_img.png`.
- Saves the provided URL in a `url.txt` file.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/vctrwgnr/qr-code-generator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd qr-code-generator
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```

## Usage
1. Run the application:
    ```sh
    node index.js
    ```
2. When prompted, type in your URL and press Enter:
    ```
    Type in your URL: https://example.com
    ```

3. The application will generate a QR code image (`qr_img.png`) and save the URL in a text file (`url.txt`).

## Dependencies
- [inquirer](https://www.npmjs.com/package/inquirer): A collection of common interactive command-line user interfaces.
- [qr-image](https://www.npmjs.com/package/qr-image): A QR code generator module for Node.js.
- [fs](https://nodejs.org/api/fs.html): A module that provides an API for interacting with the file system.

## Error Handling
- If the prompt cannot be rendered in the current environment, an error message will be displayed.
- Other unexpected errors will also be caught and logged to the console.

## Contributing
If you would like to contribute to this project, feel free to open a pull request or submit an issue on the GitHub repository.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

