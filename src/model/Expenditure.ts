export type ExpenditureType = 'credit' | 'autopay' | 'regular';

export interface Expenditure {
  name: string;          // Add this property to represent the name of the expenditure
  type: ExpenditureType; 
  amount: number;        
  emiDuration: number;   
  start: {
    month: string;       
    year: number;        
  };
  end: {
    month: string;       
    year: number;        
  };
}