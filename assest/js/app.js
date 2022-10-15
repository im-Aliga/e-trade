$(()=>{
    
    function defaulclose(){
        $('.dropdown1').hide()
        $('.dropdown2').hide()
        $('.account').hide()
        $('#copu').hide()
        $('#copu2').hide()
        $('#copu3').hide()
        $('.dd1').hide()
        $('.dd2').hide()
        $('.submenu-1').hide()
        $('.submenu-2').hide()
        $('.submenu-3').hide()
        $('.submenu-4').hide()
        $('.submenu-5').hide()

        

    
    }
    defaulclose();
    
    $('.aslan').click(function(){
        $('.submenu-1').slideToggle() 
    })
    $('.aslan2').click(function(){
        $('.submenu-2').slideToggle()  
    })
    $('.aslan3').click(function(){
        $('.submenu-3').slideToggle()  
    })
    $('.aslan4').click(function(){
        $('.submenu-4').slideToggle()  
    })
    $('.aslan5').click(function(){
        $('.submenu-5').slideToggle()  
    })

    $('.exchange').click(function(){
        $('.dropdown1').slideToggle()
        $('.dropdown2').hide()
    
       
    })
    $('.exc').click(function(){
        $('.dd2').slideToggle()
        $('.dd1').hide()
    
       
    })
    $('.lang').click(function(){
        $('.dd1').slideToggle()
        $('.dd2').hide()
    
       
    })
    $('.language').click(function(){
        $('.dropdown2').slideToggle()
        $('.dropdown1').hide()
       
    })
    $('.loginicon').click(function(){
        $('.account').slideToggle()
    })
    $('#boxmega1').on({
        mouseover:function(){
            $('#copu').show(500)
        },
        mouseleave:function(){
            $('#copu').hide(500)
        }
    })

    $('#boxmega2').mouseover(function(){
        $('#copu2').show(500)
    })
    $('#boxmega2').mouseleave(function(){
        $('#copu2').hide(500)
    })
    $('#boxmega3').mouseover(function(){
        $('#copu3').show(500)
    })
    $('#boxmega3').mouseleave(function(){
        $('#copu3').hide(500)
    })


    AOS.init();


    
})
