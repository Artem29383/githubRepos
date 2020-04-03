import React, { Fragment, useContext } from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import { GithubContext } from '../context/github/githubContext';

const Home = () => {
  const { loading, users } = useContext(GithubContext);
  
  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading
          ? <p className="text-center">Загрузка...</p>
          : users.map(u =>
            <div key={u.id} className="col-sm-4 mb-4">
              <Card user = {u} />
            </div>)
        }
      </div>
    </Fragment>
  )
};

export default Home;