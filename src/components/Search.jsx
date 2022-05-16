const Search = (props) => {
    return(
       <div>
           <form onSubmit = {props.handleSubmit}>
               <input type = "text" onChange = {props.handleChange} value = {props.dateQuery}/>
               <button>Search</button>
           </form>
       </div>
    )
}

export default Search