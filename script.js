let adjective1 = prompt('Enter an adjective:')
let noun1 = prompt('Enter an noun1:')
let verb1 = prompt('Enter an verb1:')
let adverb1 = prompt('Enter an adverb1:')

let story = `Once upon a time, in a ${adjective1} ${noun1}, a ${verb1} ${noun1} ${adverb1} ${verb1}.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p> ${story}</p>`