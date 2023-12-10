import { View, Text } from 'react-native';
import styles from './style';
const Card = ({ icon, description, time, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <View style={styles.innerContainer}>
        <View style={{ flexDirection: 'row',flexWrap:'wrap' }}>
          <Text
            style={styles.innerContainer.textId}
            numberOfLines={1}
            ellipsizeMode="tail">{name}</Text>
          <Text style={styles.innerContainer.time}>[{time}]</Text>
        </View>
        <Text
          style={styles.innerContainer.letter}>
          {description}
        </Text>
      </View>
    </View>
  );
};
export default Card;
