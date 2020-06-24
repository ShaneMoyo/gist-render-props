const github = { 
    getGistsByUsername: function(username) { 
        console.log('hereeee')
        return fetch(`https://api.github.com/users/${username}/gists`)
            .then( res => { 
                if(res.status !== 200) throw new Error('Server error'); 
                return res.json(); 
            }); 
    }, 

}

export default github; 