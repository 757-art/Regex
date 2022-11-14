import Validator from '../src/index';

test('Тестируем регулярные выражения', () => {
  expect(null).toEqual(Validator('111asd000'));
});
