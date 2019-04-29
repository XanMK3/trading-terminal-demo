import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import ConnectedComponent from './view';
import { getTradesModule } from './store';

export default function Dynamic(props) {
    return (
        <DynamicModuleLoader modules={[getTradesModule()]}>
            <ConnectedComponent {...props} />
        </DynamicModuleLoader>
    );
}
