
    var menus = {
        
    
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
    var app = new Vue({
        el: '#content',
        data: {
          action: '',
          show: 'summary',
          address: null,
          tokenWallet: 0,
          tokenClaimable: 0,
          walletStatus: 'not_connected',
          lpWallet: 0,
          lpStaked: 0,
          joinAmount: 0,
        },
        methods: {
            metamask: function () {
                this.walletStatus = 'connecting'
                let that = this
                ethereum.request({ method: 'eth_requestAccounts' })
                .then((address) => {
                    this.walletStatus = 'connected'
                    that.address = address[0]
                    that.action = '-'
                    window.localStorage.setItem('metamask', true)
                })
                .catch((err) => {
                    that.walletStatus = 'rejected'
                });
            },
            coolRandom: function () {
                if(this.address != null) return;
                function getRandomArbitrary(min, max) {
                    return Math.random() * (max - min) + min;
                }
                this.tokenWallet  = getRandomArbitrary(1,9999).toFixed(0)
                this.tokenClaimable = getRandomArbitrary(1,9999).toFixed(0)
                this.lpWallet = getRandomArbitrary(1,9999).toFixed(0)
                this.lpStaked = getRandomArbitrary(1,9999).toFixed(0)
                
            }
        },
        mounted: function () {
            setInterval(this.coolRandom, 300)
            // if(window.localStorage.getItem('metamask')) this.metamask()
        }
      })
