import {Component} from 'react';
import { Outlet } from 'react-router-dom';
import './components.css';

export class Works extends Component {
    render(){
        return(
            <div className='works btn'>
                <h3>İş nümunələri</h3>
                <div>
                    <div className='work one'>
                        <h5>One</h5>
                        <p>Content</p>
                    </div>
                    <div className='work two'>
                        <h5>Two</h5>
                        <p>Content</p>
                    </div>
                    <div className='work three'>
                        <h5>Three</h5>
                        <p>Content</p>
                    </div>
                </div>
                <Outlet />
            </div>
        );
    }
}