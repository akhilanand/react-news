import { useState } from "react"

const SearchBox = ({ onFilter }) => {

    const [search, setSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if(!search){
            alert('Please enter query!')
            return
        }
        onFilter({ search })
        setSearch('')
    }


    return (
        <div className="adbanner">
			<div className="ad">
                <div className="form-control">
                    <form className="search-form" onSubmit={onSubmit}>
                        <div className="search-box">
                            <input type="text" className="search-input" placeholder="Search Here.." onChange={(e) => { setSearch(e.target.value) }}  value={search} />
                        </div>
                        <input type="submit" className="btn search-btn" value="Search" />
                    </form>
                </div>
			</div>
		</div>
    )
}

export default SearchBox
