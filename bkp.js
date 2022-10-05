
let time;


function delay(val){
  clearTimeout(time);
  return new Promise((resolve)=>{   
    time = setTimeout(()=>{
      resolve(val);
    },3000)
  }) 
}



async function Search(e){
  const text = await delay(e.target.value);
  console.log(text);
}


//EventListener para o input
const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup',(e)=>{
  Search(e);
});