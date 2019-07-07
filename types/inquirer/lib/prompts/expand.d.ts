import Paginator = require("../utils/paginator");
import Prompt = require("./base");
import inquirer = require("../..");
import { Interface as ReadlineInterface } from "readline";

/**
 * Represents a prompt which forces the user to make a choice by typing a specific key.
 */
declare class ExpandPrompt extends Prompt<inquirer.poll.ExpandQuestion<inquirer.poll.Answers>> {
    /**
     * Resolves the value of the prompt.
     */
    protected done: (value: any) => void;

    /**
     * Gets or sets the default key.
     */
    protected rawDefault: string;

    /**
     * Gets or sets an object for paginating the content.
     */
    protected paginator: Paginator;

    /**
     * Gets the promise of the keypress-eventhandler.
     */
    protected keypressObs: Promise<void>;

    /**
     * Gets or sets the currently selected key.
     */
    protected selectedKey: string;

    /**
     * Gets or sets the answer of the prompt.
     */
    protected answer: string;

    /**
     * Initializes a new instance of the `ExpandPrompt<T>` class.
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
    public constructor(question: inquirer.poll.ExpandQuestion<inquirer.poll.Answers>, readLine: ReadlineInterface, answers: inquirer.poll.Answers);

    /**
     * Renders the prompt to the screen.
     *
     * @param error
     * The error to render.
     *
     * @param hint
     * The hint to render.
     */
    protected render(error?: string, hint?: string): void;

    /**
     * Determines the current value of the prompt.
     *
     * @param input
     * The input provided by the user.
     *
     * @returns
     * The current value of the prompt.
     */
    protected getCurrentValue(input: string): any;

    /**
     * Generates the string-representation of the choices.
     *
     * @deprecated
     *
     * @returns
     * The string-representations of the choices.
     */
    protected getChoices(): string;

    /**
     * Handles the `success`-event of the prompt.
     *
     * @param eventArgs
     * An object which contains event-data.
     */
    protected onSubmit(eventArgs: inquirer.prompts.SuccessfulPromptStateData): void;

    /**
     * Handles the `error`-event of the prompt.
     *
     * @param eventArgs
     * An object which contains event-data.
     */
    protected onError(eventArgs: inquirer.prompts.FailedPromptStateData): void;

    /**
     * Handles the `keypress`-event of the prompt.
     */
    protected onKeypress(): void;

    /**
     * Validates the integrity of the choices.
     *
     * @param choices
     * The choices to validate.
     */
    protected validateChoices(choices: ExpandPrompt["opt"]["choices"]): void;

    /**
     * Generates the string-representation of the choices.
     *
     * @param choices
     * The choices to generate the string-representation for.
     *
     * @param defaultChoice
     * The value of the default choice.
     *
     * @returns
     * The string-representations of the choices.
     */
    protected generateChoicesString(choices: ExpandPrompt["opt"]["choices"], defaultChoice: any): string;

    /**
     * Renders the choices.
     *
     * @param choices
     * The choices to render.
     *
     * @param pointer
     * The value of the choice to select.
     */
    protected renderChoices(choices: ExpandPrompt["opt"]["choices"], pointer: string): string;
}

export = ExpandPrompt;