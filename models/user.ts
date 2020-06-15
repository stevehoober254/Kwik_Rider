export interface Driver {
  id: number;
  name: string;
  caption: string;
  uri: string;
}

export interface User {
  uuid: string;
  name: string;
  phoneNumber: string;
}
