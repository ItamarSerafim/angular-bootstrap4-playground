// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://localhost:4204/api/',
  apiUrl: 'http://localhost:3000/api/',
  firebase: {
    apiKey: 'AIzaSyAurcC-sVtV_fUYenoL0L7Df72fF3LTpus',
    authDomain: 'angular-bootstrap-examp-itamar.firebaseapp.com',
    databaseURL: 'https://angular-bootstrap-examp-itamar.firebaseio.com',
    projectId: 'angular-bootstrap-examp-itamar',
    storageBucket: 'angular-bootstrap-examp-itamar.appspot.com',
    messagingSenderId: '1029757607484'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
