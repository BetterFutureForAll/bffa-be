const request = require('../request');

describe('core app api', () => {
  it('is alive', () => {
    return request
      .get('/hello')
      .expect(200)
      .then(res => {
        expect(res.text).toBe('world');
      });
  });
});