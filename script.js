//your JS code here. If required.
const line = document.getElementById('line');

    // Set the rotation angle
    let angle = 0;

    // Function to rotate the line
    function rotateLine() {
      angle += 1; 

      line.style.transform = `rotate(${angle}deg)`;

      setTimeout(rotateLine, 10);
    }

    rotateLine();
