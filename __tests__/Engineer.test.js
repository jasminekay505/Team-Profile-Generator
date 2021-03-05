const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should assign a given string to gitHub via constructor', () => {
        const gitHub = 'jasminekay505';
        const newEngineer = new Engineer('Jasmine', 20, 'myemail@gmail.com', gitHub);
        expect(newEngineer.gitHub).toBe(gitHub);
    });
});

describe('getGitHub', () => {
    it('should return the gitHub user name of Engineer', () => {
        const gitHub = 'jasminekay505';
        const newEngineer = new Engineer('Jasmine', 20, 'myemail@gmail.com', gitHub);
        expect(newEngineer.getGitHub()).toBe(gitHub);
    });
});

describe('getRole', () => {
    it('should return Engineer', () => {
        const role = 'Engineer';
        const newEngineer = new Engineer('Jasmine', 20, 'myemail@gmail.com', 'jasminekay505');
        expect(newEngineer.getRole()).toBe(role);
    });
});