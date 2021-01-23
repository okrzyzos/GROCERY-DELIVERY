
import React,{useState,useEffect} from 'react';
import  '../../styles/App.css';
import {Navbar,List} from '../../components'
import {BrowserRouter as Router,Route } from 'react-router-dom' ;
import UserProfileContextProvider from '../../lib/UserProfileContext'
import {CartPage} from './CartPage';
import {Home} from './Home';
import {Confirm} from './Confirm';
import {Checkout} from './Checkout';
import { list } from '../../data';





const App = props => {
    const {items,saveLocalStorage} = props
    const [category,setCategory] = useState(0)
    const [isFiltering,setFiltering] = useState(false)
    const [filtered,setFiltered] = useState(false)
  const [count,setCount] = useState(1);
    const loadCategory = i => {
        setCategory(i)
    }
    const filterResult = (input) => {
        let fullList = list.flat()
        let results = fullList.filter(item =>{
            const name = item.name.toLowerCase()
            const term = input.toLowerCase()
            return name.indexOf(term) > -1
        })
        setFiltered(results)

    }
    useEffect(() =>{
saveLocalStorage(items)
    },[items])






    return ( 
        <>
        <Router>
        <UserProfileContextProvider>
        <Navbar filter={filterResult} setFiltering = {setFiltering} count={count}/>
       
        <Route exact path="/" component={() =><Home  
        loadCategory={loadCategory} 
        category={category} 
        list={list}
        isFiltering={isFiltering}
            filtered={filtered}/>
        }/>

        
        <Route path="/cart" component={CartPage}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/confirm" component={Confirm}/>
        </UserProfileContextProvider>
        </Router>
        </>
     );
}
 
export default App;