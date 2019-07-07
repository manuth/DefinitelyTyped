import Prompt = require("./base");
import inquirer = require("../..");
import { Interface as ReadlineInterface } from "readline";

/**
 * Represents a prompt which provides a message to confirm.
 */
declare class ConfirmPrompt extends Prompt<inquirer.poll.ConfirmQuestion<inquirer.poll.Answers>> {
    /**
     * Initializes a new instance of the `ConfirmPrompt<T>` class.
     *
     * @param question
     * The question to prompt the user to answer.
     *
     * @param readLine
     * An object for performing read from and write to the console.
     *
     * @param answers
     * The answer-object.
     */
    public constructor(questions: inquirer.poll.ConfirmQuestion<inquirer.poll.Answers>, readLine: ReadlineInterface, answers: inquirer.poll.Answers);

    /**
     * Renders the prompt.
     *
     * @param answer
     * The answer provided by the user.
     */
    protected render(answer?: boolean): this;

    /**
     * Handles the `success`-event of the prompt.
     *
     * @param input
     * The input provided by the user.
     */
    protected onEnd(input: string): void;

    /**
     * Handles the `Keypress`-event of the prompt.
     */
    protected onKeypress(): void;
}

export = ConfirmPrompt;