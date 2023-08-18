import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet-async';
import settingApi from '~/api/settingApi';
import config from '~/config';
import SettingsFields from './components/SettingsFields';
import styles from './Setting.module.scss';

function SettingPage() {
    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const { data } = await settingApi.getProfile();
                setUserProfile(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <Container style={{ maxWidth: '1100px', padding: 0, flex: 1 }} className="grid-container">
            <Helmet>
                <title>{config.titles.setting}</title>
                <meta name="description" content={config.descs.setting} />
                <link rel="canonical" href={window.location.href} />

                <meta name="og:title" content={config.titles.setting} />
                <meta name="og:description" content={config.descs.setting} />
                <meta name="og:url" content={window.location.href} />
            </Helmet>

            <Row className={styles.row}>
                <Col lg={10} md={12} sm={12} className={styles.col}>
                    {userProfile && (
                        <div className={styles.wrapper}>
                            <h1 className={styles.heading}>Cài đặt</h1>
                            <SettingsFields
                                userProfile={userProfile}
                                setUserProfile={setUserProfile}
                            />
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default SettingPage;
