const server = require('./routes');

describe('server ', () => {
  it('should return Hello Abhinav', async () => {
    const data1 = await server.inject({
      method: 'GET',
      url: '/Abhinav',
    });
    expect(data1.result).toEqual('Hello Abhinav');
  });

  it('should return Hello World', async () => {
    const data1 = await server.inject({
      method: 'GET',
      url: '/World',
    });
    expect(data1.result).toEqual('Hello World');
  });
});
