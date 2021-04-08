import React, { Component }from 'react'

import Modal from  '../../components/UI/Modal/Modal'
import Backdrop from '../../components/UI/Backdrop/Backdrop'

const withErrorHandler = (WrappedComponent, axios) =>{
    return class extends Component {
        state = {
            error : null
        }

        componentDidMount() {
            axios.interceptors.request.use(req =>{
                this.setState({error:null})
                return req
            })

            axios.interceptors.response.use(null, error =>{
                this.setState({error: error})

            })
        }
        errorHandler  = () =>{
            this.setState({error:null})
        }
            render () {
                return (
                    <>
                        <Backdrop show = {this.state.error} Click = {this.backDropClickHandler}> </Backdrop>
                        <Modal show= {this.state.error} >
                            {this.state.error ? this.state.error.message: null}
                        </Modal>
                        <WrappedComponent {...this.props}></WrappedComponent>
                    </>
                )
        }
    }
}

export default withErrorHandler