import React from 'react';

function Contact() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const {name, email, message} = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
       
     
<form id='contact' onSubmit={onSubmit} method='POST'>
<h1 class="about">Contact Me</h1>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label label" htmlFor='email'>Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div class="mb-3">
  <label for="exampleInputName1" class="form-label label" htmlFor='name'>Name</label>
  <input type="name" class="form-control" id="exampleInputName1"/>
</div>
<div class="mb-3">
  <label for="exampleInputMessage1" class="form-label label" htmlFor='message'>Message</label>
  <textarea className="form-control" id="message" required /></div>
<button type="submit" class="btn btn-primary submit">
{formStatus}</button>
</form>
    );
}

export default Contact;