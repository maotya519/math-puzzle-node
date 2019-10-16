import * as nodeExternals from 'webpack-node-externals';
import * as sourceMapSupport from 'source-map-support';

import * as _ from 'lodash';

import { q002 } from '@/questions/q002';

function initSourceMap() {
    if (process.env.NODE_ENV === 'development') {
        sourceMapSupport.install();
        console.log('ENV_LOG:', 'SOURCE MAP ENABLED');
    }
}

async function main() {
    initSourceMap();

    await q002();
}
main();
