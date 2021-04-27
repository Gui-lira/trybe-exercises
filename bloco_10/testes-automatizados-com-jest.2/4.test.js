const getRepos  = require('./4');

describe('teste de função', () => {
    // beforeEach( async () => {
    //     const repo = await getRepos('https://api.github.com/orgs/tryber/repos');
    //     return repo
    // });    
    it('teste do todo-list', async () => {
        const repo = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(repo).toContain('sd-01-week4-5-project-todo-list');
    });
    it('teste do meme-generator', async () => {
        const repo = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(repo).toContain('sd-01-week4-5-project-meme-generator');
    });
})