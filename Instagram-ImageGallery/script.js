document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.getElementById('uploadButton');
    const table = document.querySelector('table');
  
    uploadButton.addEventListener('click', function () {
      // Create an input element of type 'file'
      const input = document.createElement('input');
      input.type = 'file';
  
      // Trigger a click event on the input element
      input.click();
  
      // Handle the file selection
      input.addEventListener('change', function () {
        const files = input.files;
  
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
  
          if (file) {
            // Create an image element for the new photo
            const newImage = document.createElement('img');
            newImage.src = URL.createObjectURL(file);
            newImage.alt = 'image';
  
            // Get the last row in the table
            const lastRow = table.rows[table.rows.length - 1];
  
            // Check if the last row is full (contains three cells)
            if (lastRow.cells.length < 3) {
              // If not full, create a new cell in the last row
              const newCell = lastRow.insertCell(-1);
  
              // Add the new image to the new cell
              newCell.appendChild(newImage);
            } else {
              // If full, create a new row and add the new image to the first cell
              const newRow = table.insertRow(-1);
              const newCell = newRow.insertCell(0);
              newCell.appendChild(newImage);
            }
          }
        }
      });
    });
  });
  