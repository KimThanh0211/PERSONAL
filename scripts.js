document.addEventListener('DOMContentLoaded', function() {
    // Thêm các mẫu template vào gallery
    const templates = [
        { title: 'Romantic Template', description: 'A romantic template for your special day.' },
        { title: 'Modern Template', description: 'A modern template with clean design.' },
        { title: 'Classic Template', description: 'A classic template for traditional weddings.' }
    ];

    const gallery = document.querySelector('.template-gallery');
    templates.forEach(template => {
        const templateDiv = document.createElement('div');
        templateDiv.innerHTML = `
            <h3>${template.title}</h3>
            <p>${template.description}</p>
            <button class="view-template">View Template</button>
        `;
        gallery.appendChild(templateDiv);
    });

    // Xử lý form liên hệ
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });

    // Thêm chức năng xem chi tiết template
    document.querySelectorAll('.view-template').forEach(button => {
        button.addEventListener('click', function() {
            alert('View template details');
        });
    });
});
