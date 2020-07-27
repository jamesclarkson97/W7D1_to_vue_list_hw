import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: "#app",
        data: {
            items: [
                {name: 'Wash car'},
                {name: 'Cook dinner'},
                {name: 'Buy umbrella'}
            ]
        },
        methods: {}
    });
});