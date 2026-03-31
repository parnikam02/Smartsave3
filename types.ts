
export enum Category {
  FOOD = 'Food',
  TRAVEL = 'Travel',
  BILLS = 'Bills',
  ENTERTAINMENT = 'Entertainment',
  SHOPPING = 'Shopping',
  HEALTH = 'Health',
  OTHERS = 'Others'
}

export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense'
}

export type PaymentMode = 'Cash' | 'Credit Card' | 'UPI' | 'Debit Card';

export interface User {
  phone: string;
  name: string;
  password?: string; // For mock auth storage
  role: 'user' | 'admin';
  isLoggedIn: boolean;
  joinedDate?: string;
}

export interface BankAccount {
  id: string;
  name: string;
  bankName: string; // e.g., HDFC, SBI
  holderName: string; // New field
  balance: number;
  color: string;
  accountNumber: string; // Sensitive
  ifsc: string; // Sensitive
}

export interface Transaction {
  id: string;
  amount: number;
  category: Category;
  description: string;
  date: string; // ISO String
  type: TransactionType;
  source?: 'Manual' | 'GPay' | 'PhonePe' | 'Auto-Save' | 'Bill Payment' | 'Booking' | 'Salary'; // Track source
  paymentMode?: PaymentMode; // Track if it was Cash or Credit Card
  bankAccountId?: string; // Link to specific bank
}

export interface Debt {
  id: string;
  lender: string; // Person or Bank name
  amount: number;
  dueDate: string;
  isPaid: boolean;
  notes?: string;
}

export interface SavingsSprint {
  id: string;
  name: string; // e.g., "Sprint 1: Rainy Day Fund"
  targetAmount: number;
  currentAmount: number;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Completed' | 'Failed';
}

export interface WalletState {
  totalBalance: number; // Sum of all banks + cash
  savings: number;
  healthFund: number; // New separate health savings
  autoSaveEnabled: boolean;
  autoSaveSourceBankId?: string; // ID of the bank selected for auto-save
  lastAutoSaveDate: string | null;
  bankConnected: boolean; // Tracks if UPI is connected
  monthlyBudget: number;
  categoryBudgets: Record<string, number>; // Stores budgets like { 'Food': 5000, 'Travel': 2000 }
}

export interface Bill {
  id: string;
  type: 'Electricity' | 'Water' | 'Mobile' | 'Fastag' | 'Gas Cylinder' | 'Internet' | 'Cable TV' | 'DTH';
  provider: string;
  amount: number; // Estimated or fixed
  dueDate?: string;
  lastPaid?: string;
  isAutoPay: boolean;
  identifier?: string; // e.g. Vehicle No, Subscriber ID
}

export interface MobilePlan {
  id: string;
  price: number;
  data: string;
  validity: string;
  calls: string;
  category: 'Daily Plans' | 'Monthly Plans' | 'Yearly Plans' | 'Top-up';
  description?: string;
}

export interface Reward {
  id: string;
  title: string;
  value: string; // e.g., "₹100 Voucher"
  dateEarned: string;
  isRedeemed: boolean;
}

export interface TravelPlan {
  destination: string;
  description: string;
  totalCost: number;
  transportMode: 'Car' | 'Bus' | 'Train' | 'Flight';
  breakdown: {
    tickets: number;
    fuel?: number;
    tolls?: number; // Fastag
    food: number;
    accommodation: number;
    misc: number;
  };
  recommendationType: 'Relax' | 'Devotional' | 'Dining';
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}