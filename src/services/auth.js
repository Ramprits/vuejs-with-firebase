import { auth } from "./firebase";
export const login = async (email, password) => {
  let result = { user: undefined, error: undefined };
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    result.user = user;
  } catch (err) {
    result.error = err;
  }
  return result;
};
export const register = async (email, password) => {
  try {
    return await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    return error.message;
  }
};
