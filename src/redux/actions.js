export const setVisual = (visual) => {
  return {
    type: 'SET_VISUAL',
    payload: visual,
  }
}

export const setMembers = (members) => {
  return {
    type: 'SET_MEMBERS',
    payload: members,
  }
}

export const setYoutube = (data) => {
  return {
    type: 'SET_YOUTUBE',
    payload: data,
  }
}
