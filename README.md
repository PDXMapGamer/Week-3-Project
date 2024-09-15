Week 3 project - Build a cookie clicker

Cookie Clicker Game:
The purpose of the cookie clicker game is to gain cookie by clicking the master cookie and passively by generating tax-free cookiencome by investing into upgrades.
You can play the game by clicking the link in the about me section or you can click on one of the files to have a peek at the code I written.

Overall the project ended up being a sucess with only minor flaws need polishing before the only next steps are to increase the scope of the game or redesign my stylings to be more aesthetically pleasing. Minor improvements include fixing the button click sound effect to play immediately instead of a short delay and saving user preferences in local storage so when the user reloads the page their preferred options stay maintained.

    🎯 What requirements did you achieve?
    I have achieved all the requirements and stretch goals
    🎯 Were there any requirements or goals that you were unable to achieve?
    As far as I am aware of, no.
    🎯 If so, what was it that you found difficult about these tasks?
    Some requirements ended up being difficult due to some bugs I ran into.

Bug 1: setInterval only execute once. Solution: wrote =+ (= + after prettier autoformat) which set total cookies to be equal to CPS instead of incrementally adding it on
Bug 2: Null error upon loading page on github. Solution: it was caused by JavaScript trying to read data from local storage that does not exist if the user has never been on the site before. because of the error the rest of the site is broken, permanently softlocking new users out of the site. Try-Catch block should fix this error.
Bug 3: console.log of length of the shopUpgrades array gave differant values when called in different functions, despite it being a global variable and haven't changed values between the 2 logs. I have no solution to this bug and I had to find an alternative way to do what I intended (dynamically make a grid with number of rows equal to one more than the number of objects in the API, so if more items were added or changed, it would automatically update when the user loads the page again.)

    🐿️ As a developer, I want to use a single function to handle all upgrades, so that the code is more organized and easier to maintain. #DONE
    🐿️ As a user, I want the game to include animations, sound effects, or other visual effects, so that my experience is more engaging and enjoyable. #DONE
    🐿️ As a developer, I want the README to provide a clear project description, deployment instructions, and other relevant information, so that it’s easy to understand and use the project. #DONE
    🐿️ As a user, I want the game to handle errors well, so that I have a smooth experience even when something goes wrong. #DONE
    🐿️ As a user, I want a menu to adjust game options like sound effects and display preferences, so that I can customize the game to my liking. #DONE

Resources:
https://cssgrid-generator.netlify.app/ helped with creating the exact grid I want.
https://masteringjs.io/tutorials/fundamentals/foreach-object As I can't forEach an object this gave me an alternative to do what I was aiming for
https://freesound.org/people/-Andreas/sounds/650842/ Where I got my sound effects from
https://gomakethings.com/how-to-play-a-sound-with-javascript/ How to play sfx with Javascript
https://www.youtube.com/watch?v=0ohtVzCSHqs didn't use on this project but made me wish I did my mobile version of the site first then media query for desktops.
