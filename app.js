const one = new Vue({
    el: "#vue-app1",
    data: {
        title: "Vue app 1"
    },
    methods: {

    },
    computed: {
        greet: function () {
            return "Hello from app 1";
        }
    }
});

const two = new Vue({
    el: "#vue-app2",
    data: {
        title: "Vue app 2"
    },
    methods: {
        change: function () {
            one.title = "Title of Vue app 1 changed"
        }
    },
    computed: {
        greet: function () {
            return "Hello from app 2";
        }
    }
});