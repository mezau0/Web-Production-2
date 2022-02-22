const myTitle = 'A Poem'
let myObject = {'adjectives': ['grieving', 'enchanting', 'timely', 'nasty', 'amused', 'cynical', 'charming'], 'nouns': ['heaven', 'consequence', 'audience', 'heart', 'edge', 'seed', 'love'], 'verbs': ['runs', 'sings', 'watches', 'plays', 'sleeps', 'studies', 'walks', 'thinks']}
let myArticleArray = ['The']

function returnPoem(title, article, noun, adjective) {
  return title + ': ' + article + ' ' + adjective + ' ' + noun
}

W(returnPoem(myTitle, myArticleArray[0], myObject.adjectives[0],myObject.nouns[0], myObject.verbs[0]))

function forLoopPoem(title, articles, nouns, adjectives) {
  W(title)
  for (i = 0; i < 1; i++) {
    W(articles[i] + ' ' + nouns[i] + ' ' + adjectives[i])
  }
}

forLoopPoem(myTitle, myArticleArray, myObject.nouns, myObject.verbs, myObject.adjectives)


// while loop poem:
let counter = 0
while(counter < 5) {
  W(getRandomItem(myArticleArray) + ' ' + getRandomItem(myObject.adjectives) + ' ' + getRandomItem(myObject.nouns) + ' ' + getRandomItem(myObject.verbs))
  counter++
}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}
