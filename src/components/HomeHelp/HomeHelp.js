import React, {Component} from "react";
import "./HomeHelp.scss";
import deco from '../../assets/assets/Decoration.svg'; // with import



class FoundationOne extends Component{
    render(){
        return(
            <>
                <div className="foundation">
                    <div className="foundation__name">
                        <h3>Fundacja "Dbam o zdrowie"</h3>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <div className="needs">
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>
                <div className="line"></div>
            </>
        )
    }
}

class FoundationTwo extends Component{
    render(){
        return(
            <>
                <div className="foundation">
                    <div className="foundation__name">
                        <h3>Fundacja "Dla dzieci"</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="needs">
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div className="line"></div>
            </>
        )
    }
}

class FoundationThree extends Component{
    render(){
        return(
            <>
                <div className="foundation">
                    <div className="foundation__name">
                        <h3>Fundacja "Bez domu"</h3>
                        <p>Cel i misja: Pomoc dla osób nieposiadających miejsca zamieszkania.</p>
                    </div>
                    <div className="needs">
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
                <div className="line"></div>
            </>
        )
    }
}

class FoundationFour extends Component{
    render(){
        return(
            <>
                <div className="foundation">
                    <div className="foundation__name">
                        <h3>Fundacja "Dla dzieci"</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="needs">
                        <p>ubrania, meble, zabawki</p>

                    </div>
                </div>
                <div className="line"></div>
            </>
        )
    }
}

class FoundationFive extends Component{
    render(){
        return(
            <>
                <div className="foundation">
                    <div className="foundation__name">
                        <h3>Fundacja "Dla dzieci"</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="needs">
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div className="line"> </div>
            </>
        )
    }
}

class FoundationSix extends Component{
    render(){
        return(
            <>
                <div className="foundation">
                    <div className="foundation__name">
                        <h3>Fundacja "Dla dzieci"</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="needs">
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div className="line"></div>
            </>
        )
    }
}

class FoundationSeven extends Component{
    render(){
        return(
            <>
                <div className="foundation">
                    <div className="foundation__name">
                        <h3>Fundacja "Dla dzieci"</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="needs">
                        <p>ubrania, meble, zabawki</p>

                    </div>
                </div>
                <div className="line"></div>
            </>
        )
    }
}
class HomeHelp extends Component {
    constructor() {
        super();
        this.state = {
            todos: [<FoundationOne/>,<FoundationTwo/>,<FoundationThree/>,<FoundationFour/>,<FoundationFive/>,<FoundationSix/>, <FoundationSeven/>],
            currentPage: 1,
            todosPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        };

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>

            );
        });

        return (
            <div className="home_help">
                <h1>Komu pomagamy?</h1>
                <img src={deco} alt=""/>
                <div className="three_boxes">
                    <div onClick={this.changeColor.bind(this)}>Fundacjom</div>
                    <div onClick={this.changeColor.bind(this)}>Organizacjom pozarządowym</div>
                    <div onClick={this.changeColor.bind(this)}>Lokalnym zbiórkom</div>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z <br/> którymi współpracujemy.
                    Możesz sprawdzić, czym się zajmują, <br/>   komu pomagają i czego potrzebują.</p>
                <ul>
                    {renderTodos}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}
export default HomeHelp;