// eslint-disable-next-line import/no-unresolved
import SearchAvocatName from "@/Components/SearchAvocatForm";
import SearchCard from "../Components/SearchCard";
const Search = () => {
  return (
    <div>
      <SearchAvocatName />
      <SearchCard name={"Brandie Luis"} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="3.5"/>
      <SearchCard name={"Brandie Luis"} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/>
      <SearchCard name={"Brandie Luis"} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="3"/>
      <SearchCard name={"Brandie Luis"} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="1"/>
      <SearchCard name={"Brandie Luis"} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="2.5"/>
      <SearchCard name={"Brandie Luis"} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="2"/>
      <SearchCard name={"Brandie Luis"} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4"/>
    </div>
  )
}

export default Search;