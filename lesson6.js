//6
db.books.find({"categories":{$size:0}});
//8
db.books.find({author:{$all:["Robi Sen"]}},{tytle:true,ongdescription:true});
//9
db.books.find({author:{$all:[/a/i]}},{tytle:true,ongdescription:true});
//10
db.books.find({categories:['XML','Internet']});
//11
db.books.find({categories:{$all:["xml","internet"]}});
//12
db.books.find({author:{$all:[""]}}).count();
//13
db.books.find({"author.2":""}).count();
//14
db.books.find({_id:{$type:true}}).count();