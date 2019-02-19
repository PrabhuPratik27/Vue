const one = new Vue({
    el: "#vue-app1",
    data: {
        output: "Your fav food"
    },
    methods: {
        readRefs: function () {
            this.output = this.$refs.in.value;
            console.log(this.$refs.test.innerText);
            
        }
    },
    computed: {

    }
});