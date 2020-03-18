//your code here

fetch('https://telephone-assessment.herokuapp.com/api/v1/contacts')
    .then(response => response.json())
    .then(parsedResponse => {
        const characters = parsedResponse.data
        showCharacters(characters)
    })

const charactersList = document.querySelector('#characters')

function showCharacters(characters){
    characters.map(character => {
        createCharacterItem(character)
    })
}

function createCharacterItem(character){
    const characterItem = document.createElement('li')
    characterItem.innerHTML = `
        <img src='${character.imageURL}'>
        <span>${character.name} - ${character.phone}</span>
        <p>${character.message}</p>
        <a href='/contact.html?character=${character.name}'>Leave ${character.name} a message.</a>`
    charactersList.append(characterItem)
}