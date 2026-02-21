// Script untuk interaktivitas halaman

// Fungsi untuk tombol JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('js-button');
    const output = document.getElementById('js-output');

    // Fungsi untuk greet button
    const greetButton = document.getElementById('greet-button');
    const nameInput = document.getElementById('name-input');
    const greeting = document.getElementById('greeting');

    if (greetButton && nameInput && greeting) {
        greetButton.addEventListener('click', function() {
            const name = nameInput.value.trim();
            if (name) {
                greeting.textContent = `Halo, ${name}! Selamat belajar JavaScript!`;
                greeting.style.color = '#28a745';
            } else {
                greeting.textContent = 'Silakan masukkan nama Anda.';
                greeting.style.color = '#dc3545';
            }
        });
    }

    // Smooth scrolling untuk navigasi
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Animasi sederhana untuk sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(section);
    });
});