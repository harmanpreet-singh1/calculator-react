# Full Fledge Calculator with ReactJS
------------

Introduction
------------

This is a calculator app for calculating any number and you can also use this calculator for storing and recalling the value with Mc, Mr, M+, M- functionality (these are very useful for big numbers).
This is basically a replica of Casio SL-300SV calculator. All the functionality is same as in original Casio SL-300SV (even look n feel is almost same).

Architecture Details
------------
- Imagine for a moment an app with only one file for all your components, the store, utilities, everything.
A terrible idea, of course. The problem with the large number of files is to navigate them.
So, For this reason I structured the application in a effiecent manner.
##### Directory Structure :-
![dir_structure.png](https://s8.postimg.cc/k1ftkjxwl/dir_structure.png)
- As you can see in the above screenshot we have different folders for logic and the view. That means whole calculator logic is in one folder and we are accessing the logic via view folder.

Functionalities
------------
- User can calculate any number.
- User can be able to store or recall a number based on the requirement.
- User can add the stored number directly by using M+ button.
- Calculator will be automatically off after one minute of inactivity.
- A beautiful layout of the calculator (same as original Casio SL-300SV).

Installation
-------------

- Clone/Download the repository by using [Github Link](https://github.com/harman6666/calculator-react.git)
- After the 1st step _run __npm install___ in the project folder.
- After all the necessary packages got installed then _run __npm start___ in the command prompt.
- We can also build the project for the production release by using __npm build__ command.
- Yeah, that's it. Enjoy the calculator webapp.

Some Examples/Screenshots
-----------

**Normal View**                                                                                        
![calculator](https://s8.postimg.cc/eraut9ldh/calculator.png)

**Calculator with values**                                                                           
![Cal-with-values](https://s8.postimg.cc/tu2pew3b9/Screen_Shot_2018-08-29_at_9.19.29_PM.png)

**Off View**                                                                                                                  
![off-view](https://s8.postimg.cc/ngdmbu11x/Screen_Shot_2018-08-29_at_10.27.24_PM.png)

Some NPM commands for reference
---------------

- __npm start__ starts the development server and auto-reloads the page any time you make edits
- __npm run__ build bundles the app into static files for production
- __npm test__ starts the test runner and lets you test your app with Jest as you build it.

Enhacements which can be done
----------------

- We can also use redux for the state management.
- Keyboard support can be added.
- Mobile view can be added.

### Many thanks for looking out!




