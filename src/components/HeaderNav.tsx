import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import AddModal from "./transactions/AddModal";

const HeaderNav = () => {
    const [showAddModal, setShowAddModal] = useState(false);


    const handleModal = () => {
        setShowAddModal(true)
    }

    return (
        <>
            <Navbar className="rounded-top" bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink to={'/'} className='text-primary'>Finance Tracker</NavLink>
                    <Nav className="me-auto">
                        <NavLink to={'/financeCategories'} className='text-white mt-2 ms-4 me-3'>Categories</NavLink>
                        <Button data-bs-toggle="modal" onClick={handleModal}>Add</Button>
                    </Nav>
                </Container>
            </Navbar>
            <AddModal show={showAddModal} onHide={() => setShowAddModal(false)} />
        </>
    )
}

export default HeaderNav;