export interface Post {
    id: string; // Added id field
    // email: string;
    // image: string;
    // name: string;
    price: string;
    totalSold: number; // changed 'total sold' to 'totalSold'
    status: string;
    createdAt: (string | number)[]; // changed 'created at' to 'createdAt'
  }