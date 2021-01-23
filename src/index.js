import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux';
import { addToCart } from './app/lib/actions';
import {store} from './app/lib/store';
import {AppContainer} from './app/wiews/containers/index'
import App from './app/wiews/components'



console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addToCart({name : "citron"},2))
// store.dispatch(addToCart({name : "kiwi"},5))
unsubscribe()

ReactDom.render(
    <Provider store={store}>
<AppContainer />
    </Provider>
,document.getElementById("root")
);