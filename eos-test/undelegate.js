const Eos = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    keyProvider: ['5HqmtdfCMMDP3NibQUAciFdYHYDQNkzgpJ74KMUCB61AGgUP58f'],
};

Eos(config).transaction(tr => {
    tr.undelegatebw({
        from: 'ruelruel4444',
        receiver: 'ruelruel5555',
        unstake_cpu_quantity: '1.0000 EOS',
        unstake_net_quantity: '1.0000 EOS',
        transfer: 0,
    });
})
    .then(console.log)
    .catch(console.error);
