function Book(title, numberOfBooks) {
    this.title = title;
    this.numberOfBooks = numberOfBooks;
}

Book.prototype.getAvailability  = function() {
    
    if(this.numberOfBooks >= 10) {
        return "Sufficient stock"
    } else {
        return "Less stock";
    }
}

Book.prototype.sell = function(numberOfItemsSold) {
    this.numberOfBooks = this.numberOfBooks - numberOfItemsSold
    return this.numberOfBooks;
}

Book.prototype.restock = function(numberOfItemsRestock) {
    this.numberOfBooks = this.numberOfBooks + numberOfItemsRestock
    return this.numberOfBooks;
}


const C = new Book( "Let us C", 10)
console.log(C.getAvailability())
console.log(C.sell(5))
console.log(C.getAvailability())
console.log(C.restock(5))
console.log(C.getAvailability())