function updatePreview() {
    var textInput = document.getElementById('textInput').value.toUpperCase();
    var memeImage = document.getElementById('memeImage');
    
    var previewText = document.getElementById('previewText');
    if (!previewText) {
        previewText = document.createElement('div');
        previewText.id = 'previewText';
        memeImage.parentNode.appendChild(previewText);
    }

    previewText.innerHTML = textInput;
    previewText.style.position = 'absolute';
    previewText.style.top = '10px'; // Adjusted to the top of the image
    previewText.style.left = '50%';
    previewText.style.transform = 'translateX(-50%)';
    previewText.style.font = '50px Impact'; // Use 'Impact' or another meme-style font
    previewText.style.color = 'white';
    previewText.style.textAlign = 'center';
    previewText.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)'; // Add a drop shadow
}

function generateMeme() {
    var textInput = document.getElementById('textInput').value.toUpperCase();
    
    var canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;

    var ctx = canvas.getContext('2d');
    
    var img = new Image();
    img.src = 'joaozera.jpg'; // Correct the image path here
    
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.font = '50px Impact'; // Use 'Impact' or another meme-style font
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)'; // Add a drop shadow

        // Calculate the y-coordinate for the text, ensuring it is within the frame
        var textHeight = 20; // Adjust the text height as needed
        var textY = Math.min(canvas.height - textHeight, 0.10 * canvas.height); // 5% of canvas height

        // Draw text with black border
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.strokeText(textInput, canvas.width / 2, textY);
        ctx.fillText(textInput, canvas.width / 2, textY);

        var downloadLink = document.getElementById('downloadLink');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.download = 'JOAOZERA_ESTILIZADO_E_COISARADA.png';
        downloadLink.style.display = 'block';
        
        // Update the preview text to match the final output
        updatePreview();
    };
}
