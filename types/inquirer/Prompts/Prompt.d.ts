import inquirer = require("..");
import { Interface as ReadLineInterface } from "readline";
import { ScreenManager } from "../System/ScreenManager";
import { Observable } from "rxjs";

/**
 * Represents a prompt.
 */
export declare class Prompt<TOptions = inquirer.poll.Question<inquirer.poll.Answers>> implements inquirer.prompts.PromptBase {
    /**
     * @inheritdoc
     */
    public status: inquirer.prompts.PromptState;

    /**
     * Gets or sets an object which contains the answers.
     */
    protected answers: inquirer.poll.Answers;

    /**
     * Gets or sets the options of the prompt.
     */
    protected opt: TOptions;

    /**
     * Gets or sets an object for performing read from and write to the console.
     */
    protected rl: ReadLineInterface;

    /**
     * Gets or sets an object for managing the console-screen.
     */
    protected screen: ScreenManager;

    /**
     * Initializes a new instance of the `Prompt<T>` class.
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
    public constructor(question: TOptions, readLine: ReadLineInterface, answers: inquirer.poll.Answers);

    /**
     * @inheritdoc
     */
    public run(): Promise<any>;

    /**
     * Runs the prompt.
     *
     * @param callback
     * The callback for resolving the result.
     */
    protected _run(callback: (value: any) => any): void;

    /**
     * Throws an error for a missing param.
     *
     * @param name
     * The name of the missing param.
     */
    protected throwParamError(name: string): void;

    /**
     * Releases all unmanaged resources.
     */
    protected close(): void;

    /**
     * Handles the submit-event.
     *
     * @param submit
     * The submit-event flow.
     */
    protected handleSubmitEvents(submit: Observable<any>): inquirer.prompts.SubmitEventResult;

    /**
     * Generates the question-string.
     *
     * @returns
     * The question-string.
     */
    protected getQuestion(): string;
}