import { ScreenManager } from "./ScreenManager";

/**
 * Provides the functionality to draw paginated content using a `ScreenManager`.
 */
export class Paginator {
    /**
     * Gets or sets the index of the currently focused line.
     */
    protected pointer: number;

    /**
     * Gets or sets the index of the last focused line.
     */
    protected lastIndex: number;

    /**
     * Gets or sets an object for drawing the paginated content.
     */
    protected screen: ScreenManager;

    /**
     * Initializes a new instance of the `Paginator` class.
     *
     * @param screenManager
     * A screen-manager for drawing the paginated content.
     */
    public constructor(screenManager: ScreenManager);

    /**
     * Paginates the specified `content`.
     *
     * @param content
     * The content to paginate.
     * @param selectedIndex
     * The number of the selected line.
     */
    public paginate(content: string, selectedIndex: number): string;
}