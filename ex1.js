function etandre(id) {
    document.getElementById(id).style.backgroundColor = 'grey';
}
function alumer(id) {
    etandre('vert');
    etandre('jaune');
    etandre('rouge');
    if (id === 'vert') {
        document.getElementById(id).style.backgroundColor = 'green';
    } else if (id === 'jaune') {
        document.getElementById(id).style.backgroundColor = 'yellow';
    } else if (id === 'rouge') {
        document.getElementById(id).style.backgroundColor = 'red';
    }
    else{
        document.getElementById(id).style.backgroundColor = 'grey';
    }
}