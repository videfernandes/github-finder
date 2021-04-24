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
        if (data.profile.message === 'Not found') {
          //Show alert
        } else {
          //show profile
          ui.showProfile(data.profile);

        }
        console.log(data);
      });
  } else {
    //clear profile

  }
});