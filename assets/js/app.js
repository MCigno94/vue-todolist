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

## Bonus-extra (opzionale)
- Quando una task é stata completa allora l'utente vuole che venga inserita in un'altra colonna tipo "tasks completate"
- se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
- ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
- si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio...
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
        ],
        completedTasks: []
    },
    methods: {
        removeTask(index, task) {
            this.tasks.splice(index, 1);
            //console.log(this.tasks.length);
            this.completedTasks.unshift(task);
            //console.log(this.tasksCompleted);
        },
        addTask() {
            //console.log(this.inputText);
            if (this.inputText.length > 2) {
                newTask = {
                    text: this.inputText,
                    done: false
                }
                this.tasks.unshift(newTask);
            }
            //console.log(newTask);
            this.inputText = '';
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

// aggiungo l'icona cestino per eliminare e spostare la task nel "cestino" - ok
// aggiungo l'icona check per barrare la task completata (al posto di cliccare sulla scritta) - ok
// creo un nuovo array (task completate) - ok
// appena cancello una task la pusho nel nuovo array - ok
// se il nuovo array contiene elementi lo visualizzo a schermo