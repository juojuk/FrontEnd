document.body.onload = () => {
    const user = {
        firstName: "",
        lastName: "",
    };
    sessionStorage.setItem("user_login",user);
}