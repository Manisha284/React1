import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HoverCount from './components/HoverCount.js'
import Count from './components/Count.js'
{/*import Error from './components/Error.js'
{/*import ErrorBoundary from './components/ErrorBoundary.js'
{/*import Portal from './components/Portal.js'
{/*import Refs from './components/Refs.js'
{/*import Parent1 from './components/Parent1.js'
{/*import Pure from './components/Pure.js'
{/*import Regular from './components/Regular.js'
{/*import Parentcomp from './components/Parentcomp.js'
{/*import Parent from './components/Parent.js'
import List1 from './components/List1.js'
import Mounting from './components/Mounting.js'
import Mounting1 from './components/Mounting1.js'
import Updating1 from './components/Updating1.js'
import Updating2 from './components/Updating2.js'
import Updating5 from './components/Updating5.js'
import Updating4 from './components/Updating4.js'
import Fragment from './components/Fragment.js'*/}


function App() {
  return (
    <div className="App">
      <Count />
      <HoverCount />
      {/*<ErrorBoundary>
      <Error pername="Manisha" />
      </ErrorBoundary>

      <ErrorBoundary>
      <Error pername="Manu" />
      </ErrorBoundary>

       <ErrorBoundary>
      <Error pername="Mani" />
      </ErrorBoundary>

      <ErrorBoundary>
      <Error pername="Sam" />
      </ErrorBoundary>

      <ErrorBoundary>
      <Error pername="Book" />
      </ErrorBoundary>
      {/*<ErrorBoundary>
      <Error pername="Manisha" />
      <Error pername="Manu" />
      <Error pername="Mani" />
      <Error pername="Sam" />
      <Error pername="Book" />
      </ErrorBoundary>*/}
      {/*<Portal />
      {/*<Refs />
      {/*<Parent1 />
      {/*<Pure />
      {/*<Regular />
      {/*<Parentcomp />
      {/*<Fragment />
      {/*<Updating4 />
      {/*<Updating5 />
      {/*<Updating2 />
      {/*<Updating1 name='Hello Manisha' />
       {/*<Mounting1 />
       {/*<Mounting  name='how are you'/>
       {/*<List1 />
       {/*<Parent />*/}
    </div>
  );
}

export default App;
