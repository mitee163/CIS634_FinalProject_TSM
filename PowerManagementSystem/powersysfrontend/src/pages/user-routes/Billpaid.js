import React from 'react'
import { NavLink as ReactLink, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import Base from '../../components/Base'

const Billpaid = () => {
    return (
        <Base>
            <div className="text-center">
                <h4 className="mt-5">
                    Congratulations Bill paid successfully !!
                </h4>
                <div>
                    <Button
                        outline
                        className="text-right"
                        tag={ReactLink}
                        to="/user/dashboard"
                    >
                        View Bills
                    </Button>
                </div>
            </div>
        </Base>
    )
}

export default Billpaid
