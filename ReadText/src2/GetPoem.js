import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput} from 'react-native';
import GetListPoem from './GetListPoem';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class GetPoem extends Component {

    constructor() {
        super();
        this.state = {}
    }
    componentDidMount() {
        var { params } = this.props.navigation.state;
        this.setState({
            titlePoem: params.poem.isTitlePoem,
            bodyPoem: params.poem.isBodyPoem
        })
    }

    render() {
        return (
            <View >
                <View style={{ height: 50, backgroundColor: '#808080', flexDirection: 'row' }} >
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.inputText}
                        placeholder='Tìm Kiếm'
                    />
                </View>
                <View>
                    <View >
                        <Text style={styles.TitLeBody}>{this.state.titlePoem}</Text>
                        <Text style={styles.textId}>{this.state.bodyPoem}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        margin: 3,
    },
    textId: {
        justifyContent: 'space-around',
        marginLeft: 50,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#793209'
    },
    inputText: {
        marginTop: 10,
        marginLeft: 20,
        height: 30,
        width: 100,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    },
    TitLeBody: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 100,
        color: '#000000',

    },
});

