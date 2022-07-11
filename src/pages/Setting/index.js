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
                console.log(err);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <Container style={{ maxWidth: '1100px', padding: 0, flex: 1 }}>
            <Helmet>
                <title>{config.titles.setting}</title>
            </Helmet>

            <Row>
                <Col lg={9} md={12} sm={12}>
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
