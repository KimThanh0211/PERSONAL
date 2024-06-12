document.addEventListener('DOMContentLoaded', function() {
    // Thêm các mẫu template vào gallery
    const templates = [
        { title: 'Template 1', description: 'Description for template 1' },
        { title: 'Template 2', description: 'Description for template 2' },
        { title: 'Template 3', description: 'Description for template 3' }
    ];

    const gallery = document.querySelector('.template-gallery');
    templates.forEach(template => {
        const templateDiv = document.createElement('div');
        templateDiv.innerHTML = `<h3>${template.title}</h3><p>${template.description}</p>`;
        gallery.appendChild(templateDiv);
    });

    // Xử lý form liên hệ
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});
