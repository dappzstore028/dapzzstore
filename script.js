// Menunggu sampai seluruh konten website dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi animasi untuk skill bars
    animateSkills();
    
    // Inisialisasi smooth scrolling untuk link navigasi
    initSmoothScroll();
    
    // Inisialisasi highlighting link navigasi aktif saat scroll
    initNavHighlighting();
    
    // Inisialisasi efek paralaks untuk bagian hero
    initParallaxEffect();
    
    // Inisialisasi animasi scroll
    initScrollAnimation();
});

// Fungsi untuk menganimasikan skill bars
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-per');
    
    skillBars.forEach(skill => {
        const percentage = skill.getAttribute('per');
        skill.style.width = percentage + '%';
    });
}

// Fungsi untuk smooth scrolling pada link navigasi
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Hanya berlaku untuk link yang mengarah ke ID
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                // Lewati jika hanya "#"
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Tutup menu mobile jika terbuka
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        document.querySelector('.navbar-toggler').click();
                    }
