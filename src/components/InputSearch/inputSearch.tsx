import React, { FC, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/UseApi/useApi";

const InputSearch: FC = () => {
  const [value, setvalue] = useState<string | undefined>(undefined);
  const [results, setresults] = useState<TMDB.Result[]>([]);
  const { push } = useHistory();
  const { search } = useApi();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const fetchData = () => {
    if (value === undefined || value === "") {
      setresults([]);
      return;
    }
    search(value).then((r) => {
      setresults(r.results);
    });
  };

  const handlerInput = (event: FormEvent<HTMLInputElement>) => {
    setvalue(event.currentTarget.value);
  };

  return (
    <div id="search">
      <input
        onBlur={() => {
          setresults([]);
        }}
        onClick={fetchData}
        type="search"
        onChange={handlerInput}
        placeholder="Recherche"
        value={value}
        id="searchInput"
      ></input>
      {results.length > 0 && (
        <div id="searchResults">
          {results
            .filter((result) => result.media_type !== "person")
            .map((result) => (
              <div
                key={result.id}
                className="searchResult"
                //onMouseDown car l'evenement arrive avant le onBlur de input
                //onClick ne fonctionne pas dans ce cas là
                onMouseDown={() => {
                  push(`/${result.media_type}/${result.id}`);
                  setvalue("");
                }}
              >
                {result.title ||
                  result.name ||
                  result.original_title ||
                  result.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default InputSearch;
