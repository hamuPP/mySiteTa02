/**
 * Created by ty on 16/7/5.
 */
exports.about = function(req, res) {
	var cateId = req.query.cateid;

	switch (cateId){
		case "aboutUS":res.render("aboutUs");
			break;
		case "contactEditor":res.render("contactEditor");
			break;
		case "feedback":res.render("feedback");
			break;
		default:
			res.render("indexv2");
			break;
	}
};