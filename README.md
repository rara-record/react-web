##  리액트 세팅
1. npx create-react-app
2. npx create-react-app@5.0.0 my-app

##  라우터 설치
1. npm install react-router-dom@5 --save
2. index.js에 라우터 모듈 import
```react
import {BrowserRouter} from 'react-router-dom';
```
3. index.js에 App컴포넌트를  브라우저 라우터 컴포넌트로 패키징
```react
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </React.StrictMode>,
  
  document.getElementById('root')
);
```
4. app.js에 import
```react
import {Route} from "react-router-dom";
```

## sass 세팅
1. npm i node-sass
2. "sass": "node-sass -wr --source-map true src/scss/style.scss src/css/style.css"
3. npm i sass-lint
4. .sass-lint.yml
5. npm run sass

## gitHub Page배포
1. npm install gh-pages --save-dev
2. package.json 설정
> 3. "homepage": "https://dcodelabTutor.github.io/react_page",
> 4. scripts 부분에
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
5. npm run deploy 
     
## emmet json파일 설정
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
}, 

## 확장
ES7 React/Redux/GraphQL/React-Native snippets

### - pretter/eslint 
https://poiemaweb.com/eslint

- App.js
```react
import "./css/style.css";
import 파일명 from './파일주소'
```

- 링크, 네비, 라우터 impot구문
```react
import {NavLink, Link, Route} form 'react-router-dom';
```

- NavLink 쓰는법 예시
```react
import {NavLink} from "react-router-dom"; 
<NavLink exact to="/">DCODELAB</NavLink>
```




