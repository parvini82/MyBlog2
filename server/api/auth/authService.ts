import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../UserRepository';
import { Users } from '../types'; // Example user model
const SECRET_KEY = 'Palpali490';

export const login = async (email: string, password: string): Promise<string> => {
  const user = await getUserByEmail(email);
  if (!user) throw new Error('Invalid email or password');
  
  const validPassword = await bcrypt.compare(password, user.Password);
  console.log(password+" ,"+user.Password);
  if (!validPassword) throw new Error('Invalid email or password');

  const token = jwt.sign({ id: user.UserId, email: user.Email }, SECRET_KEY, { expiresIn: '1h' });
  console.log(token);
  return token;
};
