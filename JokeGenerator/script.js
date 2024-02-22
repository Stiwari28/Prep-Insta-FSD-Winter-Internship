const jokeBtn=document.getElementById('jokeBtn');
jokeBtn.addEventListener('click',()=>{
    fetch('https://official-joke-api.appspot.com/random_joke', {
    method: 'GET',
    
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    jokeGenerator(data);
})
.catch(error => {
    console.error('Error:', error);
});
})



function jokeGenerator(data){
   console.log(data);
   document.getElementById('setup').innerHTML=data.setup;
   document.getElementById('punchline').innerHTML=data.punchline;
   
}