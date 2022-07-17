# Automated emails from this sample NodeJs app
This project allow you to send automated email to a Gmail account from your nodejs app 

## How to use this app
- First, `create a New folder` in your local machine with whatsoever name you like. e.g "AUTOMATED_EMAIL", and then `change to this new folder`. You can do this by using the code in the code block below:
    ```js
    mkdir AUTOMATED_EMAIL

    cd AUTOMATED_EMAIL
    ```
- Next, `Clone` this repo using the code below:
    ```js
    // This clones the repo to your current directory so make sure you

    git clone https://github.com/Oisavictor/Automated_emails_NodeJs.git .
    ```
- Next, you would need to create a `.env file` in the root folder that would contain your secret credentials see sample code that should be contained therein.
    ```js
    PORT = <Port_number> // should be the port for your server (e.g  PORT = 3500)

    PASSWORD = <user_smtp_api_key> // should look like this (e.g eb7896b46d2f2853545c6beb26a57734-18e06deb-da2be9ee)

    USER = <user_Domain.com> // gotten from your SMTP service provider (e.g user8@sandbox442e34537563448f8231d8e6fcca3789.mailgun.org)
    
    ```
- Next, initialize the project and install all required dependencies
    ```js
    // Installing all the necessary dependencies.

    npm install // note: nodejs has to be installed on your local machine to be able to run the npm command
    ```

## Running the Starting the server
Once the project is all setup

Run the command from your integrated terminal to start the application server.
```js
npm run dev // because this is a testing and not production 
```
This would start the app and a confirmation result should look like this
```js
> nodemailerproject@1.0.0 dev
> nodemon index.js
[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
nodemailerProject is listening at http://localhost:3500
```
This verifies that your node sever is up and running and you don't have any error with your code.

finally, To send emails you would have to enter the desired email message details in the index.js file, under the mailOptions object. So for the from, to subject and message .

## Results of sent messages
 This is a screenshot of the message confirmation i got when I sent a message titled Nodemailer Project
 <img scr="">