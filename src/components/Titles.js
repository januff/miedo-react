import React from 'react'
import ActiveLink from './ActiveLink';

const Titles = ({names}) => {
  return (
    <span className="titles">
      <nav>
        {names.map(title => (
          <span key={title}>
            <ActiveLink 
              href={`/story/${title}`}>
              {title}
            </ActiveLink>&nbsp;
          </span>
        ))}
      </nav>
    </span>
  )
}

export default Titles