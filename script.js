// Function to draw the geometric pattern on a canvas
function drawPattern() {
    const canvas = document.getElementById('canvas'); // Ensure you have a canvas element with this ID
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#000000'; // Line color
        ctx.lineWidth = 1; // Line width

        for (let i = 0; i < canvas.width; i += 20) {
            for (let j = 0; j < canvas.height; j += 20) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.height);
                ctx.moveTo(0, j);
                ctx.lineTo(canvas.width, j);
                ctx.stroke();
            }
        }
    }
}

// Function to manage active dot based on scroll position
function updateActiveDot() {
    const sections = ['introduction', 'skills', 'research-projects', 'experience', 'message'];
    const dots = document.querySelectorAll('.scrolling-dots .dot');
    let currentActiveIndex = -1;
    let closestDistance = Number.MAX_VALUE;

    sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < closestDistance) {
                closestDistance = rect.top;
                currentActiveIndex = index;
            }
        }
    });

    dots.forEach((dot, index) => {
        dot.className = (index === currentActiveIndex) ? 'dot active' : 'dot';
    });
}

// Function to show job descriptions on click
function showDescription(jobId) {
    document.querySelectorAll('.job_description').forEach(function(desc) {
        desc.classList.remove('active');
    });
    document.getElementById(jobId + '_desc').classList.add('active');
}

// Initialize functionality on document ready
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('canvas')) {
        drawPattern();
    }

    updateActiveDot();
    window.addEventListener('scroll', updateActiveDot);

    const dots = document.querySelectorAll('.scrolling-dots .dot');
    const sections = Array.from(dots).map(dot => document.querySelector(dot.getAttribute('href')));

    function changeDotState() {
        let index = sections.length;
        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        dots.forEach((dot, idx) => {
            dot.className = (idx === index) ? 'dot active' : 'dot';
        });
    }

    changeDotState();
    window.addEventListener('scroll', changeDotState);
});
