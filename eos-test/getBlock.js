const Eos = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chain_id: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
};

Eos(config).getBlock(5656167, (error, blockInfo) => {
  if(error) {
    console.error(error);
  }

  console.log(blockInfo);
//demux-js get block per 0.5s & give action & tx data
});
