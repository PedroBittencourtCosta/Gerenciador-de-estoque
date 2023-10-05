interface atributos{

    name: string;
    email: string;
    password: string;
}

export default class UserDto {

  name: string;
  email: string;
  password: string;


  constructor(at: atributos){
  
    this.name = at.name;
    this.email = at.email;
    this.password = at.password;
  }
}