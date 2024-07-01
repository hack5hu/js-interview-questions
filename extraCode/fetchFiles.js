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

// Main function to fetch file names, sort them, and write them to a file
async function main() {
  try {
    const files = await fetchFileNames(folderPath);

    // Sort file names based on the numeric part in the filename
    files.sort((a, b) => {
      const [, numA] = a.match(/ques-(\d+)_/) || [, Infinity];
      const [, numB] = b.match(/ques-(\d+)_/) || [, Infinity];
      return parseInt(numA) - parseInt(numB);
    });

    // Get current script's directory path
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const outputPath = path.join(__dirname, "fileNames.txt");

    // Write sorted file names to a text file
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

