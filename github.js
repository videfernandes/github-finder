class GitHub {
  constructor() {
    this.clientId = '7396cb15866f6c90749e';
    this.clientSecret = '239812aa09cfe79f3790e5ec3380ddc16040519f';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

    const profile = await profileResponse.json();
    return {
      profile
    };
  }
}