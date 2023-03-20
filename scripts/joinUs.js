const joinUsContent = document.querySelector('.joinUs-content')
const userForm = document.querySelector('.user-form')
const userNameInput = document.getElementById('nameInput')
const userEmailInput = document.getElementById('emailInput')

// check if user already subscribed 
const subscribedUser = localStorage.getItem('user')
if (subscribedUser) {
    joinUsContent.innerHTML = `<div>
            <img class="submit-image" src="../images/submit-image.gif" alt="">
            
            <h1 class="submit-message">You already subscribed 🥰 </h1>
        
        </div>`
    
} else {
   userNameInput.focus()
}
    
// show content with transition effect
document.addEventListener('DOMContentLoaded', () => {
    joinUsContent.classList.add('show')
})


// show error when inputs are invalid
const showError = (input) => {

// create error element in DOM
    const errorElement = document.createElement('p')
    errorElement.className = 'error'
    const refElementName = document.getElementById('nameFormControl')
    const refElementEmail = document.getElementById('emailFormControl')
    let message =`Please enter valid ${input}`

// error when only name is invalid
    if (input === 'name') {
        errorElement.innerText = message
        errorElement.id = 'nameError'
        refElementName.appendChild(errorElement)

// error when only email is invalid
    } if (input === 'email') {
        errorElement.innerText = message
        errorElement.id = 'emailError'
        refElementEmail.appendChild(errorElement)

// error when both name and email are invalid
    } if (input === 'all') {

        message = 'Please enter valid' + ' name'
        errorElement.innerText = message
        errorElement.id = 'nameError'
        refElementName.appendChild(errorElement)

        let errorElementEmail = errorElement.cloneNode(true)
        errorElementEmail.innerText = 'Please enter valid' + ' email'
        errorElementEmail.id = 'emailError'
        refElementEmail.appendChild(errorElementEmail)   
    }

}

// form submit function 
const submitForm = () => {
    // get input values
    const enteredName = userNameInput.value
    const enteredEmail = userEmailInput.value

    // regex input values
    const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)*$/g

    const emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    const isNameValid = nameRegex.test(enteredName)
    
    const isEmailValid = emailRegex.test(enteredEmail)
    

    if (isNameValid && isEmailValid) {
    
        // store user info to local storage
        const user = { name: enteredName, email: enteredEmail }
        localStorage.setItem('user', JSON.stringify(user))

        // submit successfully message
        joinUsContent.innerHTML = `<div>
            <img class="submit-image" src="../images/submit-image.gif" alt="">
            
            <h1 class="submit-message">Thank you for subscribing!</h1>
        
        </div>`
    
// invalid name and invalid email
    } else if (!isNameValid && !isEmailValid) {
        showError('all')

// invalid name but valid email
    } else if (!isNameValid && isEmailValid) {
        showError('name')

// valid name but invalid email
    } else if(isNameValid && !isEmailValid) {
        showError('email')
    }

}

// submit form event 
userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm()
})



// monitor input values when reenter after invalid first time
userNameInput.addEventListener('keydown', (e) => {
    const enteredName = e.target.value
    const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)*$/g

    const isNameValid = nameRegex.test(enteredName)
    const nameError = document.getElementById('nameError')
    if (isNameValid && nameError) {
        nameError.remove()
    }
})

userEmailInput.addEventListener('keydown', (e) => {
    const enteredEmail = e.target.value
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const isEmailValid = emailRegex.test(enteredEmail) 
    const emailError = document.getElementById('emailError')
    if (isEmailValid && emailError) {
        emailError.remove()
    }
})



