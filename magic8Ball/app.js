let app = new Vue({
    el: '#app',
    data: {
        message: '8',
        prompt: 'Ask a question',
        question: '',
        messageBank: [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
        ],

    },
    methods: {
        askQuestion: function(){
            if(!this.isValidQuestion()){return;}
            let nextResponse = Math.floor(Math.random() * this.messageBank.length);
            this.message = this.messageBank[nextResponse];
            this.question = '';
            this.prompt = 'Ask another question';
        },
        isValidQuestion: function(){

            return this.question[this.question.length-1] == "?";
        }

    }
})