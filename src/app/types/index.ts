export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  active: boolean;
  birthDate: Date;
  address: Address;
  phones: string[];
  interests: string[];
  purchaseHistory: PurchaseHistory[];
  settings: Settings;
  balance: number;
  premium: boolean;
  lastLogin: Date;
  notes: string | null;
}

interface Address {
  street: string;
  number: number;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

interface PurchaseHistory {
  purchaseId: string;
  date: string; // ISO date string
  amount: number;
  items: Items[];
}

interface Items {
  name: string;
  quantity: number;
}

interface Settings {
  theme: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  language: string;
}
