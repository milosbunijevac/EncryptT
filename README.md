#Attention
ATTENTION: Expiration date cannot be set as the current date or else the message will have already expired.
Choose a date in the future.

---------------------------------------------------

#Encryption

To operate, first navigate to the project directory and run `npm install`. 
Once modules have been installed, run `npm start`.

First, click the Generate new Passphrase button in order to generate a passphrase.
Enter name, message, and click Encrypt to get your encoded message.

Refresh page and select Decrypt, then paste your passphrase into the field and select decrypt. 
The decrypted message (assuming it hasn't expired) will show up in the message field. If not, an alert window
will pop up indicating that the message is invalid or has expired.

If you would like to decrypt a message with a specific passphrase, enter the passphrase into the url like so:
http://localhost:3000/#{passphrase} without the brackets and hit enter. The entered passphrase will show up
next to "Your passphrase - " at the bottom of the window. NOTE: You may have to hit enter twice while in
the address bar for your passphrase to show up at the bottom of the window.