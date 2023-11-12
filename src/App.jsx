import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import CountryList from './Components/CountryList'
import RegionFilter from './Components/RegionFilter'
import {ReactComponent as searchIcon} from './assets/searchIcon.svg'
import whiteSearchIcon from './assets/whiteSearchIcon.svg'
import Country from './Components/Country'


function App() {
  const [countries, setCountries] = useState([])
  const [renderedCountries, setRenderedCountries] = useState([])
  const [searchedItem, setSearchedItem] = useState('')
  const [searchedRegion, setSearchedRegion] = useState('')
  const [detail, setDetail] = useState(false)
  const [renderedItem, setRenderedItem]=useState({})
  const [filteredCountries, setFilteredCountries]=useState([])
  const [dark, setDark]=useState(false)

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all ')
    .then(reponse => {return reponse.json()})
    .then(data => {setCountries(data);setRenderedCountries(data);setFilteredCountries(data)})
  },[])


  useEffect(()=>{
    setRenderedCountries(filteredCountries.filter(obj=>{
      if(obj.name.common.toLowerCase().includes(searchedItem.toLowerCase())){
        return obj
      }
      else return
    }))
  },[filteredCountries, searchedItem])


  useEffect(()=>{
    console.log('test')
    console.log(searchedRegion)
    setFilteredCountries(countries.filter(obj=>{
      if(obj.region.includes(searchedRegion)){
        return obj
      }else return
    }))
  },[searchedRegion])

  const changeHandler = (e)=>{
    setSearchedItem(e.target.value)
  }
  const navigateBack=()=>{
    setDetail(false)
  }
  const viewDetails = (item)=>{
    setRenderedItem(item)
    setDetail(true)
  }
  return (
    <>
      <Header dark={dark} setDark={setDark} />
      {!detail? (<>
        <div className='toolsbar'>
          <div>
            <label>
                <img src={dark? whiteSearchIcon: searchIcon} className='icon'/>
                <input type='text' placeholder="Search for a country..." value={searchedItem} onChange={changeHandler}/>

            </label>
          </div>
          <RegionFilter setSearchedRegion={setSearchedRegion}/>
        </div>
        <CountryList data={renderedCountries} viewDetails={viewDetails}/> 
      </>):
      <>
        <button onClick={navigateBack}>Back</button>
        <Country item={renderedItem} setRenderedItem={setRenderedItem}/>
      </>}
    </>
  )
}

export default App
