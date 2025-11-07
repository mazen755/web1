const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input',()=>{const word =searchInput.Value.trim().split(' ');
    if(word.length>25){
        searchInput.Value=word(0,25).join(' ');
        document.getElementById('error-message').innerHTML='(25) the limt is';
    }
    else{
        document.getElementById('error-message').innerHTML=''
    }
})