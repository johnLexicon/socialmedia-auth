import { getAuth, signInWithPopup } from 'firebase/auth';

const socialMediaAuth = (provider) => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      return error;
    });
};

export default socialMediaAuth;
