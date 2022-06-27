// var url="http://todo2022.codeschool.cloud";
const url="http://localhost:8080";

var app = new Vue({
    el: '#app',
    data: {
        todos:[],
        tags:[],
        nameInput:"",
        descriptionInput:"",
        doneInput:false,
        dateInput: "",
        newTodoId:"", //this is to turn the most resent thing purple mostly not implemented
        tagsInput:{},
        editingTodo:-1,
        editingTodoCopy:{},
        editingTags:[],

        tagFilter:{},

    },
    methods: {
        addTodo: function(){
            let tempArr = [];
            this.tags.forEach(key => {
                if(this.tagsInput[key]){
                    tempArr.push(key);
                }    
            });
            // let dead = this.dateInput;
            // if (dead ==null){
            //     dead= new Date();
            // }
            let todo = {name:this.nameInput,
                description:this.descriptionInput,
                done:this.doneInput,
                deadline:this.dateInput, //this.dateInput,
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
        updateEditIndex: function(todo, index){
          this.editingTodo =  index;
          this.editingTodoCopy = {...todo};

        //   if(todo.tags.includes())
            if( Object.keys(todo).includes('tags')){
                this.editingTags = [];

                this.tags.forEach(tag =>{

                    this.editingTags.push(todo.tags.includes(tag));
                });
            }
        },

        

        postTodo: function(newTodo){

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
        putTodo: function(todo_object){

            let listOfTags =[];

            this.tags.forEach((tag,index)=>{
                if(this.editingTags[index]){
                    listOfTags.push(tag);
                }
            });
            this.editingTodoCopy.tags = [...listOfTags];


            fetch(url+"/todo/"+todo_object._id,{
                method: "Put",
                body: JSON.stringify(this.editingTodoCopy),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response =>{
                response.json().then(data=>{
                    // console.log(data)
                    this.newTodoId = data._id
                    this.refreshList();
                });
            });


            // this.todos[index] = {...this.editingTodoCopy};
            this.updateEditIndex({},-1);
        },
        deleteTodo: function(todo){
            fetch(url+"/todo/"+todo._id,{
                method: "DELETE"
            }).then(response=>{
                response.json().then(deleted=>{
                    console.log(deleted);
                    this.refreshList();
                    this.updateEditIndex({},-1);

                })
            })
        },

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
                    this.tagFilter[tag] = true ;
                });

                // this.tags.forEach(element => {
                    
                // });
            });
        });

        // this.tags.forEach(element => {
        //     this.tagFilter.push({element:true});
        // });
        

    }
});