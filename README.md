# Display Data in a List Challenge

---

### I decided to complete this challenge in three frameworks instead of one; this is because I am very interested in Front End Frameworks and thought it might be a good way to compare them.

## [React Version](http://react-version-challenge.surge.sh/)
## [Vue Version](http://vue-version-challenge.surge.sh/)
## [AngularJS Version](http://angularjs-version-challenge.surge.sh/)


### How to start/test them locally:
##### React
cd into app, npm install
  - test
    * npm test
  - run
    * npm start

##### Vue
cd into app, npm install
  - test
    * npm test
  - run
    * npm start

##### AngularJS
cd into app, npm install
  - test
    * npm test
  - run
    * lite-server

### Notes:

- Vue.js was my favorite to work in. I like having my HTML, JavaScript, and CSS all in one file. It is also like a happy medium between the magic of AngularJS and the brute JS of React.

- My favorite bug to find made me giggle. I refactored a function to account for strings longer than 2 when changing the format of a the type. I missed changing a hard-coded 0 to an i and instead of changing 'phone_number' to 'Phone Number', it was getting changed to 'Phone Nhone'. I wanted to leave it because it was so fun to say...[Bug](https://github.com/CassandraGoose/challenge/commit/a87ee3ec70b9800e8ff861c9d1367d641aa62562)

### What was new?

- Testing
  * I have played with Mocha and Chai, but implementing Jest, Enzyme, Jasmine, and Karma was new.
  * It was great when I wrote a test that actually caught an issue I didn't notice I was having. Because of this, I finally truly understand the benefit of testing.
  * Transitioning into Karma/Jasmine was initially quite rough because I couldn't find a solid resource for learning how to set it up and I also didn't realize it would be testing in a different way than Jest and Enzyme. Once I got my brain wrapped around testing the controller instead of testing a component, it went well.
  * One thing I wish was that the docs were set up differently. There were 'docs' for Enzyme that actually had another testing framework being use in the examples. It wasn't made apparent that this was the case, which caused some confusion.
