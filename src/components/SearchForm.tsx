import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

// interface Props {
//   onFormSubmit: (searchTerm: string) => void;
// }
const SearchForm = (/*{ onFormSubmit }: Props*/) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    //onFormSubmit(searchTerm);
    navigate(`/?${new URLSearchParams({ q: searchTerm })}`);
  };
  return (
    <form
      className="SearchForm"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label htmlFor="searchTerm">Search Term</label>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
