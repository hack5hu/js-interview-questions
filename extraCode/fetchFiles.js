import fs from "fs";
import path from "path";

// Fetch folder path from command line arguments
const folderPath = process.argv[2];

if (!folderPath) {
  console.error("Please provide a folder path as an argument.");
  process.exit(1);
}

// Function to fetch all file names from a folder
function fetchFileNames(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

// Main function to fetch file names and write them to a file
async function main() {
  try {
    const files = await fetchFileNames(folderPath);

    // Get current script's directory path
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const outputPath = path.join(__dirname, "fileNames.txt");

    // Write file names to a text file
    fs.writeFile(outputPath, files.join("\n"), "utf8", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log(`File names written to ${outputPath}`);
      }
    });
  } catch (error) {
    console.error("Error fetching file names:", error);
  }
}

main();

