import './background.scss';
import {ReactComponent as Valley} from '../assets/valley.svg';
import {ReactComponent as Sun} from '../assets/sun.svg';

export const Background = () =>
 { 
    return(
        <div id="background">
            <Valley/>
            <Sun/>
        </div>

    );
};
    