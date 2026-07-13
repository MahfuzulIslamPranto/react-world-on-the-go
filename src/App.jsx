import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
import Country from './components/Country/country'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {
  return (
    <>
      <Suspense fallback={<h3>Countries is loading..</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      {/* <Suspense fallback={<h3>loading..</h3>}>
        <Country></Country>
      </Suspense> */}
    </>
  )
}

export default App
