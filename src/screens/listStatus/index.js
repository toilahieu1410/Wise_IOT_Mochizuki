import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getApiLayout} from '../../redux/layout/action';
import {View, Text, StyleSheet, FlatList,ImageBackground,ScrollView} from 'react-native'
import { Appbar, Button, DataTable, Modal,  } from 'react-native-paper';
import backgroundScreen from '../../publics/images/background.png';
import ListTable from '../../components/listStatus/table';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
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
        <ImageBackground source={backgroundScreen} style={styles.picture}>
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="List Status"/>
            </Appbar.Header>
            <ScrollView  horizontal > 
            <DataTable style={styles.dataTable}>
            <DataTable.Header style={{borderBottomColor:'#fff'}}>
            <DataTable.Title ><Text style={{color:'#fff'}}>Name</Text ></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Run</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Misu</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Kasu</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Misu+Kasu</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Change</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Wait</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Off</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>UpTime</Text></DataTable.Title>
            
            </DataTable.Header>

            <FlatList
                data={listLayout}
                renderItem={({item, index}) => <ListTable
                dataLength={index}
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
        </ScrollView>
  
        <Modal visible={visible} onDismiss={hideModal}>
          <Text>Example Modal</Text>
        </Modal>
        </View>
        </ImageBackground>
    )
}

export default ListStatus;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282f3ac7',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },

    dataTable: {
        overflow:'scroll',
        width:width,
    },
    listStatus: {
        color:'#fff',
        borderRadius:20,
        
    }
})