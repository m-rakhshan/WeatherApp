import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    centeredView: { backgroundColor: colors.white, paddingHorizontal: 20, paddingVertical: 30, borderRadius: 10 },
    modalText: {
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16
    },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-around' },
    buttonTouch: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: colors.primary, borderRadius: 5 },
    buttonText: { color: colors.white, fontWeight: '600', fontSize: 16 }

})