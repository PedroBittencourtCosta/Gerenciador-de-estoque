interface atributos{
    id: number;
    name: string;
    email: string;
    password: string;
}

export default class User {

  id: number;
  name: string;
  email: string;
  password: string;


  constructor(at: atributos){
    this.id = at.id;
    this.name = at.name;
    this.email = at.email;
    this.password = at.password;
  }
}