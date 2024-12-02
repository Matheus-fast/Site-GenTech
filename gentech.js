           // Criação dos elementos geométricos do parallax
            function createShapes() {
                const bg = document.getElementById('parallax-bg');
                const numberOfShapes = 15;
                
                for (let i = 0; i < numberOfShapes; i++) {
                    const shape = document.createElement('div');
                    shape.className = 'shape';
                    
                    const size = Math.random() * 100 + 50;
                    const left = Math.random() * 100;
                    const top = Math.random() * 100;
                    
                    shape.style.width = `${size}px`;
                    shape.style.height = `${size}px`;
                    shape.style.left = `${left}%`;
                    shape.style.top = `${top}%`;
                    
                    bg.appendChild(shape);
                }
            }

            // Efeito Parallax otimizado
            function initParallax() {
                const shapes = document.querySelectorAll('.shape');
                let ticking = false;
                
                window.addEventListener('mousemove', (e) => {
                    if (!ticking) {
                        window.requestAnimationFrame(() => {
                            const mouseX = e.clientX / window.innerWidth - 0.5;
                            const mouseY = e.clientY / window.innerHeight - 0.5;
                            
                            shapes.forEach((shape, index) => {
                                const speed = (index + 1) * 0.05;
                                const x = mouseX * 100 * speed;
                                const y = mouseY * 100 * speed;
                                shape.style.transform = `translate(${x}px, ${y}px)`;
                            });
                            
                            ticking = false;
                        });
                        
                        ticking = true;
                    }
                });
            }

            // Scroll suave
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Script para menu móvel
document.addEventListener('DOMContentLoaded', () => {
    const navContent = document.querySelector('.nav-content');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

    // Toggle de visibilidade do menu
    mobileMenuToggle.addEventListener('click', (e) => {
        console.log('clicou')
        e.stopPropagation(); // Impede que o evento se propague
        navLinks.classList.toggle('menu-ativo');
        mobileMenuToggle.classList.toggle('open');
    });
    
    // Fecha o menu quando um link é clicado
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('menu-ativo');
            mobileMenuToggle.classList.remove('open');
        });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!navContent.contains(event.target)) {
            navLinks.classList.remove('menu-ativo');
            mobileMenuToggle.classList.remove('open');
        }
    });
});