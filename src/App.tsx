import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Global from './assets/styles/global';
import { defaultTheme, darkTheme } from './assets/styles/theme';


function App(): JSX.Element {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <main>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}


export default App;