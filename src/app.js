import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: "#app",
        data: {
            chores: [
                {name: 'Wash car', highPriority: false},
                {name: 'Cook dinner', highPriority: true},
                {name: 'Buy umbrella', highPriority: true}
            ],
            newChore: '',
        },
        methods: {
            saveNewChore: function() {
                this.chores.push({
                    name: this.newChore,
                    highPriority: false
                });
                this.newChore = '';
            }
        }
    });
});