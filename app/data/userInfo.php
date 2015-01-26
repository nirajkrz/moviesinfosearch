<?php 
	$userInfo=json_decode(file_get_contents('php://input'));  //get user from
	var_dump($userInfo);
	if($userInfo=>mail=='abc@abc.com' && $userInfo=>pass=='1234')
		print 'success';
	else 
		print 'error';
?>

/*
API Key: 34ymvz34c6ye7u57qm3cmez4

http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=[your_api_key]

{"link_template": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q={search-term}&page_limit={results-per-page}&page={page-number}"}

{"links":
{"lists":"http://api.rottentomatoes.com/api/public/v1.0/lists.json",
"movies":"http://api.rottentomatoes.com/api/public/v1.0/movies.json"}
}
{"links":
{"movies":"http://api.rottentomatoes.com/api/public/v1.0/lists/movies.json",
"dvds":"http://api.rottentomatoes.com/api/public/v1.0/lists/dvds.json"}
}
Movies Search: http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=[your_api_key]&q=Jack&page_limit=1
Box Office : http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=[your_api_key]&limit=1

*/
