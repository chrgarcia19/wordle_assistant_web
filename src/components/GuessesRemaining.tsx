import { Chip } from "@nextui-org/react";

type Props = {
    guessesLeft: number
};

const GuessesRemaining = (props: Props) => {
    return (
        <>
            {(props.guessesLeft >= 5) && (
                <Chip
                radius="full"
                color="primary">
                    Guesses Remaining: {props.guessesLeft}
                </Chip>
            ) || (props.guessesLeft <= 4 && props.guessesLeft >= 3) && (
                <Chip
                radius="full"
                color="warning">
                    Guesses Remaining: {props.guessesLeft}
                </Chip>
            ) || (props.guessesLeft <= 2) && (
                <Chip
                radius="full"
                color="danger">
                    Guesses Remaining: {props.guessesLeft}
                </Chip>
            )}
        </>
    );
}

export default GuessesRemaining;