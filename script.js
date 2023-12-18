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

console.log('emplyers', employers, typeof employers);

for (let i = 0; i < employers.length; i++) {
    console.log(employers[i]);
    for (let key in employers[i]){
        console.log(employers[i][key]);
        let myTeam = document.getElementById('my-employers');
        myTeam.innerHTML += employers[i][key];
        console.log(myTeam);
    }
}
