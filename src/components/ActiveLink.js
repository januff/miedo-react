import React from 'react'
import { useRoute, Link } from 'wouter'

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a 
        href='story/{props.children}'
        className={isActive ? 'active' : ''}>{props.children}</a>
    </Link>
  );
};

export default ActiveLink