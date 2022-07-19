import { Space, Spin } from 'antd';
import styles from './Loading.module.scss';

const Loading = () => (
    <div className={styles.spinner}>
        <Spin size="large"/>
    </div>
);

export { Loading };
