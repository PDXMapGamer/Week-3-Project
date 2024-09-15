Week 3 project - Build a cookie clicker

Cookie Clicker Game:
The purpose of the cookie clicker game is to gain cookie by clicking the master cookie and passively by generating cookie tax-free income by investing into upgrades.
You can play the game by clicking the link in the about me section or you can click on one of the files to have a peek at the code I written.

#TODO: make size of button scale to the size of browser AND make it not overflow from the button

Bug 1: setInterval only execute once. Solution: wrote =+ (= + after prettier autoformat) which set total cookies to be equal to CPS instead of incrementally adding it on
Bug 2: Null error upon loading page on github. Solution: it was caused by JavaScript trying to read data from local storage that does not exist if the user has never been on the site before. because of the error the rest of the site is broken, permanently softlocking new users out of the site. Try-Catch block should fix this error.
Bug 3: console.log of length of the shopUpgrades array gave differant values when called in different functions, despite it being a global variable and haven't changed values between the 2 logs. I have no solution to this bug and I had to find an alternative way to do what I intended (dynamically make a grid with number of rows equal to one more than the number of objects in the API)

    🐿️ As a developer, I want to use a single function to handle all upgrades, so that the code is more organized and easier to maintain. #DONE
    🐿️ As a user, I want the game to include animations, sound effects, or other visual effects, so that my experience is more engaging and enjoyable. #TODO
    🐿️ As a developer, I want the README to provide a clear project description, deployment instructions, and other relevant information, so that it’s easy to understand and use the project. #DONE
    🐿️ As a user, I want the game to handle errors well, so that I have a smooth experience even when something goes wrong. #DONE
    🐿️ As a user, I want a menu to adjust game options like sound effects and display preferences, so that I can customize the game to my liking. #TODO

Resources:
https://cssgrid-generator.netlify.app/ helped with creating the exact grid I want.
https://masteringjs.io/tutorials/fundamentals/foreach-object As I can't forEach an object this gave me an alternative to do what I was aiming for
