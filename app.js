let time;

function delay(val){
  clearTimeout(time);
  return new Promise((resolve)=>{
    time = setTimeout(()=>{
      resolve(val);
    },1000)
  })
}

github = new GitHub;
ui = new UI;




async function Search(e){
  let text = await delay(e.target.value);
  if(text != ''){
    github.getUser(text)
    .then(function(data){       
      if(data.message == 'Not Found'){
        ui.showAlert('Não encontrado','bg-danger');
        console.log('There is no user like this!');
      } else {        
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }      
    });
  } else {
    console.log('cant be blank');
  }
  
  
 
 
}


const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup',function(e){
  Search(e);
})