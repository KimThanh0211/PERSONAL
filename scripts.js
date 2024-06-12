document.addEventListener('DOMContentLoaded', function() {
    // Thêm các mẫu template vào gallery
    const templates = [
        { title: 'Template 1', description: 'Description for template 1' },
        { title: 'Template 2', description: 'Description for template 2' },
        { title: 'Template 3', description: 'Description for template 3' },
        // Thêm các template khác tại đây
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
