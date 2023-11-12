import { useState, useEffect } from "react";


export default function Country (props){
    let {item, setRenderedItem} = props
    const [borderList, setBorderList] = useState([])

    useEffect(()=>{
        fetchData(item.borders)
    },[item])


    function addComma(string) {
        let stringArray = string.toString().split('');
         for (let i = stringArray.length - 3; i > 0; i -= 3) {
           stringArray.splice(i, 0, ',');

         }
         let result = stringArray.join('');

         return result;
    }

    const changeCountry=(obj)=>{
        setRenderedItem(obj)
    }

    async function fetchData (countries){
        await fetch(`https://restcountries.com/v3.1/alpha?codes=${countries.toString()}`)
        .then(response =>{return response.json()})
        .then(json => setBorderList(json))        
        
    }


    return (
        <div className="reviewDetail">                        
            <img src={item.flags.svg} className="detailFlag"/>
            <span className="countryDetail">
                <h3>{item.name.common}</h3>
                <div>
                    <span><strong>Native Name :</strong> {item.name.nativeName[Object.keys(item.name.nativeName)[0]].common}<br/>
                    <strong>Population :</strong> {addComma(item.population)}<br/>
                    <strong>Region :</strong> {item.region}<br/>
                    <strong>Sub Region :</strong> {item.subregion}<br/>
                    <strong>Capital :</strong> { item.capital}<br/></span>
                    <span>
                    <strong>Top Level Domain :</strong> {item.tld}<br/>
                    <strong>Currencies :</strong> {Object.keys(item.currencies).map(obj=><span>{obj},</span>)}<br/>
                    <strong>Languages :</strong> {Object.keys(item.languages).map(obj=><span >{item.languages[obj]},</span>)}<br/>

                    </span>
                </div>
                <strong>Border Countries :</strong> {borderList.map((obj)=> <span onClick={()=>changeCountry(obj)} className="borderCountry">{obj.name.common}</span>)}
            </span>
        </div>
    )
}