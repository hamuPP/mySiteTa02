/*
 * GET home page.
 */
var db = require("./db");

exports.navToSearchPage = function (req, res) {
    var userInput = "%" + req.query.userinput + "%",
        con = db.dbGetCon(),
        con2 = db.dbGetCon(),
        sqlCard = "select cardName,cardSummary from cardLocalhost where cardName like?",
        sqlPaixing = "select pxName,pxSummary from paixing where pxName like ?",
        page = {};

    /*first:search card*/
    con.query(sqlCard, [userInput], function (e, r) {
        if (e) {
            console.log("routes/search.js: 16 Line:" + e);
        } else {
            console.log(r);
            if (r.length > 0) {
                page.cardRows = r;
            } else {
                page.cardRows = [];
            }

            _searchPaixing(sqlPaixing, userInput, page, res);
        }
    });
    con.end();


    console.log(page);


};

function _searchPaixing(sqlPaixing, userInput, page, res) {
    var innerCon = db.dbGetCon();
    innerCon.query(sqlPaixing, [userInput], function (e, r) {
        if (e) {
            console.log("routes/search.js: 32 Line:" + e);
        } else {
            console.log(r);
            if (r.length > 0) {
                page.paixingRows = r;
            } else {
                page.paixingRows = [];
            }
            res.render('search', page);
        }
    });
    innerCon.end();
};
