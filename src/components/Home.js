import React from 'react';
import '../styles.scss';
import { TimelineMax, Power1 } from 'gsap/all';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from(this.header, 0.5, {
        display: 'none',
        autoAlpha: 0,
        delay: 0.25,
        ease: Power1.easeIn
      })
      .from(this.content, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut
      })
      .from(this.footer, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut
      });

    this.timeline.play();
  }

  changePage = (e, destination) => {
    e.preventDefault();
    this.timeline.reverse();
    const timelineDuration = this.timeline.duration() * 1000;
    setTimeout(() => {
      this.props.history.push(destination);
    }, timelineDuration);
  };

  render() {
    return (
      <div className="home">
        <header className="navigation">
          <button className="nav-item">
            <p>Home</p>
          </button>
          <button
            className="nav-item"
            onClick={e => this.changePage(e, '/about')}
          >
            <p>About</p>
          </button>
        </header>
        <div className="home-container">
          <div ref={div => (this.header = div)} className="home-header">
            <p>Welcome!</p>
          </div>
          <div ref={div => (this.content = div)} className="home-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div ref={div => (this.footer = div)} className="home-footer">
            <p>January, 2020</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
