// Task 1: Partial
interface IBankAccount {
  id: string;
  fullName: string;
  balance: number;
  isActive: boolean;
  creationDate?: Date;
}

type PartialBankAccount = Partial<IBankAccount>;

const bankAccount: PartialBankAccount = {
  id: '11212',
  balance: 20000,
  isActive: true
}

// Task 2: Pick
type CustomerId = Pick<IBankAccount, 'id' | 'fullName'>;

const customer : CustomerId = {
  id: '1000',
  fullName: 'John Doe'
}

// Task 3: Readonly
type ReadonlyBankAccount = Readonly<IBankAccount>;

const readonlyBankAccount: ReadonlyBankAccount = {
  id: '1002',
  fullName: 'Jane Smith',
  balance: 400,
  isActive: false,
  creationDate: new Date('2000-01-01')
}

// readonlyBankAccount.fullName = 'Joan Smith';

// Task 4: Record
type BankAccountRecord = Record<string, IBankAccount>;

const bankAccountsList: BankAccountRecord = {
  alpha: {
    id: 'a',
    balance: 0,
    fullName: 'alpha account',
    isActive: true,
  },
  beta: {
    id: 'b',
    balance: 0,
    fullName: 'beta account',
    isActive: true,
  }
}

// Task 5: Required
type FullBankAccountProfile = Required<IBankAccount>;

const completeBankAccount: FullBankAccountProfile = {
  id: '3',
  balance: 1000,
  fullName: 'Steve Drago',
  isActive: true,
  creationDate: new Date('1990-05-05')
}

// Task 6: Exclude
type PaymentMethod = 'CreditCard' | 'PayPal' | 'BankTransfer' | 'Bitcoin';
type NonDigitalMethods = Exclude<PaymentMethod, 'PayPal' | 'Bitcoin'>;

const nonDigitalPayment: NonDigitalMethods = 'BankTransfer';

// Task 7: Extract
type Transportation = 'Car' | 'Bus' | 'Bicycle' | 'Boat';
type LandTransport = Extract<Transportation, 'Car' | 'Bicycle'>;

const landVehicle: LandTransport = "Bicycle";

// Task 8: NonNullable
type MaybeNumber = number | null | undefined;
type DefinitelyNumber = NonNullable<MaybeNumber>;

const definitelyNumber: DefinitelyNumber = 15;

// Task 9: Omit
type Product = {
  name: string;
  price: number;
  quantity: number;
  category: string;
};

type ReducedProduct = Omit<Product, 'quantity'>;

const reducedProduct: ReducedProduct = {
  name: 'Chips',
  price: 1.50,
  category: 'Snack'
}

// Task 10: ReturnType
type GreetingsFunction = (name: string) => string;
type GreetingType = ReturnType<GreetingsFunction>;

const greeting: GreetingType = 'Hello John';
