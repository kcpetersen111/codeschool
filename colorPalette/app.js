var app = new Vue({
    el: "#app",
    data: {
        // 1. 3 number variables, one for each input
        red:0,
        green:0,
        blue:0,
        // 3. 1 list variable, holds strings (ex. ['rgb(0,255,128)', 'rgb(0,0,0)', ...])
        palette: [],
    },
    methods: {
        // 3. push the current rgbString into the color list
        addColor: function () {
            this.palette.push(this.rgbString);
        }
    },
    computed: {
        // 1. insert your variable names into their respective places
        rgbString: function () {
            let finalString = "rgb(";
            finalString += this.red + ",";
            finalString += this.green + ",";
            finalString += this.blue + ")";
            return finalString;
        },
    }
});