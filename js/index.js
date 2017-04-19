var summary = [{
	'text': '在github上搭建免费博客'
},{
	'text': '在github上搭建免费博客'
}]
$('.article-body ul li').each(function(i, n){
	$(this).find('.blog-summary').html(summary[i].text);
});