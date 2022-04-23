/*
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
 Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const app = new Vue({
    el: '#app',
    data: {
        message: "non c'è nulla da fare!",
        inputText: '',
        tasks: [{
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Fare il bucato',
                done: false
            },
        ]
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1)
            console.log(this.tasks.length);
        },
        addTask() {
            //console.log(this.inputText);
            if (this.inputText != '') {
                newTask = {
                    text: this.inputText,
                    done: false
                }
                this.tasks.unshift(newTask);
            }
            //console.log(newTask);
            this.inputText = '';
            console.log('');
        },
        strikethroughTask(index) {
            //console.log(this.tasks[index].done);
            if (this.tasks[index].done != true) {
                this.tasks[index].done = true;
            } else {
                this.tasks[index].done = false;
            }
            //console.log(this.tasks[index].done);
        },

    }
});