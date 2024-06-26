# ANYMATOR - REACT COMPONENT LIBRARY

Anymator is a React component library that simplifies the integration of sophisticated animations into your projects.
This library makes animation implementation effortless and readily available for both developers and users.

*SETUP GUIDE*

*INSTALLATION*

To install Anymator, use npm or yarn:

* npm command - npm install anymator
* yarn command - yarn add anymator

------------------------------------------------------------------------------------------------------------------------------

*USAGE*

To use Anymator, simply import the desired component and include it in your JSX.

* Example
  
import React from 'react';
import { Bounce } from 'anymator';

const App = () => (
  <div>
    <Bounce>
      <h1>Hello, World!</h1>
    </Bounce>
  </div>
);

export default App;

--------------------------------------------------------------------------------------------------------------------------
*COMPONENTS*

Anymator provides a variety of animated components, including but not limited to:

* Blink
* Fadein
* SlidingText
* Wave
* Wiggle
* Loading Spinner
* Input
* Heartbeat
  
Each component is designed to be easily customizable and integrates seamlessly with your existing React components.

----------------------------------------------------------------------------------------------------------------------------------

*CUSTOMISATION*

Anymator components come with various customizable props to fine-tune animations to your needs. Common props include:

* Duration: Duration of the animation in milliseconds.
* Delay: Delay before the animation starts in milliseconds.
* IterationCount: Number of times the animation should repeat.

-----------------------------------------------------------------------------------------------------------------------------------
*LICENSE*

Anymator is licensed under the Internet System Consortium (ISC) License. See the LICENSE file for more details.