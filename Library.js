
// Library Book Search
let books = [
    { id: 1, title: "JavaScript Basics", available: true },
    { id: 2, title: "Node.js in Action", available: false },
    { id: 3, title: "MongoDB Guide", available: true }
];

var i = 2;

    if(books[i]){
        console.log("Book is available");
        console.log(books[i].title);
    }
    else{
        console.log("Book is not available");
    }
