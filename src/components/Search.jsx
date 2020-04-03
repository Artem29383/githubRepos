import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

const Search = () => {
  const {show, hide} = useContext(AlertContext);
  const [value, setValue] = useState('');
  const github = useContext(GithubContext);
  
  const onSumbit = e => {
    if (e.key !== 'Enter') return;
    github.clearUsers();
    if (value.trim()) {
      github.search(value);
    } else {
      show('Введите данные пользователя!');
      setTimeout(hide, 2000);
    }
  };
  
  return (
    <div className="form-group">
      <input
        type="text"
        placeholder='Введите ник пользователя...'
        className="form-control"
        id="control"
        value = {value}
        onChange={e => setValue(e.currentTarget.value)}
        onKeyPress={onSumbit}
      />
    </div>
  )
};

export default Search;