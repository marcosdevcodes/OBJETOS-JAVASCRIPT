const book = {
    title: "1984",
    author: "George Orwell",
    pages: 382,
    readPage: 0,
    read: function(pages){// Esse parametro pages é 81 
        this.readPage += pages;
        if(this.readPage > this.pages){
            this.readPage =this.pages;
        }
        return ` Your have read ${this.readPage} of ${this.pages} pages`;
    }
}

const result = book.read(81);
console.log(result);