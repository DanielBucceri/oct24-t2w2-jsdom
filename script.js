// Lets ayt we got this array grom an api request
const data = [
    'frankenstein',
    'dracula',
    'the werewolf',
    'the mummy',
    
]

function addCostumeToList(costume) {
  // // create a list item for each costume asme as below
    // ul.innerHTML += `<li>${costume}<button>Remove ${costume}</button></li>`;

    
    // createa  <li>  using costime
    const newLi = document.createElement('li');
    newLi.innerText = costume;
    //create  a button for removing the item
    const removeButton = document.createElement('button');

    // set the button text
    removeButton.innerText = 'Remove ' + costume;

    //attach a BUTTON click listner
    removeButton.addEventListener('click', () => {
        //remove the li from the ul
        ul.removeChild(newLi);
        console.log('Removing', newLi)
    })

    //append the button to the li
    newLi.appendChild(removeButton);

    //apepend li to the ul in the DOM as child element
    ul.appendChild(newLi); 
}

const ul = document.querySelector('ul');
//iterate over data 
for (costume of data){
    addCostumeToList(costume);
  
}


document.querySelector('#newcostume').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const newCostumeInput = document.querySelector('#newCostumeForm input').value;
    const costume = newCostumeInput.value;
    //add the new costime to the list
    addCostumeToList(costume)
    // clear the input field
    newCostumeInput.value = '';

})