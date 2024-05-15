// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const AUTH_URL = 'https://172.19.0.22';
// in BASE_URL, change value to AUTH_URL for data form local demo or to 'http://localhost:3000' for mocked json server
const BASE_URL = 'http://localhost:3000';
const HOME_URL = 'https://localhost:4200';

export const environment = {
  production: false,
  statisticalVizConfig: {
    trainingServiceUrl: BASE_URL + '/kypo-rest-training/api/v1/',
  },
  authConfig: {
    guardMainPageRedirect: 'visualization',
    guardLoginPageRedirect: 'login',
    interceptorAllowedUrls: [AUTH_URL, 'http://localhost', 'https://localhost'],
    authorizationStrategyConfig: {
      authorizationUrl: AUTH_URL + '/kypo-rest-user-and-group/api/v1/users/info',
    },
    // OIDC SETTINGS
    providers: [
      {
        label: 'Login with local issuer',
        textColor: 'white',
        backgroundColor: '#002776',
        oidcConfig: {
          requireHttps: true,
          issuer: AUTH_URL + '/keycloak/realms/KYPO',
          clientId: 'KYPO-client',
          redirectUri: HOME_URL,
          scope: 'openid email profile offline_access',
          logoutUrl: AUTH_URL + '/keycloak/realms/KYPO/protocol/openid-connect/logout',
          silentRefreshRedirectUri: AUTH_URL + '/silent-refresh.html',
          postLogoutRedirectUri: HOME_URL + '/logout-confirmed',
          clearHashAfterLogin: true,
        },
      },
    ],
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
