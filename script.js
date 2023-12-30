/*

MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe.

*/

const employers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


for (let i = 0; i < employers.length; i++) {
    console.log(employers[i]);
    let myTeam = document.getElementById('my-employers');
    myTeam.innerHTML += `<div class="cards"><div class="img_container"><img src="${employers[i]['image']}"></div><div class="description"><h2>${employers[i]['name']}</h2><p>${employers[i]['role']}</p></div></div>`;
    
/*  
    for (let key in employers[i]){
    console.log(employers[i][key]);
    let myTeam = document.getElementById('my-employers');
    myTeam.innerHTML += `<div class="img_container"><img src="${employers[i]['image']}"></div><div class="description"><h2>${employers[i]['name']}</h2><p>${employers[i]['role']}</p></div>`;
    console.log(myTeam);
    }
    
*/
};

