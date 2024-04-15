const { validateEmail } = require('./emailValidator');

describe('Email Validation', () => {
    test('Valid Email', () => {
        const validEmail = 'email.test@gmail.com';
        expect(validateEmail(validEmail)).toBe(true);
    });

    test('Invalid Email', () => {
        const invalidEmail = 'invalid-email';
        expect(validateEmail(invalidEmail)).toBe(false);
    });
});
