import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';

class SunsetGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 30 };
  }
  plotPoint(time) {
    const origin = { x: 0, y: 50 };
    const amplitude = 40;
    const rarity = 3;
    const freq = 0.1;
    const phase = 15;
    const plot = {
      x1: `${time - 1 * rarity + origin.x}%`,
      y1: `${Math.sin(freq * ((time - 1) + phase)) * amplitude + origin.y}%`,
      x2: `${time - 1 * rarity + origin.x + 50}%`,
      y2: `${Math.sin(freq * ((time) + phase)) * amplitude + origin.y}%`,
    };
    return(plot);
  }
  handleMouseMove(e) {
    const cursorPos = e.screenX;
    const svgLeft = this.svg.getBoundingClientRect().left - 10;
    const svgRight = this.svg.getBoundingClientRect().right - 10;
    const time = Math.abs(((cursorPos - svgLeft) / (svgRight - svgLeft)) * 100);
    console.log(time)
    if (time < 15 || time > 50 && time < 77) {
      this.props.setNightTheme();
    } else {
      this.props.setDayTheme();
    }
    this.setState({ time });
  }
  render() {
    const { name, highlight } = this.props;
    return (
      <svg
        className={`sunset-graph ${name}`}
        ref={(svg) => { this.svg = svg; }}
        width="100%" height="100%"
        onMouseMove={(e) => { this.handleMouseMove(e); }}
      >
        <defs>
          <linearGradient
            id="line-day"
            x1="0%" y1="0%" x2="100%" y2="0%"
          >
            <stop offset="0%" stopColor="rgba(67 ,83, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(67, 83, 255, 0)" />
          </linearGradient>
          <linearGradient
            id="line-night"
            x1="0%" y1="0%" x2="100%" y2="0%"
          >
            <stop offset="0%" stopColor="rgba(131 ,255, 200, 0.2)" />
            <stop offset="100%" stopColor="rgba(131, 255, 200, 0)" />
          </linearGradient>
          <linearGradient
            id="box-day"
            x1="0%" y1="0%" x2="0%" y2="100%"
          >
            <stop offset="0%" stopColor="#eee" />
            <stop offset="80%" stopColor="rgba(238, 238, 238, 0)" />
          </linearGradient>
          <linearGradient
            id="box-night"
            x1="0%" y1="0%" x2="0%" y2="100%"
          >
            <stop offset="0%" stopColor="#212121" />
            <stop offset="80%" stopColor="rgba(26, 26, 26, 0)" />
          </linearGradient>
        </defs>
        <rect
          x="0%" y="60%" width="100%" height="40%"
          style={{ fill: `url(#box-${name})` }}
        />
        {Array.from(Array(100).keys()).map((_, i) => (
          <line
            {...this.plotPoint(i)}
            key={i}
            style={{ stroke: `url(#line-${name})`, strokeWidth: '2' }}
          />
        ))}
        <circle
          id="sun"
          className={highlight}
          cx={this.plotPoint(this.state.time).x1}
          cy={this.plotPoint(this.state.time).y1}
          r="8"
          style={{ strokeWidth: 4, fill: 'rgba(0,0,0,0)' }}
        />
      </svg>
    );
  }
}

const mapStateToProps = state => state.theme;
const mapDispatchToProps = dispatch => ({
  setDayTheme: () => dispatch({ type: 'SET_DAY_THEME' }),
  setNightTheme: () => dispatch({ type: 'SET_NIGHT_THEME' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SunsetGraph);
