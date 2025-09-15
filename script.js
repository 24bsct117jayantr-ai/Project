function toggleMenu() {

  const navLinks = document.querySelector('.nav-links');

  navLinks.classList.toggle('show');

}

function submitForm(event) {

  event.preventDefault();

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {

    alert('Please fill out all fields.');

    return;

  }

  // Simulate sending the message

  alert(`Thank you, ${name}! Your message has been sent.`);

  

  // Clear the form

  document.querySelector('form').reset();

}