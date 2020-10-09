
    var CRAFT_ABI = [{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LPTokenClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LiquidityAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"log","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LPGenerationCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LPperETHUnit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"agreesToTermsOutlinedInLiquidityGenerationParticipationAgreement","type":"bool"}],"name":"addLiquidity","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addLiquidityToUniswapCORExWETHPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimLPTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createUniswapPairMainnet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyDrain24hAfterLiquidityGenerationEventIsDone","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ethContributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeDistributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecondsLeftInLiquidityGenerationEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGenerationOngoing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGenerationParticipationAgreement","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeDistributor","type":"address"}],"name":"setFeeDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transferCheckerAddress","type":"address"}],"name":"setShouldTransferChecker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenUniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalETHContributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLPTokensMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferCheckerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapFactory","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouterV2","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
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
          client: null,
          craft: null,
          totalETHContributed: "",
          timeLeft: 0,
          myEthereum:0,
          startTime: 1601863749, // 1601863749
          distance: 100,
          menu: 'liquidity'
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
                    that.client = new Web3(window.web3.currentProvider)
                    that.craft = new that.client.eth.Contract(CRAFT_ABI, "0xa09ff006c652496e72d648cef2f4ee6777efdf6f")
                    that.refreshData()
                })
                .catch((err) => {
                    that.walletStatus = 'rejected'
                    
                });
            },
            disconnect: function () {
                this.walletStatus = 'not_connected'
                this.address = null
                this.action = ''
            },
            addLiquidity: function () {
                this.craft.methods.addLiquidity(true).send({from: this.address, value: this.client.utils.toWei(this.joinAmount.toString())})
            },
            zeroAdd: function (num) {
                return num < 10 ? `0${num}` : num;
            },
            getTime: function () {
                let distance = this.timeLeft
                var days = Math.floor(distance / (60 * 60 * 24));
                var hours = Math.floor((distance % (60 * 60 * 24)) / ( 60 * 60));
                var minutes = Math.floor((distance % ( 60 * 60)) / (60));
                var seconds = Math.floor((distance % ( 60)));
                return `${this.zeroAdd(days)}:${this.zeroAdd(hours)}:${this.zeroAdd(minutes)}:${this.zeroAdd(seconds)}`
            },
            start: function () { 
                this.distance = this.startTime - (new Date().getTime() / 1000 )
                let distance = this.distance
                var days = Math.floor(distance / (60 * 60 * 24));
                var hours = Math.floor((distance % (60 * 60 * 24)) / ( 60 * 60));
                var minutes = Math.floor((distance % ( 60 * 60)) / (60));
                var seconds = Math.floor((distance % ( 60)));
                return `${this.zeroAdd(days)}:${this.zeroAdd(hours)}:${this.zeroAdd(minutes)}:${this.zeroAdd(seconds)}`
            },
            refreshData: function () {
                if(this.craft == null) return;
                
                let that = this
                this.craft.methods.totalETHContributed().call().then((data) => {
                    that.totalETHContributed = that.client.utils.fromWei(data)
                })
                if(this.address != null){
                    this.client.eth.getBalance(this.address).then((data) => {
                        that.myEthereum = that.client.utils.fromWei(data)
                    })
                }   

                if(this.timeLeft < 1) {
                    this.craft.methods.getSecondsLeftInLiquidityGenerationEvent().call().then((data) => {
                        that.timeLeft = data
                    })
                }
          
            },
            coolRandom: function () {
                this.tokenWallet = 0
                this.tokenClaimable = 0
                this.lpWallet = 0
                this.lpStaked = 0
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
            setInterval(this.refreshData, 3000)
            setInterval(this.start, 1000)
            let that = this
            this.client = new Web3("wss://mainnet.infura.io/ws/v3/7c002892265946b1aeeb5749e01301d1")
            this.craft = new this.client.eth.Contract(CRAFT_ABI, "0xa09ff006c652496e72d648cef2f4ee6777efdf6f")
            that.refreshData()

            setInterval(() => { if(that.timeLeft > 0) that.timeLeft = that.timeLeft - 1; }, 1000)
            // if(window.localStorage.getItem('metamask')) this.metamask()
        }
      })
