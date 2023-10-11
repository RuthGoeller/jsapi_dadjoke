const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const url = 'https://icanhazdadjoke.com/'


btn.addEventListener('click', ()=> getJokes())

const getJokes = async function(){
    try{
        result.innerHTML = `loading`
const res = await fetch(url,{
    headers:{
        Accept: 'application/json',
        'User-Agent': 'learning app'
    }
})
const data = await res.json()

if(!res.ok) throw new Error(`${data.message}`)

result.innerHTML = data.joke
        
    }catch(err){
        alert(err)
    }
}

getJokes()