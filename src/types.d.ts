/**
 * Prettier configuration
 */
export interface PrettierConfig {
    parser?: 'babylon' | 'flow' | 'postcss' | 'typescript';
    printWidth?: number;
    tabWidth?: number;
    useTabs?: boolean;
    jsxSingleQuote?: boolean;
    singleQuote?: boolean;
    trailingComma?: 'none' | 'es5' | 'all';
    bracketSpacing?: boolean;
    bracesSpacing?: boolean;
    breakProperty?: boolean;
    arrowParens?: boolean;
    arrayExpand?: boolean;
    flattenTernaries?: boolean;
    breakBeforeElse?: boolean;
    jsxBracketSameLine?: boolean;
    noSpaceEmptyFn?: boolean;
    semi?: boolean;
    spaceBeforeFunctionParen?: boolean;
    alignObjectProperties?: boolean;
}

/**
 * prettier-vscode specific configuration
 */
interface ExtensionConfig {
    /**
     * Language ids to run javascript prettier on.
     */
    javascriptEnable: ('javascript' | 'javascriptreact' | string)[];
    /**
     * Language ids to run typescript prettier on.
     */
    typescriptEnable: ('typescript' | 'typescriptreact' | string)[];
    /**
     * Language ids to run postcss prettier on.
     */
    cssEnable: ('css' | 'less' | 'sass' | string)[];
}

/**
 * Configuration for prettier-vscode
 */
export type PrettierVSCodeConfig = PrettierConfig & ExtensionConfig;

type LogLevel = 'error' | 'warn' | 'info' | 'debug' | 'trace';
