import { combineReducers } from 'redux'

// 초기 메인 비주얼 데아터
const initVisual = {
  visual: [
    {
      title: 'ART MUSEUM',
      sub_title: 'RESIDENTAL',
      paragraph:
        'Art Museum ornare gravida vehicula. Ut ullamcorper the duscipit lacinia lorem ac feugiat nibh. Integer odio augle auctore tincidunt volutpat convallis vel nulla.',
      image: '/img/main-visual-01.jpg',
      alt: 'VISUAL IMAGE1',
    },
    {
      title: 'AVM BUILDING',
      sub_title: 'ARCHITECTURE',
      paragraph:
        'Avm Building ornare gravida vehicula. Ut ullamcorper the duscipit lacinia lorem ac feugiat nibh. Integer odio augle auctore tincidunt volutpat convallis vel nulla.',
      image: '/img/main-visual-02.jpg',
      alt: 'VISUAL IMAGE2',
    },
    {
      title: 'DRANA VILLA',
      sub_title: 'ARCHITECTURE',
      paragraph:
        'Drana Villa gravida vehicula. Ut ullamcorper the duscipit laciniathe lorem ac moss feugiat nibh. Integer odio ugle auctorethe tincidunt volutpat the convallis.',
      image: '/img/main-visual-03.jpg',
      alt: 'VISUAL IMAGE3',
    },
  ],
}

// 초기 멤버 데이터
const initMember = {
  members: [
    {
      name: 'Marie Fleur',
      position: 'Web Designer',
      image: '/img/about-team-img-01.jpg',
      alt: 'TEAM1',
    },
    {
      name: 'Joe Olson',
      position: 'Game Designer',
      image: '/img/about-team-img-02.jpg',
      alt: 'TEAM2',
    },
    {
      name: 'Nick Forest',
      position: 'Developer',
      image: '/img/about-team-img-03.jpg',
      alt: 'TEAM3',
    },
    {
      name: 'Mary Hart',
      position: 'Art Director',
      image: '/img/about-team-img-04.jpg',
      alt: 'TEAM4',
    },
  ],
}

const visualReducer = (state = initVisual, action) => {
  switch (action.type) {
    case 'SET_VISUAL':
      return { ...state, visual: action.payload }

    default:
      return state
  }
}

// initMember를 초기값으로 지정해서 객체정보값을 반환하는 reducer함수 정의
// 이때 두번째 인수인 action객체로부터는 type(액션이름)과 payload(자식 컴포넌트에서 전달받을 값)을 전달받음
const memberReducer = (state = initMember, action) => {
  // action.type 값에 따라서 처리
  switch (action.type) {
    // 추후 하위 컴포넌트에서 호출한 action.type에 따라 해당 reducer의 값을 변경 가능
    case 'SET_MEMBERS':
      return { ...state, members: action.payload }

    default:
      return state
  }
}

const youtubeReducer = (state = { youtube: [] }, action) => {
  switch (action.type) {
    case 'SET_YOUTUBE':
      return { ...state, youtube: action.payload }
    default:
      return state
  }
}

// 리듀서 합치기
const reducers = combineReducers({
  visualReducer,
  memberReducer,
  youtubeReducer,
})

// 내보내기
export default reducers
