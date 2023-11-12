

export default function RegionFilter(props){
    let {setSearchedRegion} = props
    const test = (e)=>{
        setSearchedRegion(e.target.value)
    }
    return(
        <select onChange={test}>
            <option value=''>Filter by Region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>
    )
}