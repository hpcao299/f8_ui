import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeNotification } from '~/slices/notificationSlice';
import styles from './Notification.module.scss';

function Notification({ notification }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const waitTimer = setTimeout(() => {
            dispatch(removeNotification(notification.id));
        }, 1800);

        return () => clearTimeout(waitTimer);
    }, [dispatch, notification.id]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>{notification.message}</div>
        </div>
    );
}

export default Notification;
