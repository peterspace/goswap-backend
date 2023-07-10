const tokens = [
  {
    symbol: 'BNB',
    name: 'BNB',
    decimals: 18,
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    logoURI:
      'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png',
    tags: ['native'],
  },
  {
    symbol: 'WBNB',
    name: 'Wrapped BNB',
    decimals: 18,
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    logoURI:
      'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png',
    wrappedNative: 'true',
    tags: ['tokens', 'PEG:BNB'],
  },
  {
    symbol: 'CHI',
    name: 'Chi Gastoken by 1inch',
    decimals: 0,
    address: '0x0000000000004946c0e9f43f4dee607b0ef1fa1c',
    logoURI:
      'https://tokens.1inch.io/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 18,
    address: '0x55d398326f99059ff775485246999027b3197955',
    logoURI:
      'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'CAKE',
    name: 'PancakeSwap Token',
    decimals: 18,
    address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    logoURI:
      'https://tokens.1inch.io/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BUSD',
    name: 'BUSD Token',
    decimals: 18,
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    logoURI:
      'https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'ETH',
    name: 'Ethereum Token',
    decimals: 18,
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    logoURI:
      'https://tokens.1inch.io/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png',
    tags: ['tokens', 'PEG:ETH'],
  },
  {
    symbol: 'BTCB',
    name: 'BTCB Token',
    decimals: 18,
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    logoURI:
      'https://tokens.1inch.io/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AUTO',
    name: 'AUTOv2',
    decimals: 18,
    address: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    logoURI:
      'https://tokens.1inch.io/0xa184088a740c695e156f91f5cc086a06bb78b827.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BSCX',
    name: 'BSCX',
    decimals: 18,
    address: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    logoURI:
      'https://tokens.1inch.io/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BDO',
    name: 'bDollar',
    decimals: 18,
    address: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
    logoURI:
      'https://tokens.1inch.io/0x190b589cf9fb8ddeabbfeae36a813ffb2a702454.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DOT',
    name: 'DOT',
    decimals: 18,
    address: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    logoURI:
      'https://tokens.1inch.io/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png',
    tags: ['tokens'],
  },
  {
    symbol: 'UST',
    name: 'Wrapped UST Token',
    decimals: 18,
    address: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
    logoURI:
      'https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'VAI',
    name: 'VAI Stablecoin',
    decimals: 18,
    address: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
    logoURI:
      'https://tokens.1inch.io/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'UNI',
    name: 'Uniswap',
    decimals: 18,
    address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    logoURI:
      'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LINK',
    name: 'ChainLink Token',
    decimals: 18,
    address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    logoURI:
      'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
    tags: ['tokens'],
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 18,
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    logoURI:
      'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'zSEED',
    name: 'zSeedToken',
    decimals: 18,
    address: '0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5',
    logoURI:
      'https://tokens.1inch.io/0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DAI',
    name: 'Dai Token',
    decimals: 18,
    address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    logoURI:
      'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'BAND',
    name: 'Band Protocol Token',
    decimals: 18,
    address: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
    logoURI:
      'https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WOOP',
    name: 'Woonkly Power',
    decimals: 18,
    address: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',
    logoURI:
      'https://tokens.1inch.io/0x8b303d5bbfbbf46f1a4d9741e491e06986894e18.png',
    tags: ['tokens'],
  },
  {
    symbol: 'sBDO',
    name: 'bDollar Share',
    decimals: 18,
    address: '0x0d9319565be7f53cefe84ad201be3f40feae2740',
    logoURI:
      'https://tokens.1inch.io/0x0d9319565be7f53cefe84ad201be3f40feae2740.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ADA',
    name: 'Cardano Token',
    decimals: 18,
    address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    logoURI:
      'https://tokens.1inch.io/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SFP',
    name: 'SafePal Token',
    decimals: 18,
    address: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
    logoURI:
      'https://tokens.1inch.io/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'Fuel',
    name: 'Fuel Token',
    decimals: 18,
    address: '0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a',
    logoURI:
      'https://tokens.1inch.io/0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'XVS',
    name: 'Venus',
    decimals: 18,
    address: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    logoURI:
      'https://tokens.1inch.io/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TWT',
    name: 'Trust Wallet',
    decimals: 18,
    address: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    logoURI:
      'https://tokens.1inch.io/0x4b0f1812e5df2a09796481ff14017e6005508003.png',
    tags: ['tokens'],
  },
  {
    symbol: 'EGG',
    name: 'Goose Golden Egg',
    decimals: 18,
    address: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    logoURI:
      'https://tokens.1inch.io/0xf952fc3ca7325cc27d15885d37117676d25bfda6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'YFI',
    name: 'yearn.finance',
    decimals: 18,
    address: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
    logoURI:
      'https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BRY',
    name: 'Berry Tributes',
    decimals: 18,
    address: '0xf859bf77cbe8699013d6dbc7c2b926aaf307f830',
    logoURI:
      'https://tokens.1inch.io/0xf859bf77cbe8699013d6dbc7c2b926aaf307f830.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SXP',
    name: 'Swipe',
    decimals: 18,
    address: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
    logoURI:
      'https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'XRP',
    name: 'XRP Token',
    decimals: 18,
    address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    logoURI:
      'https://tokens.1inch.io/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png',
    tags: ['tokens'],
  },
  {
    symbol: 'COMP',
    name: 'Compound Coin',
    decimals: 18,
    address: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
    logoURI:
      'https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ACS',
    name: 'ACryptoS',
    decimals: 18,
    address: '0x4197c6ef3879a08cd51e5560da5064b773aa1d29',
    logoURI:
      'https://tokens.1inch.io/0x4197c6ef3879a08cd51e5560da5064b773aa1d29.png',
    tags: ['tokens'],
  },
  {
    symbol: 'REEF',
    name: 'Reef.finance',
    decimals: 18,
    address: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
    logoURI:
      'https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ALPHA',
    name: 'AlphaToken',
    decimals: 18,
    address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    logoURI:
      'https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975_1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'INJ',
    name: 'Injective Protocol',
    decimals: 18,
    address: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
    logoURI:
      'https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png',
    tags: ['tokens'],
  },
  {
    symbol: 'KEBAB',
    name: 'Kebab Token',
    decimals: 18,
    address: '0x7979f6c54eba05e18ded44c4f986f49a5de551c2',
    logoURI:
      'https://tokens.1inch.io/0x7979f6c54eba05e18ded44c4f986f49a5de551c2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'EOS',
    name: 'EOS Token',
    decimals: 18,
    address: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
    logoURI:
      'https://tokens.1inch.io/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BUNNY',
    name: 'Bunny Token',
    decimals: 18,
    address: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    logoURI:
      'https://tokens.1inch.io/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LTC',
    name: 'Litecoin Token',
    decimals: 18,
    address: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
    logoURI:
      'https://tokens.1inch.io/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LIT',
    name: 'Litentry',
    decimals: 18,
    address: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
    logoURI:
      'https://tokens.1inch.io/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash Token',
    decimals: 18,
    address: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
    logoURI:
      'https://tokens.1inch.io/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png',
    tags: ['tokens'],
  },
  {
    symbol: 'Helmet',
    name: 'Helmet.insure Governance Token',
    decimals: 18,
    address: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
    logoURI:
      'https://tokens.1inch.io/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FRONT',
    name: 'Frontier Token',
    decimals: 18,
    address: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
    logoURI:
      'https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BTCST',
    name: 'StandardBTCHashrateToken',
    decimals: 17,
    address: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
    logoURI:
      'https://tokens.1inch.io/0x78650b139471520656b9e7aa7a5e9276814a38e9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FIL',
    name: 'Filecoin',
    decimals: 18,
    address: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
    logoURI:
      'https://tokens.1inch.io/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ATOM',
    name: 'Cosmos Token',
    decimals: 18,
    address: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
    logoURI:
      'https://tokens.1inch.io/0x0eb3a705fc54725037cc9e008bdede697f62f335.png',
    tags: ['tokens'],
  },
  {
    symbol: '1INCH',
    name: '1INCH Token',
    decimals: 18,
    address: '0x111111111117dc0aa78b770fa6a738034120c302',
    logoURI:
      'https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'vSXP',
    name: 'Venus SXP',
    decimals: 8,
    address: '0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0',
    logoURI:
      'https://tokens.1inch.io/0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vUSDC',
    name: 'Venus USDC',
    decimals: 8,
    address: '0xeca88125a5adbe82614ffc12d0db554e2e2867c8',
    logoURI:
      'https://tokens.1inch.io/0xeca88125a5adbe82614ffc12d0db554e2e2867c8.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'vUSDT',
    name: 'Venus USDT',
    decimals: 8,
    address: '0xfd5840cd36d94d7229439859c0112a4185bc0255',
    logoURI:
      'https://tokens.1inch.io/0xfd5840cd36d94d7229439859c0112a4185bc0255.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'vBUSD',
    name: 'Venus BUSD',
    decimals: 8,
    address: '0x95c78222b3d6e262426483d42cfa53685a67ab9d',
    logoURI:
      'https://tokens.1inch.io/0x95c78222b3d6e262426483d42cfa53685a67ab9d.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'vBNB',
    name: 'Venus BNB',
    decimals: 8,
    address: '0xa07c5b74c9b40447a954e1466938b865b6bbea36',
    logoURI:
      'https://tokens.1inch.io/0xa07c5b74c9b40447a954e1466938b865b6bbea36.png',
    tags: ['tokens', 'PEG:BNB'],
  },
  {
    symbol: 'vXVS',
    name: 'Venus XVS',
    decimals: 8,
    address: '0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d',
    logoURI:
      'https://tokens.1inch.io/0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vBTC',
    name: 'Venus BTC',
    decimals: 8,
    address: '0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b',
    logoURI:
      'https://tokens.1inch.io/0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vETH',
    name: 'Venus ETH',
    decimals: 8,
    address: '0xf508fcd89b8bd15579dc79a6827cb4686a3592c8',
    logoURI:
      'https://tokens.1inch.io/0xf508fcd89b8bd15579dc79a6827cb4686a3592c8.png',
    tags: ['tokens', 'PEG:ETH'],
  },
  {
    symbol: 'vLTC',
    name: 'Venus LTC',
    decimals: 8,
    address: '0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b',
    logoURI:
      'https://tokens.1inch.io/0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vXRP',
    name: 'Venus XRP',
    decimals: 8,
    address: '0xb248a295732e0225acd3337607cc01068e3b9c10',
    logoURI:
      'https://tokens.1inch.io/0xb248a295732e0225acd3337607cc01068e3b9c10.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vBCH',
    name: 'Venus BCH',
    decimals: 8,
    address: '0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176',
    logoURI:
      'https://tokens.1inch.io/0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vDOT',
    name: 'Venus DOT',
    decimals: 8,
    address: '0x1610bc33319e9398de5f57b33a5b184c806ad217',
    logoURI:
      'https://tokens.1inch.io/0x1610bc33319e9398de5f57b33a5b184c806ad217.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vLINK',
    name: 'Venus LINK',
    decimals: 8,
    address: '0x650b940a1033b8a1b1873f78730fcfc73ec11f1f',
    logoURI:
      'https://tokens.1inch.io/0x650b940a1033b8a1b1873f78730fcfc73ec11f1f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vBETH',
    name: 'Venus BETH',
    decimals: 8,
    address: '0x972207a639cc1b374b893cc33fa251b55ceb7c07',
    logoURI:
      'https://tokens.1inch.io/0x972207a639cc1b374b893cc33fa251b55ceb7c07.png',
    tags: ['tokens', 'PEG:ETH'],
  },
  {
    symbol: 'vDAI',
    name: 'Venus DAI',
    decimals: 8,
    address: '0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1',
    logoURI:
      'https://tokens.1inch.io/0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vFIL',
    name: 'Venus FIL',
    decimals: 8,
    address: '0xf91d58b5ae142dacc749f58a49fcbac340cb0343',
    logoURI:
      'https://tokens.1inch.io/0xf91d58b5ae142dacc749f58a49fcbac340cb0343.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BETH',
    name: 'Binance Beacon ETH',
    decimals: 18,
    address: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
    logoURI:
      'https://tokens.1inch.io/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png',
    tags: ['tokens', 'PEG:ETH'],
  },
  {
    symbol: 'BAKE',
    name: 'BakeryToken',
    decimals: 18,
    address: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
    logoURI:
      'https://tokens.1inch.io/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'renBTC',
    name: 'renBTC',
    decimals: 8,
    address: '0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c',
    logoURI:
      'https://tokens.1inch.io/0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'BANANA',
    name: 'ApeSwapFinance Banana',
    decimals: 18,
    address: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95',
    logoURI:
      'https://tokens.1inch.io/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ZEC',
    name: 'Zcash Token',
    decimals: 18,
    address: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb',
    logoURI:
      'https://tokens.1inch.io/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NEAR',
    name: 'NEAR Protocol',
    decimals: 18,
    address: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63',
    logoURI:
      'https://tokens.1inch.io/0x1fa4a73a3f0133f0025378af00236f3abdee5d63.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ETC',
    name: 'Ethereum Classic',
    decimals: 18,
    address: '0x3d6545b08693dae087e957cb1180ee38b9e3c25e',
    logoURI:
      'https://tokens.1inch.io/0x3d6545b08693dae087e957cb1180ee38b9e3c25e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ONT',
    name: 'Ontology Token',
    decimals: 18,
    address: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
    logoURI:
      'https://tokens.1inch.io/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    decimals: 18,
    address: '0x101d82428437127bf1608f699cd651e6abf9766e',
    logoURI:
      'https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PAX',
    name: 'Paxos Standard',
    decimals: 18,
    address: '0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
    logoURI:
      'https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DODO',
    name: 'DODO bird',
    decimals: 18,
    address: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
    logoURI:
      'https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'IOTX',
    name: 'IoTeX Network',
    decimals: 18,
    address: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
    logoURI:
      'https://tokens.1inch.io/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ANKR',
    name: 'Ankr',
    decimals: 18,
    address: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
    logoURI:
      'https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LINA',
    name: 'Linear Token',
    decimals: 18,
    address: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
    logoURI:
      'https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MATH',
    name: 'MATH Token',
    decimals: 18,
    address: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
    logoURI:
      'https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LTO',
    name: 'LTO Network',
    decimals: 18,
    address: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
    logoURI:
      'https://tokens.1inch.io/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SPARTA',
    name: 'Spartan Protocol Token',
    decimals: 18,
    address: '0x3910db0600ea925f63c36ddb1351ab6e2c6eb102',
    logoURI:
      'https://tokens.1inch.io/0x3910db0600ea925f63c36ddb1351ab6e2c6eb102.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ANY',
    name: 'Anyswap-BEP20',
    decimals: 18,
    address: '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa',
    logoURI:
      'https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'JulD',
    name: 'JulSwap',
    decimals: 18,
    address: '0x5a41f637c3f7553dba6ddc2d3ca92641096577ea',
    logoURI:
      'https://tokens.1inch.io/0x5a41f637c3f7553dba6ddc2d3ca92641096577ea.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BURGER',
    name: 'Burger Swap',
    decimals: 18,
    address: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
    logoURI:
      'https://tokens.1inch.io/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CTK',
    name: 'CertiK Token',
    decimals: 6,
    address: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
    logoURI:
      'https://tokens.1inch.io/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FREE',
    name: 'FREE coin BSC',
    decimals: 18,
    address: '0x12e34cdf6a031a10fe241864c32fb03a4fdad739',
    logoURI:
      'https://tokens.1inch.io/0x12e34cdf6a031a10fe241864c32fb03a4fdad739.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BHC',
    name: 'Billion Happiness',
    decimals: 18,
    address: '0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
    logoURI:
      'https://tokens.1inch.io/0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BTD',
    name: 'Bolt Dollar',
    decimals: 18,
    address: '0xd1102332a213e21faf78b69c03572031f3552c33',
    logoURI:
      'https://tokens.1inch.io/0xd1102332a213e21faf78b69c03572031f3552c33.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NUTS',
    name: 'Squirrel Finance',
    decimals: 18,
    address: '0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556',
    logoURI:
      'https://tokens.1inch.io/0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556.png',
    tags: ['tokens'],
  },
  {
    symbol: 'JULb',
    name: 'JULb',
    decimals: 18,
    address: '0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d',
    logoURI:
      'https://tokens.1inch.io/0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BIFI',
    name: 'beefy.finance',
    decimals: 18,
    address: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
    logoURI:
      'https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    decimals: 8,
    address: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    logoURI:
      'https://tokens.1inch.io/0xba2ae424d960c26247dd6c32edc70b295c744c43.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ALPACA',
    name: 'AlpacaToken',
    decimals: 18,
    address: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
    logoURI:
      'https://tokens.1inch.io/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'bKANGAL',
    name: 'Kangal',
    decimals: 18,
    address: '0xd632bd021a07af70592ce1e18717ab9aa126decb',
    logoURI:
      'https://tokens.1inch.io/0xd632bd021a07af70592ce1e18717ab9aa126decb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'UBU',
    name: 'UBUToken',
    decimals: 18,
    address: '0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f',
    logoURI:
      'https://tokens.1inch.io/0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BELT',
    name: 'BELT Token',
    decimals: 18,
    address: '0xe0e514c71282b6f4e823703a39374cf58dc3ea4f',
    logoURI:
      'https://tokens.1inch.io/0xe0e514c71282b6f4e823703a39374cf58dc3ea4f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SOUP',
    name: 'Soup',
    decimals: 18,
    address: '0x94f559ae621f1c810f31a6a620ad7376776fe09e',
    logoURI:
      'https://tokens.1inch.io/0x94f559ae621f1c810f31a6a620ad7376776fe09e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MDO',
    name: 'Midas Dollar',
    decimals: 18,
    address: '0x35e869b7456462b81cdb5e6e42434bd27f3f788c',
    logoURI:
      'https://tokens.1inch.io/0x35e869b7456462b81cdb5e6e42434bd27f3f788c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WOW',
    name: 'WOWswap',
    decimals: 18,
    address: '0x4da996c5fe84755c80e108cf96fe705174c5e36a',
    logoURI:
      'https://tokens.1inch.io/0x4da996c5fe84755c80e108cf96fe705174c5e36a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BSCPAD',
    name: 'BSCPAD.com',
    decimals: 18,
    address: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
    logoURI:
      'https://tokens.1inch.io/0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FUSII',
    name: 'Fusible | Fusible.io',
    decimals: 18,
    address: '0x3a50d6daacc82f17a2434184fe904fc45542a734',
    logoURI:
      'https://tokens.1inch.io/0x4c924a1fe185c6c6f870bc6bf1762b832208d748.png',
    tags: ['tokens'],
  },
  {
    symbol: 'bSRK',
    name: 'SparkPoint',
    decimals: 18,
    address: '0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8',
    logoURI:
      'https://tokens.1inch.io/0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'COS',
    name: 'Contentos',
    decimals: 18,
    address: '0x96dd399f9c3afda1f194182f71600f1b65946501',
    logoURI:
      'https://tokens.1inch.io/0x96dd399f9c3afda1f194182f71600f1b65946501.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ALPA',
    name: 'AlpaToken',
    decimals: 18,
    address: '0xc5e6689c9c8b02be7c49912ef19e79cf24977f03',
    logoURI:
      'https://tokens.1inch.io/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png',
    tags: ['tokens'],
  },
  {
    symbol: 'JGN',
    name: 'Juggernaut DeFi',
    decimals: 18,
    address: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
    logoURI:
      'https://tokens.1inch.io/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NMX',
    name: 'Nominex',
    decimals: 18,
    address: '0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65',
    logoURI:
      'https://tokens.1inch.io/0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'BTS',
    name: 'Bolt Share',
    decimals: 18,
    address: '0xc2e1acef50ae55661855e8dcb72adb182a3cc259',
    logoURI:
      'https://tokens.1inch.io/0xc2e1acef50ae55661855e8dcb72adb182a3cc259.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MSC',
    name: 'Monster Slayer Cash',
    decimals: 18,
    address: '0x8c784c49097dcc637b93232e15810d53871992bf',
    logoURI:
      'https://tokens.1inch.io/0x8c784c49097dcc637b93232e15810d53871992bf.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ALLOY',
    name: 'HyperAlloy',
    decimals: 18,
    address: '0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd',
    logoURI:
      'https://tokens.1inch.io/0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BR34P',
    name: 'BR34P',
    decimals: 8,
    address: '0xa86d305a36cdb815af991834b46ad3d7fbb38523',
    logoURI:
      'https://tokens.1inch.io/0xa86d305a36cdb815af991834b46ad3d7fbb38523.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'TRDG',
    name: 'Tardigrades.Finance',
    decimals: 9,
    address: '0x92a42db88ed0f02c71d439e55962ca7cab0168b5',
    logoURI:
      'https://tokens.1inch.io/0x92a42db88ed0f02c71d439e55962ca7cab0168b5.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'Ramen',
    name: 'Ramen Token',
    decimals: 18,
    address: '0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b',
    logoURI:
      'https://tokens.1inch.io/0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WATCH',
    name: 'yieldwatch',
    decimals: 18,
    address: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
    logoURI:
      'https://tokens.1inch.io/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png',
    tags: ['tokens'],
  },
  {
    symbol: 'YVS',
    name: 'YVS.Finance on BSC',
    decimals: 18,
    address: '0x47c1c7b9d7941a7265d123dcfb100d8fb5348213',
    logoURI:
      'https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'START',
    name: 'BSCstarter',
    decimals: 18,
    address: '0x31d0a7ada4d4c131eb612db48861211f63e57610',
    logoURI:
      'https://tokens.1inch.io/0x31d0a7ada4d4c131eb612db48861211f63e57610.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GMT_1',
    name: 'Gambit',
    decimals: 18,
    address: '0x99e92123eb77bc8f999316f622e5222498438784',
    logoURI:
      'https://tokens.1inch.io/0x99e92123eb77bc8f999316f622e5222498438784.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GST',
    name: 'Gemstone Token',
    decimals: 18,
    address: '0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1',
    logoURI:
      'https://tokens.1inch.io/0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ZEFI',
    name: 'ZCore Finance',
    decimals: 18,
    address: '0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07',
    logoURI:
      'https://tokens.1inch.io/0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SHAKE',
    name: 'SHAKE token by SpaceSwap v2',
    decimals: 18,
    address: '0xba8a6ef5f15ed18e7184f44a775060a6bf91d8d0',
    logoURI:
      'https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MILK2',
    name: 'MilkyWay Token by SpaceSwap v2',
    decimals: 18,
    address: '0x4a5a34212404f30c5ab7eb61b078fa4a55adc5a5',
    logoURI:
      'https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DUSK',
    name: 'Dusk Network',
    decimals: 18,
    address: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
    logoURI:
      'https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PEAK',
    name: 'PEAKDEFI',
    decimals: 8,
    address: '0x630d98424efe0ea27fb1b3ab7741907dffeaad78',
    logoURI:
      'https://tokens.1inch.io/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CCAKE',
    name: 'CheesecakeSwap Token',
    decimals: 18,
    address: '0xc7091aa18598b87588e37501b6ce865263cd67ce',
    logoURI:
      'https://tokens.1inch.io/0xc7091aa18598b87588e37501b6ce865263cd67ce.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MCRN',
    name: 'MacaronSwap Token',
    decimals: 18,
    address: '0xacb2d47827c9813ae26de80965845d80935afd0b',
    logoURI:
      'https://tokens.1inch.io/0xacb2d47827c9813ae26de80965845d80935afd0b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TOOLS',
    name: 'TOOLS',
    decimals: 18,
    address: '0x1311b352467d2b5c296881badea82850bcd8f886',
    logoURI:
      'https://tokens.1inch.io/0x1311b352467d2b5c296881badea82850bcd8f886.png',
    tags: ['tokens'],
  },
  {
    symbol: 'yPANDA',
    name: 'YieldPanda.finance',
    decimals: 8,
    address: '0x9806aec346064183b5ce441313231dff89811f7a',
    logoURI:
      'https://tokens.1inch.io/0x9806aec346064183b5ce441313231dff89811f7a.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FAT',
    name: 'Fatfi Protocol',
    decimals: 18,
    address: '0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b',
    logoURI:
      'https://tokens.1inch.io/0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SAFESTAR',
    name: 'SafeStar',
    decimals: 9,
    address: '0x3c00f8fcc8791fa78daa4a480095ec7d475781e2',
    logoURI:
      'https://tokens.1inch.io/0x3c00f8fcc8791fa78daa4a480095ec7d475781e2.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'DEXE',
    name: 'DeXe',
    decimals: 18,
    address: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
    logoURI:
      'https://tokens.1inch.io/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BUX',
    name: 'BUX Token',
    decimals: 18,
    address: '0x211ffbe424b90e25a15531ca322adf1559779e45',
    logoURI:
      'https://tokens.1inch.io/0x211ffbe424b90e25a15531ca322adf1559779e45.png',
    tags: ['tokens'],
  },
  {
    symbol: 'XWIN',
    name: 'xWIN Token',
    decimals: 18,
    address: '0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28',
    logoURI:
      'https://tokens.1inch.io/0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TFF',
    name: 'Tutti Frutti',
    decimals: 18,
    address: '0x2d69c55baecefc6ec815239da0a985747b50db6e',
    logoURI:
      'https://tokens.1inch.io/0x2d69c55baecefc6ec815239da0a985747b50db6e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DFX',
    name: 'DeFireX on BSC',
    decimals: 18,
    address: '0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf',
    logoURI:
      'https://tokens.1inch.io/0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FEB',
    name: 'FEB Token',
    decimals: 0,
    address: '0xa72a0564d0e887123112e6a4dc1aba7611ad861d',
    logoURI:
      'https://tokens.1inch.io/0xa72a0564d0e887123112e6a4dc1aba7611ad861d.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'NVT',
    name: 'NerveNetwork',
    decimals: 8,
    address: '0xf0e406c49c63abf358030a299c0e00118c4c6ba5',
    logoURI:
      'https://tokens.1inch.io/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SFM',
    name: 'SafeMoon',
    decimals: 9,
    address: '0x42981d0bfbaf196529376ee702f2a9eb9092fcb5',
    logoURI:
      'https://tokens.1inch.io/0x42981d0bfbaf196529376ee702f2a9eb9092fcb5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WHIRL',
    name: 'Whirl Finance',
    decimals: 18,
    address: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
    logoURI:
      'https://tokens.1inch.io/0x7f479d78380ad00341fdd7322fe8aef766e29e5a.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'MSS',
    name: 'Monster Slayer Share',
    decimals: 18,
    address: '0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6',
    logoURI:
      'https://tokens.1inch.io/0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ARGON',
    name: 'ArgonToken',
    decimals: 18,
    address: '0x851f7a700c5d67db59612b871338a85526752c25',
    logoURI:
      'https://tokens.1inch.io/0x851f7a700c5d67db59612b871338a85526752c25.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TPT',
    name: 'TokenPocket Token',
    decimals: 4,
    address: '0xeca41281c24451168a37211f0bc2b8645af45092',
    logoURI:
      'https://tokens.1inch.io/0xeca41281c24451168a37211f0bc2b8645af45092.png',
    tags: ['tokens'],
  },
  {
    symbol: 'pCWS',
    name: 'PolyCrowns',
    decimals: 18,
    address: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
    logoURI:
      'https://tokens.1inch.io/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TRADE',
    name: 'UniTrade',
    decimals: 18,
    address: '0x7af173f350d916358af3e218bdf2178494beb748',
    logoURI:
      'https://tokens.1inch.io/0x7af173f350d916358af3e218bdf2178494beb748.png',
    tags: ['tokens'],
  },
  {
    symbol: 'POLAR',
    name: 'Polaris',
    decimals: 18,
    address: '0x3a5325f0e5ee4da06a285e988f052d4e45aa64b4',
    logoURI:
      'https://tokens.1inch.io/0x1c545e9943cfd1b41e60a7917465911fa00fc28c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BNSD',
    name: 'bns.finance',
    decimals: 18,
    address: '0xc1165227519ffd22fdc77ceb1037b9b284eef068',
    logoURI:
      'https://tokens.1inch.io/0xc1165227519ffd22fdc77ceb1037b9b284eef068.png',
    tags: ['tokens'],
  },
  {
    symbol: 'vBSWAP',
    name: 'vSWAP.fi',
    decimals: 18,
    address: '0x4f0ed527e8a95ecaa132af214dfd41f30b361600',
    logoURI:
      'https://tokens.1inch.io/0x4f0ed527e8a95ecaa132af214dfd41f30b361600.png',
    tags: ['tokens'],
  },
  {
    symbol: 'UBXT',
    name: 'UpBots',
    decimals: 18,
    address: '0xbbeb90cfb6fafa1f69aa130b7341089abeef5811',
    logoURI:
      'https://tokens.1inch.io/0xbbeb90cfb6fafa1f69aa130b7341089abeef5811.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'bDIGG',
    name: 'Badger Sett Digg',
    decimals: 18,
    address: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
    logoURI:
      'https://tokens.1inch.io/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'IRON',
    name: 'IRON Stablecoin',
    decimals: 18,
    address: '0x7b65b489fe53fce1f6548db886c08ad73111ddd8',
    logoURI:
      'https://tokens.1inch.io/0x7b65b489fe53fce1f6548db886c08ad73111ddd8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SUPER',
    name: 'SUPER-ERC20',
    decimals: 18,
    address: '0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d',
    logoURI:
      'https://tokens.1inch.io/0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CYC',
    name: 'Cyclone Protocol',
    decimals: 18,
    address: '0x810ee35443639348adbbc467b33310d2ab43c168',
    logoURI:
      'https://tokens.1inch.io/0x810ee35443639348adbbc467b33310d2ab43c168.png',
    tags: ['tokens'],
  },
  {
    symbol: 'VANCAT',
    name: 'VANCAT Token',
    decimals: 0,
    address: '0x8597ba143ac509189e89aab3ba28d661a5dd9830',
    logoURI:
      'https://tokens.1inch.io/0x8597ba143ac509189e89aab3ba28d661a5dd9830.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SACT',
    name: 'srnArtGallery',
    decimals: 18,
    address: '0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb',
    logoURI:
      'https://tokens.1inch.io/0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NAUT',
    name: 'Astronaut',
    decimals: 8,
    address: '0x05b339b0a346bf01f851dde47a5d485c34fe220c',
    logoURI:
      'https://tokens.1inch.io/0x05b339b0a346bf01f851dde47a5d485c34fe220c.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'TYPH',
    name: 'Typhoon',
    decimals: 18,
    address: '0x4090e535f2e251f5f88518998b18b54d26b3b07c',
    logoURI:
      'https://tokens.1inch.io/0x4090e535f2e251f5f88518998b18b54d26b3b07c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HOGL',
    name: 'HOGL Finance',
    decimals: 18,
    address: '0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26',
    logoURI:
      'https://tokens.1inch.io/0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'bBADGER',
    name: 'Badger Sett Badger',
    decimals: 18,
    address: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
    logoURI:
      'https://tokens.1inch.io/0x1f7216fdb338247512ec99715587bb97bbf96eae.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'bwJUP',
    name: 'BSC Wrapped Jupiter',
    decimals: 18,
    address: '0x0231f91e02debd20345ae8ab7d71a41f8e140ce7',
    logoURI:
      'https://tokens.1inch.io/0x0231f91e02debd20345ae8ab7d71a41f8e140ce7.png',
    tags: ['tokens'],
  },
  {
    symbol: 'EGLD',
    name: 'Elrond',
    decimals: 18,
    address: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
    logoURI:
      'https://tokens.1inch.io/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TXL',
    name: 'Tixl Token',
    decimals: 18,
    address: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
    logoURI:
      'https://tokens.1inch.io/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'XBN',
    name: 'Elastic BNB',
    decimals: 18,
    address: '0x547cbe0f0c25085e7015aa6939b28402eb0ccdac',
    logoURI:
      'https://tokens.1inch.io/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac.png',
    tags: ['tokens', 'PEG:BNB'],
  },
  {
    symbol: 'UNICORN',
    name: 'UNICORN Token',
    decimals: 18,
    address: '0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b',
    logoURI:
      'https://tokens.1inch.io/0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HPS',
    name: 'HappinessToken',
    decimals: 18,
    address: '0xeda21b525ac789eab1a08ef2404dd8505ffb973d',
    logoURI:
      'https://tokens.1inch.io/0xeda21b525ac789eab1a08ef2404dd8505ffb973d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ACSI',
    name: 'ACryptoS(I)',
    decimals: 18,
    address: '0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389',
    logoURI:
      'https://tokens.1inch.io/0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TLM',
    name: 'Alien Worlds Trilium',
    decimals: 4,
    address: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
    logoURI:
      'https://tokens.1inch.io/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BONDLY',
    name: 'Bondly Token',
    decimals: 18,
    address: '0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563',
    logoURI:
      'https://tokens.1inch.io/0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CLIMB',
    name: 'Climb Token Finance',
    decimals: 8,
    address: '0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d',
    logoURI:
      'https://tokens.1inch.io/0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MBOX',
    name: 'Mobox',
    decimals: 18,
    address: '0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377',
    logoURI:
      'https://tokens.1inch.io/0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SWIRL',
    name: 'Swirl.Cash',
    decimals: 18,
    address: '0x52d86850bc8207b520340b7e39cdaf22561b9e56',
    logoURI:
      'https://tokens.1inch.io/0x52d86850bc8207b520340b7e39cdaf22561b9e56.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'XSPACE',
    name: 'XSPACE',
    decimals: 9,
    address: '0xad90c05bc51672eedfee36e58b3ff1a78bbc146d',
    logoURI:
      'https://tokens.1inch.io/0xad90c05bc51672eedfee36e58b3ff1a78bbc146d.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'COOK',
    name: 'Poly-Peg COOK',
    decimals: 18,
    address: '0x965b0df5bda0e7a0649324d78f03d5f7f2de086a',
    logoURI:
      'https://tokens.1inch.io/0x965b0df5bda0e7a0649324d78f03d5f7f2de086a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ITAM',
    name: 'ITAM',
    decimals: 18,
    address: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
    logoURI:
      'https://tokens.1inch.io/0x04c747b40be4d535fc83d09939fb0f626f32800b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'Warden',
    name: 'WardenSwap Token',
    decimals: 18,
    address: '0x0feadcc3824e7f3c12f40e324a60c23ca51627fc',
    logoURI:
      'https://tokens.1inch.io/0x0feadcc3824e7f3c12f40e324a60c23ca51627fc.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TKO',
    name: 'Tokocrypto Token',
    decimals: 18,
    address: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
    logoURI:
      'https://tokens.1inch.io/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SFUND',
    name: 'SeedifyFund',
    decimals: 18,
    address: '0x477bc8d23c634c154061869478bce96be6045d12',
    logoURI:
      'https://tokens.1inch.io/0x477bc8d23c634c154061869478bce96be6045d12.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NFTL',
    name: 'NFTL Token',
    decimals: 18,
    address: '0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816',
    logoURI:
      'https://tokens.1inch.io/0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FUSE',
    name: 'Fuse Token on BSC',
    decimals: 18,
    address: '0x5857c96dae9cf8511b08cb07f85753c472d36ea3',
    logoURI:
      'https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FOX',
    name: 'Fox Finance',
    decimals: 9,
    address: '0xfad8e46123d7b4e77496491769c167ff894d2acb',
    logoURI:
      'https://tokens.1inch.io/0xfad8e46123d7b4e77496491769c167ff894d2acb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FREN',
    name: 'Frenchie',
    decimals: 18,
    address: '0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af',
    logoURI:
      'https://tokens.1inch.io/0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af.png',
    tags: ['tokens'],
  },
  {
    symbol: 'XED',
    name: 'Exeedme',
    decimals: 18,
    address: '0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f',
    logoURI:
      'https://tokens.1inch.io/0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SOUL',
    name: 'APOyield SOULS',
    decimals: 8,
    address: '0x67d012f731c23f0313cea1186d0121779c77fcfe',
    logoURI:
      'https://tokens.1inch.io/0x67d012f731c23f0313cea1186d0121779c77fcfe.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SAFEGALAXY',
    name: 'SafeGalaxy',
    decimals: 9,
    address: '0x6b51231c43b1604815313801db5e9e614914d6e4',
    logoURI:
      'https://tokens.1inch.io/0x6b51231c43b1604815313801db5e9e614914d6e4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MRAT',
    name: 'Moon Rat Token',
    decimals: 9,
    address: '0x6d949f9297a522c0f97c232cc209a67bd7cfa471',
    logoURI:
      'https://tokens.1inch.io/0x6d949f9297a522c0f97c232cc209a67bd7cfa471.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SAFEMARS',
    name: 'SafeMars',
    decimals: 9,
    address: '0x3ad9594151886ce8538c1ff615efa2385a8c3a88',
    logoURI:
      'https://tokens.1inch.io/0x3ad9594151886ce8538c1ff615efa2385a8c3a88.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BGOV',
    name: 'BGOV Token',
    decimals: 18,
    address: '0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf',
    logoURI:
      'https://tokens.1inch.io/0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf.png',
    tags: ['tokens'],
  },
  {
    symbol: 'xMARK',
    name: 'Standard on xDai on BSC',
    decimals: 9,
    address: '0x26a5dfab467d4f58fb266648cae769503cec9580',
    logoURI:
      'https://tokens.1inch.io/0x26a5dfab467d4f58fb266648cae769503cec9580.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FSAFE',
    name: 'Fair Safe',
    decimals: 9,
    address: '0xee738a9e5fb78c24d26cecd30389ed977c38d0ca',
    logoURI:
      'https://tokens.1inch.io/0xee738a9e5fb78c24d26cecd30389ed977c38d0ca.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SAFEBTC',
    name: 'SafeBTC',
    decimals: 9,
    address: '0x380624a4a7e69db1ca07deecf764025fc224d056',
    logoURI:
      'https://tokens.1inch.io/0x380624a4a7e69db1ca07deecf764025fc224d056.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'AQUAGOAT',
    name: 'Aquagoat',
    decimals: 9,
    address: '0x07af67b392b7a202fad8e0fbc64c34f33102165b',
    logoURI:
      'https://tokens.1inch.io/0x07af67b392b7a202fad8e0fbc64c34f33102165b.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PIG',
    name: 'Pig Token',
    decimals: 9,
    address: '0x8850d2c68c632e3b258e612abaa8fada7e6958e5',
    logoURI:
      'https://tokens.1inch.io/0x8850d2c68c632e3b258e612abaa8fada7e6958e5.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'ECP',
    name: 'Eclipse',
    decimals: 9,
    address: '0x375483cfa7fc18f6b455e005d835a8335fbdbb1f',
    logoURI:
      'https://tokens.1inch.io/0x375483cfa7fc18f6b455e005d835a8335fbdbb1f.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'MOONTOKEN',
    name: 'Moon Token',
    decimals: 18,
    address: '0x81e4d494b85a24a58a6ba45c9b418b32a4e039de',
    logoURI:
      'https://tokens.1inch.io/0x81e4d494b85a24a58a6ba45c9b418b32a4e039de.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'ElonGate',
    name: 'ElonGate',
    decimals: 9,
    address: '0x2a9718deff471f3bb91fa0eceab14154f150a385',
    logoURI:
      'https://tokens.1inch.io/0x2a9718deff471f3bb91fa0eceab14154f150a385.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PDO',
    name: 'pDollar',
    decimals: 18,
    address: '0x5bccfbd33873a5498f8406146868eddd5e998962',
    logoURI:
      'https://tokens.1inch.io/0x5bccfbd33873a5498f8406146868eddd5e998962.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DFY',
    name: 'DeFi For You.',
    decimals: 18,
    address: '0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2',
    logoURI:
      'https://tokens.1inch.io/0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FOR',
    name: 'The Force Token',
    decimals: 18,
    address: '0x658a109c5900bc6d2357c87549b651670e5b0539',
    logoURI:
      'https://tokens.1inch.io/0x658a109c5900bc6d2357c87549b651670e5b0539.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ZIL',
    name: 'Zilliqa',
    decimals: 12,
    address: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
    logoURI:
      'https://tokens.1inch.io/0xb86abcb37c3a4b64f74f59301aff131a1becc787_1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DDIM',
    name: 'DuckDaoDime',
    decimals: 18,
    address: '0xc9132c76060f6b319764ea075973a650a1a53bc9',
    logoURI:
      'https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MDA',
    name: 'Moeda Loyalty Points',
    decimals: 18,
    address: '0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed',
    logoURI:
      'https://tokens.1inch.io/0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed.png',
    tags: ['tokens'],
  },
  {
    symbol: 'OCTA',
    name: 'Octans',
    decimals: 9,
    address: '0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28',
    logoURI:
      'https://tokens.1inch.io/0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SYL',
    name: 'SYL',
    decimals: 6,
    address: '0x7e52a123ed6db6ac872a875552935fbbd2544c86',
    logoURI:
      'https://tokens.1inch.io/0x7e52a123ed6db6ac872a875552935fbbd2544c86.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NRV',
    name: 'Nerve',
    decimals: 18,
    address: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
    logoURI:
      'https://tokens.1inch.io/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CRX',
    name: 'CryptEx Token',
    decimals: 18,
    address: '0x97a30c692ece9c317235d48287d23d358170fc40',
    logoURI:
      'https://tokens.1inch.io/0x97a30c692ece9c317235d48287d23d358170fc40.png',
    tags: ['tokens'],
  },
  {
    symbol: 'POLS',
    name: 'PolkastarterToken',
    decimals: 18,
    address: '0x7e624fa0e1c4abfd309cc15719b7e2580887f570',
    logoURI:
      'https://tokens.1inch.io/0x7e624fa0e1c4abfd309cc15719b7e2580887f570.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PET',
    name: 'Pet Token',
    decimals: 18,
    address: '0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8',
    logoURI:
      'https://tokens.1inch.io/0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ICE',
    name: 'IceToken',
    decimals: 18,
    address: '0xf16e81dce15b08f326220742020379b855b87df9',
    logoURI:
      'https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'XEND',
    name: 'XEND',
    decimals: 18,
    address: '0x4a080377f83d669d7bb83b3184a8a5e61b500608',
    logoURI:
      'https://tokens.1inch.io/0x4a080377f83d669d7bb83b3184a8a5e61b500608.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'BSCS',
    name: 'BSCS Token',
    decimals: 18,
    address: '0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d',
    logoURI:
      'https://tokens.1inch.io/0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WENMOON',
    name: 'WenMoon Token',
    decimals: 7,
    address: '0xb93ba7dc61ecfced69067151fc00c41ca369a797',
    logoURI:
      'https://tokens.1inch.io/0xb93ba7dc61ecfced69067151fc00c41ca369a797.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'MOD',
    name: 'Modefi',
    decimals: 18,
    address: '0xd4fbc57b6233f268e7fba3b66e62719d74deecbc',
    logoURI:
      'https://tokens.1inch.io/0xd4fbc57b6233f268e7fba3b66e62719d74deecbc.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FMT',
    name: 'Finminity',
    decimals: 18,
    address: '0x99c6e435ec259a7e8d65e1955c9423db624ba54c',
    logoURI:
      'https://tokens.1inch.io/0x99c6e435ec259a7e8d65e1955c9423db624ba54c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MOONMOON',
    name: 'MoonMoon',
    decimals: 9,
    address: '0x0e0e877894a101ad8711ae3a0194fa44ca837a79',
    logoURI:
      'https://tokens.1inch.io/0x0e0e877894a101ad8711ae3a0194fa44ca837a79.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GEN',
    name: 'Gen Token',
    decimals: 18,
    address: '0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967',
    logoURI:
      'https://tokens.1inch.io/0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967.png',
    tags: ['tokens'],
  },
  {
    symbol: 'KEY',
    name: 'MoMo KEY',
    decimals: 18,
    address: '0x85c128ee1feeb39a59490c720a9c563554b51d33',
    logoURI:
      'https://tokens.1inch.io/0x85c128ee1feeb39a59490c720a9c563554b51d33.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FINE',
    name: 'Refinable',
    decimals: 18,
    address: '0x4e6415a5727ea08aae4580057187923aec331227',
    logoURI:
      'https://tokens.1inch.io/0x4e6415a5727ea08aae4580057187923aec331227.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MARSH',
    name: 'UnmarshalToken',
    decimals: 18,
    address: '0x2fa5daf6fe0708fbd63b1a7d1592577284f52256',
    logoURI:
      'https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WEX',
    name: 'WaultSwap',
    decimals: 18,
    address: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
    logoURI:
      'https://tokens.1inch.io/0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HAKKA',
    name: 'Hakka Finance on xDai on BSC',
    decimals: 18,
    address: '0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac',
    logoURI:
      'https://tokens.1inch.io/0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'RAMP',
    name: 'RAMP DEFI',
    decimals: 18,
    address: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
    logoURI:
      'https://tokens.1inch.io/0x8519ea49c997f50ceffa444d240fb655e89248aa.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SEA',
    name: 'Sea Token',
    decimals: 18,
    address: '0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa',
    logoURI:
      'https://tokens.1inch.io/0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CUB',
    name: 'Cub Finance',
    decimals: 18,
    address: '0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
    logoURI:
      'https://tokens.1inch.io/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SAFESPACE',
    name: 'SAFESPACE',
    decimals: 9,
    address: '0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987',
    logoURI:
      'https://tokens.1inch.io/0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'MOONSTAR',
    name: 'MoonStar',
    decimals: 9,
    address: '0xce5814efff15d53efd8025b9f2006d4d7d640b9b',
    logoURI:
      'https://tokens.1inch.io/0xce5814efff15d53efd8025b9f2006d4d7d640b9b.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'LUNAR',
    name: 'LunarHighway',
    decimals: 9,
    address: '0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf',
    logoURI:
      'https://tokens.1inch.io/0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'NFTART',
    name: 'NFTArt.Finance',
    decimals: 9,
    address: '0xf7844cb890f4c339c497aeab599abdc3c874b67a',
    logoURI:
      'https://tokens.1inch.io/0xf7844cb890f4c339c497aeab599abdc3c874b67a.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    decimals: 18,
    address: '0x14016e85a25aeb13065688cafb43044c2ef86784',
    logoURI:
      'https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'bLEO',
    name: 'BEP20 LEO',
    decimals: 3,
    address: '0x6421531af54c7b14ea805719035ebf1e3661c44a',
    logoURI:
      'https://tokens.1inch.io/0x6421531af54c7b14ea805719035ebf1e3661c44a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'UNIF',
    name: 'Unified',
    decimals: 9,
    address: '0xce5347fdd503f25f8428151a274544a5bd1bd8ca',
    logoURI:
      'https://tokens.1inch.io/0xce5347fdd503f25f8428151a274544a5bd1bd8ca.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'BINGUS',
    name: 'Bingus Token',
    decimals: 9,
    address: '0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8',
    logoURI:
      'https://tokens.1inch.io/0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'bROOBEE',
    name: 'ROOBEE',
    decimals: 18,
    address: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
    logoURI:
      'https://tokens.1inch.io/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa.png',
    tags: ['tokens'],
  },
  {
    symbol: '8PAY',
    name: '8PAY Network',
    decimals: 18,
    address: '0xfeea0bdd3d07eb6fe305938878c0cadbfa169042',
    logoURI:
      'https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CUMMIES',
    name: 'CumRocket',
    decimals: 18,
    address: '0x27ae27110350b98d564b9a3eed31baebc82d878d',
    logoURI:
      'https://tokens.1inch.io/0x27ae27110350b98d564b9a3eed31baebc82d878d.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'LOT',
    name: 'Lottery Token',
    decimals: 9,
    address: '0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7',
    logoURI:
      'https://tokens.1inch.io/0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'POODL',
    name: 'Poodl',
    decimals: 9,
    address: '0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d',
    logoURI:
      'https://tokens.1inch.io/0x56a980328aee33aabb540a02e002c8323326bf36.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LAUNCH',
    name: 'Super Launcher',
    decimals: 18,
    address: '0xb5389a679151c4b8621b1098c6e0961a3cfee8d4',
    logoURI:
      'https://tokens.1inch.io/0xb5389a679151c4b8621b1098c6e0961a3cfee8d4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'lowb',
    name: 'loser coin',
    decimals: 18,
    address: '0x843d4a358471547f51534e3e51fae91cb4dc3f28',
    logoURI:
      'https://tokens.1inch.io/0x843d4a358471547f51534e3e51fae91cb4dc3f28.png',
    tags: ['tokens'],
  },
  {
    symbol: 'KaiInu',
    name: 'Kai Inu',
    decimals: 9,
    address: '0xe5a09784b16e1065c37df14c6e2f06fdce317a1b',
    logoURI:
      'https://tokens.1inch.io/0xe5a09784b16e1065c37df14c6e2f06fdce317a1b.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'DOGGY',
    name: 'DOGGY',
    decimals: 18,
    address: '0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6',
    logoURI:
      'https://tokens.1inch.io/0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'UNCX',
    name: 'UniCrypt on xDai on BSC',
    decimals: 18,
    address: '0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506',
    logoURI:
      'https://tokens.1inch.io/0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PERL',
    name: 'Perlin',
    decimals: 18,
    address: '0x0f9e4d49f25de22c2202af916b681fbb3790497b',
    logoURI:
      'https://tokens.1inch.io/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'OM',
    name: 'MANTRA DAO',
    decimals: 18,
    address: '0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2',
    logoURI:
      'https://tokens.1inch.io/0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'XTZ',
    name: 'Tezos Token',
    decimals: 18,
    address: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    logoURI:
      'https://tokens.1inch.io/0x16939ef78684453bfdfb47825f8a5f714f12623a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PORN',
    name: 'Porn',
    decimals: 9,
    address: '0x31b9773f225408129a90788ef013bd449e283865',
    logoURI:
      'https://tokens.1inch.io/0x31b9773f225408129a90788ef013bd449e283865.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'MTDR',
    name: 'Matador Token',
    decimals: 18,
    address: '0x994517e000aa3f117e7ad61b0e2336c76b4fd94a',
    logoURI:
      'https://tokens.1inch.io/0x994517e000aa3f117e7ad61b0e2336c76b4fd94a.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PEKC',
    name: 'PEACOCKCOIN',
    decimals: 9,
    address: '0x050787de0cf5da03d9387b344334d51cae5dd0fd',
    logoURI:
      'https://tokens.1inch.io/0x050787de0cf5da03d9387b344334d51cae5dd0fd.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'WOO',
    name: 'Wootrade Network',
    decimals: 18,
    address: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
    logoURI:
      'https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PACOCA',
    name: 'Pacoca',
    decimals: 18,
    address: '0x55671114d774ee99d653d6c12460c780a67f1d18',
    logoURI:
      'https://tokens.1inch.io/0x55671114d774ee99d653d6c12460c780a67f1d18.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PAPR',
    name: 'PAPR',
    decimals: 18,
    address: '0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26',
    logoURI:
      'https://tokens.1inch.io/0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PRNTR',
    name: 'PRNTR',
    decimals: 18,
    address: '0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf',
    logoURI:
      'https://tokens.1inch.io/0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MOONRISE',
    name: 'MoonRise',
    decimals: 9,
    address: '0x7ee7f14427cc41d6db17829eb57dc74a26796b9d',
    logoURI:
      'https://tokens.1inch.io/0x7ee7f14427cc41d6db17829eb57dc74a26796b9d.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'WSPP',
    name: 'WolfSafePoorPeople',
    decimals: 0,
    address: '0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f',
    logoURI:
      'https://tokens.1inch.io/0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'UNFI',
    name: 'UNFI',
    decimals: 18,
    address: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
    logoURI:
      'https://tokens.1inch.io/0x728c5bac3c3e370e372fc4671f9ef6916b814d8b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TFT',
    name: 'TFT on BSC',
    decimals: 7,
    address: '0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf',
    logoURI:
      'https://tokens.1inch.io/0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf.png',
    tags: ['tokens'],
  },
  {
    symbol: 'POTS',
    name: 'Moonpot',
    decimals: 18,
    address: '0x3fcca8648651e5b974dd6d3e50f61567779772a8',
    logoURI:
      'https://tokens.1inch.io/0x3fcca8648651e5b974dd6d3e50f61567779772a8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GNT',
    name: 'GreenTrust',
    decimals: 18,
    address: '0xf750a26eb0acf95556e8529e72ed530f3b60f348',
    logoURI:
      'https://tokens.1inch.io/0xf750a26eb0acf95556e8529e72ed530f3b60f348.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LAND',
    name: 'Landshare Token',
    decimals: 18,
    address: '0x9d986a3f147212327dd658f712d5264a73a1fdb0',
    logoURI:
      'https://tokens.1inch.io/0x9d986a3f147212327dd658f712d5264a73a1fdb0.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DARA',
    name: 'Immutable',
    decimals: 18,
    address: '0x0255af6c9f86f6b0543357bacefa262a2664f80f',
    logoURI:
      'https://tokens.1inch.io/0x0255af6c9f86f6b0543357bacefa262a2664f80f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SAFUYIELD',
    name: 'SafuYield Protocol',
    decimals: 9,
    address: '0xc74cd0042c837ce59210857504ebb0859e06aa22',
    logoURI:
      'https://tokens.1inch.io/0xc74cd0042c837ce59210857504ebb0859e06aa22.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FEED',
    name: 'Feeder.finance',
    decimals: 18,
    address: '0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493',
    logoURI:
      'https://tokens.1inch.io/0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DND',
    name: 'DungeonSwap Token',
    decimals: 18,
    address: '0x14c358b573a4ce45364a3dbd84bbb4dae87af034',
    logoURI:
      'https://tokens.1inch.io/0x14c358b573a4ce45364a3dbd84bbb4dae87af034.png',
    tags: ['tokens'],
  },
  {
    symbol: 'wBAN',
    name: 'Wrapped Banano',
    decimals: 18,
    address: '0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034',
    logoURI:
      'https://tokens.1inch.io/0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034.png',
    tags: ['tokens'],
    eip2612: true,
  },
  {
    symbol: 'KNC',
    name: 'Kyber Network Crystal',
    decimals: 18,
    address: '0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b',
    logoURI:
      'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BSW',
    name: 'Biswap',
    decimals: 18,
    address: '0x965f527d9159dce6288a2219db51fc6eef120dd1',
    logoURI:
      'https://tokens.1inch.io/0x965f527d9159dce6288a2219db51fc6eef120dd1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BFG',
    name: 'BFG Token',
    decimals: 18,
    address: '0xbb46693ebbea1ac2070e59b4d043b47e2e095f86',
    logoURI:
      'https://tokens.1inch.io/0xbb46693ebbea1ac2070e59b4d043b47e2e095f86_1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ARV',
    name: 'ARIVA',
    decimals: 8,
    address: '0x6679eb24f59dfe111864aec72b443d1da666b360',
    logoURI:
      'https://tokens.1inch.io/0x6679eb24f59dfe111864aec72b443d1da666b360.png',
    tags: ['tokens'],
  },
  {
    symbol: 'xYSL',
    name: 'xYSL token',
    decimals: 18,
    address: '0x0047a0deadafb7ee6b1a0d219e70fb6767057d93',
    logoURI:
      'https://tokens.1inch.io/0x0047a0deadafb7ee6b1a0d219e70fb6767057d93.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'QA',
    name: 'Quantum Assets Token',
    decimals: 18,
    address: '0x4ef29f3b804c316ba8ba464a765c601fc092a2e9',
    logoURI:
      'https://tokens.1inch.io/0x4ef29f3b804c316ba8ba464a765c601fc092a2e9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SWAP',
    name: 'SafeSwap Token',
    decimals: 18,
    address: '0xe56a473043eaab7947c0a2408cea623074500ee3',
    logoURI:
      'https://tokens.1inch.io/0xe56a473043eaab7947c0a2408cea623074500ee3.png',
    tags: ['tokens'],
  },
  {
    symbol: 'OKBOOMER',
    name: 'OKBoomer',
    decimals: 9,
    address: '0xe9db02a654b74ca04734b26ef3b2a79808d43404',
    logoURI:
      'https://tokens.1inch.io/0xe9db02a654b74ca04734b26ef3b2a79808d43404.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PETN',
    name: 'Pylon Eco Token',
    decimals: 18,
    address: '0x57457b5d725d85a70a3625d6a71818304e773618',
    logoURI:
      'https://tokens.1inch.io/0x57457b5d725d85a70a3625d6a71818304e773618.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SUSHIBA',
    name: 'Sushiba',
    decimals: 9,
    address: '0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed',
    logoURI:
      'https://tokens.1inch.io/0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'BPAY',
    name: 'BNBPay',
    decimals: 9,
    address: '0xebc76079da0c245fae7225b58a57a54809b40618',
    logoURI:
      'https://tokens.1inch.io/0xebc76079da0c245fae7225b58a57a54809b40618.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'TSUGA',
    name: 'Tsukiverse: Galactic Adventures',
    decimals: 18,
    address: '0x58d372a8db7696c0c066f25c9eaf2af6f147b726',
    logoURI:
      'https://tokens.1inch.io/0x58d372a8db7696c0c066f25c9eaf2af6f147b726.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ROOM',
    name: 'OptionRoom Token',
    decimals: 18,
    address: '0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4',
    logoURI:
      'https://tokens.1inch.io/0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TCUB',
    name: 'TCUB www.tiger-king.org',
    decimals: 9,
    address: '0xb7fda7374362f66a50665b991aa7ee77b2c6abbe',
    logoURI:
      'https://tokens.1inch.io/0xb7fda7374362f66a50665b991aa7ee77b2c6abbe.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'CGU',
    name: 'Crypto Gaming United',
    decimals: 8,
    address: '0x747d74db20cc422f39ab54edb2a3ce21f3c98af1',
    logoURI:
      'https://tokens.1inch.io/0x747d74db20cc422f39ab54edb2a3ce21f3c98af1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PIT',
    name: 'Pitbull',
    decimals: 9,
    address: '0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50',
    logoURI:
      'https://tokens.1inch.io/0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'ROCK',
    name: 'Bedrock',
    decimals: 18,
    address: '0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a',
    logoURI:
      'https://tokens.1inch.io/0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a.png',
    tags: ['tokens'],
  },
  {
    symbol: '$RFG',
    name: 'Refugees Token',
    decimals: 9,
    address: '0x4477b28e8b797ebaebd2539bb24290fdfcc27807',
    logoURI:
      'https://tokens.1inch.io/0x4477b28e8b797ebaebd2539bb24290fdfcc27807.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DRIVENx',
    name: 'DVX',
    decimals: 18,
    address: '0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e',
    logoURI:
      'https://tokens.1inch.io/0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CZF',
    name: 'CZFarm',
    decimals: 18,
    address: '0x7c1608c004f20c3520f70b924e2bfef092da0043',
    logoURI:
      'https://tokens.1inch.io/0x7c1608c004f20c3520f70b924e2bfef092da0043.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HOKK',
    name: 'Hokkaido Inu',
    decimals: 18,
    address: '0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8',
    logoURI:
      'https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'ccCLO',
    name: 'Callisto Network Token',
    decimals: 18,
    address: '0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53',
    logoURI:
      'https://tokens.1inch.io/0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53_2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RVL',
    name: 'Revolotto',
    decimals: 18,
    address: '0x6dc3d0d6ec970bf5522611d8eff127145d02b675',
    logoURI:
      'https://tokens.1inch.io/0x6dc3d0d6ec970bf5522611d8eff127145d02b675.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SQUID',
    name: 'SQUID',
    decimals: 9,
    address: '0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7',
    logoURI:
      'https://tokens.1inch.io/0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PFY',
    name: 'Portify',
    decimals: 9,
    address: '0x69083b64988933e8b4783e8302b9bbf90163280e',
    logoURI:
      'https://tokens.1inch.io/0x69083b64988933e8b4783e8302b9bbf90163280e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CMERGE',
    name: 'Coin Merge',
    decimals: 9,
    address: '0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851',
    logoURI:
      'https://tokens.1inch.io/0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PURSE',
    name: 'PURSE TOKEN',
    decimals: 18,
    address: '0x29a63f4b209c29b4dc47f06ffa896f32667dad2c',
    logoURI:
      'https://tokens.1inch.io/0x29a63f4b209c29b4dc47f06ffa896f32667dad2c.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'ATL',
    name: 'Atlantis',
    decimals: 18,
    address: '0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271',
    logoURI:
      'https://tokens.1inch.io/0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271.png',
    tags: ['tokens'],
  },
  {
    symbol: 'POR',
    name: 'Portuma',
    decimals: 18,
    address: '0x9000cac49c3841926baac5b2e13c87d43e51b6a4',
    logoURI:
      'https://tokens.1inch.io/0x9000cac49c3841926baac5b2e13c87d43e51b6a4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AIRT',
    name: 'AirNFT Token',
    decimals: 18,
    address: '0x016cf83732f1468150d87dcc5bdf67730b3934d3',
    logoURI:
      'https://tokens.1inch.io/0x016cf83732f1468150d87dcc5bdf67730b3934d3.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BORING',
    name: 'BoringDAO',
    decimals: 18,
    address: '0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f',
    logoURI:
      'https://tokens.1inch.io/0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'KTY',
    name: 'Krypto Kitty',
    decimals: 9,
    address: '0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb',
    logoURI:
      'https://tokens.1inch.io/0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SA',
    name: 'Superalgos',
    decimals: 18,
    address: '0xfb981ed9a92377ca4d75d924b9ca06df163924fd',
    logoURI:
      'https://tokens.1inch.io/0xfb981ed9a92377ca4d75d924b9ca06df163924fd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RBX',
    name: 'RBX',
    decimals: 18,
    address: '0xace3574b8b054e074473a9bd002e5dc6dd3dff1b',
    logoURI:
      'https://tokens.1inch.io/0xace3574b8b054e074473a9bd002e5dc6dd3dff1b.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'INCOME',
    name: 'Income',
    decimals: 18,
    address: '0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0',
    logoURI:
      'https://tokens.1inch.io/0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PULI',
    name: 'PULI INU',
    decimals: 9,
    address: '0xaef0a177c8c329cbc8508292bb7e06c00786bbfc',
    logoURI:
      'https://tokens.1inch.io/0xaef0a177c8c329cbc8508292bb7e06c00786bbfc.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FLOKI',
    name: 'FLOKI',
    decimals: 9,
    address: '0xfb5b838b6cfeedc2873ab27866079ac55363d37e',
    logoURI:
      'https://tokens.1inch.io/0xfb5b838b6cfeedc2873ab27866079ac55363d37e_1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BSHARE',
    name: 'BSHARE',
    decimals: 18,
    address: '0x531780face85306877d7e1f05d713d1b50a37f7a',
    logoURI:
      'https://tokens.1inch.io/0x531780face85306877d7e1f05d713d1b50a37f7a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BOMB',
    name: 'bomb.money',
    decimals: 18,
    address: '0x522348779dcb2911539e76a1042aa922f9c47ee3',
    logoURI:
      'https://tokens.1inch.io/0x522348779dcb2911539e76a1042aa922f9c47ee3.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RVZ',
    name: 'Revoluzion',
    decimals: 9,
    address: '0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca',
    logoURI:
      'https://tokens.1inch.io/0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'DOME',
    name: 'Everdome',
    decimals: 18,
    address: '0x475bfaa1848591ae0e6ab69600f48d828f61a80e',
    logoURI:
      'https://tokens.1inch.io/0x475bfaa1848591ae0e6ab69600f48d828f61a80e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BBS',
    name: 'BBS [via ChainPort.io]',
    decimals: 18,
    address: '0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd',
    logoURI:
      'https://tokens.1inch.io/0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'deUSDC',
    name: 'deBridge USD Coin',
    decimals: 6,
    address: '0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa',
    logoURI:
      'https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png',
    tags: ['tokens', 'PEG:USD'],
    eip2612: true,
  },
  {
    symbol: 'ACCEL',
    name: 'ACCEL',
    decimals: 18,
    address: '0x2cace984dab08bd192a7fd044276060cb955dd9c',
    logoURI:
      'https://tokens.1inch.io/0x2cace984dab08bd192a7fd044276060cb955dd9c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FRAX',
    name: 'Frax',
    decimals: 18,
    address: '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
    logoURI:
      'https://tokens.1inch.io/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SHIELD',
    name: 'Shield Protocol',
    decimals: 18,
    address: '0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261',
    logoURI:
      'https://tokens.1inch.io/0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261.png',
    tags: ['tokens'],
  },
  {
    symbol: 'VINU',
    name: 'Vita Inu',
    decimals: 18,
    address: '0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa',
    logoURI:
      'https://tokens.1inch.io/0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MLT',
    name: 'Media Licensing Token',
    decimals: 18,
    address: '0x4518231a8fdf6ac553b9bbd51bbb86825b583263',
    logoURI:
      'https://tokens.1inch.io/0x4518231a8fdf6ac553b9bbd51bbb86825b583263.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'ORE',
    name: 'pTokens ORE [via ChainPort.io]',
    decimals: 18,
    address: '0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9',
    logoURI:
      'https://tokens.1inch.io/0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SpacePi',
    name: 'SpacePi Token',
    decimals: 9,
    address: '0x69b14e8d3cebfdd8196bfe530954a0c226e5008e',
    logoURI:
      'https://tokens.1inch.io/0x69b14e8d3cebfdd8196bfe530954a0c226e5008e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ASIA',
    name: 'ASIA COIN',
    decimals: 18,
    address: '0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec',
    logoURI:
      'https://tokens.1inch.io/0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'MAIN',
    name: 'MAIN',
    decimals: 18,
    address: '0xa5f249f401ba8931899a364d8e2699b5fa1d87a9',
    logoURI:
      'https://tokens.1inch.io/0xa5f249f401ba8931899a364d8e2699b5fa1d87a9_1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'STARSHIP',
    name: 'StarShip',
    decimals: 9,
    address: '0x52419258e3fa44deac7e670eadd4c892b480a805',
    logoURI:
      'https://tokens.1inch.io/0x52419258e3fa44deac7e670eadd4c892b480a805.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TOWER',
    name: 'TOWER',
    decimals: 18,
    address: '0xe7c9c6bc87b86f9e5b57072f907ee6460b593924',
    logoURI:
      'https://tokens.1inch.io/0xe7c9c6bc87b86f9e5b57072f907ee6460b593924.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'LGX',
    name: 'Legion Token',
    decimals: 18,
    address: '0x9096b4309224d751fcb43d7eb178dcffc122ad15',
    logoURI:
      'https://tokens.1inch.io/0x9096b4309224d751fcb43d7eb178dcffc122ad15.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WWY',
    name: 'WeWay Token',
    decimals: 18,
    address: '0x9ab70e92319f0b9127df78868fd3655fb9f1e322',
    logoURI:
      'https://tokens.1inch.io/0x9ab70e92319f0b9127df78868fd3655fb9f1e322.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DERC',
    name: 'DeRace Token',
    decimals: 18,
    address: '0x373e768f79c820aa441540d254dca6d045c6d25b',
    logoURI:
      'https://tokens.1inch.io/0x373e768f79c820aa441540d254dca6d045c6d25b.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'STACK',
    name: 'StackOS',
    decimals: 18,
    address: '0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3',
    logoURI:
      'https://tokens.1inch.io/0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GMT',
    name: 'Green Metaverse Token',
    decimals: 8,
    address: '0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1',
    logoURI:
      'https://tokens.1inch.io/0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1_1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TRY',
    name: 'TryHards',
    decimals: 18,
    address: '0x75d107de2217ffe2cd574a1b3297c70c8fafd159',
    logoURI:
      'https://tokens.1inch.io/0x75d107de2217ffe2cd574a1b3297c70c8fafd159.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GAIA',
    name: 'GAIA Everworld',
    decimals: 18,
    address: '0x347e430b7cd1235e216be58ffa13394e5009e6e2',
    logoURI:
      'https://tokens.1inch.io/0x347e430b7cd1235e216be58ffa13394e5009e6e2.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'VLX',
    name: 'Velas',
    decimals: 18,
    address: '0xe9c803f48dffe50180bd5b01dc04da939e3445fc',
    logoURI:
      'https://tokens.1inch.io/0xe9c803f48dffe50180bd5b01dc04da939e3445fc.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FRM',
    name: 'Ferrum Network Token',
    decimals: 18,
    address: '0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc',
    logoURI:
      'https://tokens.1inch.io/0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc.png',
    tags: ['tokens'],
  },
  {
    symbol: 'REVV',
    name: 'REVV',
    decimals: 18,
    address: '0x833f307ac507d47309fd8cdd1f835bef8d702a93',
    logoURI:
      'https://tokens.1inch.io/0x833f307ac507d47309fd8cdd1f835bef8d702a93.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'BCMC',
    name: 'Blockchain Monster Coin',
    decimals: 18,
    address: '0xc10358f062663448a3489fc258139944534592ac',
    logoURI:
      'https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png',
    tags: ['tokens'],
    eip2612: true,
  },
  {
    symbol: 'GMEE',
    name: 'GAMEE',
    decimals: 18,
    address: '0x84e9a6f9d240fdd33801f7135908bfa16866939a',
    logoURI:
      'https://tokens.1inch.io/0x84e9a6f9d240fdd33801f7135908bfa16866939a.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'ELK',
    name: 'Elk',
    decimals: 18,
    address: '0xeeeeeb57642040be42185f49c52f7e9b38f8eeee',
    logoURI:
      'https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'MOWA',
    name: 'Moniwar',
    decimals: 18,
    address: '0x411ec510c85c9e56271bf4e10364ffa909e685d9',
    logoURI:
      'https://tokens.1inch.io/0x411ec510c85c9e56271bf4e10364ffa909e685d9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'YEL',
    name: 'YEL Token',
    decimals: 18,
    address: '0xd3b71117e6c1558c1553305b44988cd944e97300',
    logoURI:
      'https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png',
    tags: ['tokens'],
  },
  {
    symbol: 'INSUR',
    name: 'Bsc-Peg INSUR Token',
    decimals: 18,
    address: '0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30',
    logoURI:
      'https://tokens.1inch.io/0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MYST',
    name: 'Mysterium',
    decimals: 18,
    address: '0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2',
    logoURI:
      'https://tokens.1inch.io/0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'GUARD',
    name: 'Guardian',
    decimals: 18,
    address: '0xf606bd19b1e61574ed625d9ea96c841d4e247a32',
    logoURI:
      'https://tokens.1inch.io/0xf606bd19b1e61574ed625d9ea96c841d4e247a32.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SHEESHA',
    name: 'Sheesha Finance',
    decimals: 18,
    address: '0x232fb065d9d24c34708eedbf03724f2e95abe768',
    logoURI:
      'https://tokens.1inch.io/0x232fb065d9d24c34708eedbf03724f2e95abe768.png',
    tags: ['tokens'],
  },
  {
    symbol: 'USDD',
    name: 'Decentralized USD',
    decimals: 18,
    address: '0xd17479997f34dd9156deef8f95a52d81d265be9c',
    logoURI:
      'https://tokens.1inch.io/0xd17479997f34dd9156deef8f95a52d81d265be9c.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'XCAD',
    name: 'Chainport.io-Peg XCAD Token',
    decimals: 18,
    address: '0x431e0cd023a32532bf3969cddfc002c00e98429d',
    logoURI:
      'https://tokens.1inch.io/0x431e0cd023a32532bf3969cddfc002c00e98429d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BLID',
    name: 'Bolide',
    decimals: 18,
    address: '0x766afcf83fd5eaf884b3d529b432ca27a6d84617',
    logoURI:
      'https://tokens.1inch.io/0x766afcf83fd5eaf884b3d529b432ca27a6d84617.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PALLA',
    name: 'Pallapay',
    decimals: 18,
    address: '0x8f49733210700d38098d7375c221c7d02f700cc8',
    logoURI:
      'https://tokens.1inch.io/0x8f49733210700d38098d7375c221c7d02f700cc8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ORBS',
    name: 'Orbs',
    decimals: 18,
    address: '0xebd49b26169e1b52c04cfd19fcf289405df55f80',
    logoURI:
      'https://tokens.1inch.io/0xebd49b26169e1b52c04cfd19fcf289405df55f80.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'O3',
    name: 'O3 Swap Token',
    decimals: 18,
    address: '0xee9801669c6138e84bd50deb500827b776777d28',
    logoURI:
      'https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MASK',
    name: 'Mask Network',
    decimals: 18,
    address: '0x2ed9a5c8c13b93955103b9a7c167b67ef4d568a3',
    logoURI:
      'https://tokens.1inch.io/0x2ed9a5c8c13b93955103b9a7c167b67ef4d568a3.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DATA',
    name: 'Streamr',
    decimals: 18,
    address: '0x0864c156b3c5f69824564dec60c629ae6401bf2a',
    logoURI:
      'https://tokens.1inch.io/0x0864c156b3c5f69824564dec60c629ae6401bf2a.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'AXS',
    name: 'Axie Infinity Shard',
    decimals: 18,
    address: '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0',
    logoURI:
      'https://tokens.1inch.io/0x715d400f88c167884bbcc41c5fea407ed4d2f8a0.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ADS',
    name: 'Adshares',
    decimals: 11,
    address: '0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a',
    logoURI:
      'https://tokens.1inch.io/0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SALE',
    name: 'DxSale.Network',
    decimals: 18,
    address: '0x04f73a09e2eb410205be256054794fb452f0d245',
    logoURI:
      'https://tokens.1inch.io/0x04f73a09e2eb410205be256054794fb452f0d245.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LIME',
    name: 'iMe Lab',
    decimals: 18,
    address: '0x7bc75e291e656e8658d66be1cc8154a3769a35dd',
    logoURI:
      'https://tokens.1inch.io/0x7bc75e291e656e8658d66be1cc8154a3769a35dd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'VOLT',
    name: 'Volt Inu',
    decimals: 9,
    address: '0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac',
    logoURI:
      'https://tokens.1inch.io/0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HAY',
    name: 'Hay Stablecoin',
    decimals: 18,
    address: '0x0782b6d8c4551b9760e74c0545a9bcd90bdc41e5',
    logoURI:
      'https://tokens.1inch.io/0x0782b6d8c4551b9760e74c0545a9bcd90bdc41e5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SNP',
    name: 'Synapse Network',
    decimals: 18,
    address: '0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d',
    logoURI:
      'https://tokens.1inch.io/0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'WOM',
    name: 'Wombat Token',
    decimals: 18,
    address: '0xad6742a35fb341a9cc6ad674738dd8da98b94fb1',
    logoURI:
      'https://tokens.1inch.io/0xad6742a35fb341a9cc6ad674738dd8da98b94fb1.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'OWL',
    name: 'OwlDAO token',
    decimals: 18,
    address: '0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19',
    logoURI:
      'https://tokens.1inch.io/0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CGG',
    name: 'pTokens CGG',
    decimals: 18,
    address: '0x1613957159e9b0ac6c80e824f7eea748a32a0ae2',
    logoURI:
      'https://tokens.1inch.io/0x1613957159e9b0ac6c80e824f7eea748a32a0ae2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LAND_2',
    name: 'META-UTOPIA LAND',
    decimals: 18,
    address: '0x9131066022b909c65edd1aaf7ff213dacf4e86d0',
    logoURI:
      'https://tokens.1inch.io/0x9131066022b909c65edd1aaf7ff213dacf4e86d0.png',
    displayedSymbol: 'LAND',
    tags: ['tokens'],
  },
  {
    symbol: 'STG',
    name: 'StargateToken',
    decimals: 18,
    address: '0xb0d502e938ed5f4df2e681fe6e419ff29631d62b',
    logoURI:
      'https://tokens.1inch.io/0xb0d502e938ed5f4df2e681fe6e419ff29631d62b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PINKSALE',
    name: 'PinkSale',
    decimals: 18,
    address: '0x602ba546a7b06e0fc7f58fd27eb6996ecc824689',
    logoURI:
      'https://tokens.1inch.io/0x602ba546a7b06e0fc7f58fd27eb6996ecc824689.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BTCMT',
    name: 'Minto Bitcoin Hashrate Token',
    decimals: 18,
    address: '0x410a56541bd912f9b60943fcb344f1e3d6f09567',
    logoURI:
      'https://tokens.1inch.io/0x410a56541bd912f9b60943fcb344f1e3d6f09567.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HFT',
    name: 'Hashflow',
    decimals: 18,
    address: '0x44ec807ce2f4a6f2737a92e985f318d035883e47',
    logoURI:
      'https://tokens.1inch.io/0x44ec807ce2f4a6f2737a92e985f318d035883e47.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'CAPS',
    name: 'Capsule Coin',
    decimals: 18,
    address: '0xffba7529ac181c2ee1844548e6d7061c9a597df4',
    logoURI:
      'https://tokens.1inch.io/0xffba7529ac181c2ee1844548e6d7061c9a597df4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MIM',
    name: 'Magic Internet Money',
    decimals: 18,
    address: '0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba',
    logoURI:
      'https://tokens.1inch.io/0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'VRGW',
    name: 'Virtual Reality Game World',
    decimals: 18,
    address: '0xfdd2374be7ae7a71138b9f6b93d9ef034a49edb6',
    logoURI:
      'https://tokens.1inch.io/0xfdd2374be7ae7a71138b9f6b93d9ef034a49edb6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'QUA',
    name: 'Quarashi',
    decimals: 18,
    address: '0xfd0fd32a20532ad690731c2685d77c351015ebba',
    logoURI:
      'https://tokens.1inch.io/0xfd0fd32a20532ad690731c2685d77c351015ebba.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CR7',
    name: 'CR7 Token',
    decimals: 18,
    address: '0x6c43751fef27c956f7e75d5c345a65df1465f7e0',
    logoURI:
      'https://tokens.1inch.io/0x6c43751fef27c956f7e75d5c345a65df1465f7e0.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AMA',
    name: 'AMAUROT',
    decimals: 18,
    address: '0xe9cd2668fb580c96b035b6d081e5753f23fe7f46',
    logoURI:
      'https://tokens.1inch.io/0xe9cd2668fb580c96b035b6d081e5753f23fe7f46.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SAITO',
    name: 'SAITO',
    decimals: 18,
    address: '0x3c6dad0475d3a1696b359dc04c99fd401be134da',
    logoURI:
      'https://tokens.1inch.io/0x3c6dad0475d3a1696b359dc04c99fd401be134da.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'GHNY',
    name: 'Grizzly Honey',
    decimals: 18,
    address: '0xa045e37a0d1dd3a45fefb8803d22457abc0a728a',
    logoURI:
      'https://tokens.1inch.io/0xa045e37a0d1dd3a45fefb8803d22457abc0a728a.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'AMT',
    name: 'Amazy Move Token',
    decimals: 18,
    address: '0xf625069dce62df95b4910f83446954b871f0fc4f',
    logoURI:
      'https://tokens.1inch.io/0xf625069dce62df95b4910f83446954b871f0fc4f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FARA',
    name: 'FaraCrystal',
    decimals: 18,
    address: '0xf4ed363144981d3a65f42e7d0dc54ff9eef559a1',
    logoURI:
      'https://tokens.1inch.io/0xf4ed363144981d3a65f42e7d0dc54ff9eef559a1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TFS',
    name: 'Fairspin Token',
    decimals: 18,
    address: '0xf4bea2c219eb95c6745983b68185c7340c319d9e',
    logoURI:
      'https://tokens.1inch.io/0xf4bea2c219eb95c6745983b68185c7340c319d9e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DEXShare',
    name: 'DEXShare',
    decimals: 18,
    address: '0xf4914e6d97a75f014acfcf4072f11be5cffc4ca6',
    logoURI:
      'https://tokens.1inch.io/0xf4914e6d97a75f014acfcf4072f11be5cffc4ca6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CELL',
    name: 'Cellframe Token',
    decimals: 18,
    address: '0xf3e1449ddb6b218da2c9463d4594ceccc8934346',
    logoURI:
      'https://tokens.1inch.io/0xf3e1449ddb6b218da2c9463d4594ceccc8934346.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SCLP',
    name: 'Scallop',
    decimals: 18,
    address: '0xf2c96e402c9199682d5ded26d3771c6b192c01af',
    logoURI:
      'https://tokens.1inch.io/0xf2c96e402c9199682d5ded26d3771c6b192c01af.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FIU',
    name: 'beFITTER Token',
    decimals: 18,
    address: '0xef7d50069406a2f5a53806f7250a6c0f17ad9dcd',
    logoURI:
      'https://tokens.1inch.io/0xef7d50069406a2f5a53806f7250a6c0f17ad9dcd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'VEMP',
    name: 'vEmpire Gamer Token',
    decimals: 18,
    address: '0xedf3ce4dd6725650a8e9398e5c6398d061fa7955',
    logoURI:
      'https://tokens.1inch.io/0xedf3ce4dd6725650a8e9398e5c6398d061fa7955.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RAINI',
    name: 'Rainicorn',
    decimals: 18,
    address: '0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed',
    logoURI:
      'https://tokens.1inch.io/0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MMG',
    name: 'MMG Token',
    decimals: 18,
    address: '0xf018aea0a08a5d88674f0837bdac27ab89824dee',
    logoURI:
      'https://tokens.1inch.io/0xf018aea0a08a5d88674f0837bdac27ab89824dee.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NUM',
    name: 'NUM Token [via ChainPort.io]',
    decimals: 18,
    address: '0xeceb87cf00dcbf2d4e2880223743ff087a995ad9',
    logoURI:
      'https://tokens.1inch.io/0xeceb87cf00dcbf2d4e2880223743ff087a995ad9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'OMAX',
    name: 'OMAX TOKEN',
    decimals: 18,
    address: '0xeb84be66c8e71f07ea57cf3b21626d7784f32a7f',
    logoURI:
      'https://tokens.1inch.io/0xeb84be66c8e71f07ea57cf3b21626d7784f32a7f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BABBC',
    name: 'Binance ABBC',
    decimals: 8,
    address: '0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d',
    logoURI:
      'https://tokens.1inch.io/0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'INUKO',
    name: 'Inuko Coin',
    decimals: 18,
    address: '0xea51801b8f5b88543ddad3d1727400c15b209d8f',
    logoURI:
      'https://tokens.1inch.io/0xea51801b8f5b88543ddad3d1727400c15b209d8f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DEC',
    name: 'DarkEnergyCrystals',
    decimals: 3,
    address: '0xe9d7023f2132d55cbd4ee1f78273cb7a3e74f10a',
    logoURI:
      'https://tokens.1inch.io/0xe9d7023f2132d55cbd4ee1f78273cb7a3e74f10a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RDT',
    name: 'Ridotto',
    decimals: 18,
    address: '0xe9c64384deb0c2bf06d991a8d708c77eb545e3d5',
    logoURI:
      'https://tokens.1inch.io/0xe9c64384deb0c2bf06d991a8d708c77eb545e3d5.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'XCT',
    name: 'Citadel.one',
    decimals: 6,
    address: '0xe8670901e86818745b28c8b30b17986958fce8cc',
    logoURI:
      'https://tokens.1inch.io/0xe8670901e86818745b28c8b30b17986958fce8cc.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MSU',
    name: 'MetaSoccer Universe',
    decimals: 18,
    address: '0xe8377a076adabb3f9838afb77bee96eac101ffb1',
    logoURI:
      'https://tokens.1inch.io/0xe8377a076adabb3f9838afb77bee96eac101ffb1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CZUSD',
    name: 'CZUSD',
    decimals: 18,
    address: '0xe68b79e51bf826534ff37aa9cee71a3842ee9c70',
    logoURI:
      'https://tokens.1inch.io/0xe68b79e51bf826534ff37aa9cee71a3842ee9c70.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DERI',
    name: 'Deri',
    decimals: 18,
    address: '0xe60eaf5a997dfae83739e035b005a33afdcc6df5',
    logoURI:
      'https://tokens.1inch.io/0xe60eaf5a997dfae83739e035b005a33afdcc6df5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'Metis',
    name: 'Metis Token',
    decimals: 18,
    address: '0xe552fb52a4f19e44ef5a967632dbc320b0820639',
    logoURI:
      'https://tokens.1inch.io/0xe552fb52a4f19e44ef5a967632dbc320b0820639.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GAL',
    name: 'Project Galaxy',
    decimals: 18,
    address: '0xe4cc45bb5dbda06db6183e8bf016569f40497aa5',
    logoURI:
      'https://tokens.1inch.io/0xe4cc45bb5dbda06db6183e8bf016569f40497aa5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MONS',
    name: 'Monsters Clan Token',
    decimals: 18,
    address: '0xe4c797d43631f4d660ec67b5cb0b78ef5c902532',
    logoURI:
      'https://tokens.1inch.io/0xe4c797d43631f4d660ec67b5cb0b78ef5c902532.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HPN',
    name: 'HyperonChain',
    decimals: 18,
    address: '0xe3d2ba4ebcc6e9ae3569d6418bc2eaabb8feef60',
    logoURI:
      'https://tokens.1inch.io/0xe3d2ba4ebcc6e9ae3569d6418bc2eaabb8feef60.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NELO',
    name: 'NELO Metaverse',
    decimals: 9,
    address: '0xe38950f71e2d2fc4ca9dc9c3625d82560b0a5d8f',
    logoURI:
      'https://tokens.1inch.io/0xe38950f71e2d2fc4ca9dc9c3625d82560b0a5d8f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'Froyo',
    name: 'Froyo',
    decimals: 18,
    address: '0xe369fec23380f9f14ffd07a1dc4b7c1a9fdd81c9',
    logoURI:
      'https://tokens.1inch.io/0xe369fec23380f9f14ffd07a1dc4b7c1a9fdd81c9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CEEK',
    name: 'CEEK',
    decimals: 18,
    address: '0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66',
    logoURI:
      'https://tokens.1inch.io/0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SWAP',
    name: 'SatoshiSwap',
    decimals: 18,
    address: '0xe0f7c8682f865b417aeb80bf237025b4cb5ebaef',
    logoURI:
      'https://tokens.1inch.io/0xe0f7c8682f865b417aeb80bf237025b4cb5ebaef.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SOL',
    name: 'SOLANA',
    decimals: 18,
    address: '0x570a5d26f7765ecb712c0924e4de545b89fd43df',
    logoURI:
      'https://tokens.1inch.io/0x570a5d26f7765ecb712c0924e4de545b89fd43df.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DOMI',
    name: 'Domi',
    decimals: 18,
    address: '0xbbca42c60b5290f2c48871a596492f93ff0ddc82',
    logoURI:
      'https://tokens.1inch.io/0xbbca42c60b5290f2c48871a596492f93ff0ddc82.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MCRT',
    name: 'MagicCraft',
    decimals: 9,
    address: '0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f',
    logoURI:
      'https://tokens.1inch.io/0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WNDR',
    name: 'Wonderman Token',
    decimals: 8,
    address: '0xdfd7b0dd7bf1012dfdf3307a964c36b972300ac8',
    logoURI:
      'https://tokens.1inch.io/0xdfd7b0dd7bf1012dfdf3307a964c36b972300ac8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NFTB',
    name: 'NFTB',
    decimals: 18,
    address: '0xde3dbbe30cfa9f437b293294d1fd64b26045c71a',
    logoURI:
      'https://tokens.1inch.io/0xde3dbbe30cfa9f437b293294d1fd64b26045c71a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RVF',
    name: 'RocketVaultRocketX',
    decimals: 18,
    address: '0x872a34ebb2d54af86827810eebc7b9dc6b2144aa',
    logoURI:
      'https://tokens.1inch.io/0x872a34ebb2d54af86827810eebc7b9dc6b2144aa.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AMPL',
    name: 'AMPL secured by Meter Passport',
    decimals: 9,
    address: '0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f',
    logoURI:
      'https://tokens.1inch.io/0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'BZEN',
    name: 'BITZEN',
    decimals: 9,
    address: '0xdacc0417add48b63cbefb77efbe4a3801aad51ba',
    logoURI:
      'https://tokens.1inch.io/0xdacc0417add48b63cbefb77efbe4a3801aad51ba.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ULX',
    name: 'Ultron',
    decimals: 18,
    address: '0xd983ab71a284d6371908420d8ac6407ca943f810',
    logoURI:
      'https://tokens.1inch.io/0xd983ab71a284d6371908420d8ac6407ca943f810.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MILO',
    name: 'Milo Inu',
    decimals: 9,
    address: '0xd9de2b1973e57dc9dba90c35d6cd940ae4a3cbe1',
    logoURI:
      'https://tokens.1inch.io/0xd9de2b1973e57dc9dba90c35d6cd940ae4a3cbe1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AIR',
    name: 'AIR',
    decimals: 18,
    address: '0xd8a2ae43fd061d24acd538e3866ffc2c05151b53',
    logoURI:
      'https://tokens.1inch.io/0xd8a2ae43fd061d24acd538e3866ffc2c05151b53.png',
    tags: ['tokens'],
  },
  {
    symbol: 'QUACK',
    name: 'RichQUACK.com',
    decimals: 9,
    address: '0xd74b782e05aa25c50e7330af541d46e18f36661c',
    logoURI:
      'https://tokens.1inch.io/0xd74b782e05aa25c50e7330af541d46e18f36661c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'URUS',
    name: 'Aurox Token',
    decimals: 18,
    address: '0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b',
    logoURI:
      'https://tokens.1inch.io/0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'EPX',
    name: 'Ellipsis X',
    decimals: 18,
    address: '0xaf41054c1487b0e5e2b9250c0332ecbce6ce9d71',
    logoURI:
      'https://tokens.1inch.io/0xaf41054c1487b0e5e2b9250c0332ecbce6ce9d71.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ETERNAL',
    name: 'CryptoMines Eternal',
    decimals: 18,
    address: '0xd44fd09d74cd13838f137b590497595d6b3feea4',
    logoURI:
      'https://tokens.1inch.io/0xd44fd09d74cd13838f137b590497595d6b3feea4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'COINSCOPE',
    name: 'Coinscope',
    decimals: 18,
    address: '0xd41c4805a9a3128f9f7a7074da25965371ba50d5',
    logoURI:
      'https://tokens.1inch.io/0xd41c4805a9a3128f9f7a7074da25965371ba50d5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HERO',
    name: 'Metahero',
    decimals: 18,
    address: '0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13',
    logoURI:
      'https://tokens.1inch.io/0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WAL',
    name: 'WastedLands',
    decimals: 18,
    address: '0xd306c124282880858a634e7396383ae58d37c79c',
    logoURI:
      'https://tokens.1inch.io/0xd306c124282880858a634e7396383ae58d37c79c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PRQ',
    name: 'Parsiq Token',
    decimals: 18,
    address: '0xd21d29b38374528675c34936bf7d5dd693d2a577',
    logoURI:
      'https://tokens.1inch.io/0xd21d29b38374528675c34936bf7d5dd693d2a577.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'LOOP',
    name: 'LoopNetwork',
    decimals: 18,
    address: '0xce186ad6430e2fe494a22c9edbd4c68794a28b35',
    logoURI:
      'https://tokens.1inch.io/0xce186ad6430e2fe494a22c9edbd4c68794a28b35.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MATIC',
    name: 'Matic Token',
    decimals: 18,
    address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
    logoURI:
      'https://tokens.1inch.io/0xcc42724c6683b7e57334c4e856f4c9965ed682bd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FIST',
    name: 'FistToken',
    decimals: 6,
    address: '0xc9882def23bc42d53895b8361d0b1edc7570bc6a',
    logoURI:
      'https://tokens.1inch.io/0xc9882def23bc42d53895b8361d0b1edc7570bc6a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GAME',
    name: 'Game Coin [via ChainPort.io]',
    decimals: 5,
    address: '0x66109633715d2110dda791e64a7b2afadb517abb',
    logoURI:
      'https://tokens.1inch.io/0x66109633715d2110dda791e64a7b2afadb517abb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MCONTENT',
    name: 'MContent',
    decimals: 6,
    address: '0x799e1cf88a236e42b4a87c544a22a94ae95a6910',
    logoURI:
      'https://tokens.1inch.io/0x799e1cf88a236e42b4a87c544a22a94ae95a6910.png',
    tags: ['tokens'],
  },
  {
    symbol: 'XTM',
    name: 'Torum',
    decimals: 18,
    address: '0xcd1faff6e578fa5cac469d2418c95671ba1a62fe',
    logoURI:
      'https://tokens.1inch.io/0xcd1faff6e578fa5cac469d2418c95671ba1a62fe.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ECC',
    name: 'Empire Capital Token',
    decimals: 9,
    address: '0xc84d8d03aa41ef941721a4d77b24bb44d7c7ac55',
    logoURI:
      'https://tokens.1inch.io/0xc84d8d03aa41ef941721a4d77b24bb44d7c7ac55.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LIQ',
    name: 'Liquidus',
    decimals: 18,
    address: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
    logoURI:
      'https://tokens.1inch.io/0xc7981767f644c7f8e483dabdc413e8a371b83079.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BabyDoge',
    name: 'Baby Doge Coin',
    decimals: 9,
    address: '0xc748673057861a797275cd8a068abb95a902e8de',
    logoURI:
      'https://tokens.1inch.io/0xc748673057861a797275cd8a068abb95a902e8de.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AVA',
    name: 'Avatly',
    decimals: 18,
    address: '0x83b79f74f225e8f9a29fc67cb1678e7909d7d73d',
    logoURI:
      'https://tokens.1inch.io/0x83b79f74f225e8f9a29fc67cb1678e7909d7d73d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'STARS',
    name: 'Mogul Stars',
    decimals: 18,
    address: '0xbd83010eb60f12112908774998f65761cf9f6f9a',
    logoURI:
      'https://tokens.1inch.io/0xbd83010eb60f12112908774998f65761cf9f6f9a.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'HI',
    name: 'hi Dollar',
    decimals: 18,
    address: '0x77087ab5df23cfb52449a188e80e9096201c2097',
    logoURI:
      'https://tokens.1inch.io/0x77087ab5df23cfb52449a188e80e9096201c2097.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RISE',
    name: 'EverRise',
    decimals: 18,
    address: '0xc17c30e98541188614df99239cabd40280810ca3',
    logoURI:
      'https://tokens.1inch.io/0xc17c30e98541188614df99239cabd40280810ca3.png',
    tags: ['tokens'],
  },
  {
    symbol: 'C98',
    name: 'Coin98',
    decimals: 18,
    address: '0xaec945e04baf28b135fa7c640f624f8d90f1c3a6',
    logoURI:
      'https://tokens.1inch.io/0xaec945e04baf28b135fa7c640f624f8d90f1c3a6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'POLC',
    name: 'Polka City',
    decimals: 18,
    address: '0x6ae9701b9c423f40d54556c9a443409d79ce170a',
    logoURI:
      'https://tokens.1inch.io/0x6ae9701b9c423f40d54556c9a443409d79ce170a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DEBT',
    name: 'DEBT',
    decimals: 8,
    address: '0xc632f90affec7121120275610bf17df9963f181c',
    logoURI:
      'https://tokens.1inch.io/0xc632f90affec7121120275610bf17df9963f181c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AQUA',
    name: 'AQUA',
    decimals: 18,
    address: '0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991',
    logoURI:
      'https://tokens.1inch.io/0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LNR',
    name: 'Lunar',
    decimals: 18,
    address: '0xc1a59a17f87ba6651eb8e8f707db7672647c45bd',
    logoURI:
      'https://tokens.1inch.io/0xc1a59a17f87ba6651eb8e8f707db7672647c45bd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'VEX',
    name: 'Velorex',
    decimals: 9,
    address: '0xc029a12e4a002c6858878fd9d3cc74e227cc2dda',
    logoURI:
      'https://tokens.1inch.io/0xc029a12e4a002c6858878fd9d3cc74e227cc2dda.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TLOS',
    name: 'pTokens TLOS',
    decimals: 18,
    address: '0xb6c53431608e626ac81a9776ac3e999c5556717c',
    logoURI:
      'https://tokens.1inch.io/0xb6c53431608e626ac81a9776ac3e999c5556717c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BETA',
    name: 'Beta Token',
    decimals: 18,
    address: '0xbe1a001fe942f96eea22ba08783140b9dcc09d28',
    logoURI:
      'https://tokens.1inch.io/0xbe1a001fe942f96eea22ba08783140b9dcc09d28.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MTRG',
    name: 'Wrapped MTRG on BSC by Meter.io',
    decimals: 18,
    address: '0xbd2949f67dcdc549c6ebe98696449fa79d988a9f',
    logoURI:
      'https://tokens.1inch.io/0xbd2949f67dcdc549c6ebe98696449fa79d988a9f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RVC',
    name: 'Revenue Coin',
    decimals: 18,
    address: '0xbcbdecf8e76a5c32dba69de16985882ace1678c6',
    logoURI:
      'https://tokens.1inch.io/0xbcbdecf8e76a5c32dba69de16985882ace1678c6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'XETA',
    name: 'XANA',
    decimals: 18,
    address: '0xbc7370641ddcf16a27eea11230af4a9f247b61f9',
    logoURI:
      'https://tokens.1inch.io/0xbc7370641ddcf16a27eea11230af4a9f247b61f9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CALO',
    name: 'CALO',
    decimals: 18,
    address: '0xb6b91269413b6b99242b1c0bc611031529999999',
    logoURI:
      'https://tokens.1inch.io/0xb6b91269413b6b99242b1c0bc611031529999999.png',
    tags: ['tokens'],
  },
  {
    symbol: 'USX',
    name: 'dForce USD',
    decimals: 18,
    address: '0xb5102cee1528ce2c760893034a4603663495fd72',
    logoURI:
      'https://tokens.1inch.io/0xb5102cee1528ce2c760893034a4603663495fd72.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TRIVIA',
    name: 'Trivian Token',
    decimals: 3,
    address: '0xb465f3cb6aba6ee375e12918387de1eac2301b05',
    logoURI:
      'https://tokens.1inch.io/0xb465f3cb6aba6ee375e12918387de1eac2301b05.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GAMMA',
    name: 'GAMMA',
    decimals: 18,
    address: '0xb3cb6d2f8f2fde203a022201c81a96c167607f15',
    logoURI:
      'https://tokens.1inch.io/0xb3cb6d2f8f2fde203a022201c81a96c167607f15.png',
    tags: ['tokens'],
  },
  {
    symbol: 'Gold',
    name: 'CyberDragon Gold',
    decimals: 18,
    address: '0xb3a6381070b1a15169dea646166ec0699fdaea79',
    logoURI:
      'https://tokens.1inch.io/0xb3a6381070b1a15169dea646166ec0699fdaea79.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TruePNL',
    name: 'PNL',
    decimals: 18,
    address: '0xb346c52874c7023df183068c39478c3b7b2515bc',
    logoURI:
      'https://tokens.1inch.io/0xb346c52874c7023df183068c39478c3b7b2515bc.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CPD',
    name: 'Coinspaid',
    decimals: 18,
    address: '0x2406dce4da5ab125a18295f4fb9fd36a0f7879a2',
    logoURI:
      'https://tokens.1inch.io/0x2406dce4da5ab125a18295f4fb9fd36a0f7879a2.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SDAO',
    name: 'Singularity Dao',
    decimals: 18,
    address: '0x90ed8f1dc86388f14b64ba8fb4bbd23099f18240',
    logoURI:
      'https://tokens.1inch.io/0x90ed8f1dc86388f14b64ba8fb4bbd23099f18240.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GGT',
    name: 'GameGuru',
    decimals: 18,
    address: '0xd2359c576632234d1354b20bf51b0277be20c81e',
    logoURI:
      'https://tokens.1inch.io/0xd2359c576632234d1354b20bf51b0277be20c81e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'UCO',
    name: 'UnirisToken',
    decimals: 18,
    address: '0xb001f1e7c8bda414ac7cf7ecba5469fe8d24b6de',
    logoURI:
      'https://tokens.1inch.io/0xb001f1e7c8bda414ac7cf7ecba5469fe8d24b6de.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BOG',
    name: 'Bogged Finance',
    decimals: 18,
    address: '0xb09fe1613fe03e7361319d2a43edc17422f36b09',
    logoURI:
      'https://tokens.1inch.io/0xb09fe1613fe03e7361319d2a43edc17422f36b09.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PAID',
    name: 'PAID Network',
    decimals: 18,
    address: '0xad86d0e9764ba90ddd68747d64bffbd79879a238',
    logoURI:
      'https://tokens.1inch.io/0xad86d0e9764ba90ddd68747d64bffbd79879a238.png',
    tags: ['tokens'],
  },
  {
    symbol: 'FTM',
    name: 'Fantom',
    decimals: 18,
    address: '0xad29abb318791d579433d831ed122afeaf29dcfe',
    logoURI:
      'https://tokens.1inch.io/0xad29abb318791d579433d831ed122afeaf29dcfe.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NFTD',
    name: 'NFTrade Token [via ChainPort.io]',
    decimals: 18,
    address: '0xac83271abb4ec95386f08ad2b904a46c61777cef',
    logoURI:
      'https://tokens.1inch.io/0xac83271abb4ec95386f08ad2b904a46c61777cef.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ALICE',
    name: 'ALICE',
    decimals: 6,
    address: '0xac51066d7bec65dc4589368da368b212745d63e8',
    logoURI:
      'https://tokens.1inch.io/0xac51066d7bec65dc4589368da368b212745d63e8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'OLE',
    name: 'OpenLeverage',
    decimals: 18,
    address: '0xa865197a84e780957422237b5d152772654341f3',
    logoURI:
      'https://tokens.1inch.io/0xa865197a84e780957422237b5d152772654341f3.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PEFI',
    name: 'Plant Empires Token',
    decimals: 18,
    address: '0xa83bfcf9e252adf1f39937984a4e113eda6e445b',
    logoURI:
      'https://tokens.1inch.io/0xa83bfcf9e252adf1f39937984a4e113eda6e445b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SANTOS',
    name: 'FC Santos Fan Token',
    decimals: 8,
    address: '0xa64455a4553c9034236734faddaddbb64ace4cc7',
    logoURI:
      'https://tokens.1inch.io/0xa64455a4553c9034236734faddaddbb64ace4cc7.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ankrBNB',
    name: 'Ankr Staked BNB',
    decimals: 18,
    address: '0x52f24a5e03aee338da5fd9df68d2b6fae1178827',
    logoURI:
      'https://tokens.1inch.io/0x52f24a5e03aee338da5fd9df68d2b6fae1178827.png',
    tags: ['tokens'],
  },
  {
    symbol: 'THE',
    name: 'THENA',
    decimals: 18,
    address: '0xf4c8e32eadec4bfe97e0f595add0f4450a863a11',
    logoURI:
      'https://tokens.1inch.io/0xf4c8e32eadec4bfe97e0f595add0f4450a863a11.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DFI',
    name: 'DFI (DefiChain)',
    decimals: 18,
    address: '0x361c60b7c2828fcab80988d00d1d542c83387b50',
    logoURI:
      'https://tokens.1inch.io/0x361c60b7c2828fcab80988d00d1d542c83387b50.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TRIAS',
    name: 'Trias Token',
    decimals: 18,
    address: '0xa4838122c683f732289805fc3c207febd55babdd',
    logoURI:
      'https://tokens.1inch.io/0xa4838122c683f732289805fc3c207febd55babdd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ATA',
    name: 'Automata',
    decimals: 18,
    address: '0xa2120b9e674d3fc3875f415a7df52e382f141225',
    logoURI:
      'https://tokens.1inch.io/0xa2120b9e674d3fc3875f415a7df52e382f141225.png',
    tags: ['tokens'],
  },
  {
    symbol: 'THG',
    name: 'Thetan Gem',
    decimals: 18,
    address: '0x9fd87aefe02441b123c3c32466cd9db4c578618f',
    logoURI:
      'https://tokens.1inch.io/0x9fd87aefe02441b123c3c32466cd9db4c578618f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ARKER',
    name: 'ARKER',
    decimals: 18,
    address: '0x9c67638c4fa06fd47fb8900fc7f932f7eab589de',
    logoURI:
      'https://tokens.1inch.io/0x9c67638c4fa06fd47fb8900fc7f932f7eab589de.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MDX',
    name: 'MDX Token',
    decimals: 18,
    address: '0x9c65ab58d8d978db963e63f2bfb7121627e3a739',
    logoURI:
      'https://tokens.1inch.io/0x9c65ab58d8d978db963e63f2bfb7121627e3a739.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AFP',
    name: 'PIGS Token',
    decimals: 18,
    address: '0x9a3321e1acd3b9f6debee5e042dd2411a1742002',
    logoURI:
      'https://tokens.1inch.io/0x9a3321e1acd3b9f6debee5e042dd2411a1742002.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NEST',
    name: 'NEST',
    decimals: 18,
    address: '0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7',
    logoURI:
      'https://tokens.1inch.io/0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MC',
    name: 'Merit Circle',
    decimals: 18,
    address: '0x949d48eca67b17269629c7194f4b727d4ef9e5d6',
    logoURI:
      'https://tokens.1inch.io/0x949d48eca67b17269629c7194f4b727d4ef9e5d6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BAS',
    name: 'BlockApeScissors',
    decimals: 18,
    address: '0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc',
    logoURI:
      'https://tokens.1inch.io/0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ETHPAD',
    name: 'ETHPAD.network',
    decimals: 18,
    address: '0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442',
    logoURI:
      'https://tokens.1inch.io/0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GUILD',
    name: 'BlockchainSpace [via ChainPort.io]',
    decimals: 18,
    address: '0x0565805ca3a4105faee51983b0bd8ffb5ce1455c',
    logoURI:
      'https://tokens.1inch.io/0x0565805ca3a4105faee51983b0bd8ffb5ce1455c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GMT',
    name: 'GoMining Token',
    decimals: 18,
    address: '0x7ddc52c4de30e94be3a6a0a2b259b2850f421989',
    logoURI:
      'https://tokens.1inch.io/0x7ddc52c4de30e94be3a6a0a2b259b2850f421989.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LVL',
    name: 'Level Token',
    decimals: 18,
    address: '0xb64e280e9d1b5dbec4accedb2257a87b400db149',
    logoURI:
      'https://tokens.1inch.io/0xb64e280e9d1b5dbec4accedb2257a87b400db149.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HIGH',
    name: 'Highstreet Token',
    decimals: 18,
    address: '0x5f4bde007dc06b867f86ebfe4802e34a1ffeed63',
    logoURI:
      'https://tokens.1inch.io/0x5f4bde007dc06b867f86ebfe4802e34a1ffeed63.png',
    eip2612: true,
    tags: ['tokens'],
  },
];
export default tokens;
