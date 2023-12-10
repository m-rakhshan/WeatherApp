import { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';
import Constants from 'expo-constants';
import { useDispatch } from "react-redux";
// custom imports
import colors from '../../constants/colors';
import { addTask } from '../../redux/slices/taskSlice';
import styles from './styles';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  //notification states
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  //handle Date and Time Functions
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };
  //schedule push notications
  const schedulePushNotification = async (task) => {
    const seconds = timeInSecondsFromNow(task.date);
    console.log('***seconds***', seconds)
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Task Reminder📬",
          body: task.taskName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: seconds },
      });
      Alert.alert('Task Created')
    } catch (e) {
      Alert.alert('Notification Not Schedule')
      console.log('***Error Trigger Push Notifiation :', e)
    } finally {
      setTaskName('');
      setTaskDescription('');
      dispatch(addTask(task))
      navigation.navigate('List')
    }
  }
  //registor notifications
  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync({ projectId: Constants.expoConfig.extra.eas.projectId })).data;
      // console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    return token;
  }
  //check current time
  const isTimeGreaterThanCurrent = (givenTime) => {
    const currentTime = new Date();
    return givenTime > currentTime;
  };
  //convert time to schedule notifications
  const timeInSecondsFromNow = (timeString) => {
    const givenTime = new Date(timeString);
    const currentTime = new Date();
    const differenceInMillis = givenTime.getTime() - currentTime.getTime();
    const differenceInSeconds = Math.floor(differenceInMillis / 1000);
    return differenceInSeconds;
  };
  //save task and schedule notifications
  const onSave = async () => {
    if (isTimeGreaterThanCurrent(date)) {
      const id = new Date().toString();
      const task = { id: id, taskName, taskDescription, date: date.toString() }
      await schedulePushNotification(task)
    } else {
      Alert.alert('Please select future time to get notifications')
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Create Task</Text>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          multiline={true}
          numberOfLines={4}
          value={taskDescription}
          scrollEnabled={false}
          textAlignVertical='top'
          onChangeText={(text) => setTaskDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={date ? date.toString() : 'Select time for push notification'}
          editable={false}
        />
        <View style={styles.datePickerContainer}>
          <TouchableOpacity style={styles.dateTouch} onPress={showDatepicker} >
            <Text>Select Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateTouch} onPress={showTimepicker} >
            <Text>Select Time</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => onSave()}
          disabled={(taskName.length == 0 || taskDescription.length == 0 || date.length == 0) ?
            true :
            false}
          style={(taskName.length == 0 || taskDescription.length == 0 || date.length == 0) ?
            { ...styles.saveBtn, backgroundColor: colors.gray } :
            styles.saveBtn}>
          <Text style={{ color: colors.white }}>Save</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={mode}
            is24Hour={false}
            onChange={onChange}
            minimumDate={new Date()}
          />
        )}


      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddTaskScreen;
