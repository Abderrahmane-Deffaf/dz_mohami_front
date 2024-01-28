// eslint-disable-next-line import/no-unresolved
import SearchAvocatName from "@/Components/SearchAvocatForm";
// import SearchResultNotFound from "../Components/SearchResultNotFound";
// import SearchAvocat from "../Components/SearchAvocat.jsx";

import SearchCard from "../Components/SearchCard";
import avocat1 from "../assets/avocat/avocat1.png";

const Search = () => {


  return (
    <div>
      {/* the inputs and the button */}
      <SearchAvocatName />  

      {/* first affichage ("Recherche un avocat") */}
      {/* <SearchAvocat/> */}

      {/* the list of avocats (cards) */}
      <SearchCard name={"Brandie Luis"} image={avocat1} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="3.5"/>
      <SearchCard name={"Brandie Luis"} image={avocat1} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/>
      <SearchCard name={"Brandie Luis"} image={avocat1} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="3"/>
      <SearchCard name={"Brandie Luis"} image={avocat1} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="1"/>
      <SearchCard name={"Brandie Luis"} image={avocat1} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="2.5"/>
      <SearchCard name={"Brandie Luis"} image={avocat1} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="2"/>
      <SearchCard name={"Brandie Luis"} image={avocat1} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4"/>

      {/* searchResults.length == 0 */}
      {/* <SearchResultNotFound/> */}


      {/* {searchResults.length > 0 ? (
        affichage de la liste des avocats
      ) : (
        <SearchResultNotFound/>
      )} */}
    </div>
  )
}

export default Search;