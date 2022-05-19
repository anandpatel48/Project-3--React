const Search = (props) => {
    return(
       <div className = "search">
           <form onSubmit = {props.handleSubmit}>
               <input type = "text" onChange = {props.handleChange} value = {props.dateQuery}/>
               <button>Search</button>
           </form>
       </div>
    )
}

export default Search