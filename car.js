// Objeto car tem 3 propriedade brand, model, year e seus valores
const car = {
    brand: "Toyota", // Toyota é o valor da propriedade brand do obj car
    model: "Hilux",  // Hilux é o valor da propriedade model do obj car
    year: 2024,     // 2024 é o valor da propriedade year do obj car
    name: "Marcos ",
    age: 29,
    able: "Young",
    //Dentro do objeto car temos um 
    // Metodo getCarInfo que é uma funcao
    getCarInfo: function (){
        return `${this.brand} ${this.model} ${this.year}`;
    },
    personInformation: function(){
        this.age += 1;
        return `${this.name} Happy Birthday! You are now ${this.age} years old ${this.able}.`;
    }
}
// const carInfo = car.getCarInfo();
const carInfo = car.getCarInfo.bind(car);// Garante que 'this' se refira ao objeto 'car'
const infoPerson = car.personInformation.bind(car);

setTimeout( () => {
    console.log(carInfo());
    console.log(infoPerson());
}, 2000);







// setTimeout(function() {
//     console.log(carInfo());
// }, 2000);