export const dAppName = 'example Dapp';

// Generate your own WalletConnect 2 ProjectId here: https://cloud.walletconnect.com/app
export const walletConnectV2ProjectId = '9b1a9564f91cb659ffe21b73d5c4e2d8';

export const apiTimeout = 6000;
export const transactionSize = 15;
export const TOOLS_API_URL = 'https://tools.multiversx.com';
/**
 * Calls to these domains will use `nativeAuth` Baerer token
 */
export const sampleAuthenticatedDomains = [TOOLS_API_URL];

export const isDev = true;

export const MVX_API_URL = isDev ? 'https://devnet-api.multiversx.com' : 'https://api.multiversx.com';
export const MVX_GATEWAY_URL = isDev ? 'https://devnet-gateway.multiversx.com' : 'https://gateway.multiversx.com';
