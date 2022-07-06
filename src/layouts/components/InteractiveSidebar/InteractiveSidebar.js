import Sidebar from '../Sidebar';
import styles from './InteractiveSidebar.module.scss';

function InteractiveSidebar() {
    return (
        <div className={styles.wrapper}>
            <Sidebar interactive className={styles.sidebar} />
        </div>
    );
}

export default InteractiveSidebar;
