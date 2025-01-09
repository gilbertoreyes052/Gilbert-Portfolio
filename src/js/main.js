<script>
   document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Send form data to EmailJS
      emailjs.sendForm('service_04ij87t', 'template_zdfqwhf', this)
         .then(function() {
            alert('Message sent successfully!');
         }, function(error) {
            alert('Failed to send message. Please try again later.');
         });
   });
</script>