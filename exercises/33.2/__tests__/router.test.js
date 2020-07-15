const tab = require('../api/router');

describe('testando patterns', () => {
  const service = tab();
  test('observer', () => {
    expect(service.sum(2, 2)).toEqual(4);
    expect(service.sub(4, 3)).toEqual(1);
    expect(service.mult(2, 10)).toEqual(20);
  });
});
