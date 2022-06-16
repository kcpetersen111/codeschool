var url="http://todo2022.codeschool.cloud";

var app = new Vue({
    el: '#app',
    data: {
        todos:[],
        tags:[],
        nameInput:"",
        descriptionInput:"",
        doneInput:false,
        dateInput: "",
        tagsInput:{},
        editingTodo:-1,

    },
    methods: {
        addTodo: function(){
            let tempArr = [];
            this.tags.forEach(key => {
                if(this.tagsInput[key]){
                    tempArr.push(key);
                }    
            });

            let todo = {name:this.nameInput,
                description:this.descriptionInput,
                done:this.doneInput,
                deadline:this.dateInput,
                tags:tempArr}

            // this.todos.push(todo);
            this.postTodo(todo);
            
            this.nameInput = "";
            this.descriptionInput = "";
            this.doneInput = false;
            this.dateInput = "";
           this.resetTagInputs();


        },
        resetTagInputs: function(){
            this.tags.forEach(key => {
                this.tagsInput[key] = false;    
            });
            this.$forceUpdate();
        },
        updateEditIndex: function(index){
          this.editingTodo =  index;
        },

        postTodo: function(newTodo){
            // let newTodo = {
            //     name:"postTodo js",
            //     done:true
            // };
            fetch(url+"/todo",{
                method: "POST",
                body: JSON.stringify(newTodo),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response =>{
                response.json().then(data=>{
                    console.log(data)
                    this.refreshList();
                });
            });

        },
        // postTodo: function (){

        // }

        refreshList: function(){
            fetch(url+"/todos").then((response) =>{
                response.json().then(data=>{
                    // console.log(data);
                    this.todos = data;
                    this.todos.forEach((todo)=>{
                        todo.deadline = todo.deadline.split("T")[0];
                    })
                });
            });
        }

    },
    created: function () {
        
        this.refreshList()

        fetch(url+"/tags").then((response)=>{
            response.json().then(data=>{
                this.tags = data;
                this.tags.forEach(tag => {
                    this.tagsInput[tag] = false;
                });
            });
        });

    }
});