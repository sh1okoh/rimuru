// // import type { HttpClient } from '../../common/HttpClient';
// // import type { Observable } from 'rxjs';
// // import { of } from 'rxjs';
// import { Observable } from '@reduxjs/toolkit';
// import { ajax } from 'rxjs/ajax';
// // import { catchError, map, tap } from 'rxjs/operators';


// export class LoginAPI {
//   setToken(token: string) {
//     localStorage.setItem('hoge_token', token);
//   }

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   signIn(url: string, body: Record<string, any> = {}, isSignIn = false): Observable {
//     return ajax({
//       method: 'POST',
//       url,
//       headers: { 
//         'Content-Type': 'application/json', 
//          accept: 'application/json'
//       },
//       body,
//       withCredentials: true,
//     }).subscribe(res => {
//       console.log('res', res);
//     }
//       // tap(res => {
//       //   if (isSignIn) {
//       //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//       //     this.setToken(res.xhr.getResponseHeader('X-CSRF-Token')!);
//       //   }
//       // })
//     )
//   }
// }

export {}