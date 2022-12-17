// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
// import './Home.css'
// function Example() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         onClick={() => setOpen(!open)}
//         aria-controls="example-collapse-text"
//         aria-expanded={open}
//       >
//         Hack Events
//       </Button>
//       <Collapse in={open}>
//         <div id="example-collapse-text">
//         <p>A hackathon is an event where people engage in rapid and collaborative engineering over a relatively short period of time such as 24 or 48 hours.
//         Hackathons are a fantastic opportunity to learn new skills. 
//         Whether you're a beginner or an experienced developer, there's always something to be gained from participating in a hackathon. 
//         You'll have a chance to try out new technologies and tools, and learn how to use them effectively in a short spawn.
//         </p>
//         </div>
//       </Collapse>
//     </>
//   );
// }

// export default Example

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        width="auto"
      >
        About Hackathon
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
            <p>A hackathon is an event where people engage in rapid and collaborative engineering over a relatively short period of time such as 24 or 48 hours.
         Hackathons are a fantastic opportunity to learn new skills. 
         Whether you're a beginner or an experienced developer, there's always something to be gained from participating in a hackathon. 
         You'll have a chance to try out new technologies and tools, and learn how to use them effectively in a short spawn.
         </p>
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Example