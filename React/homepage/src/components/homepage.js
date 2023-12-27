import React, { useState } from 'react';

const SearchForm = ({ fetchData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    
    // サーバーにリクエストを送るなどの処理を行う場合、ここで実装します
    // 以下は例としてコンソールに入力された値を表示するだけのものです
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;