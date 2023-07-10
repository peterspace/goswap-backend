const Optimism = {
  tokens: {
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee': {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      logoURI:
        'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      tags: ['native'],
    },
    '0x4200000000000000000000000000000000000006': {
      symbol: 'WETH',
      name: 'Wrapped Ether',
      address: '0x4200000000000000000000000000000000000006',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png',
      wrappedNative: true,
      tags: ['tokens', 'PEG:ETH'],
    },
    '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1': {
      symbol: 'DAI',
      name: 'Dai stable coin',
      decimals: 18,
      logoURI:
        'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=010',
      address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58': {
      symbol: 'USDT',
      name: 'Tether USD',
      decimals: 6,
      logoURI:
        'https://tokens.1inch.io/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58.png',
      address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6': {
      symbol: 'LINK',
      name: 'Chainlink',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6.png',
      address: '0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6',
      tags: ['tokens'],
    },
    '0x7f5c764cbc14f9669b88837ca1490cca17c31607': {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      logoURI:
        'https://tokens.1inch.io/0x7f5c764cbc14f9669b88837ca1490cca17c31607.png',
      address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9': {
      symbol: 'sUSD',
      name: 'Synth sUSD',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png',
      address: '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x217d47011b23bb961eb6d93ca9945b7501a5bb11': {
      symbol: 'THALES',
      name: 'Optimistic Thales Token',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0x217d47011b23bb961eb6d93ca9945b7501a5bb11.png',
      address: '0x217d47011b23bb961eb6d93ca9945b7501a5bb11',
      tags: ['tokens'],
    },
    '0x61baadcf22d2565b0f471b291c475db5555e0b76': {
      symbol: 'AELIN',
      name: 'Aelin Token',
      decimals: 18,
      address: '0x61baadcf22d2565b0f471b291c475db5555e0b76',
      logoURI:
        'https://tokens.1inch.io/0x61baadcf22d2565b0f471b291c475db5555e0b76.png',
      tags: ['tokens'],
    },
    '0x7fb688ccf682d58f86d7e38e03f9d22e7705448b': {
      symbol: 'RAI',
      name: 'Rai Reflex Index',
      decimals: 18,
      address: '0x7fb688ccf682d58f86d7e38e03f9d22e7705448b',
      logoURI:
        'https://tokens.1inch.io/0x7fb688ccf682d58f86d7e38e03f9d22e7705448b.png',
      tags: ['tokens'],
    },
    '0x50c5725949a6f0c72e6c4a641f24049a917db0cb': {
      symbol: 'LYRA',
      name: 'Lyra Token',
      decimals: 18,
      address: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
      logoURI:
        'https://tokens.1inch.io/0x50c5725949a6f0c72e6c4a641f24049a917db0cb.png',
      tags: ['tokens'],
    },
    '0x9e1028f5f1d5ede59748ffcee5532509976840e0': {
      symbol: 'PERP',
      name: 'Perpetual',
      decimals: 18,
      address: '0x9e1028f5f1d5ede59748ffcee5532509976840e0',
      logoURI:
        'https://tokens.1inch.io/0x9e1028f5f1d5ede59748ffcee5532509976840e0.png',
      tags: ['tokens'],
    },
    '0xf98dcd95217e15e05d8638da4c91125e59590b07': {
      symbol: 'KROM',
      name: 'Kromatika',
      decimals: 18,
      address: '0xf98dcd95217e15e05d8638da4c91125e59590b07',
      logoURI:
        'https://tokens.1inch.io/0xf98dcd95217e15e05d8638da4c91125e59590b07.png',
      tags: ['tokens'],
    },
    '0x4200000000000000000000000000000000000042': {
      symbol: 'OP',
      name: 'Optimism',
      decimals: 18,
      address: '0x4200000000000000000000000000000000000042',
      logoURI:
        'https://tokens.1inch.io/0x4200000000000000000000000000000000000042.png',
      eip2612: true,
      tags: ['tokens', 'PEG:OP'],
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
    '0x3c8b650257cfb5f272f799f5e2b4e65093a11a05': {
      symbol: 'VELO',
      name: 'Velodrome',
      decimals: 18,
      address: '0x3c8b650257cfb5f272f799f5e2b4e65093a11a05',
      logoURI:
        'https://tokens.1inch.io/0x3c8b650257cfb5f272f799f5e2b4e65093a11a05.png',
      tags: ['tokens'],
    },
    '0xe405de8f52ba7559f9df3c368500b6e6ae6cee49': {
      symbol: 'sETH',
      name: 'Synth sETH',
      decimals: 18,
      address: '0xe405de8f52ba7559f9df3c368500b6e6ae6cee49',
      logoURI:
        'https://tokens.1inch.io/0xe405de8f52ba7559f9df3c368500b6e6ae6cee49.png',
      tags: ['tokens', 'PEG:ETH'],
    },
    '0x73cb180bf0521828d8849bc8cf2b920918e23032': {
      symbol: 'USD+',
      name: 'USD+',
      decimals: 6,
      address: '0x73cb180bf0521828d8849bc8cf2b920918e23032',
      logoURI:
        'https://tokens.1inch.io/0x73cb180bf0521828d8849bc8cf2b920918e23032.png',
      tags: ['tokens', 'PEG:USD'],
    },
    '0x4e720dd3ac5cfe1e1fbde4935f386bb1c66f4642': {
      symbol: 'BIFI',
      name: 'beefy.finance',
      decimals: 18,
      address: '0x4e720dd3ac5cfe1e1fbde4935f386bb1c66f4642',
      logoURI:
        'https://tokens.1inch.io/0x4e720dd3ac5cfe1e1fbde4935f386bb1c66f4642.png',
      tags: ['tokens'],
    },
    '0xae31207ac34423c41576ff59bfb4e036150f9cf7': {
      symbol: 'SDL',
      name: 'Saddle DAO',
      decimals: 18,
      address: '0xae31207ac34423c41576ff59bfb4e036150f9cf7',
      logoURI:
        'https://tokens.1inch.io/0xae31207ac34423c41576ff59bfb4e036150f9cf7.png',
      tags: ['tokens'],
    },
    '0x296f55f8fb28e498b858d0bcda06d955b2cb3f97': {
      symbol: 'STG',
      name: 'StargateToken',
      decimals: 18,
      address: '0x296f55f8fb28e498b858d0bcda06d955b2cb3f97',
      logoURI:
        'https://tokens.1inch.io/0x296f55f8fb28e498b858d0bcda06d955b2cb3f97.png',
      tags: ['tokens'],
    },
    '0x8ae125e8653821e851f12a49f7765db9a9ce7384': {
      symbol: 'DOLA',
      name: 'Dola USD Stablecoin',
      decimals: 18,
      address: '0x8ae125e8653821e851f12a49f7765db9a9ce7384',
      logoURI:
        'https://tokens.1inch.io/0x8ae125e8653821e851f12a49f7765db9a9ce7384.png',
      tags: ['tokens', 'PEG:USD'],
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
    '0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc': {
      symbol: 'HOP',
      name: 'Hop',
      decimals: 18,
      address: '0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc',
      logoURI:
        'https://tokens.1inch.io/0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb': {
      symbol: 'wstETH',
      name: 'Wrapped liquid staked Ether 2.0',
      decimals: 18,
      address: '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
      logoURI:
        'https://tokens.1inch.io/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png',
      tags: ['tokens'],
    },
    '0xcdb4bb51801a1f399d4402c61bc098a72c382e65': {
      symbol: 'OPX',
      name: 'OPX',
      decimals: 18,
      address: '0xcdb4bb51801a1f399d4402c61bc098a72c382e65',
      logoURI:
        'https://tokens.1inch.io/0xcdb4bb51801a1f399d4402c61bc098a72c382e65.png',
      tags: ['tokens'],
    },
    '0x920cf626a271321c151d027030d5d08af699456b': {
      symbol: 'KWENTA',
      name: 'Kwenta',
      decimals: 18,
      address: '0x920cf626a271321c151d027030d5d08af699456b',
      logoURI:
        'https://tokens.1inch.io/0x920cf626a271321c151d027030d5d08af699456b.png',
      tags: ['tokens'],
    },
    '0x3e29d3a9316dab217754d13b28646b76607c5f04': {
      symbol: 'alETH',
      name: 'Alchemix ETH',
      decimals: 18,
      address: '0x3e29d3a9316dab217754d13b28646b76607c5f04',
      logoURI:
        'https://tokens.1inch.io/0x3e29d3a9316dab217754d13b28646b76607c5f04.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xcb8fa9a76b8e203d8c3797bf438d8fb81ea3326a': {
      symbol: 'alUSD',
      name: 'Alchemix USD',
      decimals: 18,
      address: '0xcb8fa9a76b8e203d8c3797bf438d8fb81ea3326a',
      logoURI:
        'https://tokens.1inch.io/0xcb8fa9a76b8e203d8c3797bf438d8fb81ea3326a.png',
      eip2612: true,
      tags: ['tokens'],
    },
    '0xaf9fe3b5ccdae78188b1f8b9a49da7ae9510f151': {
      symbol: 'DHT',
      name: 'dHEDGE DAO Token',
      decimals: 18,
      address: '0xaf9fe3b5ccdae78188b1f8b9a49da7ae9510f151',
      logoURI:
        'https://tokens.1inch.io/0xaf9fe3b5ccdae78188b1f8b9a49da7ae9510f151.png',
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
    '0x47536f17f4ff30e64a96a7555826b8f9e66ec468': {
      symbol: 'MMY',
      name: 'MUMMY',
      decimals: 18,
      address: '0x47536f17f4ff30e64a96a7555826b8f9e66ec468',
      logoURI:
        'https://tokens.1inch.io/0x47536f17f4ff30e64a96a7555826b8f9e66ec468.png',
      tags: ['tokens'],
    },
    '0x9bcef72be871e61ed4fbbc7630889bee758eb81d': {
      symbol: 'rETH',
      name: 'Rocket Pool ETH',
      decimals: 18,
      address: '0x9bcef72be871e61ed4fbbc7630889bee758eb81d',
      logoURI:
        'https://tokens.1inch.io/0x9bcef72be871e61ed4fbbc7630889bee758eb81d.png',
      tags: ['tokens'],
    },
    '0xfdeffc7ad816bf7867c642df7ebc2cc5554ec265': {
      symbol: 'BeVELO',
      name: 'Beefy Velo',
      decimals: 18,
      address: '0xfdeffc7ad816bf7867c642df7ebc2cc5554ec265',
      logoURI:
        'https://tokens.1inch.io/0xfdeffc7ad816bf7867c642df7ebc2cc5554ec265.png',
      tags: ['tokens'],
    },
  },
};
module.exports = Optimism;
