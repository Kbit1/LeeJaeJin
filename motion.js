let auto_gallery = setInterval("ag()",3000);
function ag(){
    $(".c1 ul:eq(0)").stop().animate({ marginLeft:"-100%"},function(){//동작
        $(".c1 ul:eq(0) li:first").appendTo(".c1 ul:eq(0)");//조작
        $(".c1 ul:eq(0)").css({ marginLeft:0 });//조작
    });    
};


$(function(){
    
    //등장모션1(사용자 이벤트 없이 사이트열람시 최초 콘텐츠에 적용되는 애니메이션효과)
    $("h1").css({ marginLeft:"-100px", opacity:0 });//조작
    $("h1").animate({ marginLeft:0, opacity:1 },600);//동작
        
    //등장모션2(전역메뉴)
    $(".gnb li").css({ marginTop:"-100px" }); //조작
    $(".gnb li:eq(0)").animate({ marginTop:0 },200); //동작
    $(".gnb li:eq(1)").animate({ marginTop:0 },300);
    $(".gnb li:eq(2)").animate({ marginTop:0 },400);
    $(".gnb li:eq(3)").animate({ marginTop:0 },500);
    $(".gnb li:eq(4)").animate({ marginTop:0 },600);
    $(".gnb li:eq(5)").animate({ marginTop:0 },700);
    $(".gnb li:eq(6)").animate({ marginTop:0 },800);
    
    
    $(".section_wrap h2, .section_wrap p").css({ marginTop:"200px",opacity:0 });  
    let sc = $(document).scrollTop(); //(s)croll 위치 기록 변수 선언.


    $(window).scroll(function(){ 
        sc = $(document).scrollTop();
        $("header p").text(sc);  //현재 스크롤 몇인지 확인하기 위해 임시로 만든 코드//
         
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
        let a = $(this).index(); //0,1,2,3
        $(".c2 li:not(:eq(" + a + "))").stop().animate({ width:"100px"});

        $(this).stop().animate({ width:"650px"});
    }); 
    $(".c2 ul").mouseleave(function(){
        $(".c2 li").stop().animate({ width:"250px"});
    });
    

    function sm(b){        
        //함수내에 전달된 매개변수(b)값을 제외한 나머지 섹션의 제목과 문단의 비표시 조작
        $("section:not(:eq("+b+")) .section_wrap h2").css({ marginTop:"200px",opacity:0 });  
        $("section:not(:eq("+b+")) .section_wrap p").css({ marginTop:"200px",opacity:0 });
        
        //함수내에 전달된 매개변수(b)값에 대한 동작 애니메이션 진행
        $("section:eq("+b+") .section_wrap h2").stop().animate({ marginTop:"100px", opacity:1});
        $("section:eq("+b+") .section_wrap p").stop().animate({ marginTop:"30px", opacity:1});
    };
    
});
