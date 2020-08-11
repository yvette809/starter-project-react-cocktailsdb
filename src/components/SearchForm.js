import React, {useRef,useEffect} from "react";

export default function SearchForm({setSearchTerm}) {

  const searchValue = useRef("");
  console.log(searchValue)

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  useEffect(()=>{
    searchValue.current.focus()

  },[])

  const searchCocktail =()=>{
    setSearchTerm(searchValue.current.value)
  }

  return (
    <section>
      <h2 className="section-title">Search Cocktails</h2>
      <form className="form search-form" onSubmit ={handleSubmit}></form>
      <div className="form-control">
        <label htmlFor="name">
        Search Your favorite cocktail
        </label>
        <input type="text" name="name" id="name" onChange={searchCocktail} ref ={searchValue}/>
      </div>
    </section>
  )
}
