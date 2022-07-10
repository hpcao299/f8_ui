import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet-async';
import config from '~/config';
import SettingsFields from './components/SettingsFields';
import styles from './Setting.module.scss';

function SettingPage() {
    return (
        <Container style={{ maxWidth: '1100px', padding: 0, flex: 1 }}>
            <Helmet>
                <title>{config.titles.setting}</title>
            </Helmet>

            <Row>
                <Col lg={9} md={12} sm={12}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.heading}>Cài đặt</h1>

                        <SettingsFields
                        // userProfile={userProfile}
                        // setUserProfile={setUserProfile}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SettingPage;
