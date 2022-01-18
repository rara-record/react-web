// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// function Community() {
//   const path = process.env.PUBLIC_URL
//   const [posts, setPosts] = useState([])
//   const url = `${path}/db/community.json`
//   let length = posts.length

//   useEffect(() => {
//     axios.get(url).then((json) => {
//       setPosts(json.data.data)
//     })
//   }, [])

//   return (
//     <main className="community">
//       <section className="sub__visual">
//         <div className="inner">
//           <h1>Community</h1>
//           <p>
//             Property Group offers a full-service, <br></br>
//             residential project development.
//           </p>
//         </div>
//       </section>

//       <div className="contents">
//         <section className="notice">
//           <div className="inner">
//             <div className="table__wrapper">
//               <table>
//                 <caption className="visually-hidden">공지 사항 게시판</caption>
//                 <thead>
//                   <tr>
//                     <th scope="col">NO</th>
//                     <th scope="col">제목</th>
//                     <th scope="col">작성자</th>
//                     <th scope="col">작성일</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {posts
//                     .slice(0)
//                     .reverse()
//                     .map((data, index) => {
//                       return (
//                         <tr key={index}>
//                           <td>{length - index}</td>
//                           <td>
//                             <Link to="#">{data.title}</Link>
//                           </td>
//                           <td>{data.writer}</td>
//                           <td>{data.date}</td>
//                         </tr>
//                       )
//                     })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         <div className="pagination">
//           <Link to="/" className="prev"></Link>
//           <ul className="numbers">
//             <li>
//               <Link to="/">1</Link>
//             </li>
//             <li>
//               <Link to="/">2</Link>
//             </li>
//             <li>
//               <Link to="/">3</Link>
//             </li>
//             <li>
//               <Link to="/">4</Link>
//             </li>
//             <li>
//               <Link to="/">5</Link>
//             </li>
//             <li>
//               <Link to="/">6</Link>
//             </li>
//             <li>
//               <Link to="/">7</Link>
//             </li>
//             <li>
//               <Link to="/">8</Link>
//             </li>
//             <li>
//               <Link to="/">9</Link>
//             </li>
//             <li>
//               <Link to="/">10</Link>
//             </li>
//           </ul>
//           <Link to="/" className="next"></Link>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Community
