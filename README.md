# Santa Gmae

### Explanation:

1. *Reading the CSV*: The csv-parser library is used to read and parse the CSV file. Each row is pushed into the employees array.
2. *Shuffling*: The shuffleArray function shuffles the array of employees to ensure random assignments.
3. *Assigning Pairs*: Each employee is assigned the next employee in the shuffled array as their Secret Santa. The last employee is assigned the first employee to complete the circle.
4. *Generating Output*: The assignments are written to a new CSV file named secret_santa_assignments.csv.

### Requirements:

- Install the csv-parser library using npm:
  bash
  npm install csv-parser
  

### Running the Code:

1. Save the code in a file, e.g., secretSanta.js.
2. Run the script using Node.js:
   bash
   node secretSanta.js
