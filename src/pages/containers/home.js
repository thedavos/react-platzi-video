import React, { Component } from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'


class Home extends Component {

    state = {
        modalVisible: false,
    }

    handleOpenModal = ev => {
        this.setState({
            modalVisible: true
        })
    }

    handleModalClose = ev => {
        this.setState({
            modalVisible: false,
        })
    }

    render() {

        const { categories } = this.props.data

        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories categories={categories} handleOpenModal={this.handleOpenModal}/>
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleModalClose}
                            >
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )    
    }
}

export default Home