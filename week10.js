let id = 0;
let movieTitle = 'The Batman';
document.getElementById('add').addEventListener('click', () => {
    let createdCast = new Date(); 
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = movieTitle;
    row.insertCell(1).innerHTML = document.getElementById('new-review-name').value;
    row.insertCell(2).innerHTML = document.getElementById('new-rating-number').value;
    row.insertCell(3).innerHTML = document.getElementById('new-review-text').value;
    row.insertCell(4).innerHTML = document.getElementById('new-cast').value;
    row.insertCell(5).innerHTML = document.getElementById('new-role').value;
    let actions = row.insertCell(6);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-cast').value = " ";
    document.getElementById('new-review-name').value = " ";
    document.getElementById('new-review-text').value = " ";
    document.getElementById('new-rating-number').value = 0;
    document.getElementById('new-review-name').value = " ";
    document.getElementById('new-role').value = " ";
    DOMException
})


function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`)
        elementToDelete.parentNode.removeChild(elementToDelete);
        
    }
    return btn;
}



