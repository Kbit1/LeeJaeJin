/*  
  - (누)구를 (처)리하겠다.(조작/동작)
  - (누)구를 (언)제 (처)리하겠다(조작/동작)
  
  - 특정 시간에 맞춰 명령어를 처리
    : setInterval("명령어보관함()",인터벌시간)
  
--------------------------------------------------------------

  animate();  -->CSS 표현 속성 기반 동작 움직임 처리가능
  
  콘텐츠의 화면 상하좌우(대각선) 움직임:
     marginLeft / marginTop / marginRight / marginBottom
     margin: "    "
     
  콘텐츠의 화면에서 확대 축소:
     width / height 
     
  콘텐츠의 화면에서 서서히사라지거나 나타나는 효과
     opacity
     
   콘텐츠의 순차적 움직임(콜백함수)
     $("선택자").동작명령어(처리속도,function(){})
                                 -----------
--------------------------------------------------------------
   원페이지(프로모션:홍보,이벤트)
   
  
   1.애니메이션 효과(스크롤탑)
   $("html,body").stop().animate({ scrollTop:"2000px"})

   2.스크롤바의 위치를 확인해 보고 싶다면?
   $("html,body").scrollTop();

*/
/*
    (누)전역메뉴의 각각에 메뉴
    (언)클릭
    -----이벤트 발생전까지 명령어 보관함에 대기시킬 처리명령어----
    function(){
          (처)해당위치로 스크롤바의 위치를 부드럽게 이동
    }
*/

//0.등장모션3(오토갤러리-좌우조작), 함수명:ag(), 변수명: auto_gallery
var auto_gallery = setInterval("ag()",3000);
function ag(){
    $(".c1 ul:eq(0)").stop().animate({ marginLeft:"-100%"},function(){//동작
        $(".c1 ul:eq(0) li:first").appendTo(".c1 ul:eq(0)");//조작
        $(".c1 ul:eq(0)").css({ marginLeft:0 });//조작
    });    
};



$(function(){
    
    //0.등장모션1(사용자 이벤트 없이 사이트열람시 최초 콘텐츠에 적용되는 애니메이션효과)
    $("h1").css({ marginLeft:"-100px", opacity:0 });//조작
    $("h1").animate({ marginLeft:0, opacity:1 },600);//동작
        
    //0.등장모션2(전역메뉴)
    $(".gnb li").css({ marginTop:"-100px" }); //조작
    $(".gnb li:eq(0)").animate({ marginTop:0 },200); //동작
    $(".gnb li:eq(1)").animate({ marginTop:0 },300);
    $(".gnb li:eq(2)").animate({ marginTop:0 },400);
    $(".gnb li:eq(3)").animate({ marginTop:0 },500);
    $(".gnb li:eq(4)").animate({ marginTop:0 },600);
    $(".gnb li:eq(5)").animate({ marginTop:0 },700);
    $(".gnb li:eq(6)").animate({ marginTop:0 },800);
    
    
    /*  
       s1 ( 600>  <1600)
       s2 ( 1600> <2600)
       s3 ( 2600> <3600)
       s4 ( 3600> <4600) 
       s5 (4600>)
    */
    $(".section_wrap h2, .section_wrap p").css({ marginTop:"200px",opacity:0 });  
    var sc = $(document).scrollTop(); //(s)croll 위치 기록 변수 선언.


    $(window).scroll(function(){ 
        //브라우저화면 윈도우창 으로부터 발생되는 마우스 휠이벤트
        sc = $(document).scrollTop();
        $("header p").text(sc);
         
        if( sc>600 && sc<1600){
            sm(1); 
        }else if( sc>=1600 && sc <2600){
            sm(2);
        }else if( sc>=2600 && sc<3600){
            sm(3);
        }else if( sc>=3600 && sc<4600){
            sm(4);
        }else if( sc>=4600 && sc<5600){
            sm(5);
        }else{
            sm(6);
        };
        
        
    });
    
    
    
    //1.전역메뉴 클릭시 스크롤바의 위치 애니메이션 이동.
    $(".gnb li").click(function(){ //이동폭1000 * 0,1,2,3,4,5,6 
       $("html").stop().animate({ scrollTop:1000 * $(this).index() });
    });
    

    //2.footer 클릭시 스크롤바의 위치를 가장 상단으로 애니메이션 이동(top)
    $("footer").click(function(){ 
       $("html").stop().animate({ scrollTop:0 });
    });

    //1. c1오토갤러리(이벤트+조작+동작)
    $(".arrow_btn li:last").css({ marginLeft:"-100px",opacity:0 });//재생 버튼 조작
    
    $(".arrow_btn li:eq(0)").click(function(){ //prev(이전버튼 이벤트:누언처)
        clearInterval(auto_gallery);  
        $(".arrow_btn li:last").stop().animate({ marginLeft:0, opacity:1 });
        
        $(".c1 ul:eq(0) li:last").prependTo(".c1 ul:eq(0)");
        $(".c1 ul:eq(0)").css({ marginLeft:"-100%" });
        $(".c1 ul:eq(0)").stop().animate({ marginLeft:0 });
    });
    
    $(".arrow_btn li:eq(1)").click(function(){ //next(다음버튼 이벤트:누언처)
        clearInterval(auto_gallery); 
        $(".arrow_btn li:last").stop().animate({ marginLeft:0, opacity:1 });
        ag();
    }); 
    
    $(".arrow_btn li:eq(2)").click(function(){ //play(재생버튼 이벤트:누언처)
        auto_gallery = setInterval("ag()",3000);   
        $(this).stop().animate({ marginLeft:"-100%", opacity:0 });
    }); 
    
    //2. c2프로필 아코디언형식의 애니메이션(이벤트+조작+동작) //650px, 100px;
    $(".c2 li").click(function(){
        var a = $(this).index(); //0,1,2,3
        $(".c2 li:not(:eq(" + a + "))").stop().animate({ width:"100px"});
        //  "가" + 2 + "바위보" ="가2바위보"
        $(this).stop().animate({ width:"650px"});
    }); 
    $(".c2 ul").mouseleave(function(){
        $(".c2 li").stop().animate({ width:"250px"});
    });
    
    
    /*
     3. 섹션별 대제목,설명글 등장모션 
     선수학습 체크(일반함수, 매개변수)
     매개변수란? 함수내에 적용되는 수행 메소드에 처리되는 변경값을 변수처리
     
      ★본문에서 발생되는 스크롤바의 위치를 확인 또는 애니메이션 속성 처리를 해야할 경우 선택자는?
        $("html,body")
      
      ★마우스휠을 굴렸을시 이벤트 발생 대상자로 지정될 수 있는 선택자는?
        $(window).scroll(function(){  })
    */

    function sm(b){        
        //함수내에 전달된 매개변수(b)값을 제외한 나머지 섹션의 제목과 문단의 비표시 조작
        $("section:not(:eq("+b+")) .section_wrap h2").css({ marginTop:"200px",opacity:0 });  
        $("section:not(:eq("+b+")) .section_wrap p").css({ marginTop:"200px",opacity:0 });
        
        //함수내에 전달된 매개변수(b)값에 대한 동작 애니메이션 진행
        $("section:eq("+b+") .section_wrap h2").stop().animate({ marginTop:"100px", opacity:1});
        $("section:eq("+b+") .section_wrap p").stop().animate({ marginTop:"30px", opacity:1});
    };
    


});
























