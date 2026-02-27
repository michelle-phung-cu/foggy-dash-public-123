var a = {
    init: function(){
       $(()=> { //STARTS JQUERY WHEN DOM IS READY
        // Code to run when the DOM is ready
        })
    },
    selectDashboards: ()=> {
        $('#button-1').click(btn => { 
            $('#button-1').text('1 you clicked me');
            a.changeStatusBlurb('YOU CLICKED BUTTON 1');
        });

        $('#button-2').click(()=>{
            $('#button-2').text('2 you clicked me');
            a.changeStatusBlurb('YOU CLICKED BUTTON TWO');
        });

        $('#button-3').click(()=>{
            $('#button-3').text('3 you clicked me');
            a.changeStatusBlurb('YOU CLICKED BUTTON THREE');
        });
    },
    changeStatusBlurb:updateText=>{
        $('#statusBlurb').text(updateText);
    }
}

var main = function(){
    a.init();
    a.selectDashboards();
}