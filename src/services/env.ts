let proxyUrl = "";
let relays: string[] = [];

export function validateEnv() {
    if (!process.env.PROXY_URL) {
        console.error("PROXY_URL env variable is not set");
        process.exit(1);
    }
    proxyUrl = process.env.PROXY_URL;

    if (!process.env.RELAYS) {
        console.error("RELAYS env variable is not set");
        process.exit(1);
    }

    relays = process.env.RELAYS.split(",");
    if (relays.length === 0) {
        console.error("A problem occured while parsing relays");
        process.exit(1);
    }
}

export function getRelays() {
    return relays;
}

export function getProxyUrl() {
    return proxyUrl;
}