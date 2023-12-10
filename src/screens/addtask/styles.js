import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: { marginBottom: 20, fontWeight: '600', fontSize: 18 },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.light_gray,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    modalContainer: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 10,
    },
    datePickerContainer: {
        flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20
    },
    dateTouch: { borderWidth: 1, paddingVertical: 10, paddingHorizontal: 20, borderColor: colors.light_gray, borderRadius: 5 },
    saveBtn: { width: '100%', backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center', paddingVertical: 15, alignSelf: 'center', borderRadius: 5 }

})