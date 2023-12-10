import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { FilePlus2, Trash2 } from "lucide-react-native";
import { useSelector, useDispatch } from "react-redux";
import { StickyNote } from "lucide-react-native";

//custom imports
import Card from "../../components/cards";
import { deleteTask } from '../../redux/slices/taskSlice';
import styles from "./styles";
import colors from "../../constants/colors";

const List = ({ navigation }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  let row = [];
  let prevOpenedRow;

  //deleteItems
  const deleteItem = ({ item }) => {
    dispatch(deleteTask(item.id))
  };
  //renderItem card iteams
  const renderItem = ({ item, index }, onClick) => {
    //close row item
    const closeRow = (index) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };
    //renderLeftActions to delete card items
    const renderLeftActions = (onClick) => {
      return (
        <View style={styles.swipeableContainer}>
          <TouchableOpacity style={styles.swipeableTrash} onPress={onClick}>
            <Trash2 color={colors.white} size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <Swipeable
        renderLeftActions={() => renderLeftActions(onClick)}
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
      >
        <Card
          icon={<StickyNote color={colors.black} size={20} style={styles.icon} />}
          name={item.taskName}
          description={item.taskDescription}
          time={item.date} />
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      {tasks.length > 0 ? <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        style={{ borderTopWidth: 1, borderTopColor: colors.light_gray }}
        renderItem={(v) =>
          renderItem(v, () => {
            deleteItem(v);
          })
        }
      /> :
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Tasks</Text>
        </View>
      }
      <TouchableOpacity
        onPress={() => navigation.navigate("AddTask")}
        activeOpacity={0.9}
        style={styles.button.container}
      >
        <FilePlus2
          size={22}
          color={colors.white}
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.button.text}>New</Text>
      </TouchableOpacity>
    </View>
  );
};
export default List;
