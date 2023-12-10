
import AsyncStorage from '@react-native-async-storage/async-storage';

export default persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whilelist: ["user","tasks"],
    blacklist: ["weather"]
};
