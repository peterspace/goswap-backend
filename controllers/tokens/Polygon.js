const Polygon = {
  tokens: {
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee': {
      symbol: 'MATIC',
      name: 'MATIC',
      decimals: 18,
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      logoURI:
        'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
      tags: ['native'],
    },
    '0xd6df932a45c0f255f85145f286ea0b292b21c90b': {
      symbol: 'AAVE',
      name: 'Aave',
      decimals: 18,
      address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
      logoURI:
        'https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png',
      tags: ['tokens'],
    },
    '0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f': {
      symbol: 'MUST',
      name: 'Must',
      decimals: 18,
      address: '0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
      logoURI:
        'https://tokens.1inch.io/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f.png',
      tags: ['tokens'],
    },
    '0xb33eaad8d922b1083446dc23f610c2567fb5180f': {
      symbol: 'UNI',
      name: 'Uniswap',
      decimals: 18,
      address: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
      logoURI:
        'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
      tags: ['tokens'],
    },
    '0xc2132d05d31c914a87c6611c10748aeb04b58e8f': {
      symbol: 'USDT',
      name: 'Tether USD',
      decimals: 6,
      address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      logoURI:
        'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063': {
      symbol: 'DAI',
      name: '(PoS) Dai Stablecoin',
      decimals: 18,
      address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      logoURI:
        'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6': {
      symbol: 'WBTC',
      name: 'Wrapped BTC',
      decimals: 8,
      address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      logoURI:
        'https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png',
      tags: ['tokens', 'PEG:BTC'],
    },
    '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39': {
      symbol: 'LINK',
      name: 'ChainLink Token',
      decimals: 18,
      address: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
      logoURI:
        'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
      tags: ['tokens'],
    },
    '0xa1428174f516f527fafdd146b883bb4428682737': {
      symbol: 'SUPER',
      name: 'SuperFarm',
      decimals: 18,
      address: '0xa1428174f516f527fafdd146b883bb4428682737',
      logoURI:
        'https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png',
      tags: ['tokens'],
    },
    '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4': {
      symbol: 'MANA',
      name: 'Decentraland MANA',
      decimals: 18,
      address: '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4',
      logoURI:
        'https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png',
      tags: ['tokens'],
    },
    '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270': {
      symbol: 'WMATIC',
      name: 'Wrapped Matic',
      decimals: 18,
      address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      logoURI:
        'https://tokens.1inch.io/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270.png',
      wrappedNative: true,
      tags: ['tokens'],
    },
    '0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c': {
      symbol: 'COMP',
      name: 'Compound',
      decimals: 18,
      address: '0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c',
      logoURI:
        'https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png',
      tags: ['tokens'],
    },
    '0xf84bd51eab957c2e7b7d646a3427c5a50848281d': {
      symbol: 'AGAr',
      name: 'AGA Rewards',
      decimals: 8,
      address: '0xf84bd51eab957c2e7b7d646a3427c5a50848281d',
      logoURI:
        'https://tokens.1inch.io/0xb453f1f2ee776daf2586501361c457db70e1ca0f.png',
      tags: ['tokens'],
    },
    '0x46f48fbdedaa6f5500993bede9539ef85f4bee8e': {
      symbol: 'ARIA20',
      name: 'ARIANEE',
      decimals: 18,
      address: '0x46f48fbdedaa6f5500993bede9539ef85f4bee8e',
      logoURI:
        'https://tokens.1inch.io/0x46f48fbdedaa6f5500993bede9539ef85f4bee8e.png',
      tags: ['tokens'],
    },
    '0x7cdc0421469398e0f3aa8890693d86c840ac8931': {
      symbol: 'AZUKI',
      name: 'DokiDokiAzuki',
      decimals: 18,
      address: '0x7cdc0421469398e0f3aa8890693d86c840ac8931',
      logoURI:
        'https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png',
      tags: ['tokens'],
    },
    '0xd85d1e945766fea5eda9103f918bd915fbca63e6': {
      symbol: 'CEL',
      name: 'Celsius',
      decimals: 4,
      address: '0xd85d1e945766fea5eda9103f918bd915fbca63e6',
      logoURI:
        'https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png',
      tags: ['tokens'],
    },
    '0xd28449bb9bb659725accad52947677cce3719fd7': {
      symbol: 'DMT',
      name: 'Dark Matter Token',
      decimals: 18,
      address: '0xd28449bb9bb659725accad52947677cce3719fd7',
      logoURI:
        'https://tokens.1inch.io/0xd28449bb9bb659725accad52947677cce3719fd7.png',
      tags: ['tokens'],
    },
    '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619': {
      symbol: 'ETH',
      name: 'Ether',
      decimals: 18,
      address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      logoURI:
        'https://tokens.1inch.io/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619.png',
      tags: ['tokens'],
    },
    '0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7': {
      symbol: 'GHST',
      name: 'Aavegotchi GHST Token',
      decimals: 18,
      address: '0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7',
      logoURI:
        'https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png',
      tags: ['tokens'],
    },
    '0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c': {
      symbol: 'HEX',
      name: 'HEXX',
      decimals: 8,
      address: '0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c',
      logoURI:
        'https://tokens.1inch.io/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png',
      tags: ['tokens'],
    },
    '0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce': {
      symbol: 'IGG',
      name: 'IG Gold',
      decimals: 6,
      address: '0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce',
      logoURI:
        'https://tokens.1inch.io/0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce.png',
      tags: ['tokens'],
    },
    '0x6968105460f67c3bf751be7c15f92f5286fd0ce5': {
      symbol: 'MONA',
      name: 'Monavale',
      decimals: 18,
      address: '0x6968105460f67c3bf751be7c15f92f5286fd0ce5',
      logoURI:
        'https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png',
      tags: ['tokens'],
    },
    '0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea': {
      symbol: 'OM',
      name: 'OM',
      decimals: 18,
      address: '0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea',
      logoURI:
        'https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png',
      tags: ['tokens'],
    },
    '0x2b88ad57897a8b496595925f43048301c37615da': {
      symbol: 'PICKLE',
      name: 'PickleToken',
      decimals: 18,
      address: '0x2b88ad57897a8b496595925f43048301c37615da',
      logoURI:
        'https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png',
      tags: ['tokens'],
    },
    '0x361a5a4993493ce00f61c32d4ecca5512b82ce90': {
      symbol: 'SDT',
      name: 'Stake DAO Token',
      decimals: 18,
      address: '0x361a5a4993493ce00f61c32d4ecca5512b82ce90',
      logoURI:
        'https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png',
      tags: ['tokens'],
    },
    '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a': {
      symbol: 'SUSHI',
      name: 'SushiToken',
      decimals: 18,
      address: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
      logoURI:
        'https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png',
      tags: ['tokens'],
    },
    '0x034b2090b579228482520c589dbd397c53fc51cc': {
      symbol: 'VISION',
      name: 'Vision Token',
      decimals: 18,
      address: '0x034b2090b579228482520c589dbd397c53fc51cc',
      logoURI:
        'https://tokens.1inch.io/0x034b2090b579228482520c589dbd397c53fc51cc.png',
      tags: ['tokens'],
    },
    '0xb77e62709e39ad1cbeebe77cf493745aec0f453a': {
      symbol: 'WISE',
      name: 'Wise Token',
      decimals: 18,
      address: '0xb77e62709e39ad1cbeebe77cf493745aec0f453a',
      logoURI:
        'https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png',
      tags: ['tokens'],
    },
    '0x8f18dc399594b451eda8c5da02d0563c0b2d0f16': {
      symbol: 'WOLF',
      name: 'moonwolf.io',
      decimals: 9,
      address: '0x8f18dc399594b451eda8c5da02d0563c0b2d0f16',
      logoURI:
        'https://tokens.1inch.io/0x8f18dc399594b451eda8c5da02d0563c0b2d0f16.png',
      isFoT: true,
      tags: ['tokens'],
    },
    '0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff': {
      symbol: 'iFARM',
      name: 'iFARM',
      decimals: 18,
      address: '0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff',
      logoURI:
        'https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png',
      tags: ['tokens'],
    },
    '0x282d8efce846a88b159800bd4130ad77443fa1a1': {
      symbol: 'mOCEAN',
      name: 'Ocean Token',
      decimals: 18,
      address: '0x282d8efce846a88b159800bd4130ad77443fa1a1',
      logoURI:
        'https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png',
      tags: ['tokens'],
    },
    '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8': {
      symbol: 'ANY',
      name: 'Anyswap',
      decimals: 18,
      address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
      logoURI:
        'https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x7075cab6bcca06613e2d071bd918d1a0241379e2': {
      symbol: 'GFARM2',
      name: 'Gains V2',
      decimals: 18,
      address: '0x7075cab6bcca06613e2d071bd918d1a0241379e2',
      logoURI:
        'https://tokens.1inch.io/0x7075cab6bcca06613e2d071bd918d1a0241379e2.png',
      tags: ['tokens'],
    },
    '0x05089c9ebffa4f0aca269e32056b1b36b37ed71b': {
      symbol: 'Krill',
      name: 'Krill',
      decimals: 18,
      address: '0x05089c9ebffa4f0aca269e32056b1b36b37ed71b',
      logoURI:
        'https://tokens.1inch.io/0x05089c9ebffa4f0aca269e32056b1b36b37ed71b.png',
      tags: ['tokens'],
    },
    '0xe82808eaa78339b06a691fd92e1be79671cad8d3': {
      symbol: 'PLOT',
      name: 'PLOT',
      decimals: 18,
      address: '0xe82808eaa78339b06a691fd92e1be79671cad8d3',
      logoURI:
        'https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png',
      tags: ['tokens'],
    },
    '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32': {
      symbol: 'TEL',
      name: 'Telcoin',
      decimals: 2,
      address: '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32',
      logoURI:
        'https://tokens.1inch.io/0x467bccd9d29f223bce8043b84e8c8b282827790f.png',
      tags: ['tokens'],
    },
    '0x1a13f4ca1d028320a707d99520abfefca3998b7f': {
      symbol: 'amUSDC',
      name: 'Aave Matic Market USDC',
      decimals: 6,
      address: '0x1a13f4ca1d028320a707d99520abfefca3998b7f',
      logoURI:
        'https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png',
      eip2612: true,
      tags: ['tokens', 'PEG:USD'],
    },
    '0x60d55f02a771d515e077c9c2403a1ef324885cec': {
      symbol: 'amUSDT',
      name: 'Aave Matic Market USDT',
      decimals: 6,
      address: '0x60d55f02a771d515e077c9c2403a1ef324885cec',
      logoURI:
        'https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png',
      eip2612: true,
      tags: ['tokens', 'PEG:USD'],
    },
    '0x5c2ed810328349100a66b82b78a1791b101c9d61': {
      symbol: 'amWBTC',
      name: 'Aave Matic Market WBTC',
      decimals: 8,
      address: '0x5c2ed810328349100a66b82b78a1791b101c9d61',
      logoURI:
        'https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png',
      eip2612: true,
      tags: ['tokens', 'PEG:BTC'],
    },
    '0x28424507fefb6f7f8e9d3860f56504e4e5f5f390': {
      symbol: 'amWETH',
      name: 'Aave Matic Market WETH',
      decimals: 18,
      address: '0x28424507fefb6f7f8e9d3860f56504e4e5f5f390',
      logoURI:
        'https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4': {
      symbol: 'amWMATIC',
      name: 'Aave Matic Market WMATIC',
      decimals: 18,
      address: '0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4',
      logoURI:
        'https://tokens.1inch.io/0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x1d2a0e5ec8e5bbdca5cb219e649b565d8e5c3360': {
      symbol: 'amAAVE',
      name: 'Aave Matic Market AAVE',
      decimals: 18,
      address: '0x1d2a0e5ec8e5bbdca5cb219e649b565d8e5c3360',
      logoURI:
        'https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x27f8d03b3a2196956ed754badc28d73be8830a6e': {
      symbol: 'amDAI',
      name: 'Aave Matic Market DAI',
      decimals: 18,
      address: '0x27f8d03b3a2196956ed754badc28d73be8830a6e',
      logoURI:
        'https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x172370d5cd63279efa6d502dab29171933a610af': {
      symbol: 'CRV',
      name: 'CRV',
      decimals: 18,
      address: '0x172370d5cd63279efa6d502dab29171933a610af',
      logoURI:
        'https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png',
      tags: ['tokens'],
    },
    '0xfbdd194376de19a88118e84e279b977f165d01b8': {
      symbol: 'BIFI',
      name: 'beefy.finance',
      decimals: 18,
      address: '0xfbdd194376de19a88118e84e279b977f165d01b8',
      logoURI:
        'https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x3a3df212b7aa91aa0402b9035b098891d276572b': {
      symbol: 'FISH',
      name: 'Fish',
      decimals: 18,
      address: '0x3a3df212b7aa91aa0402b9035b098891d276572b',
      logoURI:
        'https://tokens.1inch.io/0x3a3df212b7aa91aa0402b9035b098891d276572b.png',
      tags: ['tokens'],
    },
    '0x8a953cfe442c5e8855cc6c61b1293fa648bae472': {
      symbol: 'PolyDoge',
      name: 'PolyDoge',
      decimals: 18,
      address: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472',
      logoURI:
        'https://tokens.1inch.io/0x8a953cfe442c5e8855cc6c61b1293fa648bae472.png',
      tags: ['tokens'],
    },
    '0xd86b5923f3ad7b585ed81b448170ae026c65ae9a': {
      symbol: 'IRON',
      name: 'IRON Stablecoin',
      decimals: 18,
      address: '0xd86b5923f3ad7b585ed81b448170ae026c65ae9a',
      logoURI:
        'https://tokens.1inch.io/0xd86b5923f3ad7b585ed81b448170ae026c65ae9a.png',
      tags: ['tokens'],
    },
    '0xaaa5b9e6c589642f98a1cda99b9d024b8407285a': {
      symbol: 'TITAN',
      name: 'IRON Titanium Token',
      decimals: 18,
      address: '0xaaa5b9e6c589642f98a1cda99b9d024b8407285a',
      logoURI:
        'https://tokens.1inch.io/0xaaa5b9e6c589642f98a1cda99b9d024b8407285a.png',
      tags: ['tokens'],
    },
    '0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97': {
      symbol: 'DFYN',
      name: 'DFYN Token',
      decimals: 18,
      address: '0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97',
      logoURI:
        'https://tokens.1inch.io/0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97.png',
      tags: ['tokens'],
    },
    '0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603': {
      symbol: 'WOO',
      name: 'Wootrade Network',
      decimals: 18,
      address: '0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603',
      logoURI:
        'https://tokens.1inch.io/0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603.png',
      tags: ['tokens'],
    },
    '0x4c4bf319237d98a30a929a96112effa8da3510eb': {
      symbol: 'WEXpoly',
      name: 'WaultSwap Polygon',
      decimals: 18,
      address: '0x4c4bf319237d98a30a929a96112effa8da3510eb',
      logoURI:
        'https://tokens.1inch.io/0x4c4bf319237d98a30a929a96112effa8da3510eb.png',
      tags: ['tokens'],
    },
    '0x580a84c73811e1839f75d86d75d88cca0c241ff4': {
      symbol: 'QI',
      name: 'Qi Dao',
      decimals: 18,
      address: '0x580a84c73811e1839f75d86d75d88cca0c241ff4',
      logoURI:
        'https://tokens.1inch.io/0x580a84c73811e1839f75d86d75d88cca0c241ff4.png',
      tags: ['tokens'],
    },
    '0xa3fa99a148fa48d14ed51d610c367c61876997f1': {
      symbol: 'miMATIC',
      name: 'miMATIC',
      decimals: 18,
      address: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
      logoURI:
        'https://tokens.1inch.io/0xa3fa99a148fa48d14ed51d610c367c61876997f1.png',
      tags: ['tokens'],
    },
    '0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e': {
      symbol: 'OMEN',
      name: 'Augury Finance',
      decimals: 18,
      address: '0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e',
      logoURI:
        'https://tokens.1inch.io/0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e.png',
      tags: ['tokens'],
    },
    '0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c': {
      symbol: 'KNC',
      name: 'Kyber Network Crystal v2',
      decimals: 18,
      address: '0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c',
      logoURI:
        'https://tokens.1inch.io/0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c.png',
      tags: ['tokens'],
    },
    '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3': {
      symbol: 'BAL',
      name: 'Balancer',
      decimals: 18,
      address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
      logoURI:
        'https://tokens.1inch.io/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3.png',
      tags: ['tokens'],
    },
    '0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef': {
      symbol: 'ICE_1',
      name: 'Iron Finance ICE Token',
      decimals: 18,
      address: '0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef',
      logoURI:
        'https://tokens.1inch.io/0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef.png',
      displayedSymbol: 'ICE',
      tags: ['tokens'],
    },
    '0xfbe49330e7b9f58a822788f86c1be38ab902bab1': {
      symbol: 'PAPR',
      name: 'PAPR',
      decimals: 18,
      address: '0xfbe49330e7b9f58a822788f86c1be38ab902bab1',
      logoURI:
        'https://tokens.1inch.io/0xfbe49330e7b9f58a822788f86c1be38ab902bab1.png',
      tags: ['tokens'],
    },
    '0x59e9261255644c411afdd00bd89162d09d862e38': {
      symbol: 'ETHA',
      name: 'ETHA',
      decimals: 18,
      address: '0x59e9261255644c411afdd00bd89162d09d862e38',
      logoURI:
        'https://tokens.1inch.io/0x59e9261255644c411afdd00bd89162d09d862e38.png',
      tags: ['tokens'],
    },
    '0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539': {
      symbol: 'ADDY',
      name: 'Adamant',
      decimals: 18,
      address: '0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539',
      logoURI:
        'https://tokens.1inch.io/0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539.png',
      tags: ['tokens'],
    },
    '0x692597b009d13c4049a947cab2239b7d6517875f': {
      symbol: 'UST',
      name: 'Wrapped UST Token (PoS)',
      decimals: 18,
      address: '0x692597b009d13c4049a947cab2239b7d6517875f',
      logoURI:
        'https://tokens.1inch.io/0x692597b009d13c4049a947cab2239b7d6517875f.png',
      tags: ['tokens'],
    },
    '0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309': {
      symbol: 'SNK',
      name: 'Snook',
      decimals: 18,
      address: '0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309',
      logoURI:
        'https://tokens.1inch.io/0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309.png',
      tags: ['tokens'],
    },
    '0xdab35042e63e93cc8556c9bae482e5415b5ac4b1': {
      symbol: 'IRIS',
      name: 'Iris',
      decimals: 18,
      address: '0xdab35042e63e93cc8556c9bae482e5415b5ac4b1',
      logoURI:
        'https://tokens.1inch.io/0xdab35042e63e93cc8556c9bae482e5415b5ac4b1.png',
      tags: ['tokens'],
    },
    '0x3a3e7650f8b9f667da98f236010fbf44ee4b2975': {
      symbol: 'xUSD',
      name: 'xDollar Stablecoin',
      decimals: 18,
      address: '0x3a3e7650f8b9f667da98f236010fbf44ee4b2975',
      logoURI:
        'https://tokens.1inch.io/0x3a3e7650f8b9f667da98f236010fbf44ee4b2975.png',
      eip2612: true,
      tags: ['tokens', 'PEG:USD'],
    },
    '0x13748d548d95d78a3c83fe3f32604b4796cffa23': {
      symbol: 'KOGECOIN',
      name: 'kogecoin.io',
      decimals: 9,
      address: '0x13748d548d95d78a3c83fe3f32604b4796cffa23',
      logoURI:
        'https://tokens.1inch.io/0x13748d548d95d78a3c83fe3f32604b4796cffa23.png',
      tags: ['tokens'],
    },
    '0xe111178a87a3bff0c8d18decba5798827539ae99': {
      symbol: 'EURS',
      name: 'STASIS EURS Token (PoS)',
      decimals: 2,
      address: '0xe111178a87a3bff0c8d18decba5798827539ae99',
      logoURI:
        'https://tokens.1inch.io/0xe111178a87a3bff0c8d18decba5798827539ae99.png',
      tags: ['tokens'],
    },
    '0x6c0ab120dbd11ba701aff6748568311668f63fe0': {
      symbol: 'APW',
      name: 'APWine Token (PoS)',
      decimals: 18,
      address: '0x6c0ab120dbd11ba701aff6748568311668f63fe0',
      logoURI:
        'https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png',
      tags: ['tokens'],
    },
    '0x8c92e38eca8210f4fcbf17f0951b198dd7668292': {
      symbol: 'DHT',
      name: 'dHedge DAO Token (PoS)',
      decimals: 18,
      address: '0x8c92e38eca8210f4fcbf17f0951b198dd7668292',
      logoURI:
        'https://tokens.1inch.io/0x8c92e38eca8210f4fcbf17f0951b198dd7668292.png',
      tags: ['tokens'],
    },
    '0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2': {
      symbol: 'NACHO',
      name: 'NACHO',
      decimals: 18,
      address: '0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2',
      logoURI:
        'https://tokens.1inch.io/0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2.png',
      tags: ['tokens'],
    },
    '0xf50d05a1402d0adafa880d36050736f9f6ee7dee': {
      symbol: 'INST',
      name: 'Instadapp (PoS)',
      decimals: 18,
      address: '0xf50d05a1402d0adafa880d36050736f9f6ee7dee',
      logoURI:
        'https://tokens.1inch.io/0xf50d05a1402d0adafa880d36050736f9f6ee7dee.png',
      tags: ['tokens'],
    },
    '0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8': {
      symbol: 'WIXS',
      name: 'Wrapped Ixs Token',
      decimals: 18,
      address: '0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8',
      logoURI:
        'https://tokens.1inch.io/0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xe0b52e49357fd4daf2c15e02058dce6bc0057db4': {
      symbol: 'agEUR',
      name: 'agEUR',
      decimals: 18,
      address: '0xe0b52e49357fd4daf2c15e02058dce6bc0057db4',
      logoURI:
        'https://tokens.1inch.io/0xe0b52e49357fd4daf2c15e02058dce6bc0057db4.png',
      tags: ['tokens'],
    },
    '0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a': {
      symbol: 'NFTI',
      name: 'Scalara NFT Index (PoS)',
      decimals: 18,
      address: '0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a',
      logoURI:
        'https://tokens.1inch.io/0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a.png',
      tags: ['tokens'],
    },
    '0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa': {
      symbol: 'deUSDC',
      name: 'deBridge USD Coin',
      decimals: 6,
      address: '0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa',
      logoURI:
        'https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png',
      eip2612: true,
      tags: ['tokens', 'PEG:USD'],
    },
    '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89': {
      symbol: 'FRAX',
      name: 'Frax',
      decimals: 18,
      address: '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89',
      logoURI:
        'https://tokens.1inch.io/0x45c32fa6df82ead1e2ef74d17b76547eddfaff89.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x5314ba045a459f63906aa7c76d9f337dcb7d6995': {
      symbol: 'FODL',
      name: 'Fodl (PoS)',
      decimals: 18,
      address: '0x5314ba045a459f63906aa7c76d9f337dcb7d6995',
      logoURI:
        'https://tokens.1inch.io/0x5314ba045a459f63906aa7c76d9f337dcb7d6995.png',
      tags: ['tokens'],
    },
    '0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762': {
      symbol: 'REQ',
      name: 'Request',
      decimals: 18,
      address: '0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762',
      logoURI:
        'https://tokens.1inch.io/0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x59b5654a17ac44f3068b3882f298881433bb07ef': {
      symbol: 'CHP',
      name: 'CoinPoker Chips (PoS)',
      decimals: 18,
      address: '0x59b5654a17ac44f3068b3882f298881433bb07ef',
      logoURI:
        'https://tokens.1inch.io/0x59b5654a17ac44f3068b3882f298881433bb07ef.png',
      tags: ['tokens'],
    },
    '0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7': {
      symbol: 'ABI',
      name: 'Abachi',
      decimals: 9,
      address: '0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7',
      logoURI:
        'https://tokens.1inch.io/0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x8623e66bea0dce41b6d47f9c44e806a115babae0': {
      symbol: 'NFTY',
      name: 'NFTY Token',
      decimals: 18,
      address: '0x8623e66bea0dce41b6d47f9c44e806a115babae0',
      logoURI:
        'https://tokens.1inch.io/0x8623e66bea0dce41b6d47f9c44e806a115babae0.png',
      tags: ['tokens'],
    },
    '0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8': {
      symbol: 'RIOT',
      name: 'RIOT (PoS)',
      decimals: 18,
      address: '0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8',
      logoURI:
        'https://tokens.1inch.io/0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8.png',
      tags: ['tokens'],
    },
    '0xba3cb8329d442e6f9eb70fafe1e214251df3d275': {
      symbol: 'SWASH',
      name: 'Swash Token',
      decimals: 18,
      address: '0xba3cb8329d442e6f9eb70fafe1e214251df3d275',
      logoURI:
        'https://tokens.1inch.io/0xba3cb8329d442e6f9eb70fafe1e214251df3d275.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x29f1e986fca02b7e54138c04c4f503dddd250558': {
      symbol: 'VSQ',
      name: 'VSQ',
      decimals: 9,
      address: '0x29f1e986fca02b7e54138c04c4f503dddd250558',
      logoURI:
        'https://tokens.1inch.io/0x29f1e986fca02b7e54138c04c4f503dddd250558.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d': {
      symbol: 'ORE',
      name: 'pTokens ORE (PoS)',
      decimals: 18,
      address: '0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d',
      logoURI:
        'https://tokens.1inch.io/0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d.png',
      tags: ['tokens'],
    },
    '0x7f280dac515121dcda3eac69eb4c13a52392cace': {
      symbol: 'FNC',
      name: 'Fancy Games',
      decimals: 18,
      address: '0x7f280dac515121dcda3eac69eb4c13a52392cace',
      logoURI:
        'https://tokens.1inch.io/0x7f280dac515121dcda3eac69eb4c13a52392cace.png',
      tags: ['tokens'],
    },
    '0x3ad707da309f3845cd602059901e39c4dcd66473': {
      symbol: 'ETH2x-FLI-P',
      name: 'ETH 2x Flexible Leverage Index',
      decimals: 18,
      address: '0x3ad707da309f3845cd602059901e39c4dcd66473',
      logoURI:
        'https://tokens.1inch.io/0x3ad707da309f3845cd602059901e39c4dcd66473.png',
      tags: ['tokens'],
    },
    '0xeeeeeb57642040be42185f49c52f7e9b38f8eeee': {
      symbol: 'ELK',
      name: 'Elk',
      decimals: 18,
      address: '0xeeeeeb57642040be42185f49c52f7e9b38f8eeee',
      logoURI:
        'https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9': {
      symbol: 'cxETH',
      name: 'CelsiusX Wrapped ETH',
      decimals: 18,
      address: '0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9',
      logoURI:
        'https://tokens.1inch.io/0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9.png',
      tags: ['tokens'],
    },
    '0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f': {
      symbol: 'GENE',
      name: 'GenomesDAO (PoS)',
      decimals: 18,
      address: '0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f',
      logoURI:
        'https://tokens.1inch.io/0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f.png',
      tags: ['tokens'],
    },
    '0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae': {
      symbol: 'PGX',
      name: 'Pegaxy Stone',
      decimals: 18,
      address: '0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae',
      logoURI:
        'https://tokens.1inch.io/0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae.png',
      tags: ['tokens'],
    },
    '0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe': {
      symbol: 'IXT',
      name: 'PlanetIX',
      decimals: 18,
      address: '0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe',
      logoURI:
        'https://tokens.1inch.io/0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe.png',
      tags: ['tokens'],
    },
    '0xbbba073c31bf03b8acf7c28ef0738decf3695683': {
      symbol: 'SAND',
      name: 'SAND',
      decimals: 18,
      address: '0xbbba073c31bf03b8acf7c28ef0738decf3695683',
      logoURI:
        'https://tokens.1inch.io/0xbbba073c31bf03b8acf7c28ef0738decf3695683.png',
      tags: ['tokens'],
    },
    '0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c': {
      symbol: 'ICE_2',
      name: 'Decentral Games ICE',
      decimals: 18,
      address: '0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c',
      logoURI:
        'https://tokens.1inch.io/0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c.png',
      displayedSymbol: 'ICE',
      tags: ['tokens'],
    },
    '0x50b728d8d964fd00c2d0aad81718b71311fef68a': {
      symbol: 'SNX',
      name: 'Synthetix Network Token (PoS)',
      decimals: 18,
      address: '0x50b728d8d964fd00c2d0aad81718b71311fef68a',
      logoURI:
        'https://tokens.1inch.io/0x50b728d8d964fd00c2d0aad81718b71311fef68a.png',
      tags: ['tokens'],
    },
    '0x229b1b6c23ff8953d663c4cbb519717e323a0a84': {
      symbol: 'BLOK',
      name: 'BLOK',
      decimals: 18,
      address: '0x229b1b6c23ff8953d663c4cbb519717e323a0a84',
      logoURI:
        'https://tokens.1inch.io/0x229b1b6c23ff8953d663c4cbb519717e323a0a84.png',
      tags: ['tokens'],
    },
    '0x3b56a704c01d650147ade2b8cee594066b3f9421': {
      symbol: 'FYN',
      name: 'Affyn',
      decimals: 18,
      address: '0x3b56a704c01d650147ade2b8cee594066b3f9421',
      logoURI:
        'https://tokens.1inch.io/0x3b56a704c01d650147ade2b8cee594066b3f9421.png',
      tags: ['tokens'],
    },
    '0x4e78011ce80ee02d2c3e649fb657e45898257815': {
      symbol: 'KLIMA',
      name: 'Klima DAO',
      decimals: 9,
      address: '0x4e78011ce80ee02d2c3e649fb657e45898257815',
      logoURI:
        'https://tokens.1inch.io/0x4e78011ce80ee02d2c3e649fb657e45898257815.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b': {
      symbol: 'AVAX',
      name: 'Avalanche Token',
      decimals: 18,
      address: '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b',
      logoURI:
        'https://tokens.1inch.io/0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b.png',
      tags: ['tokens'],
    },
    '0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4': {
      symbol: 'ROUTE (PoS)',
      name: 'Route',
      decimals: 18,
      address: '0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4',
      logoURI:
        'https://tokens.1inch.io/0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xef938b6da8576a896f6e0321ef80996f4890f9c4': {
      symbol: 'DG',
      name: 'Decentral Games (PoS)',
      decimals: 18,
      address: '0xef938b6da8576a896f6e0321ef80996f4890f9c4',
      logoURI:
        'https://tokens.1inch.io/0xef938b6da8576a896f6e0321ef80996f4890f9c4.png',
      tags: ['tokens'],
    },
    '0x2bc07124d8dac638e290f401046ad584546bc47b': {
      symbol: 'TOWER',
      name: 'TOWER',
      decimals: 18,
      address: '0x2bc07124d8dac638e290f401046ad584546bc47b',
      logoURI:
        'https://tokens.1inch.io/0x2bc07124d8dac638e290f401046ad584546bc47b.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x235737dbb56e8517391473f7c964db31fa6ef280': {
      symbol: 'KASTA',
      name: 'KastaToken',
      decimals: 18,
      address: '0x235737dbb56e8517391473f7c964db31fa6ef280',
      logoURI:
        'https://tokens.1inch.io/0x235737dbb56e8517391473f7c964db31fa6ef280.png',
      tags: ['tokens'],
    },
    '0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6': {
      symbol: 'DERC',
      name: 'DeRace Token',
      decimals: 18,
      address: '0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6',
      logoURI:
        'https://tokens.1inch.io/0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x980111ae1b84e50222c8843e3a7a038f36fecd2b': {
      symbol: 'STACK',
      name: 'StackOS',
      decimals: 18,
      address: '0x980111ae1b84e50222c8843e3a7a038f36fecd2b',
      logoURI:
        'https://tokens.1inch.io/0x980111ae1b84e50222c8843e3a7a038f36fecd2b.png',
      tags: ['tokens'],
    },
    '0x8765f05adce126d70bcdf1b0a48db573316662eb': {
      symbol: 'PLA',
      name: 'PlayDapp Token (PoS)',
      decimals: 18,
      address: '0x8765f05adce126d70bcdf1b0a48db573316662eb',
      logoURI:
        'https://tokens.1inch.io/0x8765f05adce126d70bcdf1b0a48db573316662eb.png',
      tags: ['tokens'],
    },
    '0xe8377a076adabb3f9838afb77bee96eac101ffb1': {
      symbol: 'MSU',
      name: 'MetaSoccer Universe',
      decimals: 18,
      address: '0xe8377a076adabb3f9838afb77bee96eac101ffb1',
      logoURI:
        'https://tokens.1inch.io/0xe8377a076adabb3f9838afb77bee96eac101ffb1.png',
      tags: ['tokens'],
    },
    '0x5d47baba0d66083c52009271faf3f50dcc01023c': {
      symbol: 'BANANA',
      name: 'ApeSwapFinance Banana',
      decimals: 18,
      address: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
      logoURI:
        'https://tokens.1inch.io/0x5d47baba0d66083c52009271faf3f50dcc01023c.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xefee2de82343be622dcb4e545f75a3b9f50c272d': {
      symbol: 'TRY',
      name: 'TryHards',
      decimals: 18,
      address: '0xefee2de82343be622dcb4e545f75a3b9f50c272d',
      logoURI:
        'https://tokens.1inch.io/0xefee2de82343be622dcb4e545f75a3b9f50c272d.png',
      tags: ['tokens'],
    },
    '0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f': {
      symbol: 'VOXEL',
      name: 'VOXEL Token',
      decimals: 18,
      address: '0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f',
      logoURI:
        'https://tokens.1inch.io/0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f.png',
      tags: ['tokens'],
    },
    '0x723b17718289a91af252d616de2c77944962d122': {
      symbol: 'GAIA',
      name: 'GAIA Everworld',
      decimals: 18,
      address: '0x723b17718289a91af252d616de2c77944962d122',
      logoURI:
        'https://tokens.1inch.io/0x723b17718289a91af252d616de2c77944962d122.png',
      tags: ['tokens'],
    },
    '0xa3c322ad15218fbfaed26ba7f616249f7705d945': {
      symbol: 'MV',
      name: 'Metaverse (PoS)',
      decimals: 18,
      address: '0xa3c322ad15218fbfaed26ba7f616249f7705d945',
      logoURI:
        'https://tokens.1inch.io/0xa3c322ad15218fbfaed26ba7f616249f7705d945.png',
      tags: ['tokens'],
    },
    '0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195': {
      symbol: 'gOHM',
      name: 'Governance OHM',
      decimals: 18,
      address: '0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195',
      logoURI:
        'https://tokens.1inch.io/0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x554f074d9ccda8f483d1812d4874cbebd682644e': {
      symbol: '$ANRX',
      name: 'AnRKey X (PoS)',
      decimals: 18,
      address: '0x554f074d9ccda8f483d1812d4874cbebd682644e',
      logoURI:
        'https://tokens.1inch.io/0x554f074d9ccda8f483d1812d4874cbebd682644e.png',
      tags: ['tokens'],
    },
    '0x8f9e8e833a69aa467e42c46cca640da84dd4585f': {
      symbol: 'CHAMP',
      name: 'NFT Champions',
      decimals: 8,
      address: '0x8f9e8e833a69aa467e42c46cca640da84dd4585f',
      logoURI:
        'https://tokens.1inch.io/0x8f9e8e833a69aa467e42c46cca640da84dd4585f.png',
      tags: ['tokens'],
    },
    '0xc004e2318722ea2b15499d6375905d75ee5390b8': {
      symbol: 'KOM',
      name: 'Kommunitas',
      decimals: 8,
      address: '0xc004e2318722ea2b15499d6375905d75ee5390b8',
      logoURI:
        'https://tokens.1inch.io/0xc004e2318722ea2b15499d6375905d75ee5390b8.png',
      tags: ['tokens'],
    },
    '0x42d61d766b85431666b39b89c43011f24451bff6': {
      symbol: 'PSP',
      name: 'ParaSwap (PoS)',
      decimals: 18,
      address: '0x42d61d766b85431666b39b89c43011f24451bff6',
      logoURI:
        'https://tokens.1inch.io/0x42d61d766b85431666b39b89c43011f24451bff6.png',
      tags: ['tokens'],
    },
    '0xe5417af564e4bfda1c483642db72007871397896': {
      symbol: 'GNS',
      name: 'Gains Network',
      decimals: 18,
      address: '0xe5417af564e4bfda1c483642db72007871397896',
      logoURI:
        'https://tokens.1inch.io/0xe5417af564e4bfda1c483642db72007871397896.png',
      tags: ['tokens'],
    },
    '0xd99bafe5031cc8b345cb2e8c80135991f12d7130': {
      symbol: 'FRM',
      name: 'Ferrum Network Token',
      decimals: 18,
      address: '0xd99bafe5031cc8b345cb2e8c80135991f12d7130',
      logoURI:
        'https://tokens.1inch.io/0xd99bafe5031cc8b345cb2e8c80135991f12d7130.png',
      tags: ['tokens'],
    },
    '0x70c006878a5a50ed185ac4c87d837633923de296': {
      symbol: 'REVV',
      name: 'REVV',
      decimals: 18,
      address: '0x70c006878a5a50ed185ac4c87d837633923de296',
      logoURI:
        'https://tokens.1inch.io/0x70c006878a5a50ed185ac4c87d837633923de296.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x0d0b8488222f7f83b23e365320a4021b12ead608': {
      symbol: 'NXTT',
      name: 'NextEarthToken',
      decimals: 18,
      address: '0x0d0b8488222f7f83b23e365320a4021b12ead608',
      logoURI:
        'https://tokens.1inch.io/0x0d0b8488222f7f83b23e365320a4021b12ead608.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x071ac29d569a47ebffb9e57517f855cb577dcc4c': {
      symbol: 'GFC',
      name: 'GCOIN',
      decimals: 18,
      address: '0x071ac29d569a47ebffb9e57517f855cb577dcc4c',
      logoURI:
        'https://tokens.1inch.io/0x071ac29d569a47ebffb9e57517f855cb577dcc4c.png',
      tags: ['tokens'],
    },
    '0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f': {
      symbol: 'USD+',
      name: 'USD+',
      decimals: 6,
      address: '0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f',
      logoURI:
        'https://tokens.1inch.io/0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f.png',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59': {
      symbol: 'ICE_3',
      name: 'IceToken',
      decimals: 18,
      address: '0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59',
      logoURI:
        'https://tokens.1inch.io/0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59.png',
      eip2612: true,
      displayedSymbol: 'ICE',
      tags: ['tokens'],
    },
    '0xc10358f062663448a3489fc258139944534592ac': {
      symbol: 'BCMC',
      name: 'Blockchain Monster Coin',
      decimals: 18,
      address: '0xc10358f062663448a3489fc258139944534592ac',
      logoURI:
        'https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png',
      tags: ['tokens'],
    },
    '0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a': {
      symbol: 'UM',
      name: 'Continuum',
      decimals: 18,
      address: '0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a',
      logoURI:
        'https://tokens.1inch.io/0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a.png',
      tags: ['tokens'],
    },
    '0xcf32822ff397ef82425153a9dcb726e5ff61dca7': {
      symbol: 'GMEE',
      name: 'GAMEE',
      decimals: 18,
      address: '0xcf32822ff397ef82425153a9dcb726e5ff61dca7',
      logoURI:
        'https://tokens.1inch.io/0xcf32822ff397ef82425153a9dcb726e5ff61dca7.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174': {
      symbol: 'USDC',
      name: 'USD Coin (PoS)',
      decimals: 6,
      address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      logoURI:
        'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
      tags: ['tokens', 'PEG:USD'],
    },
    '0xe7804d91dfcde7f776c90043e03eaa6df87e6395': {
      symbol: 'DFX',
      name: 'DFX Token (PoS)',
      decimals: 18,
      address: '0xe7804d91dfcde7f776c90043e03eaa6df87e6395',
      logoURI:
        'https://tokens.1inch.io/0xe7804d91dfcde7f776c90043e03eaa6df87e6395.png',
      tags: ['tokens'],
    },
    '0xaa7dbd1598251f856c12f63557a4c4397c253cea': {
      symbol: 'MCO2',
      name: 'Moss Carbon Credit (PoS)',
      decimals: 18,
      address: '0xaa7dbd1598251f856c12f63557a4c4397c253cea',
      logoURI:
        'https://tokens.1inch.io/0xaa7dbd1598251f856c12f63557a4c4397c253cea.png',
      tags: ['tokens'],
    },
    '0x23e8b6a3f6891254988b84da3738d2bfe5e703b9': {
      symbol: 'WELT',
      name: 'FABWELT',
      decimals: 18,
      address: '0x23e8b6a3f6891254988b84da3738d2bfe5e703b9',
      logoURI:
        'https://tokens.1inch.io/0x23e8b6a3f6891254988b84da3738d2bfe5e703b9.png',
      tags: ['tokens'],
    },
    '0xfe712251173a2cd5f5be2b46bb528328ea3565e1': {
      symbol: 'MVI',
      name: 'Metaverse Index (PoS)',
      decimals: 18,
      address: '0xfe712251173a2cd5f5be2b46bb528328ea3565e1',
      logoURI:
        'https://tokens.1inch.io/0xfe712251173a2cd5f5be2b46bb528328ea3565e1.png',
      tags: ['tokens'],
    },
    '0x34d4ab47bee066f361fa52d792e69ac7bd05ee23': {
      symbol: 'AURUM',
      name: 'RaiderAurum',
      decimals: 18,
      address: '0x34d4ab47bee066f361fa52d792e69ac7bd05ee23',
      logoURI:
        'https://tokens.1inch.io/0x34d4ab47bee066f361fa52d792e69ac7bd05ee23.png',
      tags: ['tokens'],
    },
    '0xcd7361ac3307d1c5a46b63086a90742ff44c63b3': {
      symbol: 'RAIDER',
      name: 'RaiderToken',
      decimals: 18,
      address: '0xcd7361ac3307d1c5a46b63086a90742ff44c63b3',
      logoURI:
        'https://tokens.1inch.io/0xcd7361ac3307d1c5a46b63086a90742ff44c63b3.png',
      tags: ['tokens'],
    },
    '0x90f3edc7d5298918f7bb51694134b07356f7d0c7': {
      symbol: 'DDAO',
      name: 'DEFI HUNTERS DAO Token',
      decimals: 18,
      address: '0x90f3edc7d5298918f7bb51694134b07356f7d0c7',
      logoURI:
        'https://tokens.1inch.io/0x90f3edc7d5298918f7bb51694134b07356f7d0c7.png',
      tags: ['tokens'],
    },
    '0xd3b71117e6c1558c1553305b44988cd944e97300': {
      symbol: 'YEL',
      name: 'YEL Token',
      decimals: 18,
      address: '0xd3b71117e6c1558c1553305b44988cd944e97300',
      logoURI:
        'https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png',
      tags: ['tokens'],
    },
    '0x8839e639f210b80ffea73aedf51baed8dac04499': {
      symbol: 'DWEB',
      name: 'DecentraWeb (PoS)',
      decimals: 18,
      address: '0x8839e639f210b80ffea73aedf51baed8dac04499',
      logoURI:
        'https://tokens.1inch.io/0x8839e639f210b80ffea73aedf51baed8dac04499.png',
      tags: ['tokens'],
    },
    '0x1599fe55cda767b1f631ee7d414b41f5d6de393d': {
      symbol: 'MILK',
      name: 'Milk',
      decimals: 18,
      address: '0x1599fe55cda767b1f631ee7d414b41f5d6de393d',
      logoURI:
        'https://tokens.1inch.io/0x1599fe55cda767b1f631ee7d414b41f5d6de393d.png',
      tags: ['tokens'],
    },
    '0x00e5646f60ac6fb446f621d146b6e1886f002905': {
      symbol: 'RAI',
      name: 'Rai Reflex Index (PoS)',
      decimals: 18,
      address: '0x00e5646f60ac6fb446f621d146b6e1886f002905',
      logoURI:
        'https://tokens.1inch.io/0x00e5646f60ac6fb446f621d146b6e1886f002905.png',
      tags: ['tokens'],
    },
    '0x8a0e8b4b0903929f47c3ea30973940d4a9702067': {
      symbol: 'INSUR',
      name: 'InsurAce (PoS)',
      decimals: 18,
      address: '0x8a0e8b4b0903929f47c3ea30973940d4a9702067',
      logoURI:
        'https://tokens.1inch.io/0x8a0e8b4b0903929f47c3ea30973940d4a9702067.png',
      tags: ['tokens'],
    },
    '0x5fe2b58c013d7601147dcdd68c143a77499f5531': {
      symbol: 'GRT',
      name: 'Graph Token (PoS)',
      decimals: 18,
      address: '0x5fe2b58c013d7601147dcdd68c143a77499f5531',
      logoURI:
        'https://tokens.1inch.io/0x5fe2b58c013d7601147dcdd68c143a77499f5531.png',
      tags: ['tokens'],
    },
    '0x187ae45f2d361cbce37c6a8622119c91148f261b': {
      symbol: 'POLX',
      name: 'Polylastic',
      decimals: 18,
      address: '0x187ae45f2d361cbce37c6a8622119c91148f261b',
      logoURI:
        'https://tokens.1inch.io/0x187ae45f2d361cbce37c6a8622119c91148f261b.png',
      tags: ['tokens'],
    },
    '0x1379e8886a944d2d9d440b3d88df536aea08d9f3': {
      symbol: 'MYST',
      name: 'Mysterium (PoS)',
      decimals: 18,
      address: '0x1379e8886a944d2d9d440b3d88df536aea08d9f3',
      logoURI:
        'https://tokens.1inch.io/0x1379e8886a944d2d9d440b3d88df536aea08d9f3.png',
      tags: ['tokens'],
    },
    '0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6': {
      symbol: 'GEO$',
      name: 'GEOPOLY',
      decimals: 18,
      address: '0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6',
      logoURI:
        'https://tokens.1inch.io/0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6.png',
      tags: ['tokens'],
    },
    '0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591': {
      symbol: 'PRXY',
      name: 'Proxy',
      decimals: 18,
      address: '0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591',
      logoURI:
        'https://tokens.1inch.io/0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591.png',
      tags: ['tokens'],
    },
    '0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb': {
      symbol: 'NEX',
      name: 'Nash Exchange Token (PoS)',
      decimals: 8,
      address: '0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb',
      logoURI:
        'https://tokens.1inch.io/0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb.png',
      tags: ['tokens'],
    },
    '0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128': {
      symbol: 'PAR',
      name: 'PAR Stablecoin',
      decimals: 18,
      address: '0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128',
      logoURI:
        'https://tokens.1inch.io/0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128.png',
      tags: ['tokens'],
    },
    '0xc250e9987a032acac293d838726c511e6e1c029d': {
      symbol: 'CLAM',
      name: 'Otter Clam',
      decimals: 9,
      address: '0xc250e9987a032acac293d838726c511e6e1c029d',
      logoURI:
        'https://tokens.1inch.io/0xc250e9987a032acac293d838726c511e6e1c029d.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x88c949b4eb85a90071f2c0bef861bddee1a7479d': {
      symbol: 'mSHEESHA',
      name: 'SHEESHA POLYGON',
      decimals: 18,
      address: '0x88c949b4eb85a90071f2c0bef861bddee1a7479d',
      logoURI:
        'https://tokens.1inch.io/0x88c949b4eb85a90071f2c0bef861bddee1a7479d.png',
      tags: ['tokens'],
    },
    '0x51b5619f5180e333d18b6310c8d540aea43a0371': {
      symbol: 'VHC',
      name: 'Vault Hill City (PoS)',
      decimals: 18,
      address: '0x51b5619f5180e333d18b6310c8d540aea43a0371',
      logoURI:
        'https://tokens.1inch.io/0x51b5619f5180e333d18b6310c8d540aea43a0371.png',
      tags: ['tokens'],
    },
    '0x39ab6574c289c3ae4d88500eec792ab5b947a5eb': {
      symbol: 'DYST',
      name: 'Dystopia token',
      decimals: 18,
      address: '0x39ab6574c289c3ae4d88500eec792ab5b947a5eb',
      logoURI:
        'https://tokens.1inch.io/0x39ab6574c289c3ae4d88500eec792ab5b947a5eb.png',
      tags: ['tokens'],
    },
    '0x82362ec182db3cf7829014bc61e9be8a2e82868a': {
      symbol: 'MESH',
      name: 'Meshswap Protocol',
      decimals: 18,
      address: '0x82362ec182db3cf7829014bc61e9be8a2e82868a',
      logoURI:
        'https://tokens.1inch.io/0x82362ec182db3cf7829014bc61e9be8a2e82868a.png',
      tags: ['tokens'],
    },
    '0x228b5c21ac00155cf62c57bcc704c0da8187950b': {
      symbol: 'NXD',
      name: 'Nexus Dubai',
      decimals: 18,
      address: '0x228b5c21ac00155cf62c57bcc704c0da8187950b',
      logoURI:
        'https://tokens.1inch.io/0x228b5c21ac00155cf62c57bcc704c0da8187950b.png',
      tags: ['tokens'],
    },
    '0xa55870278d6389ec5b524553d03c04f5677c061e': {
      symbol: 'XCAD',
      name: 'XCAD Token (PoS)',
      decimals: 18,
      address: '0xa55870278d6389ec5b524553d03c04f5677c061e',
      logoURI:
        'https://tokens.1inch.io/0xa55870278d6389ec5b524553d03c04f5677c061e.png',
      tags: ['tokens'],
    },
    '0x04b33078ea1aef29bf3fb29c6ab7b200c58ea126': {
      symbol: 'SAFLE',
      name: 'Safle',
      decimals: 18,
      address: '0x04b33078ea1aef29bf3fb29c6ab7b200c58ea126',
      logoURI:
        'https://tokens.1inch.io/0x04b33078ea1aef29bf3fb29c6ab7b200c58ea126.png',
      tags: ['tokens'],
    },
    '0xf4c83080e80ae530d6f8180572cbbf1ac9d5d435': {
      symbol: 'BLANK',
      name: 'GoBlank Token (PoS)',
      decimals: 18,
      address: '0xf4c83080e80ae530d6f8180572cbbf1ac9d5d435',
      logoURI:
        'https://tokens.1inch.io/0xf4c83080e80ae530d6f8180572cbbf1ac9d5d435.png',
      tags: ['tokens'],
    },
    '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756': {
      symbol: 'TUSD',
      name: 'TrueUSD (PoS)',
      decimals: 18,
      address: '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756',
      logoURI:
        'https://tokens.1inch.io/0x2e1ad108ff1d8c782fcbbb89aad783ac49586756.png',
      tags: ['tokens', 'PEG:USD'],
    },
    '0xdda40cdfe4a0090f42ff49f264a831402adb801a': {
      symbol: 'DOGIRA',
      name: 'Dogira',
      decimals: 9,
      address: '0xdda40cdfe4a0090f42ff49f264a831402adb801a',
      logoURI:
        'https://tokens.1inch.io/0xdda40cdfe4a0090f42ff49f264a831402adb801a.png',
      tags: ['tokens'],
    },
    '0x8c4476dfec8e7eedf2de3e9e9461b7c14c828d46': {
      symbol: 'UNIX',
      name: 'UniX Gaming (PoS)',
      decimals: 18,
      address: '0x8c4476dfec8e7eedf2de3e9e9461b7c14c828d46',
      logoURI:
        'https://tokens.1inch.io/0x8c4476dfec8e7eedf2de3e9e9461b7c14c828d46.png',
      tags: ['tokens'],
    },
    '0x02649c1ff4296038de4b9ba8f491b42b940a8252': {
      symbol: 'XGEM',
      name: 'Exchange Genesis Ethlas Medium',
      decimals: 18,
      address: '0x02649c1ff4296038de4b9ba8f491b42b940a8252',
      logoURI:
        'https://tokens.1inch.io/0x02649c1ff4296038de4b9ba8f491b42b940a8252.png',
      tags: ['tokens'],
    },
    '0xb9638272ad6998708de56bbc0a290a1de534a578': {
      symbol: 'IQ',
      name: 'Everipedia IQ (PoS)',
      decimals: 18,
      address: '0xb9638272ad6998708de56bbc0a290a1de534a578',
      logoURI:
        'https://tokens.1inch.io/0xb9638272ad6998708de56bbc0a290a1de534a578.png',
      tags: ['tokens'],
    },
    '0x614389eaae0a6821dc49062d56bda3d9d45fa2ff': {
      symbol: 'ORBS',
      name: 'Orbs (PoS)',
      decimals: 18,
      address: '0x614389eaae0a6821dc49062d56bda3d9d45fa2ff',
      logoURI:
        'https://tokens.1inch.io/0x614389eaae0a6821dc49062d56bda3d9d45fa2ff.png',
      tags: ['tokens'],
    },
    '0x30de46509dbc3a491128f97be0aaf70dc7ff33cb': {
      symbol: 'XZAR',
      name: 'South African Tether (PoS)',
      decimals: 18,
      address: '0x30de46509dbc3a491128f97be0aaf70dc7ff33cb',
      logoURI:
        'https://tokens.1inch.io/0x30de46509dbc3a491128f97be0aaf70dc7ff33cb.png',
      tags: ['tokens'],
    },
    '0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978': {
      symbol: 'PECO',
      name: 'Polygon Ecosystem Index',
      decimals: 18,
      address: '0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978',
      logoURI:
        'https://tokens.1inch.io/0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978.png',
      tags: ['tokens'],
    },
    '0xee9801669c6138e84bd50deb500827b776777d28': {
      symbol: 'O3',
      name: 'O3 Swap Token',
      decimals: 18,
      address: '0xee9801669c6138e84bd50deb500827b776777d28',
      logoURI:
        'https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png',
      tags: ['tokens'],
    },
    '0xd4945a3d0de9923035521687d4bf18cc9b0c7c2a': {
      symbol: 'LUXY',
      name: 'LUXY',
      decimals: 18,
      address: '0xd4945a3d0de9923035521687d4bf18cc9b0c7c2a',
      logoURI:
        'https://tokens.1inch.io/0xd4945a3d0de9923035521687d4bf18cc9b0c7c2a.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c': {
      symbol: 'jEUR',
      name: 'Jarvis Synthetic Euro',
      decimals: 18,
      address: '0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c',
      logoURI:
        'https://tokens.1inch.io/0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x8d520c8e66091cfd6743fe37fbe3a09505616c4b': {
      symbol: 'COT',
      name: 'CosplayToken (PoS)',
      decimals: 18,
      address: '0x8d520c8e66091cfd6743fe37fbe3a09505616c4b',
      logoURI:
        'https://tokens.1inch.io/0x8d520c8e66091cfd6743fe37fbe3a09505616c4b.png',
      tags: ['tokens'],
    },
    '0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7': {
      symbol: 'MASK',
      name: 'Mask Network (PoS)',
      decimals: 18,
      address: '0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7',
      logoURI:
        'https://tokens.1inch.io/0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7.png',
      tags: ['tokens'],
    },
    '0x695fc8b80f344411f34bdbcb4e621aa69ada384b': {
      symbol: 'NITRO',
      name: 'Nitro (PoS)',
      decimals: 18,
      address: '0x695fc8b80f344411f34bdbcb4e621aa69ada384b',
      logoURI:
        'https://tokens.1inch.io/0x695fc8b80f344411f34bdbcb4e621aa69ada384b.png',
      tags: ['tokens'],
    },
    '0xdb725f82818de83e99f1dac22a9b5b51d3d04dd4': {
      symbol: 'GET',
      name: 'GET Protocol (PoS)',
      decimals: 18,
      address: '0xdb725f82818de83e99f1dac22a9b5b51d3d04dd4',
      logoURI:
        'https://tokens.1inch.io/0xdb725f82818de83e99f1dac22a9b5b51d3d04dd4.png',
      tags: ['tokens'],
    },
    '0xd78c475133731cd54dadcb430f7aae4f03c1e660': {
      symbol: 'HOPE',
      name: 'Firebird.Finance',
      decimals: 18,
      address: '0xd78c475133731cd54dadcb430f7aae4f03c1e660',
      logoURI:
        'https://tokens.1inch.io/0xd78c475133731cd54dadcb430f7aae4f03c1e660.png',
      tags: ['tokens'],
    },
    '0xa936e1f747d14fc30d08272d065c8aef4ab7f810': {
      symbol: 'WLD',
      name: 'wLitiDAO',
      decimals: 18,
      address: '0xa936e1f747d14fc30d08272d065c8aef4ab7f810',
      logoURI:
        'https://tokens.1inch.io/0xa936e1f747d14fc30d08272d065c8aef4ab7f810.png',
      tags: ['tokens'],
    },
    '0x3a9a81d576d83ff21f26f325066054540720fc34': {
      symbol: 'DATA',
      name: 'Streamr',
      decimals: 18,
      address: '0x3a9a81d576d83ff21f26f325066054540720fc34',
      logoURI:
        'https://tokens.1inch.io/0x3a9a81d576d83ff21f26f325066054540720fc34.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015': {
      symbol: 'THX',
      name: 'THX Network (PoS)',
      decimals: 18,
      address: '0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015',
      logoURI:
        'https://tokens.1inch.io/0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015.png',
      tags: ['tokens'],
    },
    '0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35': {
      symbol: 'MASQ',
      name: 'MASQ (PoS)',
      decimals: 18,
      address: '0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35',
      logoURI:
        'https://tokens.1inch.io/0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35.png',
      tags: ['tokens'],
    },
    '0x44d09156c7b4acf0c64459fbcced7613f5519918': {
      symbol: '$KMC',
      name: '$KMC',
      decimals: 18,
      address: '0x44d09156c7b4acf0c64459fbcced7613f5519918',
      logoURI:
        'https://tokens.1inch.io/0x44d09156c7b4acf0c64459fbcced7613f5519918.png',
      tags: ['tokens'],
    },
    '0x598e49f01befeb1753737934a5b11fea9119c796': {
      symbol: 'ADS',
      name: 'Adshares (PoS)',
      decimals: 11,
      address: '0x598e49f01befeb1753737934a5b11fea9119c796',
      logoURI:
        'https://tokens.1inch.io/0x598e49f01befeb1753737934a5b11fea9119c796.png',
      tags: ['tokens'],
    },
    '0x300211def2a644b036a9bdd3e58159bb2074d388': {
      symbol: 'CIOTX',
      name: 'Crosschain IOTX',
      decimals: 18,
      address: '0x300211def2a644b036a9bdd3e58159bb2074d388',
      logoURI:
        'https://tokens.1inch.io/0x300211def2a644b036a9bdd3e58159bb2074d388.png',
      tags: ['tokens'],
    },
    '0x8346ab8d5ea7a9db0209aed2d1806afa0e2c4c21': {
      symbol: 'MOD',
      name: 'MODEFI (PoS)',
      decimals: 18,
      address: '0x8346ab8d5ea7a9db0209aed2d1806afa0e2c4c21',
      logoURI:
        'https://tokens.1inch.io/0x8346ab8d5ea7a9db0209aed2d1806afa0e2c4c21.png',
      tags: ['tokens'],
    },
    '0x64ca1571d1476b7a21c5aaf9f1a750a193a103c0': {
      symbol: 'BONDLY',
      name: 'Bondly (PoS)',
      decimals: 18,
      address: '0x64ca1571d1476b7a21c5aaf9f1a750a193a103c0',
      logoURI:
        'https://tokens.1inch.io/0x64ca1571d1476b7a21c5aaf9f1a750a193a103c0.png',
      tags: ['tokens'],
    },
    '0x82a0e6c02b91ec9f6ff943c0a933c03dbaa19689': {
      symbol: 'WNT',
      name: 'Wicrypt Network Token',
      decimals: 18,
      address: '0x82a0e6c02b91ec9f6ff943c0a933c03dbaa19689',
      logoURI:
        'https://tokens.1inch.io/0x82a0e6c02b91ec9f6ff943c0a933c03dbaa19689.png',
      tags: ['tokens'],
    },
    '0xcfb54a6d2da14abecd231174fc5735b4436965d8': {
      symbol: 'CYC',
      name: 'Cyclone Protocol',
      decimals: 18,
      address: '0xcfb54a6d2da14abecd231174fc5735b4436965d8',
      logoURI:
        'https://tokens.1inch.io/0xcfb54a6d2da14abecd231174fc5735b4436965d8.png',
      tags: ['tokens'],
    },
    '0xc5b57e9a1e7914fda753a88f24e5703e617ee50c': {
      symbol: 'POP',
      name: 'Popcorn (PoS)',
      decimals: 18,
      address: '0xc5b57e9a1e7914fda753a88f24e5703e617ee50c',
      logoURI:
        'https://tokens.1inch.io/0xc5b57e9a1e7914fda753a88f24e5703e617ee50c.png',
      tags: ['tokens'],
    },
    '0xd125443f38a69d776177c2b9c041f462936f8218': {
      symbol: 'FBX',
      name: 'FireBotToken',
      decimals: 18,
      address: '0xd125443f38a69d776177c2b9c041f462936f8218',
      logoURI:
        'https://tokens.1inch.io/0xd125443f38a69d776177c2b9c041f462936f8218.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x65a05db8322701724c197af82c9cae41195b0aa8': {
      symbol: 'FOX',
      name: 'FOX (PoS)',
      decimals: 18,
      address: '0x65a05db8322701724c197af82c9cae41195b0aa8',
      logoURI:
        'https://tokens.1inch.io/0x65a05db8322701724c197af82c9cae41195b0aa8.png',
      tags: ['tokens'],
    },
    '0xa69d14d6369e414a32a5c7e729b7afbafd285965': {
      symbol: 'GCR',
      name: 'Global Coin Research (PoS)',
      decimals: 4,
      address: '0xa69d14d6369e414a32a5c7e729b7afbafd285965',
      logoURI:
        'https://tokens.1inch.io/0xa69d14d6369e414a32a5c7e729b7afbafd285965.png',
      tags: ['tokens'],
    },
    '0xbd1463f02f61676d53fd183c2b19282bff93d099': {
      symbol: 'jCHF',
      name: 'Jarvis Synthetic Swiss Franc',
      decimals: 18,
      address: '0xbd1463f02f61676d53fd183c2b19282bff93d099',
      logoURI:
        'https://tokens.1inch.io/0xbd1463f02f61676d53fd183c2b19282bff93d099.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x8f6196901a4a153d8ee8f3fa779a042f6092d908': {
      symbol: 'SALE',
      name: 'DxSale.Network (PoS)',
      decimals: 18,
      address: '0x8f6196901a4a153d8ee8f3fa779a042f6092d908',
      logoURI:
        'https://tokens.1inch.io/0x8f6196901a4a153d8ee8f3fa779a042f6092d908.png',
      tags: ['tokens'],
    },
    '0x89ef0900b0a6b5548ab2ff58ef588f9433b5fcf5': {
      symbol: 'CRBN',
      name: 'Carbon (PoS)',
      decimals: 18,
      address: '0x89ef0900b0a6b5548ab2ff58ef588f9433b5fcf5',
      logoURI:
        'https://tokens.1inch.io/0x89ef0900b0a6b5548ab2ff58ef588f9433b5fcf5.png',
      tags: ['tokens'],
    },
    '0x431d5dff03120afa4bdf332c61a6e1766ef37bdb': {
      symbol: 'JPYC',
      name: 'JPY Coin',
      decimals: 18,
      address: '0x431d5dff03120afa4bdf332c61a6e1766ef37bdb',
      logoURI:
        'https://tokens.1inch.io/0x431d5dff03120afa4bdf332c61a6e1766ef37bdb.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x0c9c7712c83b3c70e7c5e11100d33d9401bdf9dd': {
      symbol: 'WOMBAT',
      name: 'Wombat',
      decimals: 18,
      address: '0x0c9c7712c83b3c70e7c5e11100d33d9401bdf9dd',
      logoURI:
        'https://tokens.1inch.io/0x0c9c7712c83b3c70e7c5e11100d33d9401bdf9dd.png',
      tags: ['tokens'],
    },
    '0x7f67639ffc8c93dd558d452b8920b28815638c44': {
      symbol: 'LIME',
      name: 'iMe Lab',
      decimals: 18,
      address: '0x7f67639ffc8c93dd558d452b8920b28815638c44',
      logoURI:
        'https://tokens.1inch.io/0x7f67639ffc8c93dd558d452b8920b28815638c44.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xfa68fb4628dff1028cfec22b4162fccd0d45efb6': {
      symbol: 'MaticX',
      name: 'Liquid Staking Matic (PoS)',
      decimals: 18,
      address: '0xfa68fb4628dff1028cfec22b4162fccd0d45efb6',
      logoURI:
        'https://tokens.1inch.io/0xfa68fb4628dff1028cfec22b4162fccd0d45efb6.png',
      tags: ['tokens'],
    },
    '0xcc2a9051e904916047c26c90f41c000d4f273456': {
      symbol: 'oXRP',
      name: 'Orbit Bridge Polygon XRP Token',
      decimals: 6,
      address: '0xcc2a9051e904916047c26c90f41c000d4f273456',
      logoURI:
        'https://tokens.1inch.io/0xcc2a9051e904916047c26c90f41c000d4f273456.png',
      tags: ['tokens'],
    },
    '0x5bef2617ecca9a39924c09017c5f1e25efbb3ba8': {
      symbol: 'oUSDC',
      name: 'Orbit Bridge Polygon USD Coin',
      decimals: 6,
      address: '0x5bef2617ecca9a39924c09017c5f1e25efbb3ba8',
      logoURI:
        'https://tokens.1inch.io/0x5bef2617ecca9a39924c09017c5f1e25efbb3ba8.png',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x957da9ebbcdc97dc4a8c274dd762ec2ab665e15f': {
      symbol: 'oUSDT',
      name: 'Orbit Bridge Polygon Tether USD',
      decimals: 6,
      address: '0x957da9ebbcdc97dc4a8c274dd762ec2ab665e15f',
      logoURI:
        'https://tokens.1inch.io/0x957da9ebbcdc97dc4a8c274dd762ec2ab665e15f.png',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x8ece0a50a025a7e13398212a5bed2ded11959949': {
      symbol: 'oDAI',
      name: 'Orbit Bridge Polygon Dai',
      decimals: 18,
      address: '0x8ece0a50a025a7e13398212a5bed2ded11959949',
      logoURI:
        'https://tokens.1inch.io/0x8ece0a50a025a7e13398212a5bed2ded11959949.png',
      tags: ['tokens'],
    },
    '0x0a02d33031917d836bd7af02f9f7f6c74d67805f': {
      symbol: 'oKLAY',
      name: 'Orbit Bridge Polygon Klay',
      decimals: 18,
      address: '0x0a02d33031917d836bd7af02f9f7f6c74d67805f',
      logoURI:
        'https://tokens.1inch.io/0x0a02d33031917d836bd7af02f9f7f6c74d67805f.png',
      tags: ['tokens'],
    },
    '0x428360b02c1269bc1c79fbc399ad31d58c1e8fda': {
      symbol: 'DEFIT',
      name: 'Digital Fitness',
      decimals: 18,
      address: '0x428360b02c1269bc1c79fbc399ad31d58c1e8fda',
      logoURI:
        'https://tokens.1inch.io/0x428360b02c1269bc1c79fbc399ad31d58c1e8fda.png',
      tags: ['tokens'],
    },
    '0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d': {
      symbol: 'SNP',
      name: 'Synapse Network',
      decimals: 18,
      address: '0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d',
      logoURI:
        'https://tokens.1inch.io/0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xd838290e877e0188a4a44700463419ed96c16107': {
      symbol: 'NCT',
      name: 'Toucan Protocol: Nature Carbon Tonne',
      decimals: 18,
      address: '0xd838290e877e0188a4a44700463419ed96c16107',
      logoURI:
        'https://tokens.1inch.io/0xd838290e877e0188a4a44700463419ed96c16107.png',
      tags: ['tokens'],
    },
    '0x2f800db0fdb5223b3c3f354886d907a671414a7f': {
      symbol: 'BCT',
      name: 'Toucan Protocol: Base Carbon Tonne',
      decimals: 18,
      address: '0x2f800db0fdb5223b3c3f354886d907a671414a7f',
      logoURI:
        'https://tokens.1inch.io/0x2f800db0fdb5223b3c3f354886d907a671414a7f.png',
      tags: ['tokens'],
    },
    '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4': {
      symbol: 'stMATIC',
      name: 'Staked MATIC (PoS)',
      decimals: 18,
      address: '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4',
      logoURI:
        'https://tokens.1inch.io/0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4.png',
      tags: ['tokens', 'PEG:MATIC'],
    },
    '0x7e4c577ca35913af564ee2a24d882a4946ec492b': {
      symbol: 'MOONED',
      name: 'MoonEdge',
      decimals: 18,
      address: '0x7e4c577ca35913af564ee2a24d882a4946ec492b',
      logoURI:
        'https://tokens.1inch.io/0x7e4c577ca35913af564ee2a24d882a4946ec492b.png',
      tags: ['tokens'],
    },
    '0x64060ab139feaae7f06ca4e63189d86adeb51691': {
      symbol: 'UNIM',
      name: 'Unicorn Milk',
      decimals: 18,
      address: '0x64060ab139feaae7f06ca4e63189d86adeb51691',
      logoURI:
        'https://tokens.1inch.io/0x64060ab139feaae7f06ca4e63189d86adeb51691.png',
      tags: ['tokens'],
    },
    '0x2ab4f9ac80f33071211729e45cfc346c1f8446d5': {
      symbol: 'CGG',
      name: 'ChainGuardians Governance Token (PoS)',
      decimals: 18,
      address: '0x2ab4f9ac80f33071211729e45cfc346c1f8446d5',
      logoURI:
        'https://tokens.1inch.io/0x2ab4f9ac80f33071211729e45cfc346c1f8446d5.png',
      tags: ['tokens'],
    },
    '0xc3c7d422809852031b44ab29eec9f1eff2a58756': {
      symbol: 'LDO',
      name: 'Lido DAO Token (PoS)',
      decimals: 18,
      address: '0xc3c7d422809852031b44ab29eec9f1eff2a58756',
      logoURI:
        'https://tokens.1inch.io/0xc3c7d422809852031b44ab29eec9f1eff2a58756.png',
      tags: ['tokens'],
    },
    '0xc6480da81151b2277761024599e8db2ad4c388c8': {
      symbol: 'xDG',
      name: 'Decentral Games Governance (PoS)',
      decimals: 18,
      address: '0xc6480da81151b2277761024599e8db2ad4c388c8',
      logoURI:
        'https://tokens.1inch.io/0xc6480da81151b2277761024599e8db2ad4c388c8.png',
      tags: ['tokens'],
    },
    '0x431cd3c9ac9fc73644bf68bf5691f4b83f9e104f': {
      symbol: 'RBW',
      name: 'Rainbow Token',
      decimals: 18,
      address: '0x431cd3c9ac9fc73644bf68bf5691f4b83f9e104f',
      logoURI:
        'https://tokens.1inch.io/0x431cd3c9ac9fc73644bf68bf5691f4b83f9e104f.png',
      tags: ['tokens'],
    },
    '0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b': {
      symbol: 'BOB',
      name: 'BOB',
      decimals: 18,
      address: '0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b',
      logoURI:
        'https://tokens.1inch.io/0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x62f594339830b90ae4c084ae7d223ffafd9658a7': {
      symbol: 'SPHERE',
      name: 'Sphere Finance',
      decimals: 18,
      address: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
      logoURI:
        'https://tokens.1inch.io/0x62f594339830b90ae4c084ae7d223ffafd9658a7.png',
      tags: ['tokens'],
    },
    '0xdd2af2e723547088d3846841fbdcc6a8093313d6': {
      symbol: 'GOGO',
      name: 'GOGOcoin',
      decimals: 18,
      address: '0xdd2af2e723547088d3846841fbdcc6a8093313d6',
      logoURI:
        'https://tokens.1inch.io/0xdd2af2e723547088d3846841fbdcc6a8093313d6.png',
      tags: ['tokens'],
    },
    '0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab': {
      symbol: 'BANK',
      name: 'Bankless Token (PoS)',
      decimals: 18,
      address: '0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab',
      logoURI:
        'https://tokens.1inch.io/0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab.png',
      tags: ['tokens'],
    },
    '0x2c826035c1c36986117a0e949bd6ad4bab54afe2': {
      symbol: 'XIDR',
      name: 'XIDR',
      decimals: 6,
      address: '0x2c826035c1c36986117a0e949bd6ad4bab54afe2',
      logoURI:
        'https://tokens.1inch.io/0x2c826035c1c36986117a0e949bd6ad4bab54afe2.png',
      tags: ['tokens'],
    },
    '0xf78610d0a197842bf98ca45254897edd13c5d182': {
      symbol: 'FCD',
      name: 'FreshCut Diamond',
      decimals: 18,
      address: '0xf78610d0a197842bf98ca45254897edd13c5d182',
      logoURI:
        'https://tokens.1inch.io/0xf78610d0a197842bf98ca45254897edd13c5d182.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xf0f9d895aca5c8678f706fb8216fa22957685a13': {
      symbol: 'RVLT',
      name: 'Revolt 2 Earn',
      decimals: 18,
      address: '0xf0f9d895aca5c8678f706fb8216fa22957685a13',
      logoURI:
        'https://tokens.1inch.io/0xf0f9d895aca5c8678f706fb8216fa22957685a13.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xee7666aacaefaa6efeef62ea40176d3eb21953b9': {
      symbol: 'MCHC',
      name: 'MCHCoin (PoS)',
      decimals: 18,
      address: '0xee7666aacaefaa6efeef62ea40176d3eb21953b9',
      logoURI:
        'https://tokens.1inch.io/0xee7666aacaefaa6efeef62ea40176d3eb21953b9.png',
      tags: ['tokens'],
    },
    '0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d': {
      symbol: 'MABBC',
      name: 'Matic ABBC',
      decimals: 8,
      address: '0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d',
      logoURI:
        'https://tokens.1inch.io/0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d.png',
      tags: ['tokens'],
    },
    '0xe26cda27c13f4f87cffc2f437c5900b27ebb5bbb': {
      symbol: 'RBLS',
      name: 'Rebel Bots Token',
      decimals: 8,
      address: '0xe26cda27c13f4f87cffc2f437c5900b27ebb5bbb',
      logoURI:
        'https://tokens.1inch.io/0xe26cda27c13f4f87cffc2f437c5900b27ebb5bbb.png',
      tags: ['tokens'],
    },
    '0xe46b4a950c389e80621d10dfc398e91613c7e25e': {
      symbol: 'pFi',
      name: 'PartyFinance',
      decimals: 18,
      address: '0xe46b4a950c389e80621d10dfc398e91613c7e25e',
      logoURI:
        'https://tokens.1inch.io/0xe46b4a950c389e80621d10dfc398e91613c7e25e.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xd93f7e271cb87c23aaa73edc008a79646d1f9912': {
      symbol: 'SOL',
      name: 'Wrapped SOL',
      decimals: 9,
      address: '0xd93f7e271cb87c23aaa73edc008a79646d1f9912',
      logoURI:
        'https://tokens.1inch.io/0xd93f7e271cb87c23aaa73edc008a79646d1f9912.png',
      tags: ['tokens'],
    },
    '0xdfce1e99a31c4597a3f8a8945cbfa9037655e335': {
      symbol: 'ASTRAFER',
      name: 'Astrafer',
      decimals: 18,
      address: '0xdfce1e99a31c4597a3f8a8945cbfa9037655e335',
      logoURI:
        'https://tokens.1inch.io/0xdfce1e99a31c4597a3f8a8945cbfa9037655e335.png',
      tags: ['tokens'],
    },
    '0xdab625853c2b35d0a9c6bd8e5a097a664ef4ccfb': {
      symbol: 'eQUAD',
      name: 'Quadrant Protocol',
      decimals: 18,
      address: '0xdab625853c2b35d0a9c6bd8e5a097a664ef4ccfb',
      logoURI:
        'https://tokens.1inch.io/0xdab625853c2b35d0a9c6bd8e5a097a664ef4ccfb.png',
      tags: ['tokens'],
    },
    '0xdbf31df14b66535af65aac99c32e9ea844e14501': {
      symbol: 'renBTC',
      name: 'renBTC',
      decimals: 8,
      address: '0xdbf31df14b66535af65aac99c32e9ea844e14501',
      logoURI:
        'https://tokens.1inch.io/0xdbf31df14b66535af65aac99c32e9ea844e14501.png',
      tags: ['tokens'],
    },
    '0xd55fce7cdab84d84f2ef3f99816d765a2a94a509': {
      symbol: 'CHAIN',
      name: 'Chain Games',
      decimals: 18,
      address: '0xd55fce7cdab84d84f2ef3f99816d765a2a94a509',
      logoURI:
        'https://tokens.1inch.io/0xd55fce7cdab84d84f2ef3f99816d765a2a94a509.png',
      tags: ['tokens'],
    },
    '0xd1f9c58e33933a993a3891f8acfe05a68e1afc05': {
      symbol: 'SFL',
      name: 'Sunflower Land',
      decimals: 18,
      address: '0xd1f9c58e33933a993a3891f8acfe05a68e1afc05',
      logoURI:
        'https://tokens.1inch.io/0xd1f9c58e33933a993a3891f8acfe05a68e1afc05.png',
      tags: ['tokens'],
    },
    '0xc17c30e98541188614df99239cabd40280810ca3': {
      symbol: 'RISE',
      name: 'EverRise',
      decimals: 18,
      address: '0xc17c30e98541188614df99239cabd40280810ca3',
      logoURI:
        'https://tokens.1inch.io/0xc17c30e98541188614df99239cabd40280810ca3.png',
      tags: ['tokens'],
    },
    '0x9c9e5fd8bbc25984b178fdce6117defa39d2db39': {
      symbol: 'BUSD',
      name: 'BUSD Token',
      decimals: 18,
      address: '0x9c9e5fd8bbc25984b178fdce6117defa39d2db39',
      logoURI:
        'https://tokens.1inch.io/0x9c9e5fd8bbc25984b178fdce6117defa39d2db39.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xa2ca40dbe72028d3ac78b5250a8cb8c404e7fb8c': {
      symbol: 'FEAR',
      name: 'Fear NFTs (PoS)',
      decimals: 18,
      address: '0xa2ca40dbe72028d3ac78b5250a8cb8c404e7fb8c',
      logoURI:
        'https://tokens.1inch.io/0xa2ca40dbe72028d3ac78b5250a8cb8c404e7fb8c.png',
      tags: ['tokens'],
    },
    '0x9c32185b81766a051e08de671207b34466dd1021': {
      symbol: 'BTCpx',
      name: 'BTC Proxy',
      decimals: 8,
      address: '0x9c32185b81766a051e08de671207b34466dd1021',
      logoURI:
        'https://tokens.1inch.io/0x9c32185b81766a051e08de671207b34466dd1021.png',
      tags: ['tokens'],
    },
    '0x1ce4a2c355f0dcc24e32a9af19f1836d6f4f98ae': {
      symbol: 'CPD',
      name: 'Coinspaid (PoS)',
      decimals: 18,
      address: '0x1ce4a2c355f0dcc24e32a9af19f1836d6f4f98ae',
      logoURI:
        'https://tokens.1inch.io/0x1ce4a2c355f0dcc24e32a9af19f1836d6f4f98ae.png',
      tags: ['tokens'],
    },
    '0xb5c064f955d8e7f38fe0460c556a72987494ee17': {
      symbol: 'QUICK',
      name: 'QuickSwap',
      decimals: 18,
      address: '0xb5c064f955d8e7f38fe0460c556a72987494ee17',
      logoURI:
        'https://tokens.1inch.io/0xb5c064f955d8e7f38fe0460c556a72987494ee17.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x3c720206bfacb2d16fa3ac0ed87d2048dbc401fc': {
      symbol: 'UCO',
      name: 'UnirisToken (PoS)',
      decimals: 18,
      address: '0x3c720206bfacb2d16fa3ac0ed87d2048dbc401fc',
      logoURI:
        'https://tokens.1inch.io/0x3c720206bfacb2d16fa3ac0ed87d2048dbc401fc.png',
      tags: ['tokens'],
    },
    '0x55555555a687343c6ce28c8e1f6641dc71659fad': {
      symbol: 'XY',
      name: 'XY Token',
      decimals: 18,
      address: '0x55555555a687343c6ce28c8e1f6641dc71659fad',
      logoURI:
        'https://tokens.1inch.io/0x55555555a687343c6ce28c8e1f6641dc71659fad.png',
      tags: ['tokens'],
    },
    '0xff2382bd52efacef02cc895bcbfc4618608aa56f': {
      symbol: 'ORARE',
      name: 'One Rare Token',
      decimals: 18,
      address: '0xff2382bd52efacef02cc895bcbfc4618608aa56f',
      logoURI:
        'https://tokens.1inch.io/0xff2382bd52efacef02cc895bcbfc4618608aa56f.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x255707b70bf90aa112006e1b07b9aea6de021424': {
      symbol: 'TETU',
      name: 'TETU Reward Token',
      decimals: 18,
      address: '0x255707b70bf90aa112006e1b07b9aea6de021424',
      logoURI:
        'https://tokens.1inch.io/0x255707b70bf90aa112006e1b07b9aea6de021424.png',
      tags: ['tokens'],
    },
    '0x9de41aff9f55219d5bf4359f167d1d0c772a396d': {
      symbol: 'CADC',
      name: 'CAD Coin',
      decimals: 18,
      address: '0x9de41aff9f55219d5bf4359f167d1d0c772a396d',
      logoURI:
        'https://tokens.1inch.io/0x9de41aff9f55219d5bf4359f167d1d0c772a396d.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x0e9b89007eee9c958c0eda24ef70723c2c93dd58': {
      symbol: 'ankrMATIC',
      name: 'Ankr Staked MATIC',
      decimals: 18,
      address: '0x0e9b89007eee9c958c0eda24ef70723c2c93dd58',
      logoURI:
        'https://tokens.1inch.io/0x0e9b89007eee9c958c0eda24ef70723c2c93dd58.png',
      tags: ['tokens'],
    },
    '0xec38621e72d86775a89c7422746de1f52bba5320': {
      symbol: 'DAVOS',
      name: 'Davos',
      decimals: 18,
      address: '0xec38621e72d86775a89c7422746de1f52bba5320',
      logoURI:
        'https://tokens.1inch.io/0xec38621e72d86775a89c7422746de1f52bba5320.png',
      tags: ['tokens'],
    },
    '0x5e430f88d1be82eb3ef92b6ff06125168fd5dcf2': {
      symbol: 'MODA',
      name: 'moda',
      decimals: 18,
      address: '0x5e430f88d1be82eb3ef92b6ff06125168fd5dcf2',
      logoURI:
        'https://tokens.1inch.io/0x5e430f88d1be82eb3ef92b6ff06125168fd5dcf2.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x081ec4c0e30159c8259bad8f4887f83010a681dc': {
      symbol: 'DE',
      name: 'DeNet File Token',
      decimals: 18,
      address: '0x081ec4c0e30159c8259bad8f4887f83010a681dc',
      logoURI:
        'https://tokens.1inch.io/0x081ec4c0e30159c8259bad8f4887f83010a681dc.png',
      tags: ['tokens'],
    },
    '0x1a9b54a3075119f1546c52ca0940551a6ce5d2d0': {
      symbol: 'TBY',
      name: 'Storage Gastoken V3',
      decimals: 18,
      address: '0x1a9b54a3075119f1546c52ca0940551a6ce5d2d0',
      logoURI:
        'https://tokens.1inch.io/0x1a9b54a3075119f1546c52ca0940551a6ce5d2d0.png',
      tags: ['tokens'],
    },
  },
};
module.exports = Polygon;
