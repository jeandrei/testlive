class GitHub{

  async getUser(user){
    const userResponse = await fetch(`https://api.github.com/users/${user}`);
    const profile = await userResponse.json();
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=created: asc`)
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    } 
  }

}