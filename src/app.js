import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: "#app",
        data: {
            chores: [
                {name: 'Wash car', highPriority: 'low'},
                {name: 'Cook dinner', highPriority: 'high'},
                {name: 'Buy umbrella', highPriority: 'high'}
            ],
            newChore: '',
            highPriority: ''
        },
        methods: {
            saveNewChore: function(event) {
                this.chores.push({
                    name: this.newChore,
                    highPriority: `${event.target.priority.value}`
                });
                this.newChore = '';
            }
        }
    });
});