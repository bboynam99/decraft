
    var menus = {
        "Status": [
        
			{
                item: "Summary",
                
                action: function(){
                   
                },
            },
			{
                item: "Farm",
                
                action: function(){
                    
                },
            },
			{
                item: "Uniswap",
               
                action: function(){
               
                },
            },
        ]
    
    }
    var go_outside_frame = false;
if(frameElement){
	try{
		if(parent.$MenuBar){
			$MenuBar = parent.$MenuBar;
			go_outside_frame = true;
		}
	}catch(e){}
}
    var $menu_bar = $MenuBar(menus);
    if(go_outside_frame){
        $menu_bar.insertBefore(frameElement);
    }else{
        $(function(){
            $menu_bar.prependTo(jQuery("body"));
        });
    }
    
