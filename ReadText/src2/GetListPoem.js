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
import Icon from 'react-native-vector-icons/MaterialIcons';
//import GetPoem from './GetPoem'

const strPoem = "TỪ ẤYTừ ấy trong tôi bừng nắng hạMặt trời chân lý chói qua timHồn tôi là một vườn hoa láRất đậm hương và rộn tiếng chim…Tôi buộc lòng tôi với mọi ngườiĐể tình trang trải với trăm nơiĐể hồn tôi với bao hồn khổGần gũi nhau thêm mạnh khối đời.Tôi đã là con của vạn nhàLà em của vạn kiếp phôi phaLà anh của vạn đầu em nhỏKhông áo cơm, cù bất cù bơ…(7-1938)TƯƠNG TRIAnh không hỏi từ đâuEm lạc loài trôi tớiHỏi mà chi em hỡiCàng thêm tủi lòng nhau !Anh đã biết rằng emSống rày đây mai đóTrong bụi đường sương gióBên xó chợ chân thềm.Chiều hôm nay gió lạnhĐẩy em tới buồng anhEm ơi nghèo không bánhAnh chỉ có chút tình…Anh nhìn em không nóiNhẹ nhẹ để bàn tayTrên đầu non tóc rốiRũ rợi xõa ngang mày.Nhìn anh không chớp mắtEm chẳng nói năng gìHai đứa con phiêu bạtBữa ni thành tương tri…(Huế, 11-1937)TIẾNG HÁT SÔNG HƯƠNGTrên dòng Hương GiangEm buông mái chèoTrời trong veoNước trong veoEm buông mái chèoTrên dòng Hương GiangTrăng lên trăng đứng trăng tànĐời em ôm chiếc thuyền nan xuôi dòngThuyền em rách nátMà em chưa chồngEm đi với chiếc thuyền khôngKhi mô vô bến rời dòng dâm ô !Trời ơi, em biết khi môThân em hết nhục ày vò năm canhTình ôi gian dối là tìnhThuyền em rách nát còn lành được không ?- Răng (*) không, cô gái trên sôngNgày mai cô sẽ từ trong ra ngoàiThơm như hương nhụy hoa làiSạch như nước suối ban mai giữa rừngNgày mai gió mới ngàn phươngSẽ đưa cô tới một vườn đầy xuânNgày mai trong giá trắng ngầnCô thôi sống kiếp đày thân giang hồNgày mai bao lớp đời dơSẽ tan như đám mây mờ đêm nayCô ơi tháng rộng ngày dàiMở lòng ra đón ngày mai huy hoàngởTrên dòng Hương Giang…(*) Răng : tiếng Huế, như chữ sao. (8-1938)";
const strPoem1 = "TỪ ẤYTừ ấy trong tôi bừng nắng hạMặt trời chân lý chói qua timHồn tôi là một vườn hoa láRất đậm hương và rộn tiếng chim…Tôi buộc lòng tôi với mọi ngườiĐể tình trang trải với trăm nơiĐể hồn tôi với bao hồn khổGần gũi nhau thêm mạnh khối đời.Tôi đã là con của vạn nhàLà em của vạn kiếp phôi phaLà anh của vạn đầu em nhỏKhông áo cơm, cù bất cù bơ…(7-1938)TƯƠNG TRIAnh không hỏi từ đâuEm lạc loài trôi tớiHỏi mà chi em hỡiCàng thêm tủi lòng nhau !Anh đã biết rằng emSống rày đây mai đóTrong bụi đường sương gióBên xó chợ chân thềm.Chiều hôm nay gió lạnhĐẩy em tới buồng anhEm ơi nghèo không bánhAnh chỉ có chút tình…Anh nhìn em không nóiNhẹ nhẹ để bàn tayTrên đầu non tóc rốiRũ rợi xõa ngang mày.Nhìn anh không chớp mắtEm chẳng nói năng gìHai đứa con phiêu bạtBữa ni thành tương tri…(Huế, 11-1937)TIẾNG HÁT SÔNG HƯƠNGTrên dòng Hương GiangEm buông mái chèoTrời trong veoNước trong veoEm buông mái chèoTrên dòng Hương GiangTrăng lên trăng đứng trăng tànĐời em ôm chiếc thuyền nan xuôi dòngThuyền em rách nátMà em chưa chồngEm đi với chiếc thuyền khôngKhi mô vô bến rời dòng dâm ô !Trời ơi, em biết khi môThân em hết nhục ày vò năm canhTình ôi gian dối là tìnhThuyền em rách nát còn lành được không ?- Răng (*) không, cô gái trên sôngNgày mai cô sẽ từ trong ra ngoàiThơm như hương nhụy hoa làiSạch như nước suối ban mai giữa rừngNgày mai gió mới ngàn phươngSẽ đưa cô tới một vườn đầy xuânNgày mai trong giá trắng ngầnCô thôi sống kiếp đày thân giang hồNgày mai bao lớp đời dơSẽ tan như đám mây mờ đêm nayCô ơi tháng rộng ngày dàiMở lòng ra đón ngày mai huy hoàngởTrên dòng Hương Giang…(*) Răng : tiếng Huế, như chữ sao. (8-1938)CHIỀULão ngồi bên cửa sổTrong nắng nhạt chiều thuCòng lưng đan chiếc rổMai bán lấy vài xu.Bàn tay khô lẩy bẩyKéo mũi lạt tre vàngTheo điệu buồn run rẩyTrên làn môi khô khanCho tới khi chiều tắtĐôi ngọn lá vàng rơiVô tình qua trước mắtLão buông lạt trông trờiTừ lâu như thế mãiVẫn không nói không cườiLão ngồi đan chậm rãiHy vọng của ngày mai…(Huế tháng 10- 1938)TIẾNG SÁO LY QUÊ (*)Ly Quê trên súng thần côngXinh xinh như một tiên đồng Bồng LaiTrăng khuya len xuống rừng dàiĐường non thăm thẳm, đá gài lô nhôHồng quân mê mải sông hồĐêm nay tạm nghỉ bên bờ suối reoĐêm nay như những chiều chiềuĐôi con chim đứng lưng đèo ngẩn ngơLy Quê nâng ống tre tơThổi bài Quốc tế dưới cờ Hồng quânHồng quân bên suối xoa chânChân rơm rớm máu, Hồng quân không giầy !Ra đi từ ấy Giang TâyNước non vạn lý, đêm ngày trường chinhQuản chi lên thác xuống ghềnhMôt vầng cờ đỏ đinh ninh lời thềCan trường trải với sơn khêBước đi đã hẹn ngày về thành công.Sáo kêu vi vút trên khôngSáo kêu dìu dặt bên lòng Hồng quânSáo kêu réo rắt xa gầnSáo kêu giục giã bước chân quân HồngLy Quê trên súng thần côngNghe con chim hót trong lồng tim xanh…(1938)(*) Tên một thiếu niên anh dũng trong cuộc trường chinh của Hồng quân Trung Hoa.Trên đường hành quân, em thường thổi sáo cho Hồng quân nghe (theo thiên phóng sự lớn “Nước Trung Hoa đỏ trên đường” của nhà văn tiến bộ Mỹ Smidley).NHƯ NHỮNG CON TÀUKhi ta đã say mùi hương chân lýĐời đắng cay không một chút ngọt bùiĐời đau buồn không một tiếng cười vuiĐời đen tối phải đi tìm ánh sángTa bước tới.Chỉ một đường: Cách mạngVững lòng tin sẽ nắm chắc thành côngNhư những con tàu giữa biển mênh môngCòn xa đất, vẫn tin ngày cập bến.Cũng có lẽ, hỡi bạn đời yêu mếnBờ đương mờ, hải cảng vẫn còn xaCó lẽ nhiều mỏm đá với phong baSẽ đánh đắm một đôi tàu mỏng mảnh !Đời tranh đấu có bao giờ yên tĩnhBạn đường ơi ! Nhưng nếu chí bình sinhTa đem phơi trải với dạ chung tìnhVới huyết khí của tinh thần mãnh liệt ?Sự sống đã phát sinh từ cái chếtThì gian nguy hiểm nạn có hề chi !Ta hãy là đoàn chiến hạm ra điHùng dũng tiến, đạp muôn đầu ngọn sóngTương lai đó, trước mặt ta, biển rộngTrên đầu ta, lồng lộng gió trời cao !Rồi mai đây, giữa một buổi xuân đàoTa sẽ tới ru mình trong vịnh bạc.(1938)KHI CON TU HÚKhi con tu hú gọi bầyLúa chiêm đang chín trái cây ngọt dầnVườn râm dậy tiếng ve ngânBắp rây vàng hạt đầy sân nắng đàoTrời xanh càng rộng càng caoĐôi con diều sáo lộn nhào từng không…Ta nghe hè dậy bên lòngMà chân muốn đạp tan phòng, hè ôi!Ngột làm sao, chết uất thôiCon chim tu hú ngoài trời cứ kêu!Huế, tháng 7- 1939NHỚ ĐỒNG(Tặng Vịnh- Nguyễn Chí Thanh)Gì sâu bằng những trưa thương nhớHiu quạnh bên trong một tiếng hò!Đâu gió cồn thơm đất nhả mùiĐâu ruồng tre mát thở yên vuiĐâu từng ô mạ xanh mơn mởnĐâu những nương khoai ngọt sắn bùi?Đâu những đường con bước vạn đờiXóm nhà tranh thấp ngủ im hơiGiữa dòng ngày tháng âm u đóKhông đổi, nhưng mà trôi cứ trôi…Gì sâu bằng những trưa hiu quạnhÔi ruộng đồng quê thương nhớ ơi!Đâu những lưng cong xuống luống càyMà bùn hy vọng nức hương ngâyVà đâu hết những bàn tay ấyVãi giống tung trời những sớm mai?Đâu những chiều sương phủ bãi đồngLúa mềm xao xác ở ven sôngVẳng lên trong tiếng xe lùa nướcMột giọng hò đưa “hố” não nùngGì sâu bằng những trưa thương nhớHiu quạnh bên trong một tiếng hò!Đâu dáng hình quen, đâu cả rồiSao mà cách biệt, quá xa xôiChao ôi thương nhớ, chao thương nhớÔi mẹ già xa đơn chiếc ơi!Đâu những hồn thân tự thuở xưaNhững hồn quen dãi gió dầm mưaNhững hồn chất phác hiền như đấtKhoai sắn tình quê rất thiệt thà!Đâu những ngày xưa, tôi nhớ tôiBăn khoăn đi kiếm lẽ yêu đờiVẩn vơ theo mãi vòng quanh quẩnMuốn thoát, than ôi, bước chẳng rờiRồi một hôm nào, tôi thấy tôiNhẹ nhàng như con chim cà lơi(1)Say đồng hương nắng vui ca hátTrên chín tầng cao bát ngát trời…Cho tới chừ đây, tới chừ đâyTôi mơ qua cửa khám bao ngàyTôi thu tất cả trong thầm lặngNhư cánh chim buồn nhớ gió mây.Gì sâu bằng những trưa hiu quạnhÔi ruộng đồng quê thương nhớ ơi!(Tháng 7- 1939)(1) Cà lơi : loại chim sơn ca.GIỜ QUYẾT ĐỊNHKhông thể nữa, lưng chừng hay tính toánTrọn đời ta rút gọn ở giờ này.Bão đã rốc thổi già trên biển loạnSống là đây, mà chết cũng là đây!Không thể nữa, lơi chèo hay quay láiĐằng sau kia còn bãi cát nào đâu?Chỉ ghê gớm núi chồm trên sóng dạiChực quăng ta vào mỏm đá nhô đầu!Không thể nữa, cầu xin êm gió nước:Gió vô tri và nước cũng điên cuồngPhật vẫn lặng như ngàn năm thủa trướcVà Trời hay Thiên chúa chỉ hư không!Không thể nữa, không bao giờ được nữa!Đoàn ghe ta chỉ sống ở trăm tayBão cố xé cho đoàn ta tan rãThì mau lên, riết chặt mối ngàn dây!Xích sát lại, cập kề nhau vững chắcDầu sóng tung hay gió quật thâm ngườiDa rét, mặc! Tả tơi quần áo, mặc!Phải gắng lên, mỗi đứa chúng mình ơi!Tay bình tĩnh cứ ghìm ôm vững láiCòn bao nhiêu cứ cắm cổ bơi chèoKhông một tiếng thở dài buông rã rượiKhông một lời để chán nản thầm gieo!Dầu phải chết một phần ta, cứ chết!Không kêu ca, không tiếc hối, than phiền.Quyết không để cả đoàn tan nát hết.Bạn thuyền ơi! Nỗ lực bơi chèo lên!(Tháng 4- 1940)CON CHIM CỦA TÔINó chết rồi, con chim của tôiCon chim sẻ sẻ mới ra đời!Hôm qua nó hãy còn bay nhảyChỉ một ngày giam, đã chết rồi!Tôi muốn cô đơn dịu bớt sầuNên tôi yêu nó có gì đâu!Tình thương vô ý gây nên tộiTôi đã tù, sao bắt nó tù ?Sao nỡ dù trong giây phút thôiBắt con chim nhỏ hận câm lờiSao không trả nó về mây gióCho nó say sưa uống ánh trời?Tôi dẫu dành cơm mớm nó ănĐủ làm sao được: thiếu không gian!Sao tôi không hiểu, sao không hiểu?Để tội tình chưa, nó chết oan!(Xà lim số 1, lao Thừa Thiên, tháng 5- 1939)ĐÔNGĐêm nay gió biển đông vềMùa thu chừng đã tái tê đất trờiNon quanh chừng đã lạnh rồiRừng sâu run rẩy, xa vời tiếng rungSân lao mấy cội vông đồngLá cành xao xác, buồn đông não nềMột mình nằm tựa đêm ngheLạnh lùng gió lọt vào khe cửa buồngMền không mà chiếu cũng khôngMột mình trơ trọi giữa phòng xà linhNằm nghe mình chuyện với mìnhMênh mông nhớ bạn, gởi tình trăm phương…(Lao Bảo, tháng 12- 1940)TRĂNG TRỐITừ thuở ấy, quăng thân vào gió bụiĐến hôm nay phút chết đã kề bênĐến hôm nay kiệt sức, tôi nằm rênTrên ván lạnh không mảnh mền, manh chiếu.Đời cách mạng, từ khi tôi đã hiểuDấn thân vô là phải chịu tù đàyLà gươm kề cận cổ, súng kề taiLà thân sống chỉ coi còn một nửaBao khổ ấy, thôi cần chi nói nữaBạn đời ơi! Ta đã hiểu nhau rồi.Nếu mai đây có chết một thân tôiHai mươi tuổi, tim đang dào dạt máuHai mươi tuổi, hồn quay trong gió bãoGân đang săn và thớ thịt căng daĐời mặn nồng hứa hẹn biết bao hoa!Hai mươi tuổi mới qua vòng thơ béDù phải chết, chết một đời trai trẻLiệm thân tàn bằng một mảnh chiếu conRồi chôn xương rục thối dưới chân cồnHay phơi xác cho một đàn quạ rỉa?Tôi chẳng tiếc, chỉ cười trông mai mỉaBao nhiêu hình ảnh đó vẽ quanh tôi.Tiếc làm chi? Thế cũng đã sống rồi.Trường giông tố, mấy năm trời vật lộnVới cách mạng, tôi không hề đùa bỡnVà không hề dám chối một nguy nan.Dẫu bao nhiêu thành quả của thanh xuânTôi mới hái một đôi lần ít ỏiVà bên bạn, chỉ là tên lính mớiGót chân tơ chưa dày dạn phong trầnTôi vẫn hằng tự nghĩ: “Miễn quên thânDâng tất cả để tôn thờ chủ nghĩa”Thế cũng được, lựa chi nhiều tài tríMới là tên lính quý của đoàn quân?Và lòng vui, trí nhẹ đủ trăm phầnTôi sẽ chết bình yên, không hối hậnTôi sẽ chết như bao nhiêu số phậnNẻo đường xa, đã mạnh dấn chân vàoĐã từng lăn trong máu dưới gươm tràoThân đã nặng bởi bao gông xiềng xích!Tôi sẽ chết, tuy chưa về tới đíchNhưng cần chi, đã có bạn chung đờiTung hoành trên mặt đất bốn phương trờiTrường giao chiến không một giờ phút lặng!Rồi chiến thắng sẽ về ta, chiến thắngVà tương lai, ta sẽ chiếm về ta!Trường đấu tranh là một bản hùng caTa sẽ chết trong điệu đàn tranh đấu.Đây là tiếng, hỡi bạn đời yêu dấuCủa một người bạn nhỏ, trước khi điĐây là lời trăng trối để chia lyHãy đón nó, bạn đời ơi, đón nó!Đường tranh đấu không một giờ thoái bộSống đã vì cách mạng, anh em taChết cũng vì cách mạng, chẳng phiền hà!Vui vẻ chết như cày xong thửa ruộngLòng khỏe nhẹ anh dân quê sung sướngNgửa mình trên liếp cỏ ngủ ngon lànhVà trong mơ thơm ngát lúa đồng xanhVui nhẹ đến trên môi cười hy vọng.Lao Bảo, 11 - 1940(Trong những ngày tuyệt thực)";
//const body = "Từ ấy trong tôi bừng nắng hạMặt trời chân lý chói qua timHồn tôi là một vườn hoa láRất đậm hương và rộn tiếng chim…Tôi buộc lòng tôi với mọi ngườiĐể tình trang trải với trăm nơiĐể hồn tôi với bao hồn khổGần gũi nhau thêm mạnh khối đời.Tôi đã là con của vạn nhàLà em của vạn kiếp phôi phaLà anh của vạn đầu em nhỏKhông áo cơm, cù bất cù bơ…(7-1938)";
export default class GetListPoem extends Component {
    constructor() {
        super();
        this.state = {
            myListPoem: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            isKeySeach:""
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
        var isChar = [',', '?', '-', '.', '"', '!', '(', ')', '…', ':', '“', "”"];
        for (var index = 0; index < isChar.length; index++) {
            if (key === isChar[index]) {
                return false;
            }

        }
        return true;
    }

    checkCharEndRow(key) {
        var isChar = ['?', '.', '!', '…',];
        for (var index = 0; index < isChar.length; index++) {
            if (key === isChar[index]) {
                return true;
            }

        }
        return false;
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

    checkLowerCaseKey(key) {
        if (this.checkInterger(key) && this.checkChar(key)) {
            if (!this.checkUppercase(key)) {
                return true;
            }
            return false;
        }
        return false;
    }

    editBody(body) {
        var bodyClone = "";
        var row = 0;
        for (var index = 0; index < body.length; index++) {
            if (this.checkLowerCaseKey(body[index]) && this.checkKey(body[index + 1])) {
                if (body[index + 1] === ' ') {
                    bodyClone = bodyClone + body[index];
                }
                else {
                    bodyClone = bodyClone + body[index] + '\n';
                    row++;
                    if (row >= 4) {
                        bodyClone = bodyClone + '\n';
                        row = 0;
                    }
                }
            }
            else {
                try {
                    if (this.checkCharEndRow(body[index]) && this.checkKey(body[index + 1])) {
                        bodyClone = bodyClone + body[index] + '\n';
                        row++;
                        if (row >= 4) {
                            bodyClone = bodyClone + '\n';
                            row = 0;
                        }
                    }
                    else {
                        if (this.checkCharEndRow(body[index]) && body[index + 1] == '(') {
                            bodyClone = bodyClone + body[index] + '\n';
                            row++;
                            if (row >= 4) {
                                bodyClone = bodyClone + '\n';
                                row = 0;
                            }
                        }
                        else {
                            bodyClone = bodyClone + body[index]
                        }
                    }
                } catch (error) {
                    bodyClone = bodyClone + body[index]
                }

            }
        }
        return bodyClone;
    }

    getPoem() {
        var strTitle = "";
        var strBody = "";
        var isPoem = true;
        var intId = 0;
        arrayPoem = [{}];
        var isBody = "";
        for (var index = 0; index < strPoem1.length; index++) {
            if (this.checkSpace(strPoem1[index])) {
                if (this.checkKey(strPoem1[index - 1])) {
                    if (this.checkKey(strPoem1[index]) && this.checkKey(strPoem1[index + 1])) {
                        strTitle = strTitle + strPoem1[index];
                        isPoem = true;
                    }
                    else {
                        isPoem = false;
                        strBody = strBody + strPoem1[index];
                    }
                }
                else {
                    isPoem = false;
                    strBody = strBody + strPoem1[index];
                }
            }
            else {
                if (this.checkKey(strPoem1[index]) && this.checkKey(strPoem1[index + 1])) {
                    if (!isPoem) {
                        intId++;
                        strBody = this.editBody(strBody);
                        var x = {
                            isIdPoem: intId,
                            isTitlePoem: strTitle,
                            isBodyPoem: strBody,
                        }
                        arrayPoem.push(x);
                        strTitle = "";
                        strBody = "";
                    }
                    strTitle = strTitle + strPoem1[index];
                    isPoem = true;
                }
                else {
                    isPoem = false;
                    strBody = strBody + strPoem1[index];
                }
            }
        }
        intId++;
        strBody = this.editBody(strBody);
        var x = {
            isIdPoem: intId,
            isTitlePoem: strTitle,
            isBodyPoem: strBody,
        }
        arrayPoem.push(x);
        return arrayPoem;
    }

    onSerchPoem() {
        var keySerch = this.state.isKeySeach;
        var lstPoem = this.getPoem();
        var lstPoemSeach = [{}];
        for (var index = 1; index < lstPoem.length; index++) {
            if (lstPoem[index].isTitlePoem.search(keySerch) >= 0) {
                lstPoemSeach.push(lstPoem[index]);
            }
        }
        if (lstPoemSeach.length > 1) {
            this.setState({
                myListPoem: this.state.myListPoem.cloneWithRows(lstPoemSeach)
            })
        }
        else{
            myListPoem: this.state.myListPoem.cloneWithRows(this.getPoem());
        }
    }
    componentDidMount() {
         this.setState({
             myListPoem: this.state.myListPoem.cloneWithRows(this.getPoem()),
         });
        this.onSerchPoem();
    }

    render() {
        return (
            <View >
                <View style={{ height: 50, backgroundColor: '#808080', flexDirection: 'row' }} >
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.inputText}
                        placeholder='Tìm Kiếm'
                        onChangeText={text => this.setState({
                            isKeySeach: text
                        })}
                    />
                    <TouchableOpacity
                        style={{marginLeft:100, marginTop: 10 ,backgroundColor:'#ffffff',height:30,width:50,borderRadius: 10}}
                        onPress = {()=> this.onSerchPoem()}
                    >
                    <Text style = {{textAlign:"center",fontWeight: 'bold',justifyContent: 'center',}}>TÌM</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View >
                        <Text style={styles.TitLeBody}>DANH SÁCH BÀI THƠ</Text>
                    </View>
                    <ListView
                        dataSource={this.state.myListPoem}
                        renderRow={(rowData) =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('GetPoem', { poem: rowData })}
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
    iconSeach: {
        fontSize: 30,
        marginRight: 20,
        color: '#ffffff'

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


