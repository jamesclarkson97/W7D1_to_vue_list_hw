import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: "#app",
        data: {
            chores: [
                {name: 'Wash car'},
                {name: 'Cook dinner'},
                {name: 'Buy umbrella'}
            ],
            newChore: ''
        },
        methods: {
            saveNewChore: function() {
                this.chores.push({
                    name: this.newChore
                });
                this.newChore = '';
            }
        }
    });
});