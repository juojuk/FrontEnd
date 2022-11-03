// Promise is a returned object
// to which you attach a callback
// instead of passing callbacks into a function

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users'        : [
                    { id: 1, username: 'Agne' },                    
                    { id: 5, username: 'Ignas' }                
                ],                
                '/users/1'      : {
                    id        : 1,                    
                    username  : 'Agne',                    
                    upvotes   : 1550,                    
                    city      : 'Vilnius',                    
                    topPostId : 454321                
                },                
                '/users/5'      : {                    
                    id       : 5,                    
                    username : 'Ignas',                    
                    upvotes  : 751,                    
                    city     : 'Kaunas'                
                },                
                '/posts/454321' : {                    
                    id    : 454321,                    
                    title :                        
                        'Miesto merai kvailioja! Paspauskite, kad suzinotumete daugiau..'                
                },                
                '/about'        : 'Apie puslapis!'            
            };

            const data = pages[url];
            if (data) {
                resolve({status: 200, data}); 
            } else {
                reject({status: 404});
            }
        }, 1000);
    });
}