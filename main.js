const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const wrapper = document.getElementById('wrapper');
signUpButton.addEventListener('click', () => {
    wrapper.classList.add("right-panel-active")
})
signInButton.addEventListener('click', () => {
    wrapper.classList.remove("right-panel-active")
})