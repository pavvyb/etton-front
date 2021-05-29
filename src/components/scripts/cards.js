function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function createCards() {
    let cards = []
    const imageGenerator = 'https://dummyimage.com/300x200/000/fff.png&text='
    const descriptionGenerated = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    for (let index = 0; index < 20; index++) {
        const urlGenerated = imageGenerator + makeid()
        const element = {cardName: 'Item name', cardImage: urlGenerated, cardDescription: descriptionGenerated}
        cards.push(element)
    }
    return cards
}

export { createCards }