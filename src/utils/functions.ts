'use server'

import fs from "fs";
import path from "path";


export async function readFileToArray(){
    const filePath = path.join(process.cwd(), 'public', 'wordlewords.txt');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const wordsArray = fileContents.split('\n');
    return wordsArray;
}