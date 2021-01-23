let result = document.getElementById('result');
console.log(result);

function load () {
    const request = new XMLHttpRequest();
    request.open('get', 'data.json');

    request.onload = () => {
        try{
            let json = JSON.parse(request.responseText);
            populate(json);
        } catch (e){
            console.warn('je ne peux pas afficher');
        }
    };

    request.send();
}

function populate (json){
    console.log(json);
    let nom = document.createElement('h1')

    json.forEach((row)=> {
        let tr = document.createElement('tr');
        row.forEach((cell) =>{
           let td = document.createElement('td');
           td.textContent = cell;
           tr.appendChild(td);
        });

        document.body.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => { load (); });