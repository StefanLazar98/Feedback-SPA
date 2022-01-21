import React from 'react'
import CreateActivityForm from './CreateActivityForm.component'

class CreateActivityButton extends React.Component {
    constructor() {
        super()

        this.state = { showForm: false }
    }
    showActivityForm = () => {

        this.state.showForm ?
            this.setState(prevState => ({ showForm: false }))
            :
            this.setState(prevState => ({ showForm: true }))


        console.log(this.state.showForm)


        if (this.state.showForm === true) return
    }

    handleClick = () => {

    }

    render() {
        return (
            <>
                <button onClick={this.showActivityForm}>Creează activitate</button>
                {this.state.showForm && <CreateActivityForm />}
            </>


        )
    }
}

export default CreateActivityButton