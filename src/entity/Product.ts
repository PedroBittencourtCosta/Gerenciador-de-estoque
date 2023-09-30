interface atributos {
    id: number;
    name: string;
    price: number;
    amount: number;
    category: string;
}

export default class Product{

  id: number;
  name: string;
  price: number;
  amount: number;
  category: string;

  constructor(at: atributos){
    this.id = at.id;
    this.name = at.name;
    this.price = at.price;
    this.amount = at.amount;
    this.category = at.category;
  }
}