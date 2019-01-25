const server = require('./helloHapi');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/',
  };
  it('should return hello hapi string', async () => {
    const temp = await server.inject(options);
    expect(temp.result).toEqual('Hello hapi');
  });
});
