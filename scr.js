function showAlert(courseName) {
    alert("You clicked on " + courseName);
}

function handleMouseMove(event) {
    const box = event.currentTarget;
    const { width, height, left, top } = box.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    const tiltX = (yPercent - 50) * -0.1; // Adjust the tilt amount
    const tiltY = (xPercent - 50) * 0.1; // Adjust the tilt amount

    box.style.transform = `perspective(300px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    const descriptionBox = element.querySelector('.hover-description');
    descriptionBox.style.display = 'block';
}

function handleMouseLeave(event) {
    const box = event.currentTarget;
    box.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)';

    const descriptionBox = element.querySelector('.hover-description');
    descriptionBox.style.display = 'none';
}
