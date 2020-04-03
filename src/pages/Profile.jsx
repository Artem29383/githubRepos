import React, { useContext, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GithubContext } from '../context/github/githubContext';
import Repositories from '../components/Repositories';

const Profile = () => {
  const urlName = useParams().name;
  const { getUser, getRepositories, loading, user, repositories } = useContext(GithubContext);
  
  useEffect(() => {
    getUser(urlName);
    getRepositories(urlName);
  }, []);
  
  if (loading) return <p className="text-center">Загрузка...</p>;
  
  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    public_repos, public_gists,
    following
  } = user;
  
  return (
    <Fragment>
      <Link to='/' className='btn btn-link'>На главную</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{ width: '150px' }} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                className='btn btn-dark'
                target='_blank'
                rel='noopener noreferrer'
              >Открыть профиль</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}
                {company && <li>
                  <strong>Компания: </strong> {company}
                </li>}
                {blog && <li>
                  <strong>Веб-сайт: </strong> {blog}
                </li>}
              </ul>
              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success">Подписан: {following}</div>
              <div className="badge badge-info">Репозитории: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repositories repositories={repositories}/>
    </Fragment>
  )
};

export default Profile;