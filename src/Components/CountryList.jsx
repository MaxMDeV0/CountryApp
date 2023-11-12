


export default function CountryList(props){
    let {data, viewDetails} = props

    function addComma(string) {
        let stringArray = string.toString().split('');
         for (let i = stringArray.length - 3; i > 0; i -= 3) {
           stringArray.splice(i, 0, ',');

         }
         let result = stringArray.join('');

         return result;
      }
      
    return <ul>
        {data.map((item, index) => <li key={index+1} onClick={()=>viewDetails(item)}>
            <img src={item.flags.png} className='flag'/>
            <article>
                <h2>{item.name.common}</h2>
                <p className="detail">
                    <strong>Population</strong> : {addComma(item.population)}<br/>
                    <strong>Region</strong> : {item.region}<br/>
                    <strong>Capital</strong> : {item.capital}
                </p>
            </article>
            
        </li>)}
    </ul>
}