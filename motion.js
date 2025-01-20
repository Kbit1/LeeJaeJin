@charset "utf-8";
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Roboto&display=swap&subset=korean');
/* G마켓 산스 폰트 */
@font-face{ font-family: 'GmarketSansMedium'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
  format('woff'); font-weight: normal; font-style: normal;}

body,h1,h2,h3,h4,p,ul,ol,dl,dt,li,button{ margin:0; padding:0; list-style:none; }
a{ text-decoration:none; }
img{ border:0; }
button{ border:0; background:none;  }
body{  font-family:Roboto, Nanum Gothic, sans-serif; }


#header{ 
   height: 60px; background: rgba(0,0,0,0.8); color:#fff; 
   position:fixed; z-index:1; left:0; top:0; width:100%; }
.header_wrap{ width:1100px; height:60px; margin:0 auto;  line-height:60px;}
h1{ float:left; font-size:18px; margin-right:100px;}
nav{ float:left; }
.gnb li{ float:left; margin:0 10px;}
.gnb li button{ color:#fff; }
.gnb li button:hover{  opacity:0.3; text-decoration:underline; cursor:pointer;}
.header_wrap p{ float:right; font-size:14px; opacity:0.5; }



#container section{ height:1000px; }
#container section:nth-child(odd){ background: url(./images/content_bg.gif) fixed;  color:#fff;  }
#container section:not(:first-child)>div{ 
  width:1100px; height:1000px; margin:0 auto; 
  border:1px solid rgba(255,255,255,0.2); }

#container h2{ margin:100px 0 30px 30px; font-size:30px; letter-spacing:20px;}
#container p{ margin-left:30px; }


/* c1구역 */
.c1{ width:100%; height:1000px; overflow:hidden; } 
.c1 ul:nth-of-type(1){ width:300%; height:1000px; text-align:center; }
.c1 ul:nth-of-type(1) li{ width:33.333%; height:1000px; float:left;  line-height:1000px;}
.visual_wrap ul li{
  font-size:35px; font-family: 'GmarketSansMedium';
}

.v1{ background: rgba(3,100,100,0.8); }
.v2{ background: rgba(200,20,170,0.8); }
.v3{ background: rgba(240,250,0,0.8); }




.arrow_btn{ position:absolute; top:470px; left:50%; margin-left: -550px;}
.arrow_btn button{ 
  width:150px; height:20px;  
  background: #00a99b; text-align:left; text-indent:5px; }
.arrow_btn button:hover{  
  border:1px solid #00a99b; box-sizing: border-box;
  color: #00a99b; background: none; cursor:pointer;
}
.c1 .arrow_btn li:last-child button{ margin-top: 100px; background: #000; color: rgba(255,255,255,0.7); }

#container .c1 h2{ display:none;}


/*프로필(.c2)*/

.c2 ul{ margin:40px; }
.c2 li{ 
	 border:1px solid #d9d9d9; box-sizing:border-box;
     width:250px; height:500px; 
     float:left;  overflow:hidden;}

.c2 li h3{ margin:20px; width:250px; }
.c2 li p{ line-height:30px; width:450px; }

#footer{  
        position: fixed;  bottom:0;  
        left:50%; margin-left:370px; 
        background: #000; color:#fff; font-size:12px;
        width:180px; padding:20px; 
        border: 1px solid rgba(255,255,255,0.1); box-sizing:border-box;
}

/* c3 구역 */
.section_wrap{
  font-size: 20px;
}



