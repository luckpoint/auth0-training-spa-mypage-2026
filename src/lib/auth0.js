import { Auth0Client } from '@auth0/auth0-spa-js';

export function readAuth0Config(env = import.meta.env) {
  const domain = env.VITE_AUTH0_DOMAIN?.trim();
  const clientId = env.VITE_AUTH0_CLIENT_ID?.trim();
  return domain && clientId ? { domain, clientId } : null;
}

let client;

function getClient() {
  if (!client) {
    const { domain, clientId } = readAuth0Config();
    client = new Auth0Client({
      domain,
      clientId,
      authorizationParams: { redirect_uri: `${window.location.origin}/callback` },
    });
  }
  return client;
}

export function login() {
  return getClient().loginWithRedirect();
}
