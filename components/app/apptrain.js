import { Component } from 'react'
import './app.css';



class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }

    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }
    resetYear = () => {
        this.setState({
            years: 0
        })
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }
    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;
        return (
            <>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <button onClick={this.resetYear}>{this.state.text}</button>
                <h1>My name is {name} , surname - {surname}, age - {years}, position - {position}   </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
            </>

        )
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI name="John" surname="Smith" link="facebook.com" />
        </div>
    )
}

export default App;
