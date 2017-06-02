import { GitlabCiCdPage } from './app.po';

describe('gitlab-ci-cd App', () => {
  let page: GitlabCiCdPage;

  beforeEach(() => {
    page = new GitlabCiCdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
