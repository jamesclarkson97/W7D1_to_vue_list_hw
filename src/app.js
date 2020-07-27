import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: "#app",
        data: {
            chores: [
                {name: 'Wash car', highPriority: "low priority"},
                {name: 'Cook dinner', highPriority: "high priority"},
                {name: 'Buy umbrella', highPriority: "high priority"}
            ],
            newChore: '',
            highPriority: ''
        },
        methods: {
            saveNewChore: function(event) {
                this.chores.push({
                    name: this.newChore,
                    highPriority: "high priority"
                });
                this.newChore = '';
                
            }
        }
    });
});