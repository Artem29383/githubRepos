import React, { Fragment } from 'react';

const Repositories = ({ repositories }) => {
  return (
    <Fragment>
      {repositories.map(repo => (
        <div className='card mb-3' key={repo.id}>
          <div className="card-body">
            <h5>
              <a
                href={repo.html_url}
                target="_blank"
                rel='noreferrer noopener'
              >{repo.name}</a>
            </h5>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Repositories;