let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        showText: true,
        isBlue:true,
        theColor:'blue',
        items: [
            {text:"item a", show:true, color:"red"},
            {text:"item b",show:true, color:"green"},
            {text:"item c",show:true, color:"blue"}
        ]
    },
    methods: {
        toggleTextandAddA_global: function(item) {
            item.show = !item.show;
            item.text += 'A';    
        }, 
        isNowBlue: function(){
            // this.isBlue = !this.isBlue;
            if (this.theColor === 'blue') {
                this.theColor = 'red';
            } else {
                this.theColor = 'blue';                
            }

        }
        
    }
})