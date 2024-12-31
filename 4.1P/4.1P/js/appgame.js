new Vue({
    el: '#app', 
    data: {
        randomNumber: 0,
        Number: '',
        message: 'Start guessing'
    },
    methods: {
        generateRandomNumber() {
            this.randomNumber = Math.floor(Math.random() * 100) + 1;
        },
        checkGuess() {
            if (this.Number == this.randomNumber) {
                this.message = 'You got it!';
            } else if (this.Number < this.randomNumber) {
                this.message = 'Guess higher';
            } else {
                this.message = 'Guess lower';
            }
        },
        giveUp() {
            this.message = `The number was ${this.randomNumber}`;
        },
        startOver() {
            this.Number = '';
            this.message = 'Start guessing';
            this.generateRandomNumber();
        }
    },
    created() {
        this.generateRandomNumber();
    }
  });
  