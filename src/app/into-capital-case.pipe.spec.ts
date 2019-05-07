import { IntoCapitalCasePipe } from './into-capital-case.pipe';

describe('IntoCapitalCasePipe', () => {
  it('create an instance', () => {
    const pipe = new IntoCapitalCasePipe();
    expect(pipe).toBeTruthy();
  });
});
