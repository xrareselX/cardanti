import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         setAuthUser(user);
    //         const uid = user.uid;
    //     } else {
    //         setAuthUser(null);
    //     }
    //   });
// do this function in app.js (handle user auth state)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{// returns an unsubscribe function
            if(user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            unsubscribe();
        }
    }, []);// the effect should only be run once when the component mounts and be cleaned up when the component unmounts
    
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out success');
        }).catch(error => console.log(error));
    }

    return <div> {authUser ? <><p>{`signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button> </>: <p>Signed Out</p>}</div>;
};

export default AuthDetails;