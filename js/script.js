document.addEventListener('DOMContentLoaded', function() {

    // --- 1. On-Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));

    // --- 2. Story Modal Logic ---
    const modal = document.getElementById('full-story-modal');
    const modalContent = modal.querySelector('.modal-content');
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const closeModalBtn = document.querySelector('.close-modal');

    // Sample story data
    const storyData = {
        1: {
            title: "The Geometry of Home",
            content: `
                <img src="https://via.placeholder.com/800x400/2C3E50/FFFFFF?text=Riyadh+Skyline" alt="Riyadh Skyline">
                <p>My memories of Saudi Arabia are framed in straight lines and vast, open spaces. I remember the heat shimmering off the endless desert, the cool marble of the mosques, and the futuristic skyline of Riyadh, which felt like a city plucked from a science fiction novel.</p>
                <p>Growing up there was an exercise in minimalism. The beauty wasn't in abundance, but in the profound silence of the desert, the intricate patterns of Islamic art, and the strong sense of community. It taught me structure, discipline, and an appreciation for simplicity.</p>
                <p>This is the home that raised me, a foundation of quiet strength and modern ambition.</p>
            `
        },
        2: {
            title: "The Rhythm of the Heart",
            content: `
                <img src="https://via.placeholder.com/800x400/16A085/FFFFFF?text=Manila+Street" alt="Manila Street">
                <p>Arriving in the Philippines was like learning to see in color for the first time. The vibrant, chaotic energy of Manila felt less like a foreign country and more like a forgotten song my soul finally remembered.</p>
                <p>Where Saudi Arabia was quiet and orderly, the Philippines was loud and wonderfully messy. The air was thick with the smell of street food, the sound of jeepneys honking, and the laughter of family. It was a sensory overload in the best possible way.</p>
                <p>Here, I found the other half of my identity. It was in the warmth of my relatives, the shared history in their faces, and the unspoken understanding that this, this vibrant, beautiful chaos, was where I truly belonged.</p>
            `
        }
    };

    function openModal(storyId) {
        const story = storyData[storyId];
        if (story) {
            modalContent.innerHTML = `<h2>${story.title}</h2>${story.content}`;
            modal.classList.add('is-visible');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        modal.classList.remove('is-visible');
        document.body.style.overflow = 'auto';
    }

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const storyId = btn.dataset.storyId;
            openModal(storyId);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- 3. Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 4. Simple Form Handling ---
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! This is a demo, so it was not actually sent.');
            contactForm.reset();
        });
    }
});
