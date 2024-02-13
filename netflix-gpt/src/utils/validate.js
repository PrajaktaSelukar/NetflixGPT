export const checkSignUpValidData = (name, email, password) => {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/.test(name);

    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isNameValid) return 'Name is invalid!'
    if (!isEmailValid) return 'Email ID is invalid!';
    if (!isPasswordValid) return 'Password is invalid!';

    return null;
};

export const checkSignInValidData = (email, password) => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return 'Email ID is invalid!';
    if (!isPasswordValid) return 'Password is invalid!';

    return null;
};