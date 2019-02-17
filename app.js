new Vue({
    el: "#vue-app",
    data: {
        age: 25,
        X: 0,
        Y: 0
    },
    methods: {
        add: function (limit) {
            this.age += limit;
        },
        sub: function (limit) {
            this.age -= limit;
        },
        updatexy : function(e){
            this.X = e.offsetX;
            this.Y = e.offsetY;   
        }
    }
});