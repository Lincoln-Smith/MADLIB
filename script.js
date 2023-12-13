let adjective1 = prompt('Enter an adjective:')
let adjective2 = prompt('Enter another adjective:')
let adjective3 = prompt('Enter another adjective:')
let adjective4 = prompt('Enter another adjective:')
let adjective5 = prompt('Enter another adjective:')
let adjective6 = prompt('Enter another adjective:')
let adjective7 = prompt('Enter another adjective:')
let adjective8 = prompt('Enter another adjective:')
let noun1 = prompt('Enter an noun:')
let noun2 = prompt('Enter another noun:')
let noun3 = prompt('Enter another noun:')
let noun4 = prompt('Enter another noun:')
let noun5 = prompt('Enter another noun:')
let pluralNoun1 = prompt('Enter a plural noun:')
let verb1 = prompt('Enter an verb:')
let adverb1 = prompt('Enter an adverb:')
let clothingItem1 = prompt('Enter a clothing item:')
let familyMember1 = prompt('Enter a family member :')
let bodyPart1 = prompt('Enter a body part:')
let bodyPart2 = prompt('Enter another body part:')
let pluralAnimals1 = prompt('Enter a plural animal:')
let hotBeverage1 = prompt('Enter a hot beverage:')
let emotion1 = prompt('Enter an emotion:')

let story = `One chilly ${adjective1} morning, I woke up to a world covered in a blanket of ${noun1}! I couldnt wait to go outside and enjoy the ${adjective2} weather.
I quickly put on my favorite ${clothingItem1} and headed to the backyard with my ${noun2}. As soon as I stepped outside, I was greeted by the sight of
${pluralNoun1} falling gently from the sky. I decided to build a ${noun3} with my ${familyMember1} and spent hours rolling and packing the 
${adjective3} snow into the perfect shape.After finishing our masterpiece, we had a ${adjective4} snowball fight. I dodged a flying snowball just in time,
narrowly avoiding getting hit right in the ${bodyPart1}. We laughed so hard that our ${bodyPart2} hurt! As the day went on, we decided to go
${verb1} down the nearby ${noun4}. The cold wind on my face made me feel ${adjective5}, but the thrill of speeding down the hill was absolutely 
${adjective6}! We even saw some ${pluralAnimals1} playing in the snow nearby. Eventually, we headed back home, tired but ${adjective7}. We warmed up with a cup
of ${hotBeverage1} and shared stories by the ${noun5}. It was a ${adjective8} day filled with ${emotion1} and unforgettable memories. `




let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p> ${story}</p>`