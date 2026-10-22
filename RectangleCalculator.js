const Rectangle = {
    width: 5,
    heigth: 10,

    Area: function() {
        return this.width * this.heigth;
    },
    Perimeter: function() {
        return 2 * (this.width + this.heigth);
    }
}

console.log("Luas Persegi Panjang: ", Rectangle.Area())
console.log("Keliling Persegi Panjang: ", Rectangle.Perimeter())