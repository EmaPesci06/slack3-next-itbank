import fs from 'fs'
import path from 'path';

export function getAccounts() {
    const filePath = path.join(process.cwd(), 'data', 'accounts.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const accounts = JSON.parse(fileContents);
    return accounts;
}
