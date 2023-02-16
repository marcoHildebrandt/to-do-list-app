function newItem() {
  // 1. Adding a new item to the list of items:
  let inputValue = $('#input').val();
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    let li = $('<li></li>').text(inputValue);
    $('#list').append(li);

    // 2. Crossing out an item from the list of items:
    li.on('dblclick', function () {
      li.toggleClass('strike');
    });

    // 3. Adding the delete button "X":
    let deleteButton = $('<crossOutButton></crossOutButton>').text('X');
    li.append(deleteButton);

    // 3. Adding CLASS DELETE (DISPLAY: NONE) from the css:
    deleteButton.on('click', function () {
      li.addClass('delete');
    });
  }

  // 4. Reordering the items:
  $('#list').sortable();
}

// Adding a new item on clicking the "Add" button:
$(document).on("click", "#button", newItem);
