import React from 'react';
import { FaFeather, FaUserAlt } from 'react-icons/fa'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            username: '',
            message: '',
            chirps: []
        };
        //this.handleUsernameChange=this.handleUsernameChange.bind(this);
    }

    handleUsernameChange = e => this.setState({ username: e.target.value })
    handleMessaageChange = e => this.setState({ message: e.target.value })
    handleChirpSubmit = e => {
        e.preventDefault();
        this.setState({
            username: '',
            message: '',
            chirps: [...this.state.chirps, {
                username: this.state.username,
                message: this.state.message
            }]
        })
    }
    

    render() {
        return (
            <main className="container">
                <section className="row mt-2">
                    <div className="col-md-5">
                        <form action="" className="form-group p-3 shadow-sm">
                            <label>Username</label>
                             <input value={this.state.username} onChange={this.handleUsernameChange} type="text" className="form-control"/>
                             <label>Message</label>
                             <textarea value={this.state.message} onChange={this.handleMessaageChange} className='form-control' row={7}></textarea>
                             <button onClick={this.handleChirpSubmit} className="btn btn-primary btn-block mt-3 d-flex align-items-center justify-content-center">
                                 <FaFeather className="mx-1" /><span className="mx1">Chirp It!</span>
                                 </button>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <ul className="list-group list-group-flush shadow-sm">
                            {this.state.chirps.map((chrips,index)=> {
                                return (
                                <li key={`chip-item=${index}`} className="list-group-item d-flex justify-content-between align-items-center">
                                    <b><FaUserAlt size="2rem" className="mx-1 border rounded-circle border-dark" />{chrips.username}:</b>
                                    <span>{chrips.message}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;