import { TruncatePostsPipe } from './truncate-posts.pipe';

describe('TruncatePostsPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePostsPipe();
    expect(pipe).toBeTruthy();
  });
});
