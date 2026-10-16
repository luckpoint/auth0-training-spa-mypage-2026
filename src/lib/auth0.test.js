import { describe, expect, it } from 'vitest';
import { readAuth0Config } from './auth0.js';

describe('readAuth0Config', () => {
  it('ドメインとクライアントIDを返す', () => {
    expect(readAuth0Config({
      VITE_AUTH0_DOMAIN: ' example.auth0.com ',
      VITE_AUTH0_CLIENT_ID: 'abc',
    })).toEqual({ domain: 'example.auth0.com', clientId: 'abc' });
  });

  it.each([
    [{}],
    [{ VITE_AUTH0_DOMAIN: 'example.auth0.com' }],
    [{ VITE_AUTH0_DOMAIN: 'example.auth0.com', VITE_AUTH0_CLIENT_ID: ' ' }],
  ])('値が足りなければ null を返す %#', (env) => {
    expect(readAuth0Config(env)).toBeNull();
  });
});
