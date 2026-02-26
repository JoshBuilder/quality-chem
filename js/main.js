// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
            }
        });
    }

    // Product accordion toggle
    var accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            var item = this.parentElement;
            var isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(function (el) {
                el.classList.remove('active');
            });

            // Open clicked item (unless it was already open)
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Contact form handling (Formspree)
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var form = this;
            var data = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(function (response) {
                if (response.ok) {
                    form.style.display = 'none';
                    document.getElementById('form-success').style.display = 'block';
                } else {
                    alert('There was a problem sending your message. Please try again or email us directly.');
                }
            }).catch(function () {
                alert('There was a problem sending your message. Please try again or email us directly.');
            });
        });
    }
});
