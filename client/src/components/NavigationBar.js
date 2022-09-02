import * as React from 'react';
import { Link } from "react-router-dom";

//Update array based on page functionality
const pages = ['home', 'login'];

const NavigationBar = () => {

  return (
    // Maps through the pages array above and creates dynamic links
    // TODO: conditional mapping if logged in or not
          <div>Navigation Bar:&nbsp;&nbsp;
            {pages.map((page) => (
                <Link style={{textDecoration: 'none'}} key={page} to={`/so-fresh-so-green/${page}`}>
                        {page}&nbsp;&nbsp;
                </Link>
            ))}
          </div>
  );
};
export default NavigationBar;