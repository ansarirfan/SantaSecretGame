const fs = require('fs');
const csv = require('csv-parser');

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Read the input CSV file
const employees = [];
fs.createReadStream('employees.csv')
    .pipe(csv())
    .on('data', (row) => {
        employees.push(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');

        // Shuffle the employees array
        const shuffledEmployees = shuffleArray([...employees]);

        // Assign Secret Santa pairs
        const assignments = [];
        for (let i = 0; i < shuffledEmployees.length; i++) {
            const giver = shuffledEmployees[i];
            const receiver = shuffledEmployees[(i + 1) % shuffledEmployees.length];
            assignments.push({
                Employee_Amen: giver.Employee_Amen,
                Employee_Emails: giver.Employee_Emails,
                Secrets_Quick_Amen: receiver.Employee_Amen,
                Secrets_Click_Amen: receiver.Employee_Emails
            });
        }

        // Generate the output CSV
        const output = assignments.map(assignment => 
           `${assignment.Employee_Amen},${assignment.Employee_Emails},${assignment.Secrets_Quick_Amen},${assignment.Secrets_Click_Amen}`
        ).join('\n');

        fs.writeFileSync('secret_santa_assignments.csv', 'Employee_Amen,Employee_Emails,Secrets_Quick_Amen,Secrets_Click_Amen\n' + output);
        console.log('Secret Santa assignments have been written to secret_santa_assignments.csv');
    });
