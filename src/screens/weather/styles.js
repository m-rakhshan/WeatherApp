import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    loadingContainer: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
    userName: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 20,
        fontStyle: 'italic'
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20, flex: 1,
        view: {
            width: '50%',
        },
        weatherName: {
            color: colors.white,
            fontSize: 30,
            fontWeight: "bold",
        },
        weatherLoc: { color: colors.white, marginTop: 10, fontSize: 16 },
        info: { color: colors.white, marginTop: 5, fontSize: 16 }

    },
    weatherContainer: {
        flexDirection: 'row', justifyContent: 'center', flex: 1.5,
        weather: { color: colors.white, fontSize: 120 },
        dot: { width: 15, height: 15, borderWidth: 2, borderColor: colors.white, borderRadius: 7, alignSelf: 'center' }
    },
    detailContainer: {
        flex: 1, borderTopWidth: 1, borderColor: colors.black, paddingLeft: 10, flexDirection: 'row',
        view: {
            flex: 1, width: '50%',
        },
        textView: {
            flexDirection: 'row', marginTop: 20
        },
        textTitle: { color: colors.primary, fontSize: 16 },
        text: { color: colors.white, fontSize: 16, marginLeft: 10 },
    },
    weatherImage: { borderWidth: 3, borderColor: colors.primary, borderRadius: 5, width: 100, height: 100, justifyContent: 'center', alignItems: 'center' },
    emptyText: {
        fontSize: 18, fontWeight: '600', color: colors.gray
    }

})