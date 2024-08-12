import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1>Home</h1>
    </div>
  );
}

export default Home; 
/*
If the below lines are missing the errors will be as follows:
1. export default Home;  

Errors:
1. export 'default' (reexported as 'Home') was not found in './Home' (module has no exports)
*/
