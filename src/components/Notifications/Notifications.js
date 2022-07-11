import { useSelector } from 'react-redux';
import NotificationItem from './NotificationItem';

const Notifications = () => {
    const notifications = useSelector(state => state.notification);

    return (
        <div>
            {notifications.map(notification => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </div>
    );
};

export default Notifications;
