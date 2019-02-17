new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        
    },
    computed:{
        addA: function () {
            console.log("Add to A");
            return this.a + this.age;
        },
        addB: function () {
            console.log("Add to B");
            return this.b + this.age;
        }
    }
});