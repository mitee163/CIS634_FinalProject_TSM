import React, { useContext } from 'react'
import Base from '../../components/Base'
import userContext from '../../context/userContext'
import { Col, Container, Row } from 'reactstrap'

function ProfileInfo() {
    const user = useContext(userContext)
    return (
        <userContext.Consumer>
            {(object) => (
                <Base>
                    <Container fluid style={{ marginTop: '10px' }}>
                        <Row>
                            <Col>
                                <h3>User Details:</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>Name:</Col>
                            <Col>{object.user.data.name}</Col>
                        </Row>
                        <Row>
                            <Col>Email:</Col>
                            <Col>{object.user.data.username}</Col>
                        </Row>
                        <Row>
                            <Col>Address:</Col>
                            <Col>{object.user.data.address}</Col>
                        </Row>
                    </Container>
                </Base>
            )}
        </userContext.Consumer>
    )
}

export default ProfileInfo
