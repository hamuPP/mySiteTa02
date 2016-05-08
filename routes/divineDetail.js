/**
 * Created by ty on 2016/2/16.
 */
var db = require("./db");
exports.showPaixing = function(req,res){
    var pxName = req.query.cardForm,
        paiZu = req.query.paiZu,
        userName = req.query.userName,
        con = db.dbGetCon(),
        innerSql = "SELECT * FROM card WHERE id >= ((SELECT MAX(id) FROM card)-(SELECT MIN(id) FROM card)) * RAND() + (SELECT MIN(id) FROM card)  and cardCategory = ? LIMIT ?",
        innerCondition = [];
    console.log(req.query);
    console.log(pxName+" / " +paiZu+" / "+userName);

    if(!paiZu || !pxName){
        res.json({code:-1});
        return;
    }

    switch(paiZu){
        case "22张大牌":
            innerCondition = [2];
            break;
        case "56张小牌":
            innerCondition = [3];
            break;
        case "全78张牌":
            innerCondition = [];
            innerSql = "SELECT * FROM card WHERE id >= ((SELECT MAX(id) FROM card)-(SELECT MIN(id) FROM card)) * RAND() + (SELECT MIN(id) FROM card)  LIMIT ?";
            break;
        case "权杖":
            innerCondition = [4];
            break;
        case "宝剑":
            innerCondition = [5];
            break;
        case "五角星":
            innerCondition = [6];
            break;
        case "圣杯":
            innerCondition = [7];
            break;
        default :
            break;
    }
    //先确定牌型，再抽对应的大卡or小卡or全78张牌
    con.query("select * from paixing where pxName=?",[pxName],function(e,row){
        if(e){
            console.log("routes/divineDetail.js 10line : "+e);
        }else{
            var innerCon = db.dbGetCon();

            innerCondition.push(row[0].pxCardSum);

            innerCon.query(innerSql, innerCondition, function(e,innerRow){
                if(e){
                    console.log("routes/divineDetail.js: 57 Line: "+e);
                }else{
                    //对每张牌随机正逆位置，true-正位，false-逆位
                    for(var i = 0, len = innerRow.length; i < len; i++){
                        innerRow[i].isRightPos = halfProbability([true,false]);
                    }

                    row[0].cardInfo =innerRow;
                    res.json(row[0]);

                    //若用户登录了，把本次测算信息存入数据库
                    if(userName){
                        console.log("routes/divineDetail.js 69 LINE:用户为："+userName+"本次测算信息："+JSON.stringify(row[0]));
                        _saveUserDivineHistory(userName,row[0]);
                    }
                }
            });
            innerCon.end();
        }
    });
    con.end();

};

exports.saveUserDivineResult = function(req,res){
    //var userName = req.body.userName;
    console.log(req.body);
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
 * @param {JSON} JSONInfo 关于此用户的要保存的所有信息
 * @private
 */
function _saveUserDivineHistory(sUserName,JSONInfo){
    //不需要查询是否有用户名，直接一条一条往里插就是了
    var con = db.dbGetCon(),
        sql = "insert t_user  WHERE u_name = "+sUserName,

};