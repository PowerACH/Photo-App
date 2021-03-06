import React from 'react';
import NavBar from './NavBar'
import Post from '../Posts/Post'
import SignedOutNavBar from './SignedOut'
import { connect } from 'react-redux' //connect dashboard component with redux
// import Profile from '../User/UserProfile'

class Main extends React.Component {
    render() {
        console.log(this.props)
        const { posts } = this.props

        return (
            <div>
                <SignedOutNavBar />
                <NavBar />
                
                <div className="space">
                    
                </div>
                <div>
                    <Post posts={posts} /> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps)(Main)