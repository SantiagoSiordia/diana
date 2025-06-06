const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStep(i) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.arc(100, 150, 15, 0, Math.PI * i, false);
  ctx.stroke();
  
  // Reset i to 0 when it reaches 2 to create infinite loop
  const nextI = i >= 2 ? 0 : i + 0.2;

  setTimeout(() => drawStep(nextI), 50); // Call next step after 1 second
}

// Start the animation
drawStep(0);