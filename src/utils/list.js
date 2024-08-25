
// TODO: write unit tests for this function, and finish it
function splitTodosIntoDays(todos) {
    const daysOfWeek = ['mo', 'ti', 'on', 'to', 'fr', 'lö', 'sö'];
    const groupedTodos = daysOfWeek.map(day => todos.filter(t => t.day === day));
    return groupedTodos;
}

// Tips! Du kan få användning för funktioner som:
// + kopierar en lista och byter plats på två element (snooze)
// + lägger till ett element på en viss plats i en lista
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

export { splitTodosIntoDays }
