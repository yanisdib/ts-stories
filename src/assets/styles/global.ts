import { createGlobalStyle } from 'styled-components';


interface DefaultThemeProps {
    body: string;
    text: string;
}


export default createGlobalStyle<{ theme: DefaultThemeProps }>`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        border: none;
        list-style-type: none;
        box-sizing: border-box;
    }

    :root {
        --primary-font: 'Open Sans', sans-serif;
        --heading-font: 'Archivo Black', sans-serif;
        --subheading-font: none;
        
        --ui-body-color: ${({ theme }) => theme.body};
        --ui-text-color: ${({ theme }) => theme.text};

        --blue: none;
        --dim-white: #EFF1F3;
        --green: none;
        --red: #EA4141;
        --yellow: none;
        --purple: #404EED;
        --purple-dark: none;
        --purple-light: #7174F3;

        --ui-gutter-x-xs: 20px;
        --ui-gutter-y-xs: 20px;
        --ui-gutter-x-sm: 35px;
        --ui-gutter-y-sm: 35px;
        --ui-gutter-x-lg: 50px;
        --ui-gutter-y-lg: 50px;
        --ui-gutter-x-xl: 50px;
        --ui-gutter-y-xl: 50px;

        --ui-padding-x: 20px;
        --ui-padding-y: 20px;

        --ui-width-xl: 95vw;
        --ui-width-sm: 100vw;

        --form-input-pholder-color: #8E8E8E;
        --form-input-border: solid 2px var(--form-input-border-color);
        --form-input-border-color: #D8D8D8;
        --form-input-border-radius: 15px;

        --h1-size: 1.2em;
        --h2-size: 1.1em;
        --h3-size: 1em;
        --h4-size: .9em;
        --h5-size: .85em;
        --h6-size: .75em;
    }

    body {
        font-family: var(--primary-font);
    }
`;