fetch('https://cors-anywhere.herokuapp.com/https://github.com/facebook/react/issues')
    .then(res => res.json()) 
    .then((result)=>{console.log(result)})
    .catch(err => console.log(err))

    