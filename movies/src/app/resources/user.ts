export interface User {
  id: string;
  name: string;
  cpf: string;
  phone_number: string;
  email: string;
  password: string;
  profile: [];
  activite: boolean;
  language: {
            id: number;
            name: string;
            tag: string;
        };
}