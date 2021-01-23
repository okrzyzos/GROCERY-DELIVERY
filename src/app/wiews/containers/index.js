import {connect} from 'react-redux';
import App from '../components/index';
import {saveCart} from '../../lib/actions';

export const AppContainer = connect(

    function mapStateToProps(state){
        return {items :state.items}
    },
    function dispatchToProps(dispatch){
        return{
            saveLocalStorage: items => dispatch(saveCart(items))
        }
    }
)(App)