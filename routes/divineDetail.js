/**
 * Created by ty on 2016/2/16.
 */
var db = require("./db");
exports.showPaixing = function(req,res){
    var pxName = req.query.cardForm,
        paiZu = req.query.paiZu,
        userName = req.query.userName,
        con = db.dbGetCon(),
        innerSql = "SELECT * FROM cardLocalhost WHERE cardCategory = ?",
        paizu = "",
        innerCondition = [];
    console.log(req.query);
    console.log(pxName+" / " +paiZu+" / "+userName);

    if(!paiZu || !pxName){
        res.json({code:-1,msg:"没有查到相关信息，去逛逛别的吧！"});
        return;
    }

    switch(paiZu){
        case "22张大牌":
            paizu = "22张大牌";
            innerCondition = [2];
            break;
        case "56张小牌":
            paizu = "56张小牌";
            innerSql = "SELECT * FROM cardLocalhost WHERE cardCategory != 2";
            innerCondition = [];
            break;
        case "全78张牌":
            paizu = "全78张牌";
            innerCondition = [];
            innerSql = "SELECT * FROM cardLocalhost";
            break;
        case "权杖":
            paizu = "权杖";
            innerCondition = [4];
            break;
        case "宝剑":
            paizu = "宝剑";
            innerCondition = [5];
            break;
        case "五角星":
            paizu = "五角星";
            innerCondition = [6];
            break;
        case "圣杯":
            paizu = "圣杯";
            innerCondition = [7];
            break;
        default :
            break;
    }
    //先确定牌型，再确定牌组：即抽对应的大卡or小卡or全78张牌
    con.query("select * from paixing where pxName=?",[pxName],function(e,row){
        if(e){
            console.log("routes/divineDetail.js 10line : "+e);
        }else{
            console.log(row);
            if(row && row.length > 0){
                var innerCon = db.dbGetCon(),
                    cardsArr = [];

             //   innerCondition.push(row[0].pxCardSum);待删，这个数组不需要这个数值了
                console.log("innerSql:"+innerSql+"innerCondition:"+innerCondition);
                innerCon.query(innerSql, innerCondition, function(e,innerRow){
                    if(e){
                        console.log("routes/divineDetail.js: 67 Line: "+e);
                    }else{
                        console.log("routes/divineDetail.js: 69 Line: 本次测算抽出的牌为"+innerRow);
                        //根据牌形的张数，获得相当数量的卡牌
                        cardsArr = _getArrayItems(innerRow, row[0].pxCardSum);
                        //对每张牌随机正逆位置，true-正位，false-逆位
                        for(var i = 0, len = cardsArr.length; i < len; i++){
                            cardsArr[i].isRightPos = halfProbability([true,false]);
                        }
                        row[0].cardInfo = cardsArr;
                        row[0].code = 0;
                        res.json(row[0]);

                        //若用户登录了，把本次测算信息存入数据库
                        if(userName){
                            console.log("routes/divineDetail.js 69 LINE:用户为："+userName+"本次测算信息："+JSON.stringify(row[0]));
                            _saveUserDivineHistory(userName,paizu,row[0]);
                        }
                    }
                });
                innerCon.end();
            }else{
                res.json({code:-1,msg:"没有查到相关信息，去逛逛别的吧！"});
            }
        }
    });
    con.end();

};

/**
 * 50%概率从2个元素中取出1个元素
 * @param {Array} arr 包含2个元素的数组
 * @returns
 */
function halfProbability(arr){
    var random = Math.random();

    return random >= 0.5 ? arr[0]:arr[1];

};

/**
 *
 * @param {String} sUserName 用户名
 * @param {String} sPaizu 牌组（大卡，小卡，全78张牌等）
 * @param {JSON} JSONInfo 关于此用户的要保存的所有信息
 * @private
 */
function _saveUserDivineHistory(sUserName,sPaizu,JSONInfo){
    if(!sUserName || !sPaizu || !JSONInfo){
        return false;
    }

    //不需要查询是否有用户名，直接一条一条往里插就是了
    var con = db.dbGetCon(),
        sql = "insert into t_userdivinehistory(udhUserName, udhPxName, udhPxBanner, udhPaiZu, udhPxEachCardName, udhGenerateTime) value(?,?,?,?,?,?)",
        sGenerateTime = new Date().getTime(),
        aCardInfo =JSONInfo.cardInfo,
        len = aCardInfo.length,
        cardName = "",
        sPxEachCardName = "";

    for(var i = 0; i < len; i++ ){
        cardName = aCardInfo[i].isRightPos ? aCardInfo[i].cardName : aCardInfo[i].cardName+"(逆位)";
        sPxEachCardName += cardName+",";
    }

  //  console.log(pxName);
    con.query(sql,[sUserName, JSONInfo.pxName, JSONInfo.pxBanner, sPaizu, sPxEachCardName, sGenerateTime],
        function(err){
            if(err){
                console.log("routes/divineDetail.js 124 Line:保存用户测算记录到数据库失败"+ err);
            }else{
                console.log("routes/divineDetail.js 126 Line:保存用户测算记录到数据库成功");
            }
        }
    );
    con.end();
};

function _getArrayItems(arr, num) {
    var temp_array = arr,
        return_array = [];
    for (var i = 0; i < num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length > 0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random() * temp_array.length);

            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}