function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);        //gets draggable object's id and sets it to the dataTransfer object
    const id = event.dataTransfer.getData('text');       //gets the previously set data (the id of the object)
    const draggableElement = document.getElementById(id);       //selects the element based on the id
    updateList(draggableElement, "", draggableElement.parentNode.getAttribute("id"));
}

function onDragOver(event){
    event.preventDefault();     //overrides default browser behavior so that divs can be drag/dropped
}

function onDrop(event){
    event.preventDefault();     //prevents auto-searching for id in addressbar
        
    const id = event.dataTransfer.getData('text');       //gets the previously set data (the id of the object)
    const draggableElement = document.getElementById(id);       //selects the element based on the id
    const dropzone = event.target;   //selects the element into which we are dropping (dropzone)

    if (dropzone.getAttribute('class') === 'column'){
        dropzone.appendChild(draggableElement);     //append dragged element to dropzone element
        
        rewards(event.currentTarget, draggableElement);     //sets award of member   
        
        event.dataTransfer.clearData();   //reset dataTransfer object
    } else {
        console.log("undroppable");
    }

}


