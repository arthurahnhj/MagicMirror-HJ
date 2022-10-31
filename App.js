import React, { Component } from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { View,Text, StyleSheet,Dimensions,ScrollView,} from "react-native";
const {width:SCREEN_WIDTH} = Dimensions.get('window');

class App extends Component {
  render() {
     return (

      <View style = {container.left_cont}>
      <View style={calendar_styles.calendar_cont}>

<CalendarList
  horizontal={true}
  pagingEnabled={true}
  calendarWidth={SCREEN_WIDTH*0.5}
  pastScrollRange={5}
  futureScrollRange={5}
  scrollEnabled={true}
  showScrollIndicator={false}
        // Initially visible month. Default = Date()
        current={'2022-10-31'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2000-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2100-12-31'}
        // Handler which gets executed on day press. Default = undefined
        markedDates={{
          '2022-10-21': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-10-22': {marked: true},
          '2022-10-23': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2022-10-24': {disabled: true, disableTouchEvent: true}
        }}
        onDayPress={(day) => {console.log('selected day', day)}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => (<Arrow/>)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        //renderHeader={(date) => {/*Return JSX*/}}
        />      
      <View style={calendar_styles.news_cont}>
        </View>
      
      {/* ============== 여기까지 캘린더 ======== */}

      <View style={news_styles.news_cont}>
      <Text style={news_styles.news_text}>NEWS 들어갈 자리</Text>
        </View>

      {/* ============== 여기까지 뉴스 ======== */}


      <View style={clock_styles.clock_cont}>
      <Text style={clock_styles.clock_text}>시계 들어갈 자리</Text>
        </View>

      {/* ============== 여기까지 시계 ======== */}



      </View>
      <View style = {container.right_cont}>
        <View style={todo_styles.todo_cont}>
        <Text style={todo_styles.todo_text}>ToDo 들어갈 자리</Text>
          </View> 
        <View style={weather_styles.weather_cont}>
        <Text style={weather_styles.weather_text}>날씨 들어갈 자리</Text>
          </View>
      </View>
        </View>
      
     )
   }
 }

const container = StyleSheet.create({
  left_cont:{
    backgroundColor:"orange",
    flexDirection:"row",
    flex:1,
  },
  right_cont:{
    backgroundColor:"blue",
    flexDirection:"col",
    flex:1,
  }
})




 const calendar_styles = StyleSheet.create({
  calendar_cont:{
    flex:1, 
    width:SCREEN_WIDTH*0.5,
    marginTop:SCREEN_WIDTH/30,
  },
  calendar_style:{

  }})

const news_styles =  StyleSheet.create({
  news_cont:{
    flex:1/3,
    marginTop:SCREEN_WIDTH/45,
    marginLeft:SCREEN_WIDTH/60,
    backgroundColor:"red",
  },
  news_text:{
    fontSize:"30",
    textAlign:'center',
  },

 })

 const clock_styles =  StyleSheet.create({
 clock_cont:{
  flex:0.6,
  marginTop:SCREEN_WIDTH/30,
  marginLeft:SCREEN_WIDTH/60,
  backgroundColor:"skyblue"
},
 clock_text:{
  fontSize:"30",
  textAlign:'center',
},
 })

const todo_styles =  StyleSheet.create({
  todo_cont:{
   flex:1,
   marginLeft:SCREEN_WIDTH/60,
   marginRight:SCREEN_WIDTH/60,
   marginTop:SCREEN_WIDTH/60,
   backgroundColor:"green"
 },
  todo_text:{
   fontSize:"30",
   textAlign:'center',
 },
 })

 const weather_styles =  StyleSheet.create({
  weather_cont:{
   flex:0.6,
   marginTop:SCREEN_WIDTH/30,
   marginBottom:SCREEN_WIDTH/30,
   marginLeft:SCREEN_WIDTH/60,
   marginRight:SCREEN_WIDTH/60,
   backgroundColor:"skyblue"
 },
  weather_text:{
   fontSize:"30",
   textAlign:'center',
 },
  })





export default App;
