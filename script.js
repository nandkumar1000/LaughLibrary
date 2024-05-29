const apiBody=document.querySelector(".api_body");
const apiurl="https://icanhazdadjoke.com/";
const fetchdata=() =>{
    fetch(apiurl,{
        headers:{
            Accept:"application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        apiBody.innerHTML=data.joke;
    })
    .catch((error)=>{
        console.log(error);
    });
};
fetchdata(); 
document.getElementById("fetchjoke").addEventListener("click",fetchdata);