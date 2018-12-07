import bcrypt from 'bcrypt';

export const hash = async mypassword => {
  return await bcrypt.hash(mypassword, 11);
};

// compare hash password

export async function compare(password, hash) {
  return await bcrypt.compare(password, hash);
}
