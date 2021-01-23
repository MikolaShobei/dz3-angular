
export interface ICar{
   id: number;
   producer: string;
   year: number;
   power?: number;
   price: number;
   owner: {
     name: string;
     age: number;
     experience: number;
   };
}

    // {producer:"subaru", year: 1998, power: 140, price: 350000, owner: {name: "tanya", age: 27, experience: 6}},
