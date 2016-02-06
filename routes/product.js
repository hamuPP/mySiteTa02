/**
 * Created by lovo_bdk on 15-10-21.
 */
var db = require("./db");
exports.showAllPro = function(req,res){
    var con = db.dbGetCon();
    con.query("select * from t_product",function(error,row){
        if(error){
            console.log("数据库出错："+error);
        }else{
            res.json(row);
        }
    });
    con.end();
}

/*限制数量的查询商品*/
exports.showLimitPro = function(){}

exports.showProInfo = function(req,res){
    var id = req.query.id;
//    console.log(id);
    var con = db.dbGetCon();
    con.query("select * from t_product where p_id=?",[id],function(error,row){
        if(error){
            console.log("数据库出错："+error);
        }else{
            res.json(row[0]);
        }
    });
    con.end();
}


exports.showDetail = function(req,res){
    console.log("已进入showDetail查询");
    var id = req.query.id;
    var con = db.dbGetCon();
    con.query("select * from t_product where p_id=?",[id],function(error,row){
        if(error){
            console.log("数据库出错："+error);
        }else{
            res.json(row);
//            console.log(row);
        }
    });
    con.end();
}

/*未完*/
exports.search = function(req,res){
    var searchInfo = req.query.searchInput;
    console.log(searchInfo);
}

/*每个list.html和searchlist.html页面显示内容*/
exports.showProByCate =function(req,res){
    var con=db.dbGetCon();
    var cateId=req.query.cateId;
    var searchInput=req.query.searchInput;
    var sql;
//    console.log("已进入showbycate方法,cateId是"+cateId+" ,searchInput是 "+searchInput);
    if(cateId==99){
       sql="select * from t_product where p_name like '%"+searchInput+"%'";
        cateId=null;
    }else{
        sql = "select * from t_product where p_cate_id=?";
    }
    console.log("已进入showbycate方法,cateId是"+cateId+" ,searchInput是 "+searchInput+"，sql是"+sql);
    db.queryByPage(con,1,12,sql,[cateId],function(error,rows,fields,page){
        if(error){
            console.log(error);
        }else{
            page.data=rows;
//            console.log(page);
            res.json(page);
        }
    });
}

exports.priceLowToHigh =function(req,res){
    var con=db.dbGetCon();
    var cateId=req.query.cateId;
    var searchInput=req.query.searchInput;
    var sql;
//    console.log("已进入showbycate方法,cateId是"+cateId+" ,searchInput是 "+searchInput);
    if(cateId==99){
        sql="select * from t_product where p_name like '%"+searchInput+"%' order by P_price asc";
        cateId=null;
    }else{
        sql = "select * from t_product where p_cate_id=? order by P_price asc";
    }
    console.log("已进入showbycate方法,cateId是"+cateId+" ,searchInput是 "+searchInput+"，sql是"+sql);
    db.queryByPage(con,1,12,sql,[cateId],function(error,rows,fields,page){
        if(error){
            console.log(error);
        }else{
            page.data=rows;
//            console.log(page);
            res.json(page);
        }
    });
}

exports.priceHighToLow =function(req,res){
    var con=db.dbGetCon();
    var cateId=req.query.cateId;
    var searchInput=req.query.searchInput;
    var sql;
//    console.log("已进入showbycate方法,cateId是"+cateId+" ,searchInput是 "+searchInput);
    if(cateId==99){
        sql="select * from t_product where p_name like '%"+searchInput+"%' order by P_price desc";
        cateId=null;
    }else{
        sql = "select * from t_product where p_cate_id=? order by P_price desc";
    }
    console.log("已进入showbycate方法,cateId是"+cateId+" ,searchInput是 "+searchInput+"，sql是"+sql);
    db.queryByPage(con,1,12,sql,[cateId],function(error,rows,fields,page){
        if(error){
            console.log(error);
        }else{
            page.data=rows;
//            console.log(page);
            res.json(page);
        }
    });
}

exports.addToCart=function(req,res){
    var pid = req.body.pid;
    var uid= req.body.uid;

    var con=db.dbGetCon();
    var sql ="insert into t_cart (c_p_id,c_u_id) values (?,?)";
    con.query(sql,[pid,uid],function(e,f){
        if(e){
            console.log(e);
        }else{
            res.json({"msg":"插入成功"});
        }
    });
    con.end();
}

exports.cartByUid = function(req,res){
    console.log("进入cartByUid");
    var uid=req.query.uid;
    var con=db.dbGetCon();
//    var sql ="select * from t_cart where c_u_id=?";
    var sql ="select * from t_cart left join t_product on t_cart.c_p_id = t_product.p_id where c_u_id=?";
//    console.log("uid是"+uid);
    con.query(sql,[uid],function(e,r){
        if(e){
            console.log(e);
        }else{
//            console.log(r);
            res.json(r);
        }
    });
    con.end();
}

exports.delCart=function(req,res){
    var con=db.dbGetCon();
    var c_p_id=req.body.p_id;
    var c_u_id=req.body.c_u_id;
    var sql ="delete from t_cart where c_p_id=? and c_u_id=?";
//    console.log(sql,c_p_id,c_u_id);
    con.query(sql,[c_p_id,c_u_id],function(e,r){
        if(e){
            console.log(e);
        }else{
            console.log("删除成功");
            res.json(r);
        }
    });
    con.end();
}

exports.showCommend=function(req,res){
    var pid=req.query.pid;
    var con =db.dbGetCon();
    var sql = "select * from t_message left join t_product on t_message.m_p_id = t_product.p_id left join t_users on t_message.m_u_id = t_users.id where m_p_id=?";
    con.query(sql,[pid],function(e,r){
        if(e){
            console.log(e);
        }else{
//            console.log(r);
            res.json(r);
        }
    });
    con.end();
}

exports.updateMyComm=function(req,res){
    var pid=req.body.pid;
    var uid=req.body.uid;
    var text =req.body.text;
    var sql ="insert into t_message(m_content,m_u_id,m_p_id) values (?,?,?)";
    var con=db.dbGetCon();
    con.query(sql,[text,uid,pid],function(e,r){
        if(e){
            console.log(e);
        }else{
            res.json({});
        }
    });
    con.end();
}