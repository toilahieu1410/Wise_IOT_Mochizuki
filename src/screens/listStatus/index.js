import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getApiLayout} from '../../redux/layout/action';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { Appbar, Button, DataTable, Modal,  } from 'react-native-paper';
import ListTable from '../../components/listStatus/table';

const ListStatus = ({navigation}) => {
    const dispatch = useDispatch();
    const listLayout = useSelector((store) => store.layout.listLayout);

    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false)
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getApiLayout(page))
        }, 1000);
        return () => clearInterval(interval);
    }, [page])
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="List Status"/>
            </Appbar.Header>
            <DataTable>
            <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Run</DataTable.Title>
            <DataTable.Title numeric>Misu</DataTable.Title>
            <DataTable.Title numeric>Kasu</DataTable.Title>
            <DataTable.Title numeric>Misu+Kasu</DataTable.Title>
            <DataTable.Title numeric>Change</DataTable.Title>
            <DataTable.Title numeric>Wait</DataTable.Title>
            <DataTable.Title numeric>Off</DataTable.Title>
            <DataTable.Title numeric>UpTime</DataTable.Title>
            </DataTable.Header>

            <FlatList
            data={listLayout}
            renderItem={({item}) => <ListTable
            WDT_USERNAME={item.WDT_USERNAME}
            COUNT_SHIFT_GREEN={item.COUNT_SHIFT_GREEN}
            COUNT_SHIFT_YELLOW={item.COUNT_SHIFT_YELLOW}
            COUNT_SHIFT_ERROR={item.COUNT_SHIFT_ERROR}
            COUNT_SHIFT_BREAK={item.COUNT_SHIFT_BREAK}
            COUNT_SHIFT_CHANGE_MOLD={item.COUNT_SHIFT_CHANGE_MOLD}
            COUNT_SHIFT_RED={item.COUNT_SHIFT_RED}
            COUNT_SHIFT_OFF={item.COUNT_SHIFT_OFF}
            uptime={item.uptime}
            CURRENT_STATE={item.CURRENT_STATE}
            />}
            />

        </DataTable>

        <Modal visible={visible} onDismiss={hideModal}>
          <Text>Example Modal</Text>
        </Modal>
        </View>
    )
}

export default ListStatus;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})