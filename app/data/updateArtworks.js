const fs = require('fs');

const filePath = './artworks.json';

// Read the artworks.json file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const artworks = JSON.parse(data);

    // Update the year values
    const updatedArtworks = artworks.map((artwork) => ({
      ...artwork,
        year: String(artwork.year), // Convert to string and wrap in quotes
        inventory: artwork.inventory === 0 ? 'none' : artwork.inventory, // Replace 0 with 'none'
        inventory: artwork.inventory === null ? 'none' : artwork.inventory, // Replace null with 'none'

    }));

    // Convert the updated data back to JSON string
    const updatedData = JSON.stringify(updatedArtworks, null, 2);

    // Write the updated data back to the file
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Artworks file has been updated successfully.');
    });
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});
