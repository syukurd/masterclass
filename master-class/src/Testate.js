import React, { Component } from 'react';

class Testate extends Component {
    state = {
        book: ['angli darma', 'magalengka', 'junior jepara', 'jaka tingkir']

    }
    render() {
        return (<div>
            <h1>Jenis Buku</h1>
            {this.state.book.map(item =>
                <div><h3>{item}</h3></div>
            )}

        </div>);
    }
}

export default Testate;