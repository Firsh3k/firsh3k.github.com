---
layout: page
title: FirshStudio
tagline: Supporting tagline HS
---
{% include JB/setup %}


<img class='inset right' src='/images/photo.jpg' width='120px' />	


#	***Who is the Firsh?***
A 20-something lives on the earth as human-being within the GFW whose figure also as below:

>- *Used to be da Balla*
>- *Now is the Life-Geek*
>- *May to be the Composer or Advocate*


# ***Why this Blog exists?***

You might think this blog is for tracking the life path.
<br>However, more deeply in thought, I hope one day, people would reminisce this place because they believe in **Life Worth Spreading**.	
<br>Here what I'm about to divide this Blog into 3 themes which we couldn't live without them.

+-- {.section}
[Life](/life/lifes.html)
============
I choose to live for the memory and fun so Here would be the mixing-pot about my life.

<ul class="compact recent">
  {% for lifepost in site.categories.life limit:3 %}
    <li><span>{{ lifepost.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ lifepost.url }}">{{ lifepost.title }}</a></li>
  {% endfor %}
</ul>
=--
+-- {.section}
[Health](health/health.html)
============
You need healthy body-system to do whateva you'd have to do so Here's you'd get to know how to arm your body.	

<ul class="compact recent">
  {% for healthpost in site.categories.health limit:3 %}
    <li><span>{{ healthpost.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ healthpost.url }}">{{ healthpost.title }}</a></li>
  {% endfor %}
</ul>
=--
+-- {.section}
[Work](work/work.html)
============
Here's to share some meaningful masterpiece of my work. 

<ul class="compact recent">
  {% for Workpost in site.categories.work limit:3 %}
    <li><span>{{ Workpost.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ Workpost.url }}">{{ Workpost.title }}</a></li>
  {% endfor %}
</ul>
=--


---


+-- {.section}
[My Book](http://book.douban.com/)
============

<div><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="555" height="80" id="passing" > <param name="movie" value="http://www.douban.com/doushow/firsh3k/wishlist_latest_book_6_6_small_nologo_noself/doushow.swf" /> <param name="quality" value="high" /> <param name="scale" value="noscale"/> <param name="align" value="tl"/> <param name="wmode" value="transparent"/> <embed src="http://www.douban.com/doushow/firsh3k/wishlist_latest_book_6_6_small_nologo_noself/doushow.swf" wmode="transparent" quality="high" width="555" height="80" name="passing" scale="noscale" align="tl" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /> </object></div>
=--

+-- {.section}
[My Movie](http://movie.douban.com/)
============
<div><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="555" height="80" id="passing" > <param name="movie" value="http://www.douban.com/doushow/firsh3k/collection_latest_movie_6_6_small_nologo_noself/doushow.swf" /> <param name="quality" value="high" /> <param name="scale" value="noscale"/> <param name="align" value="tl"/> <param name="wmode" value="transparent"/> <embed src="http://www.douban.com/doushow/firsh3k/collection_latest_movie_6_6_small_nologo_noself/doushow.swf" wmode="transparent" quality="high" width="555" height="80" name="passing" scale="noscale" align="tl" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /> </object></div>
=--

+-- {.section}
[My Music](http://music.douban.com/)
============

<div><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="555" height="80" id="passing" > <param name="movie" value="http://www.douban.com/doushow/firsh3k/collection_latest_music_6_6_small_nologo_noself/doushow.swf" /> <param name="quality" value="high" /> <param name="scale" value="noscale"/> <param name="align" value="tl"/> <param name="wmode" value="transparent"/> <embed src="http://www.douban.com/doushow/firsh3k/collection_latest_music_6_6_small_nologo_noself/doushow.swf" wmode="transparent" quality="high" width="555" height="80" name="passing" scale="noscale" align="tl" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /> </object></div>
=--


<!--
<div style="float:left;width:160px;">
<iframe width="100%" height="75" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=550&fansRow=2&ptype=1&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=0&isFans=0&uid=1893556900&verifier=8c17d4b5&dpc=1"></iframe>
</div>-->
