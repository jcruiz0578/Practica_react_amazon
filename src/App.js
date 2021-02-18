import React from 'react';
import './App.css';
import Menu from './Menu'
import List from './List'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {id: 0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg'},
                {id: 1, rating: 3, title: 'The shining', image: 'libro02.jpg'},
                {id: 2, rating: 5, title: 'Código Da Vinci', image: 'libro03.jpg'},
                {id: 3, rating: 5, title: 'El principito', image: 'libro04.jpg'},
                {id: 4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg'}
            ],

            copyBooks: []
        };
    }

    componentDidMount() {
        this.initBooks();
    }

    initBooks = () => {
        this.setState((state, props) => ({
            copyBooks: [...state.books]
        })); // cada vez q iniciemos initbooks  se hara una copia de state.books

    }

    onAdd = (item) => {
        let temp = [...this.state.books];// saco una copia del arreglo
        const id = temp[temp.length - 1].id + 1; // saco el indice del ultimo elemento  y me de el id y le sumo 1
        item['id'] = id;
        temp.push(item);
        this.setState({books: [...temp]});
        this.initBooks();

    }

    onSearch = (query) => {
        if (query == '') {
            this.initBooks();
        } else {
            const temp = [...this.state.books];
            let res = []; // otro arreglo temporal que se va a devolver

            temp.forEach(item => {
                if (item.title.toLowerCase().indexOf(query) > -1) { //se convierte el titulo en minuscula y se busca la coincidencia
                    res.push(item); // el resultado se añade a res=[]
                }
            });

            this.setState({copyBooks: [...res]});

        }
    }

    onRemove = (id) => {
        var temp = [...this.state.books];
        const  res = temp.filter(item => item.id != id);

        this.setState({books: [...res]});
        this.initBooks();
    }



    render() {
        return (
            <div className="app">
                <Menu title={"Amazon"} onadd={this.onAdd} onsearch={this.onSearch}/>
                {/*<List items={this.state.books}/>*/}
                <List
                    items={this.state.copyBooks}
                    onremove={this.onRemove}/>
            </div>
        );
    }
}

export default App;
