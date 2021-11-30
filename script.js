
/* INDEX PAGE #1*/
function cleanUpIndex(){
    const element = document.querySelectorAll(".contact");
    for (let contact of element){
        contact.remove()
    }
}
  
/* INDEX #2*/
function createSingleIndex(single_obj){
    return`
        <a href="index.html">
            <div class="contact">
                <p> ${single_obj.name}</p>
            </div>
        </a>

    `
} 

/* INDEX #3 */ 
function renderIndex(array_contact){
    const main = document.querySelector(".main"); 
    for (element in array_contact){
        main.insertAdjacentHTML('beforeend', createSingleIndex(element))
    
    };
    // array_contact.forEach(element => {
        
    // });
}

/* ASSIGNMENT 2 PART 2  #1 */ 
const contactList = [
    {
        name : "Oliver Queen",
        phone : "778-555-1234",
        address : "101 Main St, Star City, USA",
        email: "greenarrow@watchtower.com",
    },
    {
        name :"Jessica Cruz",
        phone : "123-456-5555",
        address : "Portland Oregon",
        email : "greenlantern@watchtower.com",
    }
]

/* VEIW PAGE #1*/

function cleanUpView(){
    const element = document.querySelectorAll(".contactinfo")
    for (let contactinfo of element){
        contactinfo.remove()
    };
}

/* VEIW #2 */

function renderView(single_contact){
  return`
        <a href = "page3.html">
            <div class ="contactinfo">
                <p> ${single_contact.name}</p>
            </div>
        </a>

  `

}


/* CREATE PAGE #1*/

function cleanUpCreate(){
    const element = document.querySelectorAll(".contactedit")
    for (let contactedit of element){
        contactedit.remove()
    };
}


/*  CREATE #2 */

function renderCreate(single_edit){
    return`
        <a href ="page2.html">
            <div class = "contactedit">
                <p> ${single_edit.name}</p>
            </div>
        </a>
    `
    
}


/* A2 PART 2 #2*/

const contacts= document.querySelectorAll('.nav-home');

contacts.addEventListener('click', cleanUpIndex);

function cleanUpIndex(){
    document.querySelector('.nav-home')
}
