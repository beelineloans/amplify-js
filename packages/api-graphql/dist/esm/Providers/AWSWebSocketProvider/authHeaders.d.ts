import { AWSAppSyncRealTimeProviderOptions } from '../AWSAppSyncRealTimeProvider';
type AWSAppSyncRealTimeAuthInput = Partial<AWSAppSyncRealTimeProviderOptions> & {
    canonicalUri: string;
    payload: string;
    host?: string | undefined;
};
export declare const awsRealTimeHeaderBasedAuth: ({ apiKey, authenticationType, canonicalUri, appSyncGraphqlEndpoint, region, additionalCustomHeaders, payload, host: optionsHost, }: AWSAppSyncRealTimeAuthInput) => Promise<Record<string, string | undefined> | undefined>;
export {};
