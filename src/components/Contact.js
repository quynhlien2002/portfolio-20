import React from 'react';

function Contact() {
    return (
        <section id='contact'>
        <h1 class="about">Contact Me</h1>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Email" aria-label="Username"/>
          </div>
          
          <div class="input-group">
            <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
          </div>

          <input class="btn btn-primary submit" type="submit" value="Submit"/>

    </section>
    );
}

export default Contact;