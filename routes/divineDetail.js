/**
 * Created by ty on 2016/2/16.
 */
var db = require("./db");
exports.showPaixing = function(req,res){
    var pxName = req.query.cardForm,
        paiZu = req.query.paiZu,
        con = db.dbGetCon();
//    console.log("9 line: "+JSON.stringify(req.query)+" , ,"+pxName+"  ,  "+paiZu);
    con.query("select * from paixing where pxName=?",[pxName],function(e,row){
        if(e){
            console.log("routes/divineDetail.js 10line : "+e);
        }else{
            var innerCon = db.dbGetCon();
//            console.log("15 line:"+row[0].pxCardSum);
            innerCon.query("SELECT * FROM card WHERE id >= ((SELECT MAX(id) FROM card)-(SELECT MIN(id) FROM card)) * RAND() + (SELECT MIN(id) FROM card)  LIMIT ?",row[0].pxCardSum,function(e,innerRow){
                if(e){
                    console.log("18 Line: "+e);
                }else{
                    row[0].cardInfo =innerRow;
                    res.json(row[0]);
                }
            });
            innerCon.end();
        }
    });
    con.end();

};