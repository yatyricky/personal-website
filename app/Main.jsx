import React from 'react';
import {render} from 'react-dom';

class Main extends React.Component {
    render () {
        return (
            <div>
                <h2>Nefinity Time!</h2>
                <ul>
                    <li><a href="http://b.nefti.me">Blog</a></li>
                    <li><a href="http://b.nefti.me/toolkit/ingress.html">Ingress Calculator</a></li>
                </ul>
            </div>
        );
    }
}

render(<Main />, document.getElementById('root'));