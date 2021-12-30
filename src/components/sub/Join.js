import { Link } from 'react-router-dom'

function Join() {
  return (
    <main className="join">
      <div className="sub-visual">
        <div className="sub-visual__content">
          <h1 className="sub-visual__content-h1">join</h1>
          <div className="sub-visual__content-links">
            <Link to="/">Home</Link>
            <span className="sub-visual__content-span"></span>
            <Link to="/about">join</Link>
          </div>
        </div>
      </div>

      <div className="contents">
        <section className="sec01">
          <div className="inner"></div>
        </section>

        <section className="sec02">
          <div className="inner"></div>
        </section>

        <section className="sec03">
          <div className="inner"></div>
        </section>
      </div>
    </main>
  )
}

export default Join
