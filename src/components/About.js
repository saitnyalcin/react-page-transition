import { Power1, TimelineMax } from 'gsap/all';
import React from 'react';
import '../styles.scss';

class About extends React.Component {
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
      .from(this.box1, 0.3, {
        y: 25,
        autoAlpha: 0,
        ease: Power1.easeInOut
      })
      .from(this.box2, 0.3, {
        y: 25,
        autoAlpha: 0,
        ease: Power1.easeInOut
      })
      .from(this.box3, 0.3, {
        y: 25,
        autoAlpha: 0,
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
      <div className="about">
        <header className="navigation">
          <button className="nav-item" onClick={e => this.changePage(e, '/')}>
            <p>Home</p>
          </button>
          <button className="nav-item">
            <p>About</p>
          </button>
        </header>
        <div ref={div => (this.container = div)} className="about-container">
          <div ref={div => (this.header = div)} className="about-header">
            <p>Who we are</p>
          </div>
          <div className="about-content">
            <p ref={p => (this.box1 = p)} className="number">
              1
            </p>
            <p ref={p => (this.box2 = p)} className="number">
              2
            </p>
            <p ref={p => (this.box3 = p)} className="number">
              3
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
