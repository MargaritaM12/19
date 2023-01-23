const inputName = document.querySelector('.nameOwner');
const inputContact = document.querySelector('.contactOwner');
const inputComment = document.querySelector('.commentOwner');
const button = document.querySelector('button');

class Cat {
    constructor(option) {
        this.nameOwner = option.name.value;
        this.contactOwner = option.contact.value;
        this.commentOwner = option.comment.value;
    }
}

button.addEventListener('click', () => {
    const cat = New Cat({
        name: inputName;
        contact: inputContact;
        comment: inputComment;
    })
    console.log(cat)
})
