import React from "react";
import { StyleSheet, Text, Button, View, RefreshControl} from "react-native";
import PropTypes from "prop-types";
import  {index, vibrate }  from '../utils/'

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state =
    {
      min25: false,
      min5: false,
      minutes: "00",
      seconds: "00",
      timer: null,
      startClock: true,
      stopClock: false,
      startCheck: false,
      vibrateCheck: false,
    };
    this.onButtonStart = this.onButtonStart.bind(this);
    this.onButtonStop = this.onButtonStop.bind(this);
    this.onButtonClear = this.onButtonClear.bind(this);
    this.start = this.start.bind(this);
  }
    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    start() {
        var me = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.seconds) - 1).toString()
                count = this.state.minutes

            if( Number(this.state.seconds) == 0 ) {
                if (count > 0)
                {

                count = (Number(this.state.minutes) - 1).toString();
                  num = '59';
                }
                else
                {
                  num = '0';
                  count = '0'
                  if (this.vibrateCheck){
                  vibrate();
                }
                }
                }


            me.setState({
                minutes: count.length == 1 ? '0' + count : count,
                seconds: num.length == 1 ? '0' + num : num
            });
        }, 1000);
        this.setState({timer});
    }

  onButtonStart = () => {
      this.start();
      this.setState({startClock: true, stopClock: false, startCheck: false})
  }


  onButtonStop = () => {
      clearInterval(this.state.timer);
      this.setState({startClock: false, stopClock: true, startCheck: true});
  }


  onButtonClear = () => {
      this.setState({
          timer: null,
          minutes: '00',
          seconds: '00',
          startCheck: false,
      });

  }
  set5 = () => {
    this.setState({min5: true});
    this.setState({min25: false})
    this.setState({
        minutes: '05',
        seconds: '00',
    });


  }
  set25 = () => {
    this.setState({min25: true})
    this.setState({min5: false})
    this.setState({
        minutes: '25',
        seconds: '00',
    });

  }
  hideStart = () =>
  {
      if (this.state.startCheck == true) {
        this.setState({ startCheck: true, vibrateCheck: true});
      } else {
        this.setState({ startCheck: false });
      }
  }


  render() {
    return (
      <View>
         <View style={styles.buttonBoth}>

            <View className="buttons" style={styles.button1} >
            <Button title="5 Mins" onPress={this.set5} />
            </View>

            <Text style={styles.timeClock}>{this.state.minutes}:{this.state.seconds}</Text>

             <View className="buttons" style={styles.button2} >
             <Button title="25 Mins" onPress={this.set25} />
             </View>

            </View>

             {this.state.startCheck ? <Button title="Start" onPress={this.onButtonStart} />: null}
             <Button title="Stop" onPress={this.onButtonStop}/>
             <Button title="Clear" onPress={this.onButtonClear}/>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  timeCLock:{
    fontSize: 80,
  },
  button1: {
    marginRight: 40,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  button2: {
    marginLeft: 40,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  buttonBoth: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
    fontSize: 40,


  },
  timerHeader: {
    fontWeight: "bold",
    fontSize: 40,
    color: "red",
  },
  buttonsAlter: {}
});

export default Timer;