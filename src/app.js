import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: "#app",
        data: {
            items: ['Clean car', 'Make dinner', 'Buy umbrella']
        }
    });
});