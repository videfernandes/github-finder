//search input 
const searchUser = document.getElementById('searchUser');
const github = new GitHub();
const ui = new UI();

//search input event listener
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value;

  if (userText !== '') {
    //make http call 
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);

        }
        console.log(data);
      });
  } else {
    //clear profile

    ui.clearProfile();

  }
});