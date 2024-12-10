export interface Post {
    id: string; // Added id field
    // email: string;
    // image: string;
    // name: string;
    image: string;
    userdetails: string;
    quantity: string; // changed 'total sold' to 'totalSold'
    createdAt: (string | number)[]; // changed 'created at' to 'createdAt'
    status: string;
  }