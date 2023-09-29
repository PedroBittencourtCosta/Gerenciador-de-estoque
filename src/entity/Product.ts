interface atributos {
    id: number;
    name: string;
    price: number;
    amount: number;
}

export default class Product{

  id: number;
  name: string;
  price: number;
  amount: number;

  constructor(at: atributos){
    this.id = at.id;
    this.name = at.name;
    this.price = at.price;
    this.amount = at.amount;
  }
}