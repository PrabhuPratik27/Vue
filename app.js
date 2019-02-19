Vue.component('greeting', {
    template: '<p>hey there,I am a{{name}} <button @click="changeName">Change Name</button></p>',
    data: function () {
        return {
            name: 'Yoshi'
        }
    },
    methods:{
        changeName: function(){
            this.name = "Mario";
        }
    }
})

const one = new Vue({
    el: "#vue-app1",
    data: {
        title: "Vue app 1"
    },
    methods: {

    },
    computed: {

    }
});

const two = new Vue({
    el: "#vue-app2",
    data: {
        title: "Vue app 2"
    },
    methods: {

    },
    computed: {

    }
});