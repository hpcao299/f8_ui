import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '~/config/firebase';
import { logout, setCurrentUser } from '~/slices/authSlice';

export function AuthWatcher() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const currentUser = {
                    username: user.displayName,
                    email: user.email,
                    avatar_url: user.photoURL,
                    id: user.uid,
                };
                dispatch(setCurrentUser(currentUser));
                return;
            }

            dispatch(logout());
        });

        return () => unsubscribe();
    }, [dispatch]);

    return null;
}
