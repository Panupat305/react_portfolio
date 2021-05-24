import React, { Component } from 'react'
import Social from '../components/Social'
import ReactTypeingEffect from 'react-typing-effect'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/113791815_10222473055324726_6577667753165729115_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE-l73-yjRPtobwnrMS9XorR-eWVjag8hZH55ZWNqDyFiPnAAvX96m9xcJbW9ZvhHY&_nc_ohc=fQpqjlxYqQYAX9RBpiW&_nc_ht=scontent.fbkk22-2.fna&oh=95b8af42d0336204ca6e3762aee11621&oe=5FCBBCF7" alt="profile" className="profilepic" />
                <ReactTypeingEffect text={['I AM PANPAT','I AM WEB DEVELOPER']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home