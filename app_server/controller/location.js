module.exports.homelist=function(req,res){
    res.render('index',{title:'Home'});
};
module.exports.locationsinfo=function(req,res){
    res.render('index',{title:'locationinfo'});
};
module.exports.addreview=function(req,res){
    res.render('index',{title:'Add review'});
};