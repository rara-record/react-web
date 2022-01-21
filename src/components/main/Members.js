import React from 'react'
import { useSelector } from 'react-redux'

function Members() {
  const members = useSelector((state) => state.memberReducer.members)
  console.log(members)

  return (
    <section>
      <div className="inner">
        <h1>Introduce Members</h1>
        {members.map((member, index) => {
          return (
            <article key={index}>
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Members
