import * as firebaseAdmin from 'firebase-admin'

import serviceAccount from './firebase.json'

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        //@ts-ignore
        credential: firebaseAdmin.credential.cert(serviceAccount),
    })
}

export { firebaseAdmin }