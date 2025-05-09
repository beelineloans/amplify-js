declare const module: {
    openAuthSessionAsync: (url: string, redirectUrls: string[], prefersEphemeralSession?: boolean) => Promise<string | null | undefined>;
};
export type WebBrowserModule = typeof module;
export { module };
