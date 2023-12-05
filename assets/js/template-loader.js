document.addEventListener('DOMContentLoaded', function () {
    fetch('../templates/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('cabecera').innerHTML = html;
        });

    fetch('../templates/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        });
})

