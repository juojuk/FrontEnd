function agreeToTerms(){
    if (confirm('Agree to terms and conditions')){
        localStorage.setItem('consent', 'accepted');
        sessionStorage.setItem('consent', 'accepted');
    }
}

agreeToTerms();

