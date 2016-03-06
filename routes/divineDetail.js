/**
 * Created by ty on 2016/2/16.
 */
var db = require("./db");
exports.showPaixing = function(req,res){
    var pxName = req.query.cardForm,
        paiZu = req.query.paiZu,
        con = db.dbGetCon();
    console.log("9 line: "+JSON.stringify(req.query)+" , ,"+pxName+"  ,  "+paiZu);
    con.query("select * from paixing where pxName=?",[pxName],function(e,row){
        if(e){
            console.log("routes/divineDetail.js 10line : "+e);
        }else{
            var innerCon = db.dbGetCon();
            innerCon.query("select * from card where cardNum=?",[0],function(e,row){

            });
            innerCon.end();
            res.json(row[0]);
        }
    });
    con.end();

    con.query("select * from card where cardNum=?",[],function(e,row){

    });
};