new Vue({
    el: "#vue-app",
    data: {
        name : "",
        age: 0
    },
    methods: {
        logName : function(){
            console.log("You entered your name");
        },
        logAge : function(){
            console.log("You entered your age");
        }
    }
});