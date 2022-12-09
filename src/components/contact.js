import {Component} from 'react';
import { Outlet } from 'react-router-dom';
import './components.css';

export class Contact extends Component {
    render(){
        return(
            <div className='contact btn'>
                <div>
                <h3>Əlaqə məlumatları</h3>
                <div class="contact-info">
                        <p class="title-mail">Elektron poçt ünvanı:</p>
                        <a href="mailto: email@gmail.com" class="mail"><i class="icon ion-android-mail"></i> email@gmail.com</a>
                        <p class="title-num">Əlaqə nömrələri:</p>
                        <p class="cont-num"><i class="icon ion-android-call"></i> +994 012 345 67 89</p>
                </div>
                
                </div>
                <Outlet />
            </div>
        );
    }
}