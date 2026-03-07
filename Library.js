
// Library Book Search
let books = [
    { id: 1, title: "JavaScript Basics", available: true },
    { id: 2, title: "Node.js in Action", available: false },
    { id: 3, title: "MongoDB Guide", available: true }
];

var i = 1;

    if(books[i]){
        console.log("Book is available");
        console.log("Book Name : "+books[i].title);
    }
    else{
        console.log("Book is not available");
    }
