const API_URL = "https://cs2022-eight-ball.herokuapp.com";

let app = new Vue({
    el: '#app',
    data: {
        message: '8',
        prompt: 'Ask a question',
        question: '',
        ready:true,
        messageBank: [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
        ],
        messageColor: "#000"

    },
    methods: {
        askQuestion: function(){
            if(!this.isValidQuestion()){return;}

            // let nextResponse = Math.floor(Math.random() * this.messageBank.length);
            // this.message = this.messageBank[nextResponse];
            this.ready = false;
            this.messageColor = "rgba(255,255,255,0)";
            fetch(API_URL + "/questions").then((response) => {
                // console.log(response);
                response.json().then((data) => {
                    console.log(data);
                    this.message = data.answer;
                    this.messageColor = data.color;
                    setTimeout(()=>{
                        this.ready = true;
                    },1000)
                });
            });

            this.question = '';
            this.prompt = 'Ask another question';

            // const test = "http://localhost:8080"
            // fetch(test + "/").then((response) => {
            //     mode:'no-cors';
            //     // console.log(response);
            //     response.json().then((data) => {
            //         console.log(data);
                    
            //     });
            // });
        },
        isValidQuestion: function(){

            return this.question[this.question.length-1] == "?";
        }

    }

})
