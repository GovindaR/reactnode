import User from '../model/user';
import { hash, compare } from '../utils/crypt';

export async function getAllUsers() {
  return await User.getAllDriver();
}
export async function getUsersId(id) {
  return await User.getDriverById(id);
}

export async function login(userDetail) {
  // get encrpyted all inforation of the given users frm dataase

  // if database return value then this means, given user is active.
  // then we can chck if the password is corrct or not
  console.log('dta', userDetail);
  const dbUserResult = await User.getUserDetail(userDetail.username);
  console.log('result', dbUserResult);
  if (dbUserResult.length) {
    // compare value of given password with databas result.
    return await compare(userDetail.passwor, dbUserResult[0].password);
  }
  return null;
}

export async function getUsersAdd(data) {
  const newPassword = await hash(data.password);
  delete data.password;
  data.password = newPassword;
  return await User.postAllDriver(data);
}
