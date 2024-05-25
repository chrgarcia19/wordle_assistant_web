"use client"

import { readFileToArray } from "@/utils/functions";
import { Card, CardBody } from "@nextui-org/react";
import { useEffect, useState } from "react";

const WordList = () => {

    const [wordList, setWordList] = useState<string[]>([]);

    useEffect(() => {
        setWords();
    }, []);

    async function setWords(){
        const wordsArray = await readFileToArray();
        setWordList(wordsArray);
    }
    
    return (
        <>
            <div className="flex flex-wrap gap-2">
                {wordList.map((word: string, index: number) => (
                    <Card key={index} className="p-2 rounded-xl bg-slate-300">
                        <CardBody>
                            {word}
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    )

}

export default WordList;