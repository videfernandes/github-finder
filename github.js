class GitHub {
  constructor() {
    this.clientId = '7396cb15866f6c90749e';
    this.clientSecret = '239812aa09cfe79f3790e5ec3380ddc16040519f';
    this.reposCount = 5;
    this.reposSort = 'created: asc';

  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
      per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    };
  }
}