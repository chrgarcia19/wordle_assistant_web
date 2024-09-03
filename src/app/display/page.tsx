import GuessesRemaining from "@/components/GuessesRemaining";
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider } from "@nextui-org/react";

const Display = () => {
    function dateDiffInDays(date1: Date, date2: Date) {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const UTCDate1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const UTCDate2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
      
        return Math.floor((UTCDate2-UTCDate1) / MS_PER_DAY);
      }

    const firstWordle = new Date(2021, 5, 19);
    const today = new Date();
    

    return (
        <>
            <div className="flex justify-center items-center">
                <Card>
                   <CardHeader>
                        <Chip color="secondary" className="flex font-bold text-2xl p-4">
                            Wordle #{dateDiffInDays(firstWordle, today)}
                        </Chip>
                    </CardHeader> 
                    <Divider/>
                    <CardBody>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                    </CardFooter>
                </Card>
                <GuessesRemaining guessesLeft={2} />
            </div>
        </>
    );
}

export default Display;