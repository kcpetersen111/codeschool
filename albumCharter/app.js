const URL = "https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=";

let app = new Vue({
    el: '#app',
    data: {
        artistInput: '',
        searchAlbumList: [],
        pickedAlbum: [],
        tempList:[],
        pickedUp:-1,
        pickedUpAlbum:{},
        
    },
    methods: {
        searchArtist: function() {
            // console.log(this.artistInput);
            // this.artistInput = "";
            fetch(URL + encodeURIComponent(this.artistInput)).then((response)=>{
                    response.json().then((data)=>{
                        this.searchAlbumList = data.album;

                        // console.log(data);
                    })            
                
            })
        },
        addAlbum: function(index) {
            let album = this.searchAlbumList[index];
            this.pickedAlbum.push(album);
        },
        removeAlbum: function(index) {
            this.pickedAlbum.splice(index,1);
        },
        pickupAlbum: function(index){
            this.pickedUp = index;
            this.tempList = this.pickedAlbum;
            this.pickedUpAlbum = this.pickedAlbum[index];
            // console.log("pickup " +index)
        },
        dropAlbum: function(dropIndex){
            if (this.pickedUp<0){return;}
            if (dropIndex>= this.pickedAlbum.length){
                dropIndex = this.pickedAlbum.length-1;
            }
            let movedAlbum = this.pickedAlbum[this.pickedUp];
            this.pickedAlbum.splice(this.pickedUp,1);
            this.pickedAlbum.splice(dropIndex,0,movedAlbum);

            this.pickedUp = -1;


            // console.log("drop " +dropIndex)
        },
        // broken
        hoverAlbum: function(hoverIndex){
            if (this.pickedUp<0){return;}
            if (hoverIndex>= this.pickedAlbum.length){
                hoverIndex = this.pickedAlbum.length-1;
            }
            let movedAlbum = this.pickedUpAlbum;
            this.pickedAlbum.splice(this.pickedUp,1);
            this.pickedAlbum.splice(hoverIndex,0,movedAlbum);


        }

    }
});