import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { context } = props
  const authUser = context.authenticatedUser
  console.log(authUser)
  return (
    <header>
      <div className='wrap header--flex'>
        <h1 className='header--logo'><a href='index.html'>Courses</a></h1>
        <nav>
          {authUser ?
            <>
              <ul className='header--signedin'>
                <li><span>Welcome, {authUser.data.firstName} {authUser.data.lastName}!</span></li>
                <li><Link to='/signout'>Sign Out</Link></li>
              </ul>
            </>
            :
            <>
              <ul className='header--signedout'>
                <li><a href='sign-up.html'>Sign Up</a></li>
                <li><Link to='/signin'>Sign In</Link></li>
              </ul>
            </>
          }
        </nav>
      </div>
    </header>
  )
}

export default Header

// export default class Header extends React.PureComponent {
//   render() {
//     const {context} = this.props;
//     const authUser = context.authenticatedUser;

//     return (
//       <header>
//       <div className="wrap header--flex">
//           <h1 className="header--logo"><Link to="/">Courses</Link></h1>
//           <nav>
//             {authUser ?
//               <>
//                 <ul className="header--signedin">
//                   <li><span>Welcome, {authUser.firstName} {authUser.lastName}!</span></li>
//                   <li><Link to='/signout'>Sign Out</Link></li>
//                 </ul>
//               </>
//               :
//               <>
//                 <ul className="header--signedout">
//                   <li><Link to="/signup">Sign Up</Link></li>
//                   <li><Link to="/signin">Sign In</Link></li>
//                 </ul>
//               </>
//             }

//           </nav>
//       </div>
//       </header>
//     )
//   }

// }
