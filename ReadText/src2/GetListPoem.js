import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
//import GetPoem from './GetPoem'

const strPoem = "TỪ ẤYTừ ấy trong tôi bừng nắng hạMặt trời chân lý chói qua timHồn tôi là một vườn hoa láRất đậm hương và rộn tiếng chim…Tôi buộc lòng tôi với mọi ngườiĐể tình trang trải với trăm nơiĐể hồn tôi với bao hồn khổGần gũi nhau thêm mạnh khối đời.Tôi đã là con của vạn nhàLà em của vạn kiếp phôi phaLà anh của vạn đầu em nhỏKhông áo cơm, cù bất cù bơ…(7-1938)TƯƠNG TRIAnh không hỏi từ đâuEm lạc loài trôi tớiHỏi mà chi em hỡiCàng thêm tủi lòng nhau !Anh đã biết rằng emSống rày đây mai đóTrong bụi đường sương gióBên xó chợ chân thềm.Chiều hôm nay gió lạnhĐẩy em tới buồng anhEm ơi nghèo không bánhAnh chỉ có chút tình…Anh nhìn em không nóiNhẹ nhẹ để bàn tayTrên đầu non tóc rốiRũ rợi xõa ngang mày.Nhìn anh không chớp mắtEm chẳng nói năng gìHai đứa con phiêu bạtBữa ni thành tương tri…(Huế, 11-1937)TIẾNG HÁT SÔNG HƯƠNGTrên dòng Hương GiangEm buông mái chèoTrời trong veoNước trong veoEm buông mái chèoTrên dòng Hương GiangTrăng lên trăng đứng trăng tànĐời em ôm chiếc thuyền nan xuôi dòngThuyền em rách nátMà em chưa chồngEm đi với chiếc thuyền khôngKhi mô vô bến rời dòng dâm ô !Trời ơi, em biết khi môThân em hết nhục ày vò năm canhTình ôi gian dối là tìnhThuyền em rách nát còn lành được không ?- Răng (*) không, cô gái trên sôngNgày mai cô sẽ từ trong ra ngoàiThơm như hương nhụy hoa làiSạch như nước suối ban mai giữa rừngNgày mai gió mới ngàn phươngSẽ đưa cô tới một vườn đầy xuânNgày mai trong giá trắng ngầnCô thôi sống kiếp đày thân giang hồNgày mai bao lớp đời dơSẽ tan như đám mây mờ đêm nayCô ơi tháng rộng ngày dàiMở lòng ra đón ngày mai huy hoàngởTrên dòng Hương Giang…(*) Răng : tiếng Huế, như chữ sao. (8-1938)";

export default class GetListPoem extends Component {
    constructor() {
        super();
        this.state = {
            myListPoem: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        };
    }

    checkUppercase(key) {
        var keyClone = key;
        key = key.toUpperCase();
        if (key === keyClone) {
            return true;
        }
        return false;
    }

    checkChar(key) {
        var isChar = [',', '?', '-', '.', '"', '!', '(', ')', '…', ':'];
        for (var index = 0; index < isChar.length; index++) {
            if (key === isChar[index]) {
                return false;
            }

        }
        return true;
    }

    checkSpace(key) {
        if (key == ' ') {
            return true;
        }
        return false;
    }

    checkInterger(key) {
        if (parseInt(key)) {
            return false;
        }
        return true;
    }

    checkKey(key) {
        if (this.checkInterger(key) && this.checkChar(key) && this.checkUppercase(key)) {
            return true;
        }
        return false;
    }

    getPoem() {
        var strTitle = "";
        var strBody = "";
        var isPoem = true;
        var intId = 0;
        arrayPoem = [{}];
        var isBody = "";
        for (var index = 0; index < strPoem.length; index++) {
            if (this.checkSpace(strPoem[index])) {
                if (this.checkKey(strPoem[index - 1])) {
                    if (this.checkKey(strPoem[index]) && this.checkKey(strPoem[index + 1])) {
                        strTitle = strTitle + strPoem[index];
                        isPoem = true;
                    }
                    else {
                        isPoem = false;
                        strBody = strBody + strPoem[index];
                    }
                }
                else {
                    isPoem = false;
                    strBody = strBody + strPoem[index];
                }
            }
            else {
                if (this.checkKey(strPoem[index]) && this.checkKey(strPoem[index + 1])) {
                    if (!isPoem) {
                        intId++;
                        var x = {
                            isIdPoem: intId,
                            isTitlePoem: strTitle,
                            isBodyPoem: strBody,
                        }
                        arrayPoem.push(x);
                        strTitle = "";
                        strBody = "";
                    }
                    strTitle = strTitle + strPoem[index];
                    isPoem = true;
                }
                else {
                    isPoem = false;
                    strBody = strBody + strPoem[index];
                }
            }
        }
        intId++;
        var x = {
            isIdPoem: intId,
            isTitlePoem: strTitle,
            isBodyPoem: strBody,
        }
        arrayPoem.push(x);
        return arrayPoem;
    }

    componentDidMount() {
        this.setState({
            myListPoem: this.state.myListPoem.cloneWithRows(this.getPoem())
        });
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
                        <Text style={styles.TitLeBody}>DANH SÁCH BÀI THƠ</Text>
                    </View>
                    <ListView
                        dataSource={this.state.myListPoem}
                        renderRow={(rowData) =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('GetPoem',{poem:rowData})}
                                style={styles.container}
                            >
                                <Text style={styles.textId}>{rowData.isIdPoem}</Text>
                                <Text style={styles.textTile}>{rowData.isTitlePoem}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        margin: 3,
    },

    textTile: {
        justifyContent: 'space-around',
        marginLeft: 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#793209'
    }
    ,
    textId: {
        justifyContent: 'space-around',
        marginLeft: 20,
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
        marginLeft: 20,
        color: '#000000',

    },
});


