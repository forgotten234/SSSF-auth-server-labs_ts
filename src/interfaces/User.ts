import {Document} from 'mongoose';
interface User extends Document {
  first_name: string;
  second_name: string;
  user_name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
}

interface OutputUser {
  first_name?: string;
  second_name?: string;
  id: string;
  user_name: string;
  email: string;
  role?: 'user' | 'admin';
}

export {User, OutputUser};
