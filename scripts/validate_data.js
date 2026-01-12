const fs = require("fs");
const path = require("path");
const vm = require("vm");

function loadAppData(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(`${code}\nthis.AppData = AppData;`, sandbox);
  return sandbox.AppData;
}

function findDuplicates(items, label) {
  const seen = new Set();
  const duplicates = new Set();
  items.forEach((item) => {
    if (seen.has(item)) {
      duplicates.add(item);
    }
    seen.add(item);
  });

  if (duplicates.size > 0) {
    return `${label} has duplicates: ${Array.from(duplicates).join(", ")}`;
  }

  return null;
}

const dataPath = path.join(__dirname, "..", "data.js");
const { questions, occupationEntries, hobbyEntries } = loadAppData(dataPath);

const errors = [];
if (questions.length !== 7) {
  errors.push(`Expected 7 questions, found ${questions.length}.`);
}
if (occupationEntries.length !== 120) {
  errors.push(`Expected 120 occupations, found ${occupationEntries.length}.`);
}
if (hobbyEntries.length !== 120) {
  errors.push(`Expected 120 hobbies, found ${hobbyEntries.length}.`);
}

const occupationDuplicates = findDuplicates(
  occupationEntries.map((entry) => entry.name),
  "Occupation catalog"
);
if (occupationDuplicates) {
  errors.push(occupationDuplicates);
}

const hobbyDuplicates = findDuplicates(
  hobbyEntries.map((entry) => entry.name),
  "Hobby catalog"
);
if (hobbyDuplicates) {
  errors.push(hobbyDuplicates);
}

if (errors.length) {
  console.error("Data validation failed:");
  errors.forEach((error) => {
    console.error(`- ${error}`);
  });
  process.exit(1);
}

console.log("Data validation passed.");
