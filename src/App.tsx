import Tailwindcss from './pages/Tailwindcss'
import Color from './pages/Color'
import TextsTest from './pages/TextsTest'
import * as D from './data'

import IconTest from './pages/ButtonTest/IconTest'

import Boots
import Icon from './pages/Icon'

import './App.css'

function App() {
  return (
    <div>
      {/* 1 */}
      {/* <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="200" />
      <img src={D.randomImage()} height="200" /> */}

      {/* 2 */}
      {/* <TextsTest />
      <Color />
      <Tailwindcss /> */}
      
      {/* 3 */}
      {/* <IconTest /> */}

      {/* 4 */}
      <UsingIconWithCSSClass />
      <UsingIcon />
      <Style />
      <Icon />
      <Bootstrap />
    </div>
  );
}

export default App;
