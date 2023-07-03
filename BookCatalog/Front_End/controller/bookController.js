loadAllBooks();
function loadAllBooks() {
  fetch("http://localhost:3000/book")
    .then((response) => response.json())
    .then((data) => {
      $(".tblBody").empty();
      for (const book of data) {
        let row = `<tr>
        <td>${book.book_ID}</td>
        <td>${book.book_name}</td>
        <td>${book.book_author}</td>
        <td>${book.book_price}</td>
        <td><button style="background-color: orange; border:1px solid orange;border-radius:5px">Edit</button> 
        <button style="background-color: red;color:white; border:1px solid orange;border-radius:5px">Delete</button></td></tr>`;
        $(".tblBody").append(row);
      }
    })
    .catch((error) => {
      console.log("Fetch Error:", error);
    });
}

//=============save===============//

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var book = {
    book_ID: parseInt($("#bookID").val()),
    book_name: $("#bookName").val(),
    book_author: $("#bookAuthor").val(),
    book_price: parseFloat($("#bookPrice").val()),
  };
  console.log(book);
  $.ajax({
    url: "http://localhost:3000/book",
    method: "POST",
    data: book,
    success: function (response) {
      console.log("Book saved successfully:", response);
      loadAllBooks();
    },
    error: function (error) {
      console.log("Error saving book:", error);
    },
  });
});
